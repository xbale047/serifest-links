const button = document.getElementById("start");

const welcome = document.getElementById("welcome");

const content = document.getElementById("content");


button.onclick = function(){

    welcome.style.display = "none";

    content.classList.remove("hidden");

};