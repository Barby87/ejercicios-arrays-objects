function computeSumOfAllElements(arr) {
  // Se declara una variable con valor 0 
  let suma = 0;
  
  for (let i = 0; i < arr.length; i++) {
    // En cada iteración del ciclo for se irá sumando a la variable suma un elemento del arreglo (arr)
     suma += arr[i];
  }
  
  return suma;
}
