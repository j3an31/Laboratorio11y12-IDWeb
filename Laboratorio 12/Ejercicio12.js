const mayusculas = texto => texto.toUpperCase();
const agregarSigno = texto => texto + "!";
const componerTransformaciones = (f1, f2) => texto => f2(f1(texto));
const transformar = componerTransformaciones(mayusculas, agregarSigno);

console.log("--- TRANSFORMAR TEXTO ---");
let oracionIngresada = prompt("Ingrese una oración:");
console.log("Oración ingresada: " + oracionIngresada);
let oracionTrans =  transformar(oracionIngresada);
console.log("Oración transformada: " + oracionTrans);