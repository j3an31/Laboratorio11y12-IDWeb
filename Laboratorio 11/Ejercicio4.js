let repetir;

do {
    let numIngresado = parseInt(prompt("Ingrese un número:"));
    console.log("Número ingresado: " + numIngresado);
    console.log("--- Tabla de multiplicar del " + numIngresado + " ---\n");
    let producto;
    for(let i=1;i<=12;i++) {
        producto = numIngresado * i;
        console.log(numIngresado + " * " + i + " = " + producto);
    }
    let respuesta = prompt("¿Desea ingresar otro número? (SÍ / NO)");
    if(respuesta.toLowerCase() === "sí") {
        repetir = true
    } else {
        repetir = false;
    }
} while(repetir)