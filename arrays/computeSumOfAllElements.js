/* Escriba una función llamada computeSumOfAllElements. Dado un array de números, computeSumOfAllElements devuelve la suma de todos los elementos del array dado.*/

const computeSumOfAllElements = (arr) => {
  // Se declara una variable con valor 0 
  let suma = 0;
  
  for (let i = 0; i < arr.length; i++) {
    // En cada iteración del ciclo for se irá sumando a la variable suma un elemento del arreglo (arr)
     suma += arr[i];
  }
  return suma;
}

const output = computeSumOfAllElements([1, 2, 10]);
console.log(output);
