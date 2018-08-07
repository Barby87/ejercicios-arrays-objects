/*Escribir una función fromListToObject que toma un array de matrices, y devuelve un objeto con cada par de elementos en la array como un par clave-valor*/

const car = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

const fromListToObject = (array) => {
  
  // Objeto vacío donde se egragarán las nuevas propiedades
  let newObject = {};

// Ciclo for par a recorrer los índices del array 
for(let i = 0; i < array.length; i++) {

  // Propiedades del nuevo objeto --> [array[i][0]]
  // Valores del nuevo objeto --> [array[i][1]]
  newObject [array[i][0]] = array[i][1];
}

return newObject;

}

console.log(fromListToObject(car));