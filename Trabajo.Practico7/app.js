body
let ej1 = document.querySelector("#ej1")
let botonEj1 = document.querySelector("#botonEj1")
let edad = 15
botonEj1.onclick = function(){
//ej1.textcontent = "resultado"
if (edad >= 18) {
    ej1.textContent= "Sos mayor de edad"

} else {

    ej1.textContent= "Sos menor de edad"
}
body