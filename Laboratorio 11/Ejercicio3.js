let contadorPares = 0;
let contadorImpares = 0;
let numIngresado;

console.log("--- Ingrese 10 números ---");
for(let i=1;i<=10;i++) {
    numIngresado = parseInt(prompt("Número " + i + ":"));
    console.log("Número " + i + ": " + numIngresado);
    if(numIngresado%2==0) {
        contadorPares++
    } else {
        contadorImpares++
    }
}
console.log("Números pares ingresados: " + contadorPares
    +"\nNúmeros impares ingresados: " + contadorImpares);