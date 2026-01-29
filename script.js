// Danh sách thuốc có sẵn
const medicationDatabase = [
    // THUỐC GÂY NGHIỆN
    { name: "Fentanyl 0,1mg - 2", unit: "Ống", category: "THUỐC GÂY NGHIỆN", coSo: 0, slTong: 0 },
    { name: "Fentanyl 0,5mg/10", unit: "Ống", category: "THUỐC GÂY NGHIỆN", coSo: 20, slTong: 40 },
    { name: "Morphin 10mg - 1ml", unit: "Ống", category: "THUỐC GÂY NGHIỆN", coSo: 10, slTong: 20 },
    { name: "Dolcontral 100mg - 2ml", unit: "Ống", category: "THUỐC GÂY NGHIỆN", coSo: 10, slTong: 20 },
    
    // THUỐC HƯỚNG THẦN
    { name: "Ephedrine 30mg - 1ml", unit: "Ống", category: "THUỐC HƯỚNG THẦN", coSo: 3, slTong: 5 },
    { name: "Diazepam 10mg - 2ml", unit: "Ống", category: "THUỐC HƯỚNG THẦN", coSo: 10, slTong: 20 },
    { name: "Ketamine 500mg - 10ml", unit: "Lọ", category: "THUỐC HƯỚNG THẦN", coSo: 3, slTong: 5 },
    { name: "Midazolam 5mg - 1ml", unit: "Ống", category: "THUỐC HƯỚNG THẦN", coSo: 25, slTong: 50 },
    
    // THUỐC - DỊCH TRUYỀN
    { name: "Albumin 20% - 50 ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 0, slTong: 5 },
    { name: "Glucose 30% - 500ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 5, slTong: 10 },
    { name: "SMOFlipid 20% - 250ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 2, slTong: 2 },
    { name: "Levofloxacin 750mg - 150ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 5, slTong: 10 },
    { name: "Mannitol 20% - 250ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 5, slTong: 10 },
    { name: "Metronidazol 500mg - 100ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 5, slTong: 10 },
    { name: "Moxifloxacine 400mg - 250ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 0, slTong: 4 },
    { name: "Natri Clorid 3% - 100ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 10, slTong: 20 },
    { name: "Natri Clorid 0,45% - 500ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 1, slTong: 2 },
    { name: "4.2% Bicarbonate 10,5g-250ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 5, slTong: 10 },
    { name: "Nabica 8.4 %", unit: "Ống", category: "THUỐC - DỊCH TRUYỀN", coSo: 50, slTong: 100 },
    { name: "Paracetamol 1g - 100ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 18, slTong: 45 },
    { name: "Ringer Lactate 500ml", unit: "Chai", category: "THUỐC - DỊCH TRUYỀN", coSo: 25, slTong: 50 },
    
    // THUỐC TIÊM
    { name: "Gemapaxane 4000IU/0,4ml", unit: "BT", category: "THUỐC TIÊM", coSo: 6, slTong: 12 },
    { name: "Adenosin 6mg/2ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Actilyse 50mg", unit: "Lọ", category: "THUỐC TIÊM", coSo: 2, slTong: 2 },
    { name: "Meropenem 1g", unit: "Lọ", category: "THUỐC TIÊM", coSo: 3, slTong: 6 },
    { name: "Dobutamine 250mg/20ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Nitromint 0.08g", unit: "Lọ", category: "THUỐC TIÊM", coSo: 1, slTong: 2 },
    { name: "Insulin 70/30", unit: "Lọ", category: "THUỐC TIÊM", coSo: 1, slTong: 1 },
    { name: "Humalog 300U X 3ml", unit: "BT", category: "THUỐC TIÊM", coSo: 10, slTong: 10 },
    { name: "Insulin R 40UI/ml - 10ml", unit: "Lọ", category: "THUỐC TIÊM", coSo: 2, slTong: 2 },
    { name: "Heparin", unit: "Lọ", category: "THUỐC TIÊM", coSo: 2, slTong: 2 },
    { name: "Lidocain 10% - 38g", unit: "Lọ", category: "THUỐC TIÊM", coSo: 0, slTong: 2 },
    { name: "Solu - Medrol 40mg", unit: "Lọ", category: "THUỐC TIÊM", coSo: 10, slTong: 42 },
    { name: "Pantoprazol 40mg", unit: "Lọ", category: "THUỐC TIÊM", coSo: 20, slTong: 50 },
    { name: "Arduan 4mg", unit: "Lọ", category: "THUỐC TIÊM", coSo: 10, slTong: 10 },
    { name: "Ventolin Inhaler 100mcg/liều", unit: "Bình", category: "THUỐC TIÊM", coSo: 1, slTong: 2 },
    { name: "Ceftazidime 2g", unit: "Lọ", category: "THUỐC TIÊM", coSo: 10, slTong: 20 },
    { name: "Vancomycine 1g", unit: "Lọ", category: "THUỐC TIÊM", coSo: 3, slTong: 6 },
    { name: "Cefazolin 1g", unit: "Lọ", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Tanganil 500mg", unit: "Ống", category: "THUỐC TIÊM", coSo: 0, slTong: 40 },
    { name: "Aminazin 1.25% - 2ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 5 },
    { name: "Cordarone 150mg - 3ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Atropin sulphat 0,25mg - 1ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 25, slTong: 50 },
    { name: "Calci Clorid 500mg - 5ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 40 },
    { name: "Dexamethason, 4mg - 1ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 20 },
    { name: "Diclofenac 75mg - 3ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 40 },
    { name: "Digoxin 0.5ml - 2ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 3, slTong: 5 },
    { name: "Dimedrol 10mg - 1ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 0, slTong: 40 },
    { name: "No-Spa 40mg - 2ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 40 },
    { name: "Adrenaline-BFS 1mg - 1ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 50, slTong: 150 },
    { name: "A.T Furosemid 20mg - 2ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 20, slTong: 40 },
    { name: "Niglyvid 10mg - 10ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 30 },
    { name: "Haloperidol 0,5% - 1ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "SAT 1500 UI", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 10 },
    { name: "Kali Clorid 10% - 10ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 15, slTong: 30 },
    { name: "Lidocain 2% - 2ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 0, slTong: 200 },
    { name: "Falipan 2% - 10ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Panangin 400mg + 452mg/10ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 20 },
    { name: "Magie sulfat 15% - 10ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Metoran 10mg - 2ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 40 },
    { name: "Naloxone 0.4mg - ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Nicardipine 10mg - 10ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 15, slTong: 30 },
    { name: "Nor-adrenaline 1mg - 1ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 25, slTong: 50 },
    { name: "Octreotid 0,1mg/ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 15, slTong: 15 },
    { name: "Vitamin K1 10mg - 1ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 20 },
    { name: "Pipolphen 50mg - 2ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 10 },
    { name: "Propofol 0.5% 5mg/ml - 20ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Bricanyl, 0,5mg", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Cammic 250mg - 5ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 30, slTong: 60 },
    { name: "Vitamin B1, 100mg - 1ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 5, slTong: 10 },
    { name: "Cevit 500mg - 5ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 10, slTong: 20 },
    { name: "Pulmicort Respules, 500mcg-2ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 20, slTong: 40 },
    { name: "Ventolin Nebules 5mg-2,5ml", unit: "Ống", category: "THUỐC TIÊM", coSo: 20, slTong: 40 },
    { name: "Combivent 2,5mg + 0,5mg - 2,5ml", unit: "Lọ", category: "THUỐC TIÊM", coSo: 20, slTong: 40 },
    
    // THUỐC VIÊN
    { name: "Aspirin 81mg", unit: "Viên", category: "THUỐC VIÊN", coSo: 10, slTong: 20 },
    { name: "Atorvastatin 20mg", unit: "Viên", category: "THUỐC VIÊN", coSo: 10, slTong: 20 },
    { name: "Captopril 25 mg", unit: "Viên", category: "THUỐC VIÊN", coSo: 10, slTong: 20 },
    { name: "Plavix 75mg", unit: "Viên", category: "THUỐC VIÊN", coSo: 20, slTong: 40 },
    { name: "Brilinta 90mg", unit: "Viên", category: "THUỐC VIÊN", coSo: 10, slTong: 20 },
    
    // TTB - VẬT TƯ Y TẾ
    { name: "Catheter TMTT", unit: "Cái", category: "TTB - VẬT TƯ Y TẾ", coSo: 5, slTong: 10 },
    { name: "Ống thở HFNC", unit: "Cái", category: "TTB - VẬT TƯ Y TẾ", coSo: 2, slTong: 5 },
    { name: "Hạ sốt", unit: "Cái", category: "TTB - VẬT TƯ Y TẾ", coSo: 3, slTong: 10 }
];

// Biến lưu trữ dữ liệu
let medicationCounter = 0;
let handoverRecords = [];
let deliveryRecords = []; // Lưu thông tin cấp thuốc
let currentTab = '';
let currentShiftCount = 2;

// URL của Google Apps Script Web App (VERSION 2 - FIXED)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxoavJCaYjR82c71N_J3uvjE9UA1rUQq8KOKidK4Gxi3L3OFxWpkkgcRUVZ3LBanCA/exec';
const GOOGLE_SHEET_NAME = 'BH2026';

// Function test kết nối Google Apps Script
async function testGoogleSheetConnection() {
    console.log('🧪 Testing Google Sheet connection...');
    console.log('🔗 URL:', GOOGLE_SCRIPT_URL);
    
    try {
        // Test với payload đơn giản
        const testPayload = {
            action: 'save',
            sheetName: 'BH2026',
            date: '2026-01-26',
            shiftType: 'morning',
            shiftCount: 2,
            handoverPerson: 'Test User',
            receivePerson: 'Test User 2',
            notes: 'Test từ web app',
            medications: []
        };
        
        console.log('📤 Test payload:', testPayload);
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(testPayload),
            redirect: 'follow'
        });
        
        console.log('✅ Response status:', response.status);
        const text = await response.text();
        console.log('📄 Response:', text);
        
        try {
            const json = JSON.parse(text);
            if (json.success) {
                alert('✅ Kết nối thành công!\n\nSheet: BH2026\nStatus: ' + response.status + '\nMessage: Đã test ghi dữ liệu thành công!');
            } else {
                alert('⚠️ Kết nối OK nhưng có lỗi:\n\n' + (json.message || 'Unknown error'));
            }
        } catch (e) {
            alert('⚠️ Response không phải JSON:\n\n' + text.substring(0, 300));
        }
    } catch (error) {
        console.error('❌ Test failed:', error);
        alert('❌ Lỗi kết nối:\n\n' + error.message + '\n\nVui lòng kiểm tra:\n- Kết nối internet\n- URL Apps Script\n- CORS settings');
    }
}

// Gắn vào window để có thể gọi từ console
window.testGoogleSheetConnection = testGoogleSheetConnection;

// Mapping ô trên Google Sheet
const SHEET_META = {
    sheetName: GOOGLE_SHEET_NAME,
    baseDate: '2026-01-01', // mốc ngày đầu tiên
    baseColIndex: 19, // Cột S = 19 (A=1) - 01/01/2026 bắt đầu từ cột S
    headerCols: { coSo: 'B', name: 'C', unit: 'D', slHienCo: 'E' },
    noteRow: 91,
    handoverRow: 92,
    receiveRow: 93,
    medRowMap: {
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
    }
};

// Dữ liệu thuốc DVYT (sẽ được thêm sau)
const medicationDatabaseDVYT = [];

// Hàm kiểm tra dữ liệu đã lưu cho ngày và ca cụ thể
function checkExistingRecord(date, shiftType, tab) {
    return handoverRecords.find(record => 
        record.date === date && 
        record.shiftType === shiftType && 
        record.tab === tab
    );
}

// Hàm validate form đầy đủ
function validateForm() {
    console.log('🔍 validateForm được gọi');
    const errors = [];
    
    // Kiểm tra số ca
    const shiftCount = document.getElementById('shiftCount').value;
    console.log('🔍 shiftCount:', shiftCount);
    if (!shiftCount) {
        errors.push('• Số ca');
    }
    
    // Kiểm tra ngày
    const date = document.getElementById('shiftDate').value;
    console.log('🔍 date:', date);
    if (!date) {
        errors.push('• Ngày');
    }
    
    // Kiểm tra ca trực
    const shiftType = document.getElementById('shiftType').value;
    console.log('🔍 shiftType:', shiftType);
    if (!shiftType) {
        errors.push('• Ca trực');
    }
    
    // Kiểm tra người bàn giao và người nhận bàn giao
    const handoverPerson = document.getElementById('handoverPerson').value;
    const receivePerson = document.getElementById('receivePerson').value;
    console.log('🔍 handoverPerson:', handoverPerson);
    console.log('🔍 receivePerson:', receivePerson);
    
    if (!handoverPerson || handoverPerson.trim() === '') {
        errors.push('• Người bàn giao');
    }
    if (!receivePerson || receivePerson.trim() === '') {
        errors.push('• Người nhận bàn giao');
    }
    
    // Kiểm tra đầy đủ 87 loại thuốc (bao gồm cả TTB-VTYT) theo ca trực
    const tableId = currentTab === 'ccbl' ? 'medicationList' : 'medicationListDVYT';
    const rows = document.querySelectorAll(`#${tableId} tr:not(.category-header)`);
    const missingMeds = [];
    
    rows.forEach(row => {
        const id = row.dataset.id;
        const medName = row.dataset.medname;
        
        if (shiftType === 'morning') {
            // Ca sáng: kiểm tra cột NGÀY
            const caSangInput = row.querySelector(`input[name="medCaSang_${id}"]`);
            if (caSangInput && (caSangInput.value === '' || caSangInput.value === null)) {
                missingMeds.push(medName);
            }
        } else if (shiftType === 'afternoon' || shiftType === 'evening') {
            // Ca chiều: kiểm tra cột CHIỀU
            const caChieuInput = row.querySelector(`input[name="medCaChieu_${id}"]`);
            if (caChieuInput && (caChieuInput.value === '' || caChieuInput.value === null)) {
                missingMeds.push(medName);
            }
        } else if (shiftType === 'night') {
            // Ca đêm: kiểm tra cột ĐÊM
            const caDemInput = row.querySelector(`input[name="medCaDem_${id}"]`) || row.querySelector(`input[name="medCaToi_${id}"]`);
            if (caDemInput && (caDemInput.value === '' || caDemInput.value === null)) {
                missingMeds.push(medName);
            }
        }
    });
    
    if (missingMeds.length > 0) {
        errors.push(`• Thiếu ${missingMeds.length} loại thuốc chưa nhập:\n  ${missingMeds.slice(0, 10).join('\n  ')}${missingMeds.length > 10 ? '\n  ... và ' + (missingMeds.length - 10) + ' loại khác' : ''}`);
    }
    
    console.log('🔍 Số lỗi:', errors.length);
    
    if (errors.length > 0) {
        return {
            isValid: false,
            message: 'Vui lòng nhập đầy đủ thông tin:\n\n' + errors.join('\n')
        };
    }
    
    return { isValid: true };
}

// Hàm tính thời gian khóa (24h sau giờ bàn giao)
function calculateLockTime(date, shiftType, shiftCount) {
    const lockDate = new Date(date);
    
    if (shiftCount === 2) {
        // 2 ca: Sáng 6h45, Đêm 18h
        if (shiftType === 'morning') {
            lockDate.setHours(6, 45, 0, 0);
        } else {
            lockDate.setHours(18, 0, 0, 0);
        }
    } else {
        // 3 ca: Sáng 6h45, Chiều 14h30, Tối 20h30
        if (shiftType === 'morning') {
            lockDate.setHours(6, 45, 0, 0);
        } else if (shiftType === 'afternoon' || shiftType === 'evening') {
            lockDate.setHours(14, 30, 0, 0);
        } else {
            lockDate.setHours(20, 30, 0, 0);
        }
    }
    
    // Cộng thêm 24 giờ
    lockDate.setHours(lockDate.getHours() + 24);
    
    return lockDate.toISOString();
}

// Hàm kiểm tra xem dữ liệu có bị khóa không
function isLocked(record) {
    if (!record.lockUntil) return false;
    
    const now = new Date();
    const lockUntil = new Date(record.lockUntil);
    
    return now < lockUntil;
}

// Hàm hiển thị popup
function showPopup(title, message) {
    console.log('📢 showPopup:', title, message);
    
    const popup = document.getElementById('notificationPopup');
    const popupTitle = document.getElementById('popupTitle');
    const popupMessage = document.getElementById('popupMessage');
    
    if (!popup || !popupTitle || !popupMessage) {
        console.error('❌ Không tìm thấy elements của popup');
        alert(title + '\n\n' + message);
        return;
    }
    
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    
    popup.classList.add('show');
}

// Hàm hiển thị/ẩn loading popup
function showLoadingPopup(show, success = false) {
    const loadingPopup = document.getElementById('loadingPopup');
    const loadingText = document.getElementById('loadingText');
    
    if (!loadingPopup || !loadingText) {
        console.error('❌ Không tìm thấy loading popup');
        return;
    }
    
    if (show) {
        // Hiển thị popup "\u0110ang lưu..."
        loadingText.textContent = 'Đang lưu...';
        loadingText.classList.remove('success');
        loadingPopup.classList.remove('hidden');
    } else if (success) {
        // Chuyển thành "Lưu thành công" rồi tự đóng sau 1.5s
        loadingText.textContent = 'Lưu thành công';
        loadingText.classList.add('success');
        setTimeout(() => {
            loadingPopup.classList.add('hidden');
        }, 1500);
    } else {
        // Ẩn popup ngay lập tức (trường hợp lỗi)
        loadingPopup.classList.add('hidden');
    }
}

// Biến lưu trạng thái khóa form
let isFormLocked = false;

// Hàm khóa form sau khi đã lưu
function lockForm(record) {
    isFormLocked = true;
    console.log('🔒 Đang khóa form...');
    
    // Disable tất cả các input trong form
    const allInputs = document.querySelectorAll('#handoverForm input, #handoverForm textarea, #handoverForm select');
    allInputs.forEach(input => {
        if (input.id !== 'shiftDate' && input.id !== 'shiftType' && input.id !== 'shiftCount') {
            input.disabled = true;
            input.style.backgroundColor = '#f5f5f5';
            input.style.cursor = 'not-allowed';
        }
    });
    
    // Disable nút Lưu
    const saveBtn = document.getElementById('saveTopBtn');
    if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.style.opacity = '0.5';
        saveBtn.style.cursor = 'not-allowed';
    }
    
    console.log('✅ Form đã bị khóa');
    
    // Hiển thị nút mở khóa
    const unlockBtn = document.getElementById('unlockBtn');
    unlockBtn.classList.remove('hidden');
    
    // Cập nhật highlight listeners
    setTimeout(() => addHighlightListeners(), 100);
}

// Hàm mở khóa form
function unlockForm() {
    console.log('🔓 Mở khóa form');
    isFormLocked = false;
    
    // Mở khóa tất cả các input
    const allInputs = document.querySelectorAll('#handoverForm input, #handoverForm textarea, #handoverForm select');
    allInputs.forEach(input => {
        if (input.getAttribute('readonly') !== 'readonly' && !input.name.includes('medCoSo') && !input.name.includes('medName') && !input.name.includes('medUnit') && !input.name.includes('medSlTong')) {
            input.disabled = false;
            input.style.backgroundColor = '';
            input.style.cursor = '';
        }
    });
    
    // Mở khóa nút Lưu
    const saveBtn = document.getElementById('saveTopBtn');
    if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.style.opacity = '1';
        saveBtn.style.cursor = 'pointer';
    }
    
    console.log('✅ Form đã được mở khóa');
}

// Hàm cập nhật header bảng khi thay đổi số ca
function updateTableHeaders() {
    console.log('🔄 updateTableHeaders được gọi');
    const shiftCountEl = document.getElementById('shiftCount');
    if (!shiftCountEl) return;
    
    const newShiftCount = parseInt(shiftCountEl.value);
    console.log('📊 Số ca mới:', newShiftCount);
    
    if (newShiftCount === currentShiftCount) {
        return; // Không có thay đổi
    }
    
    currentShiftCount = newShiftCount;
    
    // Hiển/ẩn option Ca chiều
    const afternoonOption = document.querySelector('#shiftType option[value="afternoon"]');
    if (afternoonOption) {
        afternoonOption.style.display = currentShiftCount === 3 ? 'block' : 'none';
    }
    
    // Cập nhật header bảng trước khi render
    updateShiftHeaders();
    
    // Áp dụng lại disable cột theo ca đã chọn
    const shiftType = document.getElementById('shiftType').value;
    if (shiftType) {
        disableShiftColumns(shiftType);
    }
}

// Hàm xử lý khi thay đổi ngày hoặc ca
function handleDateShiftChange() {
    const date = document.getElementById('shiftDate').value;
    const shiftType = document.getElementById('shiftType').value;
    const handoverInput = document.getElementById('handoverPerson');
    const receiveInput = document.getElementById('receivePerson');
    
    if (!date || !shiftType) {
        handoverInput.disabled = false;
        receiveInput.disabled = false;
        handoverInput.value = '';
        receiveInput.value = '';
        unlockForm();
        stopAutoSync();
        return;
    }
    
    // Kiểm tra xem đã có dữ liệu chưa
    const existingRecord = checkExistingRecord(date, shiftType, currentTab);
    
    // LUÔN mở khóa form - cho phép chỉnh sửa mọi lúc
    unlockForm();
    
    if (existingRecord) {
        // Đã có dữ liệu - điền vào form để người dùng có thể chỉnh sửa
        console.log('📝 Có dữ liệu cũ - người dùng có thể chỉnh sửa và cập nhật');
        handoverInput.value = existingRecord.handoverPerson;
        receiveInput.value = existingRecord.receivePerson;
        // KHÔNG khóa form - để người dùng có thể cập nhật
        stopAutoSync();
        
        // Áp dụng disable cột theo ca (ngay cả khi có dữ liệu cũ)
        disableShiftColumns(shiftType);
    } else {
        // Chưa có dữ liệu - áp dụng quy tắc
        unlockForm();
        
        // Cập nhật giá trị "Hiện có" từ ca cuối cùng của ngày trước (local)
        updateHienCoFromPreviousShift(date, shiftType);
        
        // Đồng bộ dữ liệu từ Google Sheets (ngày hiện tại) và ĐÊM (ngày trước)
        console.log('🔄 Auto sync dữ liệu khi chọn ngày/ca:', date, shiftType);
        syncFromGoogleSheets(date, shiftType);
        fillPreviousNightFromSheet(date);
        
        // Bật tự động đồng bộ mỗi 30 giây
        startAutoSync();
        
        // Tất cả các ca đều nhập được cả người bàn giao và người nhận
        handoverInput.disabled = false;
        handoverInput.required = true;
        receiveInput.disabled = false;
        receiveInput.required = true;
        
        if (shiftType === 'morning') {
            // Tìm ca đêm trước đó để lấy người nhận ca đêm làm người giao ca sáng
            const previousDate = new Date(date);
            previousDate.setDate(previousDate.getDate() - 1);
            const prevDateStr = previousDate.toISOString().split('T')[0];
            const prevNightRecord = checkExistingRecord(prevDateStr, 'night', currentTab);
            
            if (prevNightRecord && prevNightRecord.receivePerson) {
                handoverInput.value = prevNightRecord.receivePerson;
            }
            
            // Disable các cột không phải NGÀY
            disableShiftColumns('morning');
        } else if (shiftType === 'night') {
            // Tìm ca sáng cùng ngày để lấy người nhận ca sáng làm người giao ca đêm
            const morningRecord = checkExistingRecord(date, 'morning', currentTab);
            
            if (morningRecord && morningRecord.receivePerson) {
                handoverInput.value = morningRecord.receivePerson;
            } else if (morningRecord && morningRecord.handoverPerson) {
                // Nếu ca sáng chỉ có người giao, dùng người đó
                handoverInput.value = morningRecord.handoverPerson;
            } else {
                handoverInput.value = '';
            }
            
            // Disable các cột không phải ĐÊM
            disableShiftColumns('night');
        } else {
            // Ca chiều hoặc ca khác
            disableShiftColumns(shiftType);
        }
    }
}

// Hàm disable các cột theo ca trực
function disableShiftColumns(shiftType) {
    const tableId = currentTab === 'ccbl' ? 'medicationList' : 'medicationListDVYT';
    const rows = document.querySelectorAll(`#${tableId} tr:not(.category-header)`);
    
    rows.forEach(row => {
        const id = row.dataset.id;
        if (!id) return;
        
        const inputSang = row.querySelector(`input[name="medCaSang_${id}"]`);
        const inputDem = row.querySelector(`input[name="medCaDem_${id}"]`);
        const inputChieu = row.querySelector(`input[name="medCaChieu_${id}"]`);
        const inputToi = row.querySelector(`input[name="medCaToi_${id}"]`);
        
        if (shiftType === 'morning') {
            // Ca sáng: chỉ enable cột NGÀY, các cột khác disable nhưng GIỮ NGUYÊN giá trị
            if (inputSang) {
                inputSang.disabled = false;
                inputSang.style.background = '';
            }
            if (inputDem) {
                inputDem.disabled = true;
                // KHÔNG xóa value, chỉ disable
                inputDem.style.background = '#f5f5f5';
            }
            if (inputChieu) {
                inputChieu.disabled = true;
                // KHÔNG xóa value, chỉ disable
                inputChieu.style.background = '#f5f5f5';
            }
            if (inputToi) {
                inputToi.disabled = true;
                // KHÔNG xóa value, chỉ disable
                inputToi.style.background = '#f5f5f5';
            }
        } else if (shiftType === 'night') {
            // Ca đêm: chỉ enable cột ĐÊM, các cột khác disable nhưng GIỮ NGUYÊN giá trị
            if (inputSang) {
                inputSang.disabled = true;
                // KHÔNG xóa value, chỉ disable
                inputSang.style.background = '#f5f5f5';
            }
            if (inputDem) {
                inputDem.disabled = false;
                inputDem.style.background = '';
            }
            if (inputChieu) {
                inputChieu.disabled = true;
                // KHÔNG xóa value, chỉ disable
                inputChieu.style.background = '#f5f5f5';
            }
            if (inputToi) {
                inputToi.disabled = false;
                inputToi.style.background = '';
            }
        } else if (shiftType === 'afternoon' || shiftType === 'evening') {
            // Ca chiều: chỉ enable cột CHIỀU, các cột khác disable nhưng GIỮ NGUYÊN giá trị
            if (inputSang) {
                inputSang.disabled = true;
                // KHÔNG xóa value, chỉ disable
                inputSang.style.background = '#f5f5f5';
            }
            if (inputDem) {
                inputDem.disabled = true;
                // KHÔNG xóa value, chỉ disable
                inputDem.style.background = '#f5f5f5';
            }
            if (inputChieu) {
                inputChieu.disabled = false;
                inputChieu.style.background = '';
            }
            if (inputToi) {
                inputToi.disabled = true;
                // KHÔNG xóa value, chỉ disable
                inputToi.style.background = '#f5f5f5';
            }
        }
    });
    
    // Cập nhật highlight listeners sau khi thay đổi trạng thái các input
    setTimeout(() => addHighlightListeners(), 100);
}

// Hàm cập nhật giá trị "Hiện có" từ ca trước đó
function updateHienCoFromPreviousShift(currentDate, currentShiftType) {
    // Lấy ca cuối cùng của ngày hôm trước
    // Nếu 2 ca: lấy 'night'
    // Nếu 3 ca: lấy 'night' (ca tối là ca cuối)
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    const prevDateStr = previousDate.toISOString().split('T')[0];
    
    // Luôn lấy ca 'night' (ca cuối cùng của cả 2 ca và 3 ca)
    const prevRecord = checkExistingRecord(prevDateStr, 'night', currentTab);
    
    // Nếu tìm thấy dữ liệu ca đêm ngày trước, cập nhật giá trị vào cột "ĐÊM (ngày trước)"
    if (prevRecord && prevRecord.medications) {
        const tableId = currentTab === 'ccbl' ? 'medicationList' : 'medicationListDVYT';
        const rows = document.querySelectorAll(`#${tableId} tr:not(.category-header)`);
        
        rows.forEach(row => {
            const id = row.dataset.id;
            const medName = row.dataset.medname;
            
            // Tìm thuốc tương ứng trong dữ liệu ca đêm ngày trước
            const prevMed = prevRecord.medications.find(m => m.name === medName);
            
            if (prevMed) {
                const slTongInput = row.querySelector(`input[name="medSlTong_${id}"]`);
                if (slTongInput) {
                    // Lấy giá trị từ ca cuối: caDem (2 ca) hoặc caToi (3 ca)
                    const lastShiftValue = prevMed.caToi || prevMed.caDem || 0;
                    slTongInput.value = lastShiftValue;
                }
            }
        });
    }
}

// Cập nhật header cột theo số ca
function updateShiftHeaders() {
    const thead = document.getElementById('medicationTableHead');
    if (!thead) {
        console.error('❌ Không tìm thấy medicationTableHead');
        return;
    }
    
    console.log('🔄 Cập nhật header cho số ca:', currentShiftCount);
    
    if (currentShiftCount === 2) {
        thead.innerHTML = `
            <tr>
                <th style="width: 60px;">Cơ số CCBL</th>
                <th style="width: 180px;">BIỆT DƯỢC</th>
                <th style="width: 60px;">ĐVT</th>
                <th style="width: 70px;">SL hiện có</th>
                <th style="width: 80px;">ĐÊM (ngày trước)</th>
                <th style="width: 70px;">NGÀY</th>
                <th style="width: 70px;">ĐÊM</th>
            </tr>
        `;
    } else {
        thead.innerHTML = `
            <tr>
                <th style="width: 60px;">Cơ số CCBL</th>
                <th style="width: 180px;">BIỆT DƯỢC</th>
                <th style="width: 60px;">ĐVT</th>
                <th style="width: 70px;">SL hiện có</th>
                <th style="width: 80px;">ĐÊM (ngày trước)</th>
                <th style="width: 70px;">NGÀY</th>
                <th style="width: 70px;">CHIỀU</th>
                <th style="width: 70px;">ĐÊM</th>
            </tr>
        `;
    }
    
    console.log('✅ Đã cập nhật header');
    
    // Render lại bảng
    if (currentTab === 'ccbl') {
        renderMedicationTable();
    } else {
        renderMedicationTableDVYT();
    }
}

// Render toàn bộ bảng với tất cả thuốc theo nhóm
function renderMedicationTable() {
    const tbody = document.getElementById('medicationList');
    tbody.innerHTML = '';
    
    let currentCategory = '';
    let counter = 0;
    const shiftCount = currentShiftCount;
    const colSpan = shiftCount === 2 ? 7 : 8;
    
    medicationDatabase.forEach((med, index) => {
        // Thêm header cho category mới
        if (med.category !== currentCategory) {
            const categoryRow = document.createElement('tr');
            categoryRow.className = 'category-header';
            categoryRow.innerHTML = `<td colspan="${colSpan}">${med.category}</td>`;
            tbody.appendChild(categoryRow);
            currentCategory = med.category;
        }
        
        counter++;
        const row = document.createElement('tr');
        row.dataset.id = counter;
        row.dataset.medname = med.name;
        
        let shiftInputs = '';
        if (shiftCount === 2) {
            shiftInputs = `
                <td>
                    <input type="number" name="medCaSang_${counter}" 
                           step="1" placeholder="0" inputmode="numeric" pattern="[0-9]*">
                </td>
                <td>
                    <input type="number" name="medCaDem_${counter}" 
                           step="1" placeholder="0" inputmode="numeric" pattern="[0-9]*">
                </td>
            `;
        } else {
            shiftInputs = `
                <td>
                    <input type="number" name="medCaSang_${counter}" 
                           step="1" placeholder="0" inputmode="numeric" pattern="[0-9]*">
                </td>
                <td>
                    <input type="number" name="medCaChieu_${counter}" 
                           step="1" placeholder="0" inputmode="numeric" pattern="[0-9]*">
                </td>
                <td>
                    <input type="number" name="medCaToi_${counter}" 
                           step="1" placeholder="0" inputmode="numeric" pattern="[0-9]*">
                </td>
            `;
        }
        
        row.innerHTML = `
            <td>
                <input type="number" name="medCoSo_${counter}" 
                       value="${med.coSo}" readonly
                       style="cursor: default; text-align: center;">
            </td>
            <td>
                <textarea name="medName_${counter}" readonly 
                          style="cursor: default; resize: none; overflow: hidden;">${med.name}</textarea>
            </td>
            <td>
                <input type="text" name="medUnit_${counter}" 
                       value="${med.unit}" readonly
                       style="cursor: default; text-align: center;">
            </td>
            <td>
                <input type="number" name="medSlHienCo_${counter}"
                       value="${med.slHienCo ?? med.slTong ?? 0}" step="1" inputmode="numeric" pattern="[0-9]*"
                       readonly style="cursor: default; text-align: center; background: #f5f5f5;">
            </td>
            <td>
                <input type="number" name="medSlTong_${counter}" 
                       value="${med.slTong}" readonly
                       style="cursor: default; text-align: center;">
            </td>
            ${shiftInputs}
        `;
        
        tbody.appendChild(row);
    });
    
    medicationCounter = counter;
    
    // Thêm highlight listeners sau khi render xong
    setTimeout(() => addHighlightListeners(), 100);
    
    // Áp dụng lại disable cột theo ca đã chọn sau khi render
    const shiftType = document.getElementById('shiftType')?.value;
    if (shiftType) {
        setTimeout(() => disableShiftColumns(shiftType), 50);
    }
}

// Render bảng DVYT (tạm thời để trống)
function renderMedicationTableDVYT() {
    const tbody = document.getElementById('medicationListDVYT');
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 20px; color: #999;">Dữ liệu thuốc DVYT sẽ được cập nhật sau</td></tr>';
}

// Thêm event listeners cho highlight động
function addHighlightListeners() {
    // Lấy tất cả các input thuốc
    const medicationInputs = document.querySelectorAll(
        'input[name^="medCaSang_"], input[name^="medCaChieu_"], input[name^="medCaToi_"], input[name^="medCaDem_"]'
    );
    
    medicationInputs.forEach(input => {
        // Kiểm tra giá trị ban đầu
        updateHighlightClass(input);
        
        // Lắng nghe sự kiện input
        input.addEventListener('input', function() {
            updateHighlightClass(this);
        });
        
        // Lắng nghe sự kiện change để đảm bảo
        input.addEventListener('change', function() {
            updateHighlightClass(this);
        });
    });
}

// Cập nhật CSS class dựa trên giá trị
function updateHighlightClass(input) {
    if (input.value && input.value !== '') {
        input.classList.add('has-value');
    } else {
        input.classList.remove('has-value');
    }
}

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOMContentLoaded - Bắt đầu khởi tạo');
    
    try {
        // Set ngày hiện tại
        const today = new Date().toISOString().split('T')[0];
        const shiftDateEl = document.getElementById('shiftDate');
        if (shiftDateEl) {
            shiftDateEl.value = today;
        } else {
            console.error('❌ Không tìm thấy element shiftDate');
        }

        // Load dữ liệu từ localStorage
        loadFromLocalStorage();

        // Xử lý menu chính
        setupMainMenu();
    } catch (error) {
        console.error('❌ Lỗi trong DOMContentLoaded:', error);
        alert('Lỗi khởi tạo: ' + error.message);
    }

    // Event listeners cho selection cards (legacy support)
    document.querySelectorAll('.selection-card').forEach(card => {
        card.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            currentTab = type;
            
            // Ẩn selection screen, hiện main form
            document.getElementById('selectionScreen').classList.add('hidden');
            document.getElementById('mainForm').classList.remove('hidden');
            
            // Cập nhật title
            if (type === 'ccbl') {
                document.getElementById('formTitle').textContent = '📋 Bàn Giao Thuốc CCBL';
                document.getElementById('formSubtitle').textContent = 'Sổ giao nhận thuốc CCBL';
                document.getElementById('ccblSection').classList.remove('hidden');
                document.getElementById('shiftCountGroup').classList.remove('hidden');
                renderMedicationTable();
            } else {
                document.getElementById('formTitle').textContent = '📋 Bàn Giao Thuốc DVYT';
                document.getElementById('formSubtitle').textContent = 'Sổ giao nhận thuốc DVYT';
                document.getElementById('ccblSection').classList.add('hidden');
                document.getElementById('shiftCountGroup').classList.add('hidden');
                renderMedicationTableDVYT();
            }
            
            // Kiểm tra dữ liệu đã lưu
            setTimeout(() => handleDateShiftChange(), 100);
        });
    });

    // Event listener cho nút quay lại
    const backToSelectionBtn = document.getElementById('backToSelection');
    if (backToSelectionBtn) {
        backToSelectionBtn.addEventListener('click', function() {
            console.log('⬅️ Nút quay lại được bấm');
            document.getElementById('mainForm').classList.add('hidden');
            document.getElementById('mainMenu').classList.remove('hidden');
            
            // Mở khóa form
            unlockForm();
            
            // Reset form
            const form = document.getElementById('handoverForm');
            if (form) form.reset();
            const today = new Date().toISOString().split('T')[0];
            const shiftDateEl = document.getElementById('shiftDate');
            if (shiftDateEl) shiftDateEl.value = today;
        });
    } else {
        console.error('❌ Không tìm thấy nút backToSelection');
    }

    // Event listener cho số ca
    const shiftCountEl = document.getElementById('shiftCount');
    if (shiftCountEl) {
        shiftCountEl.addEventListener('change', updateTableHeaders);
    } else {
        console.error('❌ Không tìm thấy element shiftCount');
    }
    
    // Event listeners cho ngày và ca trực
    const shiftDateEl2 = document.getElementById('shiftDate');
    if (shiftDateEl2) {
        shiftDateEl2.addEventListener('change', handleDateShiftChange);
    } else {
        console.error('❌ Không tìm thấy element shiftDate');
    }
    
    const shiftTypeEl = document.getElementById('shiftType');
    if (shiftTypeEl) {
        shiftTypeEl.addEventListener('change', handleDateShiftChange);
    } else {
        console.error('❌ Không tìm thấy element shiftType');
    }
    
    // Event listener cho nút liên hệ quản trị viên
    const contactAdminBtn = document.getElementById('contactAdminBtn');
    if (contactAdminBtn) {
        contactAdminBtn.addEventListener('click', function() {
            console.log('📞 Nút liên hệ quản trị viên được bấm');
            showPopup('Liên hệ quản trị viên', '📞 Thông tin liên hệ:\n\nĐặng Thị Hải An: 0965827628\nNguyễn Thị Hải: 0978389311\n\n💻 Phát triển Website:\nTrương Huỳnh Tuấn Vỹ: 0961546109');
        });
    } else {
        console.error('❌ Không tìm thấy nút contactAdminBtn');
    }
    
    // Event listener cho nút Cấp thuốc
    const deliverMedicationBtn = document.getElementById('deliverMedicationBtn');
    if (deliverMedicationBtn) {
        deliverMedicationBtn.addEventListener('click', openDeliverMedicationPopup);
    }
    
    // Event listener cho nút Xóa dữ liệu
    const clearDataBtn = document.getElementById('clearDataBtn');
    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', handleClearData);
    }
    
    // Event listener cho nút Làm tươi
    const refreshDataBtn = document.getElementById('refreshDataBtn');
    if (refreshDataBtn) {
        refreshDataBtn.addEventListener('click', handleRefreshData);
    }
    
    // Event listener cho nút Chỉnh sửa
    const editBtn = document.getElementById('editBtn');
    if (editBtn) {
        editBtn.addEventListener('click', handleEditWithPassword);
    }
    
    // Event listener cho nút OK trong popup
    const popupOkBtn = document.getElementById('popupOkBtn');
    if (popupOkBtn) {
        popupOkBtn.addEventListener('click', function() {
            console.log('✅ Nút OK trong popup được bấm');
            const popup = document.getElementById('notificationPopup');
            if (popup) {
                popup.classList.remove('show');
            }
        });
    } else {
        console.error('❌ Không tìm thấy nút popupOkBtn');
    }
    
    // Event listener cho nút mở khóa
    const unlockBtn = document.getElementById('unlockBtn');
    if (unlockBtn) {
        unlockBtn.addEventListener('click', function() {
            console.log('🔓 Nút mở khóa được bấm');
            const date = document.getElementById('shiftDate').value;
            const shiftType = document.getElementById('shiftType').value;
            const existingRecord = checkExistingRecord(date, shiftType, currentTab);
            
            if (existingRecord && isLocked(existingRecord)) {
                showPopup('Cảnh báo', 'Dữ liệu vẫn đang trong thời gian khóa (24h).\nVui lòng liên hệ quản trị viên để mở khóa.');
                return;
            }
            
            unlockForm();
            showPopup('Thành công', 'Đã mở khóa! Bạn có thể chỉnh sửa dữ liệu.');
        });
    } else {
        console.error('❌ Không tìm thấy nút unlockBtn');
    }

    // Event listeners
    const handoverForm = document.getElementById('handoverForm');
    if (handoverForm) {
        handoverForm.addEventListener('submit', handleSubmit);
    } else {
        console.error('❌ Không tìm thấy form handoverForm');
    }
    
    // Nút lưu ở header
    const saveTopBtn = document.getElementById('saveTopBtn');
    if (saveTopBtn) {
        saveTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('💾 Nút Lưu được bấm');
            
            // Gọi trực tiếp handleSubmit với sự kiện giả
            const form = document.getElementById('handoverForm');
            if (!form) {
                console.error('❌ Không tìm thấy form handoverForm');
                alert('Lỗi: Không tìm thấy form');
                return;
            }
            
            // Tạo event giả để truyền vào handleSubmit
            const fakeEvent = {
                preventDefault: () => {},
                target: form
            };
            
            handleSubmit(fakeEvent);
        });
    } else {
        console.error('❌ Không tìm thấy nút saveTopBtn');
    }
    
    console.log('✅ Hoàn tất khởi tạo tất cả event listeners');
});

// Xử lý submit form
async function handleSubmit(e) {
    e.preventDefault();
    
    console.log('🔵 handleSubmit được gọi');
    console.log('🔵 currentTab:', currentTab);
    
    // Validate form trước khi lưu
    const validationResult = validateForm();
    console.log('🔵 Validation result:', validationResult);
    
    if (!validationResult.isValid) {
        console.log('❌ Form không hợp lệ, hiển thị popup');
        showPopup('Thiếu thông tin', validationResult.message);
        return;
    }
    
    const formData = new FormData(e.target);
    const date = formData.get('shiftDate');
    const shiftType = formData.get('shiftType');
    
    console.log('🔵 Date:', date, 'ShiftType:', shiftType);
    
    // Kiểm tra xem đã có dữ liệu chưa - nếu có thì cập nhật
    const existingRecord = checkExistingRecord(date, shiftType, currentTab);
    if (existingRecord) {
        console.log('⚠️ Dữ liệu đã tồn tại - sẽ cập nhật');
        // Xóa record cũ để thay thế bằng record mới
        const index = handoverRecords.findIndex(r => 
            r.date === date && r.shiftType === shiftType && r.tab === currentTab
        );
        if (index !== -1) {
            handoverRecords.splice(index, 1);
            console.log('🔄 Đã xóa record cũ để cập nhật');
        }
    }
    
    console.log('🔵 Bắt đầu thu thập dữ liệu thuốc...');
    
    const handoverPerson = formData.get('handoverPerson');
    const receivePerson = formData.get('receivePerson');
    const notes = formData.get('notes');
    
    const medications = [];
    
    // Lấy thông tin các thuốc từ bảng
    const tableId = currentTab === 'ccbl' ? 'medicationList' : 'medicationListDVYT';
    const rows = document.querySelectorAll(`#${tableId} tr:not(.category-header)`);
    
    rows.forEach(row => {
        const id = row.dataset.id;
        const name = formData.get(`medName_${id}`);
        const unit = formData.get(`medUnit_${id}`);
        const coSo = formData.get(`medCoSo_${id}`);
        const slHienCo = formData.get(`medSlHienCo_${id}`);
        const slDemTruoc = formData.get(`medSlTong_${id}`);
        
        let hasData = false;
        let medData = { name, unit, coSo: coSo || 0, slHienCo: slHienCo || 0, slDemTruoc: slDemTruoc || 0 };
        
        if (currentShiftCount === 2) {
            const caSang = formData.get(`medCaSang_${id}`);
            const caDem = formData.get(`medCaDem_${id}`);
            // Chấp nhận cả giá trị 0, chỉ bỏ qua khi rỗng hoặc undefined
            if ((caSang !== '' && caSang !== null) || (caDem !== '' && caDem !== null)) {
                medData.caSang = caSang !== '' && caSang !== null ? parseFloat(caSang) : 0;
                medData.caDem = caDem !== '' && caDem !== null ? parseFloat(caDem) : 0;
                hasData = true;
            }
        } else {
            const caSang = formData.get(`medCaSang_${id}`);
            const caChieu = formData.get(`medCaChieu_${id}`);
            const caToi = formData.get(`medCaToi_${id}`);
            // Chấp nhận cả giá trị 0, chỉ bỏ qua khi rỗng hoặc undefined
            if ((caSang !== '' && caSang !== null) || (caChieu !== '' && caChieu !== null) || (caToi !== '' && caToi !== null)) {
                medData.caSang = caSang !== '' && caSang !== null ? parseFloat(caSang) : 0;
                medData.caChieu = caChieu !== '' && caChieu !== null ? parseFloat(caChieu) : 0;
                medData.caToi = caToi !== '' && caToi !== null ? parseFloat(caToi) : 0;
                hasData = true;
            }
        }
        
        if (hasData && name && unit) {
            medications.push(medData);
        }
    });
    
    // Tạo record bàn giao
    const record = {
        id: Date.now(),
        date: date,
        shiftType: shiftType,
        handoverPerson: handoverPerson || '',
        receivePerson: receivePerson || '',
        notes: notes || '',
        medications: medications,
        tab: currentTab,
        shiftCount: currentShiftCount,
        createdAt: new Date().toISOString(),
        lockUntil: calculateLockTime(date, shiftType, currentShiftCount)
    };
    
    // Lưu vào mảng
    handoverRecords.unshift(record);
    
    // Hiển thị loading popup
    showLoadingPopup(true);
    
    // Lưu vào localStorage
    saveToLocalStorage();
    
    // Gửi dữ liệu lên Google Sheets (await để đợi kết quả)
    await saveToGoogleSheets(record, existingRecord);
    
    // Khóa form sau khi lưu thành công
    lockForm(record);
    console.log('✅ Dữ liệu đã lưu, form đã bị khóa 24 giờ');
}

// Lưu vào localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem('medicationHandover', JSON.stringify(handoverRecords));
    } catch (error) {
        console.error('Lỗi khi lưu dữ liệu:', error);
    }
}

// Gửi dữ liệu lên Google Sheets
async function saveToGoogleSheets(record, existingRecord = false) {
    try {
        console.log('📤 Đang gửi dữ liệu lên Google Sheets...');
        console.log('📍 URL:', GOOGLE_SCRIPT_URL);
        console.log('📦 Record:', record);
        
        const payload = buildSavePayload(record);
        
        console.log('📨 Payload sẽ gửi:', JSON.stringify(payload, null, 2));
        
        // Thử gửi request
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain', // Đổi sang text/plain để tránh preflight
            },
            body: JSON.stringify(payload),
            redirect: 'follow'
        });
        
        console.log('📡 Response status:', response.status);
        console.log('📡 Response type:', response.type);
        console.log('📡 Response headers:', response.headers);
        
        // Đọc response dưới dạng text trước
        const textResponse = await response.text();
        console.log('📄 Response text:', textResponse);
        
        // Thử parse JSON
        let result;
        try {
            result = JSON.parse(textResponse);
            console.log('✅ Parsed result:', result);
            
            // Kiểm tra kết quả
            if (result && result.success) {
                console.log('✅ Đã lưu thành công lên Google Sheets');
                showLoadingPopup(false, true); // Hiển "Lưu thành công" rồi tự đóng
            } else if (result && !result.success) {
                console.error('❌ Lỗi từ Google Sheets:', result.message);
                showLoadingPopup(false, false); // Ẩn loading
                showPopup('Lỗi từ Google Sheets', '❌ ' + (result.message || 'Lỗi không xác định') + '\n\nVui lòng kiểm tra:\n- Sheet "BH2026" có tồn tại?\n- Apps Script có quyền truy cập?');
            } else {
                console.warn('⚠️ Response không có trường success:', result);
                showLoadingPopup(false, false);
                showPopup('Cảnh báo', 'Response không rõ ràng. Vui lòng kiểm tra Google Sheet để xác nhận dữ liệu.');
            }
        } catch (e) {
            console.log('⚠️ Không thể parse JSON:', e.message);
            console.log('⚠️ Response text:', textResponse);
            
            // Kiểm tra xem có phải HTML error không
            showLoadingPopup(false, false);
            if (textResponse.includes('<!DOCTYPE') || textResponse.includes('<html')) {
                showPopup('Lỗi', '❌ Nhận được HTML thay vì JSON.\n\nNguyên nhân:\n- URL Apps Script sai\n- Apps Script chưa deploy\n- Lỗi trong Apps Script code\n\nVui lòng kiểm tra URL và deploy lại.');
            } else if (textResponse && textResponse.length > 0) {
                showPopup('Đã gửi', '📤 Request đã gửi đến Google Sheets.\n\nResponse: ' + textResponse.substring(0, 100) + '\n\nVui lòng kiểm tra sheet để xác nhận.');
            } else {
                showPopup('Lỗi', '❌ Không nhận được response từ Google Sheets.\n\nVui lòng kiểm tra:\n- Kết nối internet\n- URL Apps Script\n- Deploy Apps Script');
            }
        }
        
    } catch (error) {
        console.error('❌ Lỗi khi gửi dữ liệu lên Google Sheets:', error);
        console.error('❌ Chi tiết lỗi:', error.stack);
        
        showLoadingPopup(false, false);
        
        // Hiển thị thông báo lỗi chi tiết
        let errorMsg = 'Lỗi: ' + error.message;
        if (error.message.includes('Failed to fetch')) {
            errorMsg = 'Không thể kết nối đến Google Sheets.\n\nNguyên nhân có thể:\n- Kiểm tra kết nối internet\n- URL Google Apps Script không đúng\n- Apps Script chưa được deploy';
        }
        showPopup('Lỗi kết nối', errorMsg);
    }
}

// Đồng bộ dữ liệu từ Google Sheets về web
async function syncFromGoogleSheets(date, shiftType) {
    try {
        console.log('🔄 Đang đồng bộ dữ liệu từ Google Sheets...');
        console.log('📅 Ngày:', date, '| Ca:', shiftType);
        
        // LUÔN sử dụng BH2026 cho mọi module
        const sheetName = 'BH2026';
        const url = `${GOOGLE_SCRIPT_URL}?action=sync&sheet=${encodeURIComponent(sheetName)}&date=${date}&tab=${currentTab}`;
        console.log('🔗 Sync URL:', url);
        
        const response = await fetch(url, { method: 'GET' });
        const result = await response.json();

        if (result.success && result.medications) {
            console.log('✅ Nhận được dữ liệu từ Google Sheets');
            console.log('📦 Số lượng thuốc:', result.medications.length);
            console.log('📋 Data morning:', result.morning);
            console.log('📋 Data night:', result.night);
            
            updateFormWithSheetData(result.medications, shiftType);
            
            // Cập nhật thông tin người giao/nhận theo ca
            if (shiftType === 'morning') {
                console.log('📋 Xử lý thông tin ca SÁNG');
                if (result.morning) {
                    if (result.morning.notes) {
                        document.getElementById('notes').value = result.morning.notes;
                        console.log('  ✅ Ghi chú:', result.morning.notes);
                    }
                    if (result.morning.handoverPerson) {
                        document.getElementById('handoverPerson').value = result.morning.handoverPerson;
                        console.log('  ✅ Người giao:', result.morning.handoverPerson);
                    }
                    if (result.morning.receivePerson) {
                        document.getElementById('receivePerson').value = result.morning.receivePerson;
                        console.log('  ✅ Người nhận:', result.morning.receivePerson);
                    }
                } else {
                    console.log('  ⚠️ Không có dữ liệu morning');
                }
            } else if (shiftType === 'night') {
                console.log('📋 Xử lý thông tin ca ĐÊM');
                if (result.night) {
                    if (result.night.notes) {
                        document.getElementById('notes').value = result.night.notes;
                        console.log('  ✅ Ghi chú:', result.night.notes);
                    }
                    if (result.night.handoverPerson) {
                        document.getElementById('handoverPerson').value = result.night.handoverPerson;
                        console.log('  ✅ Người giao:', result.night.handoverPerson);
                    }
                    if (result.night.receivePerson) {
                        document.getElementById('receivePerson').value = result.night.receivePerson;
                        console.log('  ✅ Người nhận:', result.night.receivePerson);
                    }
                } else {
                    console.log('  ⚠️ Không có dữ liệu night');
                }
            }
            
            console.log('✅ Đã đồng bộ dữ liệu từ Google Sheets thành công');
        } else {
            console.log('ℹ️ Chưa có dữ liệu trên Google Sheets cho ngày này');
        }
    } catch (error) {
        console.error('❌ Lỗi khi đồng bộ từ Google Sheets:', error);
    }
}

// Cập nhật form với dữ liệu từ Google Sheets
function updateFormWithSheetData(medications, shiftType) {
    const tableId = currentTab === 'ccbl' ? 'medicationList' : 'medicationListDVYT';
    const rows = document.querySelectorAll(`#${tableId} tr:not(.category-header)`);
    
    rows.forEach(row => {
        const id = row.dataset.id;
        const medName = row.dataset.medname;
        
        const sheetMed = medications.find(m => m.name === medName);
        
        if (sheetMed) {
            // SL hiện có
            const hienCoInput = row.querySelector(`input[name="medSlHienCo_${id}"]`);
            const hienCoValue = sheetMed.slHienCo ?? sheetMed.hienCo ?? sheetMed.caSang;
            if (hienCoInput && hienCoValue > 0) {
                hienCoInput.value = hienCoValue;
            }
            // Ca ngày
            const caSangInput = row.querySelector(`input[name="medCaSang_${id}"]`);
            if (caSangInput && sheetMed.caSang > 0) {
                caSangInput.value = sheetMed.caSang;
            }
            // Ca chiều (nếu có)
            const caChieuInput = row.querySelector(`input[name="medCaChieu_${id}"]`);
            if (caChieuInput && sheetMed.caChieu > 0) {
                caChieuInput.value = sheetMed.caChieu;
            }
            // Ca tối/đêm
            const caDemInput = row.querySelector(`input[name="medCaDem_${id}"]`);
            if (caDemInput && sheetMed.caDem > 0) {
                caDemInput.value = sheetMed.caDem;
            }
            const caToiInput = row.querySelector(`input[name="medCaToi_${id}"]`);
            if (caToiInput && sheetMed.caToi > 0) {
                caToiInput.value = sheetMed.caToi;
            }
            // ĐÊM (ngày trước): sẽ cập nhật bằng hàm riêng
        }
    });
    
    // Cập nhật highlight listeners sau khi cập nhật dữ liệu
    setTimeout(() => addHighlightListeners(), 100);
}

// Lấy ĐÊM (ngày trước) từ Google Sheets và gán vào cột ĐÊM (ngày trước)
async function fillPreviousNightFromSheet(currentDate) {
    try {
        const prevDate = new Date(currentDate);
        prevDate.setDate(prevDate.getDate() - 1);
        const prevDateStr = prevDate.toISOString().split('T')[0];
        const url = `${GOOGLE_SCRIPT_URL}?action=sync&sheet=${encodeURIComponent(SHEET_META.sheetName)}&date=${prevDateStr}&tab=${currentTab}`;
        const response = await fetch(url, { method: 'GET' });
        const result = await response.json();
        if (!result.success || !result.medications) return;
        const tableId = currentTab === 'ccbl' ? 'medicationList' : 'medicationListDVYT';
        const rows = document.querySelectorAll(`#${tableId} tr:not(.category-header)`);
        rows.forEach(row => {
            const id = row.dataset.id;
            const medName = row.dataset.medname;
            const sheetMed = result.medications.find(m => m.name === medName);
            if (sheetMed) {
                const prevNight = sheetMed.caDem ?? sheetMed.night ?? sheetMed.caToi ?? 0;
                const demTruocInput = row.querySelector(`input[name="medSlTong_${id}"]`);
                if (demTruocInput && prevNight > 0) {
                    demTruocInput.value = prevNight;
                }
            }
        });
    } catch (error) {
        console.error('Lỗi khi lấy ĐÊM (ngày trước):', error);
    }
}

// Tự động đồng bộ định kỳ (mỗi 30 giây)
let syncInterval = null;

function startAutoSync() {
    // Dừng interval cũ nếu có
    if (syncInterval) {
        clearInterval(syncInterval);
    }
    
    // Tạo interval mới
    syncInterval = setInterval(() => {
        const date = document.getElementById('shiftDate').value;
        const shiftType = document.getElementById('shiftType').value;
        
        if (date && shiftType) {
            syncFromGoogleSheets(date, shiftType);
        }
    }, 30000); // 30 giây
}

function stopAutoSync() {
    if (syncInterval) {
        clearInterval(syncInterval);
        syncInterval = null;
    }
}

// Load từ localStorage
function loadFromLocalStorage() {
    try {
        const data = localStorage.getItem('medicationHandover');
        if (data) {
            handoverRecords = JSON.parse(data);
        }
    } catch (error) {
        console.error('Lỗi khi đọc dữ liệu:', error);
    }
}

// Hàm xóa dữ liệu
function handleClearData() {
    console.log('🗑️ Nút Xóa dữ liệu được bấm');
    
    // Kiểm tra 3 trường bắt buộc
    const shiftCount = document.getElementById('shiftCount').value;
    const date = document.getElementById('shiftDate').value;
    const shiftType = document.getElementById('shiftType').value;
    
    if (!shiftCount || !date || !shiftType) {
        showPopup('Thiếu thông tin', '❌ Vui lòng chọn đầy đủ:\n\n• Số ca\n• Ngày\n• Ca trực\n\nđể có thể xóa dữ liệu.');
        return;
    }
    
    // Xác nhận xóa
    if (!confirm(`⚠️ BẠN CHẮC CHẮN MUỐN XÓA TẤT CẢ DỮ LIỆU?\n\nNgày: ${date}\nCa: ${shiftType === 'morning' ? 'Sáng' : shiftType === 'afternoon' ? 'Chiều' : 'Đêm'}\n\nHành động này KHÔNG THỂ HOÀN TÁC!`)) {
        return;
    }
    
    // Xóa dữ liệu người giao/nhận/ghi chú
    document.getElementById('handoverPerson').value = '';
    document.getElementById('receivePerson').value = '';
    document.getElementById('notes').value = '';
    
    // Xóa dữ liệu thuốc theo ca trực
    const tableId = currentTab === 'ccbl' ? 'medicationList' : 'medicationListDVYT';
    const rows = document.querySelectorAll(`#${tableId} tr:not(.category-header)`);
    
    rows.forEach(row => {
        const id = row.dataset.id;
        
        if (shiftType === 'morning') {
            // Xóa cột NGÀY
            const caSangInput = row.querySelector(`input[name="medCaSang_${id}"]`);
            if (caSangInput) caSangInput.value = '';
        } else if (shiftType === 'afternoon' || shiftType === 'evening') {
            // Xóa cột CHIỀU
            const caChieuInput = row.querySelector(`input[name="medCaChieu_${id}"]`);
            if (caChieuInput) caChieuInput.value = '';
        } else if (shiftType === 'night') {
            // Xóa cột ĐÊM/TỐI
            const caDemInput = row.querySelector(`input[name="medCaDem_${id}"]`) || row.querySelector(`input[name="medCaToi_${id}"]`);
            if (caDemInput) caDemInput.value = '';
        }
    });
    
    // Xóa khỏi localStorage và Google Sheets
    const index = handoverRecords.findIndex(r => 
        r.date === date && r.shiftType === shiftType && r.tab === currentTab
    );
    if (index !== -1) {
        handoverRecords.splice(index, 1);
        saveToLocalStorage();
    }
    
    // Mở khóa form
    unlockForm();
    
    showPopup('Thành công', '✅ Đã xóa toàn bộ dữ liệu!');
    console.log('✅ Đã xóa dữ liệu');
}

// Hàm làm tươi (đồng bộ dữ liệu)
async function handleRefreshData() {
    console.log('🔄 Nút Làm tươi được bấm');
    
    const date = document.getElementById('shiftDate').value;
    const shiftType = document.getElementById('shiftType').value;
    
    if (!date || !shiftType) {
        showPopup('Thiếu thông tin', '❌ Vui lòng chọn Ngày và Ca trực để làm tươi dữ liệu.');
        return;
    }
    
    showLoadingPopup(true);
    
    try {
        // Đồng bộ từ Google Sheets về web
        await syncFromGoogleSheets(date, shiftType);
        
        showLoadingPopup(false, true);
        setTimeout(() => {
            showPopup('Thành công', '✅ Đã làm tươi dữ liệu từ Google Sheets!');
        }, 500);
        
        console.log('✅ Đã làm tươi dữ liệu');
    } catch (error) {
        console.error('❌ Lỗi khi làm tươi:', error);
        showLoadingPopup(false, false);
        showPopup('Lỗi', '❌ Không thể làm tươi dữ liệu: ' + error.message);
    }
}

// Hàm chỉnh sửa với mật khẩu
function handleEditWithPassword() {
    console.log('✏️ Nút Chỉnh sửa được bấm');
    
    // Nếu form chưa bị khóa, không cần mật khẩu
    if (!isFormLocked) {
        showPopup('Thông báo', 'ℹ️ Form chưa bị khóa, bạn có thể chỉnh sửa tự do.');
        return;
    }
    
    // Hiển thị popup nhập mật khẩu
    const username = prompt('👤 Nhập tên đăng nhập:');
    
    if (username === null) return; // Người dùng hủy
    
    if (username !== 'admin') {
        showPopup('Lỗi đăng nhập', '❌ Tên đăng nhập không đúng!');
        return;
    }
    
    const password = prompt('🔐 Nhập mật khẩu:');
    
    if (password === null) return; // Người dùng hủy
    
    if (password === '12345611212') {
        unlockForm();
        showPopup('Thành công', '✅ Xác thực thành công!\n\nForm đã được mở khóa, bạn có thể chỉnh sửa.');
        console.log('✅ Admin đã mở khóa form');
    } else {
        showPopup('Lỗi đăng nhập', '❌ Mật khẩu không đúng!');
        console.log('❌ Mật khẩu sai');
    }
}

// ========== CHỨC NĂNG CẤP THUỐC ==========

// Mở popup cấp thuốc
function openDeliverMedicationPopup() {
    console.log('💊 Mở popup cấp thuốc');
    
    const popup = document.getElementById('deliverMedicationPopup');
    if (!popup) {
        console.error('❌ Không tìm thấy popup');
        return;
    }
    
    // Set ngày hiện tại
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('deliverDate').value = today;
    
    // Render bảng thuốc
    renderDeliverMedicationTable();
    
    // Hiển popup
    popup.style.display = 'flex';
    
    // Event listener cho nút Hủy
    const cancelBtn = document.getElementById('cancelDeliverBtn');
    if (cancelBtn) {
        cancelBtn.onclick = () => {
            popup.style.display = 'none';
        };
    }
    
    // Event listener cho form submit
    const form = document.getElementById('deliverMedicationForm');
    if (form) {
        form.onsubmit = handleDeliverMedicationSubmit;
    }
}

// Render bảng thuốc trong popup cấp thuốc
function renderDeliverMedicationTable() {
    const tbody = document.getElementById('deliverMedicationList');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    let currentCategory = '';
    
    medicationDatabase.forEach((med, index) => {
        // Thêm header cho category mới
        if (med.category !== currentCategory) {
            currentCategory = med.category;
            const headerRow = document.createElement('tr');
            headerRow.className = 'category-header';
            headerRow.innerHTML = `<td colspan="3" style="background: #22a045; color: white; font-weight: bold; padding: 8px;">${currentCategory}</td>`;
            tbody.appendChild(headerRow);
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${med.name}</td>
            <td style="text-align: center;">${med.unit}</td>
            <td>
                <input type="number" 
                       name="deliverQty_${index}" 
                       data-medname="${med.name}"
                       min="0" 
                       step="1" 
                       value="0"
                       style="width: 100%; text-align: center;">
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Xử lý submit form cấp thuốc
async function handleDeliverMedicationSubmit(e) {
    e.preventDefault();
    
    console.log('💊 Submit form cấp thuốc');
    
    const date = document.getElementById('deliverDate').value;
    const shiftType = document.getElementById('deliverShiftType').value;
    const handoverPerson = document.getElementById('deliverHandoverPerson').value;
    const receivePerson = document.getElementById('deliverReceivePerson').value;
    
    if (!date || !shiftType || !handoverPerson || !receivePerson) {
        showPopup('Thiếu thông tin', '❌ Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    // Thu thập dữ liệu thuốc cấp
    const medications = [];
    medicationDatabase.forEach((med, index) => {
        const input = document.querySelector(`input[name="deliverQty_${index}"]`);
        if (input && input.value && parseFloat(input.value) > 0) {
            medications.push({
                name: med.name,
                unit: med.unit,
                quantity: parseFloat(input.value)
            });
        }
    });
    
    if (medications.length === 0) {
        showPopup('Chưa nhập thuốc', '❌ Vui lòng nhập ít nhất 1 loại thuốc cần cấp!');
        return;
    }
    
    const deliveryRecord = {
        id: Date.now(),
        date: date,
        shiftType: shiftType,
        handoverPerson: handoverPerson,
        receivePerson: receivePerson,
        medications: medications,
        createdAt: new Date().toISOString()
    };
    
    // Lưu vào mảng
    deliveryRecords.push(deliveryRecord);
    
    // Lưu vào localStorage
    saveDeliveryToLocalStorage();
    
    // Hiển loading
    showLoadingPopup(true);
    
    // Gửi lên Google Sheets
    await saveDeliveryToGoogleSheets(deliveryRecord);
    
    // Đóng popup
    document.getElementById('deliverMedicationPopup').style.display = 'none';
    
    // Cập nhật hiển thị trên form chính
    updateMainFormWithDelivery(date, shiftType, medications);
    
    showPopup('Thành công', `✅ Đã cấp ${medications.length} loại thuốc!`);
    console.log('✅ Đã lưu dữ liệu cấp thuốc');
}

// Lưu dữ liệu cấp thuốc vào localStorage
function saveDeliveryToLocalStorage() {
    try {
        localStorage.setItem('medicationDelivery', JSON.stringify(deliveryRecords));
    } catch (error) {
        console.error('Lỗi khi lưu dữ liệu cấp thuốc:', error);
    }
}

// Load dữ liệu cấp thuốc từ localStorage
function loadDeliveryFromLocalStorage() {
    try {
        const data = localStorage.getItem('medicationDelivery');
        if (data) {
            deliveryRecords = JSON.parse(data);
        }
    } catch (error) {
        console.error('Lỗi khi đọc dữ liệu cấp thuốc:', error);
    }
}

// Gửi dữ liệu cấp thuốc lên Google Sheets
async function saveDeliveryToGoogleSheets(deliveryRecord) {
    try {
        console.log('📤 Đang gửi dữ liệu cấp thuốc lên Google Sheets...');
        
        const payload = {
            action: 'deliver',
            sheetName: 'BH2026',
            date: deliveryRecord.date,
            shiftType: deliveryRecord.shiftType,
            handoverPerson: deliveryRecord.handoverPerson,
            receivePerson: deliveryRecord.receivePerson,
            medications: deliveryRecord.medications.map(m => ({
                name: m.name,
                quantity: m.quantity,
                row: SHEET_META.medRowMap[m.name]
            }))
        };
        
        console.log('📨 Payload cấp thuốc:', JSON.stringify(payload, null, 2));
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(payload),
            redirect: 'follow'
        });
        
        const textResponse = await response.text();
        console.log('📝 Response:', textResponse);
        
        const result = JSON.parse(textResponse);
        
        if (result && result.success) {
            console.log('✅ Đã lưu cấp thuốc thành công lên Google Sheets');
            showLoadingPopup(false, true);
        } else {
            console.error('❌ Lỗi từ Google Sheets:', result.message);
            showLoadingPopup(false, false);
            showPopup('Lỗi', '❌ ' + (result.message || 'Lỗi không xác định'));
        }
    } catch (error) {
        console.error('❌ Lỗi khi gửi dữ liệu cấp thuốc:', error);
        showLoadingPopup(false, false);
        showPopup('Lỗi kết nối', '❌ Không thể kết nối đến Google Sheets: ' + error.message);
    }
}

// Cập nhật hiển thị trên form chính với dữ liệu cấp thuốc
function updateMainFormWithDelivery(date, shiftType, medications) {
    const tableId = currentTab === 'ccbl' ? 'medicationList' : 'medicationListDVYT';
    const rows = document.querySelectorAll(`#${tableId} tr:not(.category-header)`);
    
    rows.forEach(row => {
        const medName = row.dataset.medname;
        const id = row.dataset.id;
        
        const deliveredMed = medications.find(m => m.name === medName);
        if (deliveredMed) {
            // Tìm input tương ứng với ca trực
            let input;
            if (shiftType === 'morning') {
                input = row.querySelector(`input[name="medCaSang_${id}"]`);
            } else if (shiftType === 'afternoon' || shiftType === 'evening') {
                input = row.querySelector(`input[name="medCaChieu_${id}"]`);
            } else if (shiftType === 'night') {
                input = row.querySelector(`input[name="medCaDem_${id}"]`) || row.querySelector(`input[name="medCaToi_${id}"]`);
            }
            
            if (input) {
                // Lưu số lượng cấp vào data attribute
                input.dataset.delivered = deliveredMed.quantity;
                
                // Đổi màu nền thành đỏ nhạt
                input.style.backgroundColor = '#ffe6e6';
                
                // Cập nhật placeholder
                input.placeholder = `+${deliveredMed.quantity}`;
                
                // Nếu đã có giá trị, hiển thị dạng "X +Y"
                if (input.value) {
                    const currentValue = parseFloat(input.value) || 0;
                    input.value = currentValue; // Giữ nguyên giá trị hiện tại
                }
            }
        }
    });
}
// Xử lý menu chính
function setupMainMenu() {
    // Tất cả submenu hiển thị mặc định - không cần đóng/mở
    // document.querySelectorAll('.menu-item.expandable').forEach(item => {
    //     item.addEventListener('click', function(e) {
    //         e.stopPropagation();
    //         
    //         // Toggle active state
    //         this.classList.toggle('expanded');
    //         
    //         // Toggle submenu
    //         const submenu = this.nextElementSibling;
    //         if (submenu && submenu.classList.contains('submenu')) {
    //             submenu.classList.toggle('open');
    //         }
    //     });
    // });

    // Xử lý click vào các mục menu chính (không có submenu)
    document.querySelectorAll('.menu-item:not(.expandable)').forEach(item => {
        item.addEventListener('click', function() {
            const module = this.getAttribute('data-module');
            handleModuleSelection(module);
        });
    });

    // Xử lý click vào submenu items
    document.querySelectorAll('.submenu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const module = this.getAttribute('data-module');
            handleModuleSelection(module);
        });
    });
}

// Xử lý khi chọn module
function handleModuleSelection(module) {
    console.log('Selected module:', module);
    
    switch(module) {
        case 'chamcong':
            alert('🚧 Chức năng CHẤM CÔNG đang được phát triển');
            break;
            
        case 'thuoc-baohiem':
            currentTab = 'ccbl';
            openMedicationForm('ccbl');
            break;
            
        case 'thuoc-dichvu':
            currentTab = 'dvyt';
            openMedicationForm('dvyt');
            break;
            
        case 'giaonhan-ttb':
            alert('🚧 Chức năng GIAO NHẬN TRANG THIẾT BỊ - VẬT TƯ đang được phát triển');
            break;
            
        case 'suachua-maymoc':
            alert('🚧 Chức năng SỬA CHỮA MÁY MÓC đang được phát triển');
            break;
            
        case 'phieumuon-ttb':
            alert('🚧 Chức năng PHIẾU MƯỢN TRANG THIẾT BỊ đang được phát triển');
            break;
            
        case 'hap-guidungcu':
            alert('🚧 Chức năng HẤP – GỬI DỤNG CỤ (C12) đang được phát triển');
            break;
            
        case 'suco-ykhoa':
            alert('🚧 Chức năng SỰ CỐ Y KHOA: PHẦN A đang được phát triển');
            break;
            
        case 'thanhcong-thatbai':
            alert('🚧 Chức năng THÀNH CÔNG – THẤT BẠI đang được phát triển');
            break;
            
        case 'baodong-do':
            alert('🚧 Chức năng BÁO ĐỘNG ĐỎ đang được phát triển');
            break;
            
        case 'binh-benhan':
            alert('🚧 Chức năng BÌNH BỆNH ÁN đang được phát triển');
            break;
            
        default:
            alert('🚧 Chức năng đang được phát triển');
    }
}

// Mở form quản lý thuốc
function openMedicationForm(type) {
    // Ẩn menu chính
    document.getElementById('mainMenu').classList.add('hidden');
    
    // Hiện form chính
    document.getElementById('mainForm').classList.remove('hidden');
    
    // Cập nhật title
    if (type === 'ccbl') {
        document.getElementById('formTitle').textContent = 'TỦ THUỐC BẢO HIỂM C1-3a';
        document.getElementById('formSubtitle').textContent = '';
        document.getElementById('ccblSection').classList.remove('hidden');
        document.getElementById('shiftCountGroup').classList.remove('hidden');
        renderMedicationTable();
    } else {
        document.getElementById('formTitle').textContent = '📋 Bàn Giao Thuốc - DỊCH VỤ';
        document.getElementById('formSubtitle').textContent = 'C1-3a Sổ giao nhận thuốc DVYT';
        document.getElementById('ccblSection').classList.add('hidden');
        document.getElementById('shiftCountGroup').classList.add('hidden');
        renderMedicationTableDVYT();
    }
    
    // Auto đồng bộ dữ liệu từ Google Sheet khi mở form
    setTimeout(() => {
        const date = document.getElementById('shiftDate').value;
        const shiftType = document.getElementById('shiftType').value;
        
        if (date && shiftType) {
            console.log('🔄 Auto sync khi mở form - Date:', date, 'Shift:', shiftType);
            syncFromGoogleSheets(date, shiftType);
            fillPreviousNightFromSheet(date);
            // Áp dụng disable cột theo ca
            disableShiftColumns(shiftType);
        }
        
        handleDateShiftChange();
    }, 100);
}

// Chuyển chỉ số cột (1-based) sang chữ cái (A, B, ..., AA)
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

// Lấy các cột theo ngày (có/không có cột GIAO)
function getDateColumns(dateStr) {
    const baseDate = new Date(SHEET_META.baseDate);
    const targetDate = new Date(dateStr);
    const diffDays = Math.floor((targetDate - baseDate) / (24 * 60 * 60 * 1000));
    const blockSize = 2; // ĐÊM-NGÀY
    const startColIndex = SHEET_META.baseColIndex + diffDays * blockSize;
    
    const result = {
        giao: null,
        night: colIndexToLetter(startColIndex), // ĐÊM đứng trước
        day: colIndexToLetter(startColIndex + 1) // NGÀY đứng sau
    };
    
    console.log(`📅 getDateColumns for ${dateStr}:`);
    console.log(`   Số ngày từ ${SHEET_META.baseDate}: ${diffDays}`);
    console.log(`   baseColIndex: ${SHEET_META.baseColIndex}`);
    console.log(`   blockSize: ${blockSize}`);
    console.log(`   startColIndex: ${startColIndex}`);
    console.log(`   Cột ĐÊM: ${result.night}`);
    console.log(`   Cột NGÀY: ${result.day}`);
    
    return result;
}

// Tạo payload đầy đủ để gửi lên Google Apps Script
function buildSavePayload(record) {
    console.log('🔧 buildSavePayload - record:', record);
    console.log('🔧 currentTab:', currentTab);
    
    // LUÔN sử dụng BH2026 cho mọi module
    const sheetName = 'BH2026';
    console.log('📊 Sheet name sẽ ghi:', sheetName);
    
    const dateCols = getDateColumns(record.date);
    console.log('🔧 dateCols:', dateCols);
    
    const medsPayload = record.medications.map(med => {
        const row = SHEET_META.medRowMap[med.name];
        if (!row) {
            console.warn(`⚠️ Không tìm thấy row mapping cho thuốc: ${med.name}`);
        }
        const medData = {
            name: med.name,
            row: row,
            coSo: parseFloat(med.coSo) || 0,
            unit: med.unit || '',
            slHienCo: parseFloat(med.slHienCo) || parseFloat(med.coSo) || 0,
            // Google Apps Script kỳ vọng: giao, day, night
            giao: parseFloat(med.caGiao) || 0,
            day: parseFloat(med.caSang) || parseFloat(med.caChieu) || 0,
            night: parseFloat(med.caDem) || parseFloat(med.caToi) || 0
        };
        console.log(`  📦 ${med.name}:`, medData);
        return medData;
    });
    
    const payload = {
        action: 'save',
        sheetName: sheetName, // Luôn là BH2026
        date: record.date,
        shiftType: record.shiftType,
        shiftCount: record.shiftCount,
        handoverPerson: record.handoverPerson || '',
        receivePerson: record.receivePerson || '',
        notes: record.notes || '',
        medications: medsPayload
    };
    
    console.log('📤 Final payload:', payload);
    return payload;
}