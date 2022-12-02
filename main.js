addEventListener(`DOMContentLoaded`, (e)=>{
//clausura o cieres: A grandes rasgos, en Javascript, una clausura o cierre se define como una función que «encierra» variables en su propio ámbito (y que continúan existiendo aún habiendo terminado la función).por cada vez que se llame la funcion esta incrementaria un nuevo valor segun el ejemplo


// Clausura: Función incr()
const incr = (function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
})();

typeof incr; // 'function'
console.log(incr()); // 1
console.log(incr());// 2
console.log(incr());// 3

})