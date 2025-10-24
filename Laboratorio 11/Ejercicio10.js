let opcionSalir;
let respuesta1, respuesta2;
console.log("¡Bienvenido de nuevo!");
    do {
        opcionSalir = false;
        console.log("Menú de navegación:");
        console.log("(1) Calcular estadísticas de N notas" + "\n(2) Contar números pares e impares en un rango"
        +"\n(3) Generar una tabla de multiplicar" + "\n(4) Salir");
        respuesta1 = parseInt(prompt("Ingrese (1), (2), (3) o (4) para acceder:"));
        console.log("Elección: " + respuesta1);
        switch (respuesta1) {
            case 1:
                console.log("(1) Promedio" + "\n(2) Valor máximo" + "\n(3) Valor mínimo" 
                +"\n(4) Cantidad de pares e impares" + "\n(5) Cuántos están por encima del promedio");
                respuesta2 = parseInt(prompt("Ingrese (1), (2), (3), (4) o (5) para acceder:"));
                console.log("Accediendo a " + "(" + respuesta2 + ")");
                console.log("Saliendo de " + "(" + respuesta2 + ")");
                break;
            case 2:
                console.log("Accediendo a " + "(" + respuesta1 + ")");
                console.log("Saliendo de " + "(" + respuesta1 + ")");
                break;
            case 3:
                console.log("Accediendo a " + "(" + respuesta1 + ")");
                console.log("Saliendo de " + "(" + respuesta1 + ")");
                break;
            case 4:
                console.log("Cerrando el sistema...");
                opcionSalir = true;
                break;
        
            default:
                break;
        }
    } while(!opcionSalir)