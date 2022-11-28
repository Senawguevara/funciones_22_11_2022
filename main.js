addEventListener(`DOMContentLoaded`, (e)=>{
 //Funciones Autoejecutables;Básicamente, sólo tenemos que envolver entre paréntesis la función anónima en cuestión (no necesitamos que tenga nombre, puesto que no la vamos a guardar) y luego, ejecutarla:

// Función autoejecutable se debe incluir en parentesis la funcion
(function () {
  console.log("Esta es una funcion autoejecutable sin invocarla");
})();

// Función autoejecutable con parámetros
(function (na) {
  console.log(`¡Hola, ${na}!`);
})("Este es un parametro");

//Funcion autoejecutable con constante 
const fur = (function (name) {
  return `¡Hola, ${name}!`;
})("funcion en constante");

console.log(fur);
console.log(typeof fur);

  

})