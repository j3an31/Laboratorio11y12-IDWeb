function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
  }
  
  if (exponente < 0) {
    return 1 / potencia(base, -exponente);
  }
  
  return base * potencia(base, exponente - 1);
}

console.log("--- POTENCIA RECURSIVA ---");
console.log("2^3 =", potencia(2, 3));        
console.log("5^4 =", potencia(5, 4));        
console.log("3^0 =", potencia(3, 0));        
console.log("10^2 =", potencia(10, 2));      