/*Escribe una función llamada calculateBillTotal. Dado el pre impuesto y la cantidad antes de propina de una comida, calculateBillTotal devuelve la cantidad total debida después de impuestos y propina.

Notas:
Suponga que el impuesto de ventas es 9.5% y la propina es 15%.
NO incline el impuesto sobre las ventas, solo sobre la cantidad de propina. */

const calculateBillTotal = (preTaxAndTipAmount) => {
 
  const tax = preTaxAndTipAmount*0.095; 
  
  const tip = preTaxAndTipAmount*0.15;
  
  const total = preTaxAndTipAmount + tax + tip;
  
  return total; 
}

const output = calculateBillTotal(20);
console.log(output);
