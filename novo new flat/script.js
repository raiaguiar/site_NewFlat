count = 1;
document.getElementById('radio1').checked = true;
setInterval(function () {
    nextImage();
}, 4000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById('radio' + count).checked = true; 
}

var menu = document.querySelector("nav ul");
var menuBar = document.querySelector("nav .menu-icon");
var iconMenu = document.querySelector("nav .menu-icon img");
menuBar.addEventListener("click", function () {

    if (iconMenu.getAttribute("src") == "menu.png") {
        iconMenu.setAttribute("src", "close.png")
    } else {
        iconMenu.setAttribute("src", "menu.png")
    }
    menu.classList.toggle("active")
}); 









