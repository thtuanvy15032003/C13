// Apps Script backend for BH2026 - VERSION 2 (Fixed)
// Handles save/sync with explicit cell mapping and optional GIAO column

/*************************************************************
 * Cấu hình
 *************************************************************/
const DEFAULT_SHEET_NAME = 'BH2026';
const BASE_DATE = '2026-01-01';        // mốc ngày ở cột S (A=1, S=19)
const BASE_COL_INDEX = 19;             // Cột S (01/01/2026)
const NOTE_ROW = 91;
const HANDOVER_ROW = 92;
const RECEIVE_ROW = 93;

// Cột tĩnh
const HEADER_COLS = {
  coSo: 'B',    // Cơ số CCBL
  name: 'C',    // BIỆT DƯỢC
  unit: 'D',    // ĐVT
  slHienCo: 'E' // SL hiện có
};

// Mapping tên thuốc -> dòng (1-based)
const MED_ROW_MAP = {
  // THUỐC GÂY NGHIỆN
  'Fentanyl 0,1mg - 2': 4,
  'Fentanyl 0,5mg/10': 5,
  'Morphin 10mg - 1ml': 6,
  'Dolcontral 100mg - 2ml': 7,
  // THUỐC HƯỚNG THẦN
  'Ephedrine 30mg - 1ml': 9,
  'Diazepam 10mg - 2ml': 10,
  'Ketamine 500mg - 10ml': 11,
  'Midazolam 5mg - 1ml': 12,
  // THUỐC - DỊCH TRUYỀN
  'Albumin 20% - 50 ml': 14,
  'Glucose 30% - 500ml': 15,
  'SMOFlipid 20% - 250ml': 16,
  'Levofloxacin 750mg - 150ml': 17,
  'Mannitol 20% - 250ml': 18,
  'Metronidazol 500mg - 100ml': 19,
  'Moxifloxacine 400mg - 250ml': 20,
  'Natri Clorid 3% - 100ml': 21,
  'Natri Clorid 0,45% - 500ml': 22,
  '4.2% Bicarbonate 10,5g-250ml': 23,
  'Nabica 8.4 %': 24,
  'Paracetamol 1g - 100ml': 25,
  'Ringer Lactate 500ml': 26,
  // THUỐC TIÊM
  'Gemapaxane 4000IU/0,4ml': 28,
  'Adenosin 6mg/2ml': 29,
  'Actilyse 50mg': 30,
  'Meropenem 1g': 31,
  'Dobutamine 250mg/20ml': 32,
  'Nitromint 0.08g': 33,
  'Insulin 70/30': 34,
  'Humalog 300U X 3ml': 35,
  'Insulin R 40UI/ml - 10ml': 36,
  'Heparin': 37,
  'Lidocain 10% - 38g': 38,
  'Solu - Medrol 40mg': 39,
  'Pantoprazol 40mg': 40,
  'Arduan 4mg': 41,
  'Ventolin Inhaler 100mcg/liều': 42,
  'Ceftazidime 2g': 43,
  'Vancomycine 1g': 44,
  'Cefazolin 1g': 45,
  'Tanganil 500mg': 46,
  'Aminazin 1.25% - 2ml': 47,
  'Cordarone 150mg - 3ml': 48,
  'Atropin sulphat 0,25mg - 1ml': 49,
  'Calci Clorid 500mg - 5ml': 50,
  'Dexamethason, 4mg - 1ml': 51,
  'Diclofenac 75mg - 3ml': 52,
  'Digoxin 0.5ml - 2ml': 53,
  'Dimedrol 10mg - 1ml': 54,
  'No-Spa 40mg - 2ml': 55,
  'Adrenaline-BFS 1mg - 1ml': 56,
  'A.T Furosemid 20mg - 2ml': 57,
  'Niglyvid 10mg - 10ml': 58,
  'Haloperidol 0,5% - 1ml': 59,
  'SAT 1500 UI': 60,
  'Kali Clorid 10% - 10ml': 61,
  'Lidocain 2% - 2ml': 62,
  'Falipan 2% - 10ml': 63,
  'Panangin 400mg + 452mg/10ml': 64,
  'Magie sulfat 15% - 10ml': 65,
  'Metoran 10mg - 2ml': 66,
  'Naloxone 0.4mg - ml': 67,
  'Nicardipine 10mg - 10ml': 68,
  'Nor-adrenaline 1mg - 1ml': 69,
  'Octreotid 0,1mg/ml': 70,
  'Vitamin K1 10mg - 1ml': 71,
  'Pipolphen 50mg - 2ml': 72,
  'Propofol 0.5% 5mg/ml - 20ml': 73,
  'Bricanyl, 0,5mg': 74,
  'Cammic 250mg - 5ml': 75,
  'Vitamin B1, 100mg - 1ml': 76,
  'Cevit 500mg - 5ml': 77,
  'Pulmicort Respules, 500mcg-2ml': 78,
  'Ventolin Nebules 5mg-2,5ml': 79,
  'Combivent 2,5mg + 0,5mg - 2,5ml': 80,
  // THUỐC VIÊN
  'Aspirin 81mg': 82,
  'Atorvastatin 20mg': 83,
  'Captopril 25 mg': 84,
  'Plavix 75mg': 85,
  'Brilinta 90mg': 86,
  // TTB - VẬT TƯ Y TẾ
  'Catheter TMTT': 88,
  'Ống thở HFNC': 89,
  'Hạ sốt': 90
};

/*************************************************************
 * Helpers
 *************************************************************/
function colIndexToLetter(index) {
  let letter = '';
  let num = index;
  while (num > 0) {
    const mod = (num - 1) % 26;
    letter = String.fromCharCode(65 + mod) + letter;
    num = Math.floor((num - mod) / 26);
  }
  return letter;
}

function getDateColumns(dateStr, hasGiaoColumn) {
  const baseDate = new Date(BASE_DATE);
  const targetDate = new Date(dateStr);
  const diffDays = Math.floor((targetDate - baseDate) / (24 * 60 * 60 * 1000));
  
  // Nếu có cột GIAO, mỗi ngày sẽ có 3 cột: GIAO-NGÀY-ĐÊM
  // Nếu không, mỗi ngày có 2 cột: NGÀY-ĐÊM
  const blockSize = hasGiaoColumn ? 3 : 2;
  const startColIndex = BASE_COL_INDEX + diffDays * blockSize;
  
  if (hasGiaoColumn) {
    return {
      giao: colIndexToLetter(startColIndex),     // GIAO (cột đầu)
      day: colIndexToLetter(startColIndex + 1),   // NGÀY (cột giữa)
      night: colIndexToLetter(startColIndex + 2)  // ĐÊM (cột cuối)
    };
  } else {
    return {
      giao: null,
      day: colIndexToLetter(startColIndex),     // NGÀY (cột đầu)
      night: colIndexToLetter(startColIndex + 1) // ĐÊM (cột sau)
    };
  }
}

function getSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('Getting sheet: ' + name);
  
  // LUÔN SỬ DỤNG BH2026 - bỏ qua tên khác
  const actualSheetName = 'BH2026';
  Logger.log('Actual sheet name used: ' + actualSheetName);
  
  const sheet = ss.getSheetByName(actualSheetName);
  if (!sheet) {
    Logger.log('Sheet not found, creating new sheet: ' + actualSheetName);
    return ss.insertSheet(actualSheetName);
  }
  
  Logger.log('Sheet found: ' + actualSheetName);
  return sheet;
}

/*************************************************************
 * HTTP entry
 *************************************************************/
function doPost(e) {
  try {
    Logger.log('doPost called');
    const body = JSON.parse(e.postData.contents);
    Logger.log('Received payload: ' + JSON.stringify(body));
    
    if (body.action === 'save') {
      return jsonResponse(handleSave(body));
    }
    if (body.action === 'deliver') {
      return jsonResponse(handleDeliver(body));
    }
    return jsonResponse({ success: false, message: 'Unknown action' }, 400);
  } catch (err) {
    Logger.log('Error in doPost: ' + err.message);
    return jsonResponse({ success: false, message: err.message, stack: err.stack }, 500);
  }
}

function doGet(e) {
  try {
    const action = e.parameter.action;
    if (action === 'sync') {
      const sheet = e.parameter.sheet || DEFAULT_SHEET_NAME;
      const date = e.parameter.date;
      return jsonResponse(handleSync(sheet, date));
    }
    return jsonResponse({ success: false, message: 'Unknown action' }, 400);
  } catch (err) {
    return jsonResponse({ success: false, message: err.message }, 500);
  }
}

function jsonResponse(obj, status) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/*************************************************************
 * Save: ghi dữ liệu từ web vào đúng ô
 *************************************************************/
function handleSave(payload) {
  try {
    if (!payload) {
      return { success: false, message: 'No payload provided' };
    }
    
    Logger.log('handleSave - payload.sheetName: ' + payload.sheetName);
    
    const sheet = getSheet(payload.sheetName); // Sẽ luôn dùng BH2026
    const hasGiaoColumn = detectGiao(sheet);

    const date = payload.date;
    if (!date) {
      return { success: false, message: 'Date is required' };
    }
    const cols = getDateColumns(date, hasGiaoColumn);
    Logger.log('Date columns: ' + JSON.stringify(cols));

    // Ghi tiêu đề ngày (hàng 1) nếu trống
    if (cols.day) sheet.getRange(`${cols.day}1`).setValue(date);
    if (cols.night) sheet.getRange(`${cols.night}1`).setValue(date);

    // Ghi người giao/nhận và ghi chú vào cột tương ứng với ca trực
    const shiftColumn = payload.shiftType === 'morning' ? cols.day : cols.night;
    Logger.log('ShiftType: ' + payload.shiftType);
    Logger.log('ShiftColumn sẽ ghi: ' + shiftColumn);
    Logger.log('Ghi người bàn giao vào: ' + shiftColumn + HANDOVER_ROW + ' = ' + payload.handoverPerson);
    Logger.log('Ghi người nhận vào: ' + shiftColumn + RECEIVE_ROW + ' = ' + payload.receivePerson);
    Logger.log('Ghi ghi chú vào: ' + shiftColumn + NOTE_ROW + ' = ' + payload.notes);
    
    if (shiftColumn) {
      if (payload.handoverPerson) {
        sheet.getRange(`${shiftColumn}${HANDOVER_ROW}`).setValue(payload.handoverPerson);
        Logger.log('✅ Đã ghi Người bàn giao');
      }
      if (payload.receivePerson) {
        sheet.getRange(`${shiftColumn}${RECEIVE_ROW}`).setValue(payload.receivePerson);
        Logger.log('✅ Đã ghi Người nhận');
      }
      if (payload.notes !== undefined && payload.notes !== '') {
        sheet.getRange(`${shiftColumn}${NOTE_ROW}`).setValue(payload.notes);
        Logger.log('✅ Đã ghi Ghi chú');
      }
    } else {
      Logger.log('❌ ShiftColumn là null!');
    }

    // Ghi thuốc
    if (payload.medications && Array.isArray(payload.medications)) {
      Logger.log('Processing ' + payload.medications.length + ' medications');
      payload.medications.forEach(m => {
        const row = m.row || MED_ROW_MAP[m.name];
        if (!row) {
          Logger.log('No row mapping for: ' + m.name);
          return;
        }

        sheet.getRange(`${HEADER_COLS.coSo}${row}`).setValue(m.coSo || 0);
        sheet.getRange(`${HEADER_COLS.name}${row}`).setValue(m.name || '');
        sheet.getRange(`${HEADER_COLS.unit}${row}`).setValue(m.unit || '');
        sheet.getRange(`${HEADER_COLS.slHienCo}${row}`).setValue(m.slHienCo || 0);

        // Chỉ ghi vào cột tương ứng với ca trực
        if (payload.shiftType === 'morning' && cols.day) {
          // Ca sáng: chỉ ghi vào cột NGÀY, giữ nguyên cả số 0
          const dayValue = m.day !== undefined && m.day !== null && m.day !== '' ? parseFloat(m.day) : 0;
          sheet.getRange(`${cols.day}${row}`).setValue(dayValue);
          Logger.log('Ghi ca SÁNG - ' + m.name + ': ' + dayValue);
        } else if (payload.shiftType === 'night' && cols.night) {
          // Ca đêm: chỉ ghi vào cột ĐÊM, giữ nguyên cả số 0
          const nightValue = m.night !== undefined && m.night !== null && m.night !== '' ? parseFloat(m.night) : 0;
          sheet.getRange(`${cols.night}${row}`).setValue(nightValue);
          Logger.log('Ghi ca ĐÊM - ' + m.name + ': ' + nightValue);
        }
      });
    }

    Logger.log('Save successful');
    return { success: true, hasGiaoColumn, sheetUsed: 'BH2026' };
  } catch (err) {
    Logger.log('Error in handleSave: ' + err.message);
    return { success: false, message: 'Error: ' + err.message, stack: err.stack };
  }
}

/*************************************************************
 * Deliver: Ghi dữ liệu cấp thuốc vào cột GIAO
 *************************************************************/
function handleDeliver(payload) {
  try {
    Logger.log('handleDeliver - payload: ' + JSON.stringify(payload));
    
    if (!payload || !payload.date || !payload.medications) {
      return { success: false, message: 'Missing required fields' };
    }
    
    const sheet = getSheet(payload.sheetName || 'BH2026');
    
    // Kiểm tra xem đã có cột GIAO cho ngày này chưa
    const hasGiaoColumn = detectGiao(sheet);
    
    // Lấy thông tin cột
    const cols = getDateColumns(payload.date, true); // Luôn sử dụng cấu trúc có cột GIAO
    
    Logger.log('Deliver - Date columns: ' + JSON.stringify(cols));
    
    // Nếu chưa có cột GIAO, cần chèn cột mới
    if (!hasGiaoColumn && cols.giao) {
      Logger.log('Chèn cột GIAO mới tại: ' + cols.giao);
      const giaoColIndex = columnLetterToIndex(cols.giao);
      sheet.insertColumnBefore(giaoColIndex);
      
      // Ghi tiêu đề cho cột GIAO
      sheet.getRange(`${cols.giao}1`).setValue(payload.date);
      sheet.getRange(`${cols.giao}2`).setValue('GIAO');
      
      // Cập nhật lại thông tin cột sau khi chèn
      // (Các cột sau sẽ tự động dịch sang phải)
    }
    
    // Ghi dữ liệu thuốc vào cột GIAO
    if (payload.medications && Array.isArray(payload.medications)) {
      Logger.log('Processing ' + payload.medications.length + ' medications for delivery');
      
      payload.medications.forEach(m => {
        const row = m.row || MED_ROW_MAP[m.name];
        if (!row) {
          Logger.log('No row mapping for: ' + m.name);
          return;
        }
        
        if (cols.giao && m.quantity > 0) {
          sheet.getRange(`${cols.giao}${row}`).setValue(m.quantity);
          Logger.log('Ghi GIAO - ' + m.name + ': ' + m.quantity + ' vào ' + cols.giao + row);
        }
      });
    }
    
    // Ghi người giao/nhận vào cột GIAO
    if (cols.giao) {
      if (payload.handoverPerson) {
        sheet.getRange(`${cols.giao}${HANDOVER_ROW}`).setValue(payload.handoverPerson);
      }
      if (payload.receivePerson) {
        sheet.getRange(`${cols.giao}${RECEIVE_ROW}`).setValue(payload.receivePerson);
      }
    }
    
    Logger.log('Deliver successful');
    return { success: true, hasGiaoColumn: true };
  } catch (err) {
    Logger.log('Error in handleDeliver: ' + err.message);
    return { success: false, message: 'Error: ' + err.message, stack: err.stack };
  }
}

// Helper: Convert column letter to index (A=1, B=2, ...)
function columnLetterToIndex(letter) {
  let index = 0;
  for (let i = 0; i < letter.length; i++) {
    index = index * 26 + (letter.charCodeAt(i) - 64);
  }
  return index;
}

/*************************************************************
 * Sync: đọc dữ liệu từ sheet trả về web
 *************************************************************/
function handleSync(sheetName, dateStr) {
  if (!sheetName || !dateStr) {
    return { success: false, message: 'Sheet name and date are required' };
  }
  
  const sheet = getSheet(sheetName); // Luôn dùng BH2026
  if (!sheet) {
    return { success: false, message: 'Sheet not found' };
  }
  
  const hasGiaoColumn = detectGiao(sheet);
  const cols = getDateColumns(dateStr, hasGiaoColumn);
  
  Logger.log('Sync - Date columns: ' + JSON.stringify(cols));
  Logger.log('Sync - Day column: ' + cols.day);
  Logger.log('Sync - Night column: ' + cols.night);
  
  // Lấy shiftType từ query params nếu có
  const shiftType = 'morning'; // Mặc định lấy ca sáng, sẽ được override bởi client
  const shiftColumn = cols.day; // Mặc định lấy cột NGÀY

  const handoverPersonDay = cols.day ? sheet.getRange(`${cols.day}${HANDOVER_ROW}`).getValue() : '';
  const receivePersonDay = cols.day ? sheet.getRange(`${cols.day}${RECEIVE_ROW}`).getValue() : '';
  const notesDay = cols.day ? sheet.getRange(`${cols.day}${NOTE_ROW}`).getValue() : '';
  
  Logger.log('Đọc ca SÁNG - Người giao: ' + handoverPersonDay);
  Logger.log('Đọc ca SÁNG - Người nhận: ' + receivePersonDay);
  Logger.log('Đọc ca SÁNG - Ghi chú: ' + notesDay);
  
  const handoverPersonNight = cols.night ? sheet.getRange(`${cols.night}${HANDOVER_ROW}`).getValue() : '';
  const receivePersonNight = cols.night ? sheet.getRange(`${cols.night}${RECEIVE_ROW}`).getValue() : '';
  const notesNight = cols.night ? sheet.getRange(`${cols.night}${NOTE_ROW}`).getValue() : '';
  
  Logger.log('Đọc ca ĐÊM - Người giao: ' + handoverPersonNight);
  Logger.log('Đọc ca ĐÊM - Người nhận: ' + receivePersonNight);
  Logger.log('Đọc ca ĐÊM - Ghi chú: ' + notesNight);

  const medications = Object.keys(MED_ROW_MAP).map(name => {
    const row = MED_ROW_MAP[name];
    const slHienCo = sheet.getRange(`${HEADER_COLS.slHienCo}${row}`).getValue() || 0;
    const caGiao = cols.giao ? sheet.getRange(`${cols.giao}${row}`).getValue() || 0 : 0;
    const caSang = cols.day ? sheet.getRange(`${cols.day}${row}`).getValue() || 0 : 0;
    const caDem = cols.night ? sheet.getRange(`${cols.night}${row}`).getValue() || 0 : 0;
    return { name, slHienCo, caGiao, caSang, caDem };
  });

  return { 
    success: true, 
    hasGiaoColumn, 
    medications, 
    morning: {
      notes: notesDay,
      handoverPerson: handoverPersonDay,
      receivePerson: receivePersonDay
    },
    night: {
      notes: notesNight,
      handoverPerson: handoverPersonNight,
      receivePerson: receivePersonNight
    }
  };
}

/*************************************************************
 * Utility: phát hiện đã có cột GIAO chưa (dựa trên header dòng 1)
 *************************************************************/
function detectGiao(sheet) {
  if (!sheet) {
    return false;
  }
  
  try {
    const headerRange = sheet.getRange(1, BASE_COL_INDEX - 2, 1, 6).getValues()[0];
    return headerRange.some(v => typeof v === 'string' && v.toUpperCase().indexOf('GIAO') >= 0);
  } catch (e) {
    return false;
  }
}
