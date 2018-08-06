/*Escriba una función llamada "filterOddElements". Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.*/

const filterOddElements = (arr) => {
  // Se crea un arreglo vació donde irán los números impares.
  let oddNumbers = [];
  
  // El ciclo for irá iterando sobre cada elemento del arreglo arr
  for (let i = 0; i < arr.length; i++) {
    // Buscará cada número impar (cuya división por 2 dará distinto de 0)
    if(arr[i]%2 !== 0) {
      // Se agrega cada elemento impar al nuevo arreglo oddNumbers
      oddNumbers.push(arr[i]);
    }
  }
  return oddNumbers;
}

const output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);

/* OTRA FORMA, USANDO FILTER

filterOddElements = (arr) => {
const arrOddNumbers = arr.filter(i => i % 2 !== 0 );
  return arrOddNumbers;
}

const output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);
*/