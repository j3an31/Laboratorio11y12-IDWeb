let repetir;
do {    
    repetir = false;
    let numN = parseInt(prompt("Ingrese un número:"));
    console.log("Número ingresado: " + numN);
    console.log("--- Números primos entre 1 y " + numN + " ---");
    for(let i=1;i<=numN;i++) {
        let numDivisores = 0;
        let posiblePrimo = i;
        for(let j=1;j<=i;j++) {
            if(posiblePrimo%j == 0) {
                numDivisores++
            }
        }
        if(numDivisores == 2) {
            console.log(posiblePrimo);
        }
    }
    let respuesta = prompt("¿Desea ingresar otro número? (SÍ / NO)");
    console.log("¿Volver a repetir?: " + respuesta);
    if(respuesta.toLowerCase() === "sí") {
        repetir = true;
    } else {
        console.log("Cerrando el sistema...");
    }
} while(repetir)