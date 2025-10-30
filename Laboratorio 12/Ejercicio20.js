function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: división por cero";
  }
  return a / b;
}

function ejecutarOperacion(fn, x, y) {
  return fn(x, y);
}

console.log("--- EJECUTAR OPERACIÓN CON CALLBACK ---");
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
console.log("Números ingresados: " + num1 + " y " + num2);
let operacion = prompt("Ingrese la operación a realizar (sumar, restar, multiplicar, dividir):");
let funcionSeleccionada;

if (operacion === "sumar") {
  funcionSeleccionada = sumar;
} else if (operacion === "restar") {
  funcionSeleccionada = restar;
} else if (operacion === "multiplicar") {
  funcionSeleccionada = multiplicar;
} else if (operacion === "dividir") {
  funcionSeleccionada = dividir;
} else {
  console.log("Operación no válida");
}

if (funcionSeleccionada !== undefined) {
  let resultado = ejecutarOperacion(funcionSeleccionada, num1, num2);
  console.log("Operación seleccionada: " + operacion);
  console.log("Resultado de la operación: " + resultado);
}