const menuMobile = document.getElementById("menu");

function ativar(){
    const nav = document.getElementById("nav");
    nav.classList.toggle("ativei");
}

menuMobile.addEventListener("click", ativar);