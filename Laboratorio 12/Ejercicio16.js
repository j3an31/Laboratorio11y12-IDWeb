function acumulador(valorInicial = 0) {
  let total = valorInicial;
  const sumar = (valor) => total += valor;
  return sumar;
}

console.log("--- ACUMULADOR CON CLOSURE ---");
let inicial = parseFloat(prompt("Ingrese el valor inicial del acumulador:"));
let acumular = acumulador(inicial);
console.log("Valor inicial: " + inicial);
let valor1 = parseFloat(prompt("Ingrese un valor para sumar al acumulador:"));
console.log("Valor a sumar: " + valor1);
console.log("Nuevo total: " + acumular(valor1));
let valor2 = parseFloat(prompt("Ingrese otro valor para sumar al acumulador:"));
console.log("Valor a sumar: " + valor2);
console.log("Nuevo total: " + acumular(valor2));
let valor3 = parseFloat(prompt("Ingrese un último valor para sumar al acumulador:"));
console.log("Valor a sumar: " + valor3);
console.log("Nuevo total: " + acumular(valor3));