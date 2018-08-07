/* Escribe una función llamada "addArrayProperty(obj, key, array)".
Dado un objeto (obj), una clave(key) y un array(arr), "addArrayProperty" establece una nueva propiedad sobre el objeto en la clave dada, con su valor establecido en el array dado */

const addArrayProperty = (obj, key, arr) => {

  let obj = {};
  //estableciendo una nueva propiedad (arr) sobre el objeto (obj) en la clave key(key)
  obj.key = arr; 
  return arr;
}


/* Ejemplo: 

const addArrayProperty = (omyObj, myStr, myArray) => {
let myObj = {};
let myStr = 'myProperty';
let myArray = [1, 3];

console.log(myObj);
   
   myObj.myProperty = myArray; 
   return myObj.myProperty;
}

console.log(myObj.myProperty);*/