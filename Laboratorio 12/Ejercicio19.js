function mostrarDatos(nombre, edad, ...hobbies) {
  console.log("Nombre: " + nombre);
  console.log("Edad: " + edad);

  if (hobbies.length > 0) {
    console.log("Hobbies:");
    for (let i = 0; i < hobbies.length; i++) {
      console.log((i + 1) + ". " + hobbies[i]);
    }
  } else {
    console.log("¡No ingresó hobbies!");
  }
}

console.log("--- FUNCIÓN MOSTRAR DATOS ---");
let nombreIngresado = prompt("Ingrese su nombre:");
let edadIngresada = prompt("Ingrese su edad:");
let hobbiesIngresados = prompt("Ingrese sus hobbies separados por comas:");
let hobbiesArray = [];
if (hobbiesIngresados != "") {
  hobbiesArray = hobbiesIngresados.split(",");
}
mostrarDatos(nombreIngresado, edadIngresada, ...hobbiesArray);