// 1. Deklarasi Variabel
const matematika = 85;
const bahasaInggris = 90;
const ipa = 78;

// Menampilkan nilai input awal
console.log(`Nilai Matematika: ${matematika}`);
console.log(`Nilai Bahasa Inggris: ${bahasaInggris}`);
console.log(`Nilai IPA: ${ipa}`);
console.log("----------------------------------");

// 2. Perhitungan Rata-Rata
const nilaiRataRata = (matematika + bahasaInggris + ipa) / 3;

// 3. Tipe Data dan Output
// Menampilkan hasil perhitungan beserta tipe datanya
console.log(`Nilai Rata-Rata: ${nilaiRataRata}`);
console.log(`Tipe data dari nilaiRataRata adalah: ${typeof nilaiRataRata}`);
console.log("----------------------------------");

// 4. Struktur Kondisi (if-else) untuk menentukan kelulusan
let statusKelulusan; // Dideklarasikan dengan 'let' agar nilainya bisa diubah

if (nilaiRataRata >= 80) {
  statusKelulusan = "Lulus";
} else {
  statusKelulusan = "Tidak Lulus";
}

// Menampilkan status kelulusan
console.log(`Status Kelulusan: ${statusKelulusan} 👍`);