function crearSecuencia(inicio, paso) {
  let actual = inicio;
  let primerLlamada = true;
  
  return function() {
    if (primerLlamada) {
      primerLlamada = false;
      return actual;
    }
    actual += paso;
    return actual;
  };
}

console.log("--- GENERADOR DE SECUENCIA ARITMÉTICA ---");
const secuencia = crearSecuencia(2, 3);
console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia()); 
console.log(secuencia()); 

console.log("\n--- OTRA SECUENCIA ---");
const secuencia2 = crearSecuencia(10, 5);
console.log(secuencia2()); 
console.log(secuencia2()); 
console.log(secuencia2()); 
console.log(secuencia2()); 