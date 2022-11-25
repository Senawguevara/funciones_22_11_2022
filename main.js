addEventListener(`DOMContentLoaded`, (e)=>{
//Funciones Anonimas: son llamada tambien funciones lambda, son un tipo de funciones que se declaran sin nombre de funcion y se alojan en el interior de una variable y haciendo referencia a ella.
 
const lamba = function () {
    return "Hola esta es una funcion lamba"
    
};
lamba;
lamba();

//se muestra en consola como una string
console.log(lamba);

//se muesta en consolo como el resultado de una funcion
console.log(lamba());


})