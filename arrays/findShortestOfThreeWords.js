/* Escribe una función llamada findShortestOfThreeWords. Dado 3 cadenas, findShortestOfThreeWords devuelve el más corto de las cadenas dadas.
Notas:
Si hay empate, debe devolver la primera palabra en la lista de parámetros.function*/
 function findShortestOfThreeWords(word1, word2, word3) {
 
  if (word1.length < word2.length && word1 < word3.length) {
     return word1;
   }
 
  if (word1.length === word2.length === word3.length) {
     return word1;  
   }
 
 }
 