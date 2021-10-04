// JavaScript Document

console.log("ch3ck");

// --navigatie knop--

var hamburgerknop = document.querySelector("#Hamburger");

var navigatie = document.querySelector("div.menudicht");

hamburgerknop.addEventListener('click', menuopen);

function menuopen(){
    navigatie.classList.toggle("menu");

    // navigatie.classList.
}


var vergrootglas = document.querySelector("form.header button")
var zoekknop = document.querySelector("header input");

vergrootglas.addEventListener('click', zoekbalk);

function zoekbalk(){
    zoekknop.classList.toggle("searching");

    console.log("ch2k");
}