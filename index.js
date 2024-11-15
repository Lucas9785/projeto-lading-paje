var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var seta_direita = window.document.getElementById("seta_direita")
var seta_esquerda = window.document.getElementById("seta_esquerda")

function RolarparaDireita(){
    leonardo.style = "display: none"
    bruna.style = "display: flex"
    seta_direita.style ="display: none"
    seta_esquerda.style = "display: flex; margin-top: 55px "   
}

function RolarparaEsquerda(){
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    seta_direita.style ="display: flex"
    seta_esquerda.style = "display: none" 
}