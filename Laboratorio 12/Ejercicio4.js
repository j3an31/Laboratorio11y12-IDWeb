function areaRectangulo(base, altura) {
    return base * altura;
}

console.log("--- ÁREA DEL RECTÁNGULO ---");
let baseIngresada = parseFloat(prompt("Ingrese la base en m:"));
let alturaIngresada = parseFloat(prompt("Ingrese la altura en m:"));
console.log("Base: " + baseIngresada + "\nAltura: " + alturaIngresada);
console.log("Área del rectángulo: " 
    + areaRectangulo(baseIngresada, alturaIngresada));