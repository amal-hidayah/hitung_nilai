/**
 * Fungsi untuk menghitung harga akhir sebuah produk setelah diskon 
 * berdasarkan total belanja pelanggan.
 *
 * Aturan Diskon:
 * 1. > Rp1.000.000  -> Diskon 15%
 * 2. > Rp500.000    -> Diskon 10%
 * 3. <= Rp500.000   -> Tidak ada diskon (0%)
 *
 * @param {number} totalBelanja - Total belanja pelanggan dalam Rupiah.
 * @returns {number} Harga akhir setelah diskon.
 */
function hitungHargaAkhir(totalBelanja) {
    let diskonPersen = 0; // Diskon awal adalah 0%

    // Pengecekan dimulai dari batas tertinggi untuk memastikan diskon 15% 
    // didahulukan sebelum diskon 10%.
    if (totalBelanja > 1000000) {
        // Aturan 2: Diskon 15% (0.15)
        diskonPersen = 0.15;
    } else if (totalBelanja > 500000) {
        // Aturan 1: Diskon 10% (0.10)
        diskonPersen = 0.10;
    }
    // Aturan 3: Jika tidak memenuhi kedua kondisi di atas (<= 500.000), diskon tetap 0%.

    // Hitung harga akhir: Harga Akhir = Total Belanja * (1 - Diskon)
    const hargaAkhir = totalBelanja * (1 - diskonPersen);

    // Mengembalikan harga akhir, dibulatkan untuk menghilangkan angka desimal yang tidak perlu
    return Math.round(hargaAkhir);
}

// --- Contoh Penggunaan dan Testing ---

console.log("--- Sistem Perhitungan Diskon Toko Online ---");
console.log(`Fungsi 'hitungHargaAkhir' siap digunakan.\n`);


// Kasus 1: Belanja di bawah atau sama dengan Rp500.000 (0% Diskon)
const belanja1 = 450000;
const hasil1 = hitungHargaAkhir(belanja1);
console.log(`Total Belanja: Rp${belanja1.toLocaleString('id-ID')}`);
console.log(`Harga Akhir  : Rp${hasil1.toLocaleString('id-ID')} (Diskon 0%)`);
console.log(`-----------------------------------`);


// Kasus 2: Belanja di atas Rp500.000, tapi di bawah Rp1.000.000 (10% Diskon)
const belanja2 = 750000;
const hasil2 = hitungHargaAkhir(belanja2);
const diskon2 = belanja2 - hasil2;
console.log(`Total Belanja: Rp${belanja2.toLocaleString('id-ID')}`);
console.log(`Harga Akhir  : Rp${hasil2.toLocaleString('id-ID')} (Diskon 10% / Hemat Rp${diskon2.toLocaleString('id-ID')})`);
console.log(`-----------------------------------`);


// Kasus 3: Belanja di atas Rp1.000.000 (15% Diskon)
const belanja3 = 1200000;
const hasil3 = hitungHargaAkhir(belanja3);
const diskon3 = belanja3 - hasil3;
console.log(`Total Belanja: Rp${belanja3.toLocaleString('id-ID')}`);
console.log(`Harga Akhir  : Rp${hasil3.toLocaleString('id-ID')} (Diskon 15% / Hemat Rp${diskon3.toLocaleString('id-ID')})`);
console.log(`-----------------------------------`);


// Kasus 4: Batas tepat Rp500.000 (0% Diskon)
const belanja4 = 500000;
const hasil4 = hitungHargaAkhir(belanja4);
console.log(`Total Belanja: Rp${belanja4.toLocaleString('id-ID')}`);
console.log(`Harga Akhir  : Rp${hasil4.toLocaleString('id-ID')} (Diskon 0%)`);
console.log(`-----------------------------------`);