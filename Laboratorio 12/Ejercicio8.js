const convertirAMayusculas = function(texto) {
    return texto.toUpperCase(); 
};

console.log("--- MAYÚSCULAS ---");
let textoIngresado = prompt("Ingrese un texto/oración:");
console.log("Texto ingresado: " + textoIngresado);
console.log("Texto en mayúsculas: " 
    + convertirAMayusculas(textoIngresado));