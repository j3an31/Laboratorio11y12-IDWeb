function media(...numeros) {
  if (numeros.length === 0) {
    return "¡No se ingresaron números!";
  }
  let suma = numeros.reduce((acum, num) => acum + num, 0);
  return suma / numeros.length;
}

console.log("--- FUNCIÓN PROMEDIO ---");
let entrada = prompt("Ingrese varios números separados por comas:");
let numeros = entrada.split(",").map(num => parseFloat(num.trim()));
let promedio = media(...numeros);
console.log("Números ingresados: " + numeros.join(", "));
console.log("Promedio: " + promedio);