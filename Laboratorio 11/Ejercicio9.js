console.log("--- Verificación de número Armstrong ---");
let salir = false;
    while(!salir) {
        let numAverificar = prompt("Ingrese un número:");
        console.log("Número ingresado: " + numAverificar);
        let suma = 0;
        for(let i=0;i<numAverificar.length;i++) {
            let cifrasNumero = parseInt(numAverificar.charAt(i));
            suma+=(Math.pow(cifrasNumero, numAverificar.length));
        }
        if(suma==parseInt(numAverificar)) {
            console.log("El número ingresado es un número Armstrong");
            let respuesta = prompt("¿Desea ingresar otro número? (SÍ / NO)");
            console.log("¿Volver a repetir?: " + respuesta);
            if(respuesta.toLowerCase() === "no") {
                salir = true;
                console.log("Cerrando el sistema...");
            }
        } else {
            console.log("El número ingresado no es un número Armstrong");
            let respuesta = prompt("¿Desea ingresar otro número? (SÍ / NO)");
            console.log("¿Volver a repetir?: " + respuesta);
            if(respuesta.toLowerCase() === "no") {
                salir = true;
                console.log("Cerrando el sistema...");
            }
        }
    }