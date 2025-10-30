function crearContador(valorInicial = 0) {
  let contador = valorInicial;
  const incrementar = () => ++contador;
  const resetear = () => (contador = valorInicial);
  return {
    incrementar,
    resetear
  };
}

console.log("--- CONTADOR CON CLOSURES ---");
let valor = parseInt(prompt("Ingrese el valor inicial del contador:"));
let contador = crearContador(valor);
console.log("Valor inicial del contador: " + valor);
console.log("Incrementando... " + contador.incrementar());
console.log("Incrementando... " + contador.incrementar());
console.log("Incrementando... " + contador.incrementar());
console.log("Reiniciando contador...");
console.log("Valor después de resetear: " + contador.resetear());