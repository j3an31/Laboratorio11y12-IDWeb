const esPositivo = (numero) => {
    if(numero>0) {
        return "El número ingresado es mayor a 0"
    } else {
        return "El número ingresado no es mayor a 0"
    }
}

console.log("--- MAYOR A CERO ---");
let numeroIngresado = prompt("Ingrese un número:");
console.log(`Número: ${numeroIngresado}`);
console.log(esPositivo(numeroIngresado));