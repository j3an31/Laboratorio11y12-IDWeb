function saludo(nombre = "Amigo") {
  return `¡Hola, ${nombre}! Bienvenido al programa`;
}

console.log("--- FUNCIÓN SALUDO ---");
let nombreIngresado = prompt("Ingrese su nombre:");
console.log("Nombre ingresado: " + nombreIngresado);
console.log(saludo(nombreIngresado));