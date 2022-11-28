addEventListener(`DOMContentLoaded`, (e)=>{
//callbcks: Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
 
  //Creacion de la funcion incial
function saludar(nombre) {
  console.log('Hola ' + nombre);
}

//configura la funcion para el callback
function procesa(callback) {
  let nombre = 'mi nombre es Wilmar guevara';
  callback(nombre);
}

//se invoca la funcion
procesa(saludar);
  

})