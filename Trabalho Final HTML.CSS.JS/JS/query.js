
function epic() {
var password = "1991"
var pass = prompt("Em qual ano surgiu?"," ")
if (pass.toLowerCase() == password) {
window.location = "https://www.techtudo.com.br/listas/2022/02/conheca-a-epic-games-desenvolvedora-de-fortnite-e-da-unreal-engine.ghtml", '_blank';
}
else {
alert("Senha errada, tente novamente!");
window.location = "index.php";
}
}

function steam() {
var password = "2002"
var pass = prompt("Em qual ano surgiu?"," ")
if (pass.toLowerCase() == password) {
window.location = "https://tecnoblog.net/responde/o-que-e-steam-tudo-sobre-a-loja-valve/", '_blank';
}
else {
alert("Senha errada, tente novamente!");
window.location = "index.php";
}
}

function origin() {
var password = "1983"
var pass = prompt("Em qual ano surgiu?"," ")
if (pass.toLowerCase() == password) {
window.location = "https://pt.m.wikipedia.org/wiki/Origin_Systems#:~:text=Foi%20fundada%20em%203%20de,pela%20Electronic%20Arts%20em%201992.", '_blank';
}
else {
alert("Senha errada, tente novamente!");
window.location = "index.php";
}
}

function xbox() {
var password = "2017"
var pass = prompt("Em qual ano surgiu?"," ")
if (pass.toLowerCase() == password) {
window.location = "https://pt.m.wikipedia.org/wiki/Xbox_Game_Pass#:~:text=7%20Liga%C3%A7%C3%B5es%20externas-,Hist%C3%B3ria,Insider%20para%20testes%20e%20feedback.", '_blank';
}
else {
alert("Senha errada, tente novamente!");
window.location = "index.php";
}
}

function gog() {
var password = "2008"
var pass = prompt("Em qual ano surgiu?"," ")
if (pass.toLowerCase() == password) {
window.location = "https://pt.m.wikipedia.org/wiki/GOG.com", '_blank';
}
else {
alert("Senha errada, tente novamente!");
window.location = "index.php";
}
}

function blizzard() {
var password = "1994"
var pass = prompt("Em qual ano surgiu?"," ")
if (pass.toLowerCase() == password) {
window.location = "https://www.techtudo.com.br/noticias/2010/12/poderosa-blizzard.ghtml", '_blank';
}
else {
alert("Senha errada, tente novamente!");
window.location = "index.php";
}
}

function ubisoft() {
var password = "1986"
var pass = prompt("Em qual ano surgiu?"," ")
if (pass.toLowerCase() == password) {
window.location = "https://canaltech.com.br/empresa/ubisoft/", '_blank';
}
else {
alert("Senha errada, tente novamente!");
window.location = "index.php";
}
}

function psnow() {
var password = "2014"
var pass = prompt("Em qual ano surgiu?"," ")
if (pass.toLowerCase() == password) {
window.location = "https://tecnoblog.net/responde/o-que-e-playstation-now/", '_blank';
}
else {
alert("Senha errada, tente novamente!");
window.location = "index.php";
}
}

/*=====================================================================
					MENU RESPONSIVO TOPNAV
=====================================================================*/

/*Basicamente a função pega o ID de myTopnav joga em x e 
depois altera as classes pra que seja responsivo*/

function abreMenuResponsivo() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
    x.className += " responsive";
} 
else {
    x.className = "topnav";
}
}