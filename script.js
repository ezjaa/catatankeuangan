//=============Header===============//
const navMobile = document.querySelector('nav');
const navBtn = document.querySelector('.nav-mobile');
const ulGap = document.querySelector('ul');

navBtn.addEventListener('click', () => {
    navMobile.classList.toggle('aktif');
    navBtn.classList.toggle('aktif');
    ulGap.classList.toggle('aktif');
});

//============TotalSaldo===========//
const editBtn = document.querySelector('.editBtn');
const totalSaldoBox = document.querySelector('.editSaldoBox');
const catatanBox = document.querySelector('.catatanBox');
let btnAktif = false;

editBtn.addEventListener('click', () => {
    editBtn.classList.toggle('aktif');
    totalSaldoBox.classList.toggle('aktif');
    if (!btnAktif) {
        editBtn.textContent = 'Batal';
        btnAktif = true;
    } else {
        editBtn.textContent = 'Edit';
        btnAktif = false;
    }
    catatanBox.classList.toggle('aktif');

});

//===========FormEditSaldo========//
const formEditSaldo = document.getElementById('edit-saldo');
const inputCash = document.getElementById('cash');
const inputDigital = document.getElementById('digital');

//===========HasilFormSaldo========//
const totalCash = document.getElementById('total-cash');
const totalDigital = document.getElementById('total-digital');
const TotalSaldo = document.getElementById('totalSaldoSpanRP');

formEditSaldo.addEventListener('submit', (e) => {
    e.preventDefault();
    const cash = Number(inputCash.value) || 0;
    const digital = Number(inputDigital.value) || 0;
    const total = cash + digital;

    totalCash.textContent = `Rp ${cash.toLocaleString('id-ID')}`;
    totalDigital.textContent = `Rp ${digital.toLocaleString('id-ID')}`;
    TotalSaldo.textContent = `Rp ${(cash + digital).toLocaleString('id-ID')}`;

    totalSaldoBox.classList.remove('aktif');
    catatanBox.classList.remove('aktif');
    editBtn.classList.remove('aktif');
    editBtn.textContent = 'Edit';
    btnAktif = false
});

//==========Riwayat==========//
const formTambahTransaksi = document.getElementById('tambah-transaksi');
const transaksiBaru = document.querySelector('.transaksiBoxCard');

formTambahTransaksi.addEventListener('submit', (event) => {
    event.preventDefault();
    const keterangan = document.getElementById('keterangan').value;
    const nominal = document.getElementById('nominal').value;
    const sumber = document.getElementById('sumber').value;
    const jenis = document.getElementById('jenis').value;

    const riwayatCard = document.createElement('div');
    riwayatCard.classList.add('transaksiCard');

    const h3 = document.createElement('h3');
    h3.textContent = `${keterangan}`;

    const p = document.createElement('p');
    if (jenis === "pengeluaran") {
        p.textContent = `- Rp ${nominal}`;
        p.style.color = 'red';
    } else {
        p.textContent = `+ Rp ${nominal}`;
        p.style.color = 'green';
    }

    riwayatCard.appendChild(h3);
    riwayatCard.appendChild(p);

    transaksiBaru.appendChild(riwayatCard);

    formTambahTransaksi.reset();

});

//==========Kalender========//
const Kalender = document.querySelector('.kalender');
const Today = new Date().toISOString().split('T')[0];

Kalender.value = Today;

Kalender.addEventListener('change', (e) => {
    const tanggalKlik = e.target.value;
    const tanggalLokal = new 
    Date(tanggalKlik).toLocaleDateString('id-ID');
    
    
});

