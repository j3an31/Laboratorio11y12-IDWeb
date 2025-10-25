let total = 0;
let continuar = true;

console.log("--- Carrito de Compras ---");
let presupuesto = parseFloat(prompt("Ingrese su presupuesto máximo:"));
console.log("Presupuesto máximo: $" + presupuesto);
while (continuar) {
  let precio = parseFloat(prompt("Ingrese el precio del producto (o 0 para terminar):"));
  console.log("Precio ingresado: " + precio);
  if (precio == 0 || isNaN(precio)) {
    continuar = false; 
  } else if (total + precio > presupuesto) {
    console.log("No puede agregar este producto, supera su presupuesto");
    continuar = false; 
  } else {
    total += precio; 
  }
}
console.log("El total parcial a pagar es: $" + total);
let descuento = 0;
if (total > 100) {
  console.log("¡Tiene un descuento del 10%!");
  descuento = total * 0.10;
} else if (total >= 50 && total <= 100) {
  console.log("¡Gana un cupón de 5%!");
  descuento = total * 0.05;
} else {
  console.log("¡No aplica descuento!");
}
let totalFinal = total - descuento;
console.log("El total final a pagar es: $" + totalFinal);