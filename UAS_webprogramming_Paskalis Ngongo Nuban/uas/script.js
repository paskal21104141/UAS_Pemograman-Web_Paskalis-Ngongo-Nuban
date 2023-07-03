// Data untuk menyimpan daftar baju yang ditambahkan
let daftarBaju = [];

// Fungsi untuk menambahkan baju baru ke dalam daftarBaju
function tambahBaju() {
    const namaBaju = document.getElementById('nama').value;
    const hargaBaju = parseFloat(document.getElementById('harga').value);
    const jumlahBaju = parseInt(document.getElementById('jumlah').value);

    if (namaBaju && hargaBaju && jumlahBaju) {
        const totalHarga = hargaBaju * jumlahBaju;
        const baju = {
            nama: namaBaju,
            harga: hargaBaju,
            jumlah: jumlahBaju,
            total: totalHarga,
        };

        daftarBaju.push(baju);

        tampilkanDaftarBaju();
        hitungTotal();
        resetInput();
    } else {
        alert('Mohon lengkapi data baju terlebih dahulu!');
    }
}

// Fungsi untuk menampilkan daftar baju di dalam HTML
function tampilkanDaftarBaju() {
    const daftarBajuDiv = document.getElementById('daftar-baju');
    daftarBajuDiv.innerHTML = '';

    daftarBaju.forEach((baju, index) => {
        const bajuHTML = `
            <div>
                <p>${baju.nama} - Rp ${baju.harga} x ${baju.jumlah}</p>
                <p>Total: Rp ${baju.total}</p>
            </div>
        `;

        daftarBajuDiv.innerHTML += bajuHTML;
    });
}

// Fungsi untuk menghitung total harga semua baju
function hitungTotal() {
    const totalSpan = document.getElementById('total');
    const totalHarga = daftarBaju.reduce((total, baju) => total + baju.total, 0);
    totalSpan.innerText = totalHarga;
}

// Fungsi untuk menghapus input setelah menambahkan baju
function resetInput() {
    document.getElementById('nama').value = '';
    document.getElementById('harga').value = '';
    document.getElementById('jumlah').value = '';
}
