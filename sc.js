// Sembunyikan halaman utama saat awal dibuka
document.getElementById("main").style.display = "none";


// Fungsi tombol Mulai Sekarang
function masukWebsite() {

    const welcome = document.getElementById("welcome");
    const main = document.getElementById("main");

    // Hilangkan welcome
    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        // Tampilkan halaman utama
        main.style.display = "block";
        main.style.opacity = "0";

        setTimeout(() => {
            main.style.opacity = "1";
        }, 50);

    }, 500);

}