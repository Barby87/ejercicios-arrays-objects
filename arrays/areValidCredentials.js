/*Escribe una función llamada areValidCredentials.

Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.*/

function areValidCredentials(name, password) {
  if (name.length >= 3 && password >= 8) {
    return true;
 
  }else {
    return false;
  }
  
}
