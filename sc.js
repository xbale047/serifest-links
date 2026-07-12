const tombol = document.querySelectorAll(".btn");

tombol.forEach(btn => {

btn.addEventListener("click", () => {

console.log(btn.innerText + " diklik");

});

});