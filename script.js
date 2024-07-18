function calculatorBMI() {
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value) / 100;

    if (isNaN(berat) || isNaN(tinggi)){
        document.getElementById('result').textContent = 'Masukan berat dan TInggi yang valid';
        return;
    }
    const bmi = berat / (tinggi * tinggi);
    const bmia = berat / (tinggi * tinggi);
    const bmip = berat / (tinggi * tinggi);
    const bmir1 = berat / (tinggi * tinggi);
    const bmir2 = berat / (tinggi * tinggi);
    const bmir3 = berat / (tinggi * tinggi);
    const bmir4 = berat / (tinggi * tinggi);
    const bmir5 = berat / (tinggi * tinggi);
    const category = getBMICategory(bmi);
    const antara = getBMIAntara(bmia);
    const paragraf = getBMIParagraf(bmip);
    const resiko1 = getBMIResiko1(bmir1);
    const resiko2 = getBMIResiko2(bmir2);
    const resiko3 = getBMIResiko3(bmir3);
    const resiko4 = getBMIResiko4(bmir4);
    const resiko5 = getBMIResiko5(bmir5);

    document.getElementById('result').innerHTML = `<span>${bmi.toFixed(2)}</span>`;
    document.getElementById('category').textContent = `kategori berat badan: ${category}`;
    document.getElementById('antara').textContent = `Keterangan: ${antara}`;
    document.getElementById('paragraf').textContent = `${paragraf}`;
    document.getElementById('resiko1').textContent = `${resiko1}`;
    document.getElementById('resiko2').textContent = `${resiko2}`;
    document.getElementById('resiko3').textContent = `${resiko3}`;
    document.getElementById('resiko4').textContent = `${resiko4}`;
    document.getElementById('resiko5').textContent = `${resiko5}`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Kurang';
    if (bmi >=18.5 && bmi <= 24.9) return 'Normal';
    if (bmi >= 25 && bmi <= 29.9) return 'Gemuk';
    return 'Obesitas';  
}
function getBMIAntara(bmia) {
    if (bmia < 18.5) return 'BMI Anda dibawah 18.5';
    if (bmia >=18.5 && bmia <= 24.9) return 'BMI Anda di antara 18.5 dan 24.9';
    if (bmia >= 25 && bmia < 29.9) return 'BMI Anda di antaea 25 dan 29.9';
    return 'BMI Anda di atas 29.9';
}

function getBMIParagraf(bmip) {
    if (bmip < 18.5) return 'Anda berada dalam kategori Underweight atau Berat Badan Kurang. Cara tebaik untuk menaikan berat badan anda adalah makan lebih sering, makan sebelum tidur, pilih makanan berprotein, perbanyak minum susu dan air putih, dan tetap konsisten. Jika BMI anda berada dalam kategori ini maka anda untuk menambah berat badan hingga normal.';
    if (bmip >=18.5 && bmip <= 24.9) return 'Anda berada dalam kategori Ideal atau Berat Badan Normal. Cara terbaik untuk mempertahankan berat badan anda adalah olahraga teratur, konsumsi Makanan berprotein, cukupi kebutuhan cairan tubuh, tidur yang cukup, dan mengendalikan Stres. Jika BMI anda berada dalam kategori ini maka anda untuk mempertahankan berat badan agar tidak turun dan naik.';
    if (bmip >= 25 && bmip < 29.9) return 'Anda berada dalam ketegori Overweight atua Berat Badan Berlebihan. cara terbaik untuk menurunkan berat badan adalah Mengatur Pola makan, Aktifitas Fisik, dan Tidur yang cukup. Jika BMI anda berada dalam Kategori ini maka anda untuk menurunkan berat badan hingga normal.';
    return 'Anda berada dalam kategori Obesity atau Obesitas. cara terbaik untuk menurunkan berat badan adalah Menentukan Program Diet yang Aman, Mengurangi Jumlah Kalori, Kurangi Asupan Karbohidrat, Konsumsi Buah dan Sayuran, dan Olahraga Secara Teratur. jika BMI anda dalam kategori ini maka anda Harus menurunkan berat badan anda hingga normal.';
}
// Contoh penggunaan:


// Contoh penggunaan:

// function getBMIParagraf(bmip) {
//     if (bmip < 18.5) return ' kurusHasil\nBMI di antara 18,5 dan 24,9.\n Anda berada dalam kategori Ideal atau berat badan Normal. <br>Tubuh anda saat ini normal dan cara menjaga untuk seterunnya adalah Rutin Berolaraga, Sarapan, komsumsi makanan yang berprotein, tidur yang cukup. <br>jika BMI anda berada dalam kategori ini maka anda harus pempertahankan barat badan normal.';
//     if (bmip < 25) return ' normal Hasil BMI di anatara 25,0 dan 29,9 <br><br>Anda berada dalam kategori overweight atau berat badan berlebihan. <br>cara tarbaik untuk menurunkan berat badan adalah Mengatur Pola makan, Aktivitas Fisik, dan Tidur yang cukup. <br>jika BMI anda berada dalam kategori ini maka anda untuk menurunakn barat badan hingga normal.';
//     if (bmip < 30) return 'Hasil BMI di antara 30';
//     return 'Hasil BMI di atas 30 <br><br>Anda berada dalam';

// }
function getBMIResiko1(bmir1) {
    if (bmir1 < 18.5) return 'Penurunan Kekuatan Otot';
    if (bmir1 < 25) return 'Risiko Penyakit Jantung Rendah';
    if (bmir1 < 30) return 'Nyeri Otot dan Sendi (Arthritis)';
    return 'Penyakit Ginjal ';
}
function getBMIResiko2(bmir2) {
    if (bmir2 < 18.5) return 'Gangguan Jantung';
    if (bmir2 < 25) return 'Resiko Diabetes Tipe 2 Lebih Rendah';
    if (bmir2 < 30) return 'Gangguan Metabolisme';
    return 'Diabetes';
}
function getBMIResiko3(bmir3) {
    if (bmir3 < 18.5) return 'Kekebalan yang Lebih Rendah';
    if (bmir3 < 25) return 'Kesehatan Tulang yang Lebih Baik';
    if (bmir3 < 30) return 'Gangguan Pernapasan:';
    return 'Hipertensi';
}
function getBMIResiko4(bmir4) {
    if (bmir4 < 18.5) return 'Gangguan Kesuburan';
    if (bmir4 < 25) return 'Sistem Kekebalan Tubuh yang Optimal';
    if (bmir4 < 30) return 'Penyakit Jantung dan Pembuluh Darah';
    return 'Dislipidemia';
}
function getBMIResiko5(bmir5) {
    if (bmir5 < 18.5) return 'Masalah Kesehatan Lainnya';
    if (bmir5 < 25) return 'Risiko Kanker yang Lebih Rendah';
    if (bmir5 < 30) return 'Tekanan Darah Tinggi ';
    return 'Penyakit Jantung';
}
