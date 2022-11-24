addEventListener(`DOMContentLoaded`, (e)=>{
//Funciones como Objetos: no es muy comun utilizar la funcion de esta forma ya que todo debe trabajarse como objeto 
const saludar = new Function("return 'Hola desde un parametro';");

saludar(); // 'Hola'
console.log(saludar())

})