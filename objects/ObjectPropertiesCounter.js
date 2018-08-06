// Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene y retornarlo.


const objectPropertiesCounter = (obj) => {
  //Aplicando método Object.keys() para devolver las propiedades del objeto, y el método .length obtiene el número de elementos del objeto.

  return Object.keys(obj).length;

};

const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' });

console.log(ouput);
