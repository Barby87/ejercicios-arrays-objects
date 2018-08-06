/* Escribe una función llamada convertDoubleSpaceToSingle.

Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples.*/

const convertDoubleSpaceToSingle = (str) => {
  // Agregando doble espacio a los elementos del arreglo (lo convierte a string con doble espacio)
  let stringDoubleSpace = str.split("  ")
  // Agregando espacio simple a los elementos del arreglo. 
  let stringSingleSpace = stringDoubleSpace.join(" ");
  return stringSingleSpace;
  }

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"