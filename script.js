// ==========================
// SERIFEST Website v2.0
// ==========================

window.addEventListener("load", () => {

    // Ambil elemen tirai
    const curtain = document.getElementById("curtain");

    // Setelah animasi selesai, hilangkan tirai
    if (curtain) {
        setTimeout(() => {
            curtain.style.display = "none";
        }, 2100);
    }

    // Efek muncul untuk card
    const card = document.querySelector(".card");

    if (card) {
        card.style.opacity = "0";

        setTimeout(() => {
            card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 500);
    }

});
