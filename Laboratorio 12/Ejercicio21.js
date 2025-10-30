function filtrarArreglo(arr, callback) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      resultado.push(arr[i]);
    }
  }
  return resultado;
}

console.log("--- FILTRAR ARREGLO CON CALLBACKS ---");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = filtrarArreglo(numeros, (num) => num % 2 === 0);
console.log("Números pares:", pares); 

const mayoresA5 = filtrarArreglo(numeros, (num) => num > 5);
console.log("Mayores a 5:", mayoresA5);

const palabras = ["hola", "JavaScript", "web", "programación", "código"];
const palabrasLargas = filtrarArreglo(palabras, (palabra) => palabra.length > 5);
console.log("Palabras largas:", palabrasLargas); 

const mixto = [5, -3, 8, -1, 0, -7, 10];
const negativos = filtrarArreglo(mixto, (num) => num < 0);
console.log("Números negativos:", negativos); 