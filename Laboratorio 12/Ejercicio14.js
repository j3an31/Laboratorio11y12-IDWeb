function operacionesMatematicas() {
  const sumar = (a, b) => a + b;
  const restar = (a, b) => a - b;
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => b !== 0 ? a / b : "Error: división por cero";

  return {
    sumar,
    restar,
    multiplicar,
    dividir
  };
}

console.log("--- OPERACIONES MATEMÁTICAS ---");
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operaciones = operacionesMatematicas();
console.log("Números ingresados: " + num1 + " y " + num2);
console.log("Suma: " + operaciones.sumar(num1, num2));
console.log("Resta: " + operaciones.restar(num1, num2));
console.log("Multiplicación: " + operaciones.multiplicar(num1, num2));
console.log("División: " + operaciones.dividir(num1, num2));