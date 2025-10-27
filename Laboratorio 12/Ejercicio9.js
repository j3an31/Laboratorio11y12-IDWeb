const calcularDescuento = function(precio, porcentaje) {
    let descuento = precio * (porcentaje/100)
    return descuento;
};

console.log("--- DESCUENTO ---");
let precioIngresado = parseInt(prompt("Ingrese el precio inicial:"));
let descuento = parseInt(prompt("Ingrese el descuento en %:"));
console.log("Precio Inicial: " +precioIngresado +" soles" +"\nDescuento en %: "
    +descuento +"%");
let descuentoSoles = calcularDescuento(precioIngresado,descuento);
console.log("Descuento Obtenido: " + descuentoSoles + " soles");
console.log("Total a pagar: " + (precioIngresado-descuentoSoles) + " soles");