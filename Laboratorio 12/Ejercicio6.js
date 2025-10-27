function mayorDeTres(a, b, c) {
    return Math.max(a,b,c)
}

console.log("--- MAYOR NÚMERO ---");
let num1 = parseInt(prompt("Ingrese un primer número:"));
let num2 = parseInt(prompt("Ingrese un segundo número:"));
let num3 = parseInt(prompt("Ingrese un tercer número:"));
console.log("Número 1: " +num1 +"\nNúmero 2: " +num2
    +"\nNúmero 3: " +num3);
console.log("El mayor de los 3 números es: " 
    + mayorDeTres(num1,num1,num3));