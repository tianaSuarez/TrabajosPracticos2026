let nombre = "Marcos" + "Nahuel"
let h1 = document.querySelector("h1")

let nombres = ("Alvaro", "Ignacio", "Bruno")
h1.textContent = nombres(2)

nombres(1) = "Leon"
nombres(3) = "Facu"
//Agrega elementos al final
nombres.push = ("Naza")
//Agrega elementos al inicio
nombres.unshift("Barrozo")
//eliminar el primer elemento
nombres.shift()
//eliminar el ultimo elemento
nombres.pop()

h1.textContent = nombres(0) + nombres(1) + "estan aprobados"


boton.onclick = function(){
 nombres.unshift()
}