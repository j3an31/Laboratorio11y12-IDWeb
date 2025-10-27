function esMultiplo(a, b) {
    if (a%b == 0) {
        return true;
    } else {
        return false;
    }
}

console.log("--- ¿ES MÚLTIPLO? ---");
let num1 = parseInt(prompt("Ingrese un primer número:"));
let num2 = parseInt(prompt("Ingrese un segundo número:"));
console.log("Número 1: " + num1 + "\nNúmero 2: " + num2);
if(esMultiplo(num1, num2)) {
    console.log("¡" +num1 +" SÍ es múltiplo de " +num2 + "!");
} else {
    console.log("¡" +num1 +" NO es múltiplo de " +num2 +"!");
}