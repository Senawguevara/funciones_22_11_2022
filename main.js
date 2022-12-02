addEventListener(`DOMContentLoaded`, (e)=>{
//tipo flecha, son una forma corta de escribir funciones , apartir del ECMAS6 se elimina la palabra function y se añade ""=>" antes de abrir las llaves"


//Forma general del funcion tipo flecha
const func = () => {
  return "Función flecha.";
};

console.log(func());
//Forma simplificada

const func2 = () => "Función flecha sen el return."; // 0 parámetros: Devuelve "Función flecha"
console.log(func2());
const func3 = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
console.log(func3());
const func4 = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b
console.log(func4());


})