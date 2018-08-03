/* Escribe una función llamada findShortestOfThreeWords. Dado 3 cadenas, findShortestOfThreeWords devuelve el más corto de las cadenas dadas.
Notas:
Si hay empate, debe devolver la primera palabra en la lista de parámetros.function*/
 const findShortestOfThreeWords = (word1, word2, word3) => {

  // Condicional en caso de que una de las palabras sea más corta
  if (word1.length < word2.length && word1 < word3.length) {
     return word1;
   }
  // Condicional en caso de que la longitud de dos palabras sea igual
  if (word1.length === word2.length || word1.length === word3.length) {
     return word1;  
   }
 
 }
 const output = findShortestOfThreeWords('a', 'dos', 'tres');
 console.log(salida);