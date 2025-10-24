console.log("¡Bienvenido de nuevo!");
let opcionSalir = false;
    while(!opcionSalir) {
        console.log("Menú de navegación:");
        console.log("(1) Calcular área del círculo" + "\n(2) Calcular área del rectángulo"
            +"\n(3) Salir");
        let respuesta = parseInt(prompt("Ingrese (1), (2) o (3) para acceder:"));
        console.log("Accediendo a " + "(" + respuesta + ")");
        if(respuesta==1) {
            let radioCirculo = parseInt(prompt("Ingrese el radio en centímetros:"));
            let areaCirculo = Math.PI * (radioCirculo**2);
            console.log("Área del círculo: " + areaCirculo.toFixed(2) + " cm^2");
        } else if(respuesta==2) {
            let largoRectangulo= parseInt(prompt("Ingrese el largo en metros:"));
            let altoRectangulo= parseInt(prompt("Ingrese el alto en metros:"));
            let areaRectangulo = largoRectangulo * altoRectangulo;
            console.log("Área del rectángulo: " + areaRectangulo.toFixed(2) + " m^2");
        } else if(respuesta==3) {
            opcionSalir = true
            console.log("Cerrando sesión...");
        } 
    }