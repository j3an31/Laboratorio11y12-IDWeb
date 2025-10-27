const saludo = (nombre) => {
    return `¡Bienvenido de nuevo ${nombre}!`
}

console.log("--- MENSAJE ---");
let nombreIngresado = prompt("Ingrese su nombre:");
console.log(`Nombre ingresado: ${nombreIngresado}`);
console.log(saludo(nombreIngresado));