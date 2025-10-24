let repetir;
do {   
    let sumaNumeros = 0; 
    repetir = false;
    let numN = parseInt(prompt("Ingrese un número:"));
    console.log("Número ingresado: " + numN);
    console.log("--- Suma de todos los números entre 1 y " + numN + "  omitiendo múltiplos de 5 ---");
    for(let i=1;i<=numN;i++) {
        if(i%5 == 0) {
            continue;
        }
        sumaNumeros+=i;
    } 
    console.log("Suma resultante: " + sumaNumeros);
    let respuesta = prompt("¿Desea ingresar otro número? (SÍ / NO)");
    console.log("¿Volver a repetir?: " + respuesta);
    if(respuesta.toLowerCase() === "sí") {
        repetir = true;
    } else {
        console.log("Cerrando el sistema...");
    }
} while(repetir)