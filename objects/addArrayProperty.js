/* Escribe una función llamada "addArrayProperty(obj, key, array)".
Dado un objeto (obj), una clave(key) y un array(arr), "addArrayProperty" establece una nueva propiedad sobre el objeto en la clave dada, con su valor establecido en el array dado */

function addArrayProperty(obj, key, arr) {

  //estableciendo una nueva propiedad (arr) sobre el objeto (obj) en la clave key(key)
  obj.key = arr; 
  return arr;
}


/* Ejemplo: 

const addArrayProperty = (omyObj, myStr, myArray) => {
let myObj = {};
let myStr = 'myProperty';
let myArray = [1, 3];

addArrayProperty(myObj, myStr, myArray);
console.log(myObj.myProperty); 
   
   myObj.myProperty = [1,3]; 
   return myObj;
}

console.log(myObj.myProperty);*/