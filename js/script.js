function obtenerNombre() {
    let nombre = prompt("¿Cuál es tu nombre?");
    return nombre;
}

function obtenerEdadNacimiento() {
    let edadNacimiento;
    do {
        edadNacimiento = prompt("¿Cuál es tu edad?");
    } while (isNaN(edadNacimiento) || edadNacimiento.trim() === "");
    return edadNacimiento;
}

function main() {
    let nombre = obtenerNombre();
    let edadNacimiento = obtenerEdadNacimiento();
    let añoNacimiento = new Date().getFullYear() - edadNacimiento;
    if (edadNacimiento>=18) {
        alert ("hola, " + nombre + " sos mayor de edad")
        alert( nombre + ", naciste en el año " + añoNacimiento + ".");
    } else {
        alert ("lo siento, " + nombre + " no sos mayor de edad")
    }
}


document.getElementById("iniciar").addEventListener("click", main);
