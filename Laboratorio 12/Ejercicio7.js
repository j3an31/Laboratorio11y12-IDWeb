const promedio3notas = function(a,b,c) {
    return (a+b+c)/3;
};

console.log("--- PROMEDIO NOTAS ---");
let nota1 = parseFloat(prompt("Ingrese la nota 1:"));
let nota2 = parseFloat(prompt("Ingrese la nota 2:"));
let nota3 = parseFloat(prompt("Ingrese la nota 3:"));
console.log("Nota 1: " +nota1 +"\nNota 2: " +nota2
    +"\nNota 3: " +nota3);
console.log("El promedio de las 3 notas es: " 
    + promedio3notas(nota1,nota2,nota3).toFixed(2));