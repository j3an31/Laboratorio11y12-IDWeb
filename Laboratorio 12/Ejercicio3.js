function esPar(numero) {
    if (numero%2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log("--- ¿ES PAR? ---");
let numIngresado = parseInt(prompt("Ingrese un número:"));
console.log("Número ingresado: " + numIngresado);
if(esPar(numIngresado)) {
    console.log("¡El número ingresado SÍ es par!");
} else {
    console.log("¡El número ingresado NO es par!");
}