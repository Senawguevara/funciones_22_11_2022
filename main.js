addEventListener(`DOMContentLoaded`, (e)=>{
//Funciones por expresion: en cuando se utilizan las funciones dentro una variable para luego utilizarlar

const saludoConstante = function saludo() {

  return "Invocar una function desde una Constante"
  
}

//invoca la constante
saludoConstante();
//Mostrar en consola
console.log(saludoConstante());


const saludoVariable = function saludo() {

  return "Invocar una function desde una Variable"
  
}

//invoca la constante
saludoVariable();
//Mostrar en consola
console.log(saludoVariable());

})