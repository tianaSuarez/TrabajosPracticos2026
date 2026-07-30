

// Cambiar texto
let parrafo = document.querySelector("p")


let btexto = document.querySelector ("#cambiotexto")
btexto.onclick = function()
{
    parrafo.textContent = "este texto cambio"
}

// Cambiar fondo
let btexto = document.querySelector ("#cambiofondo")
btexto.onclick = function()
{
  parrafo.style.backgroundColor = "light blue"
}

// Cambiar color
let btexto = document.querySelector ("#cambiocolor")
btexto.onclick = function()
{
    parrafo.style.color
}

// Cambiar letra
let btexto = document.querySelector ("#cambioletra")
btexto.onclick = function()
{
    parrafo.style.fontFamily = "IMPACT"
}