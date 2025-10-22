let edadIngresada = parseInt(prompt("Ingrese la edad:"));
console.log("Edad ingresada: " + edadIngresada);
if(edadIngresada<12) {
    console.log("Niño");
} else if(edadIngresada>=12 && edadIngresada<=17) {
    console.log("Adolescente");
} else if(edadIngresada>=18 && edadIngresada<=59) {
    console.log("Adulto");
} else if(edadIngresada>=60) {
    console.log("Adulto mayor");
} 

