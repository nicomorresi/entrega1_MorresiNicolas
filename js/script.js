function obtenerNombre() {
    let nombre = prompt("¿Cuál es tu nombre?");
    return nombre;
}

function obtenerEdadNacimiento() {
    let edadNacimiento;
    do {
        edadNacimiento = prompt("¿Cuál es tu edad de nacimiento?");
    } while (isNaN(edadNacimiento) || edadNacimiento.trim() === "");
    return edadNacimiento;
}

function main() {
    let nombre = obtenerNombre();
    let edadNacimiento = obtenerEdadNacimiento();
    let añoNacimiento = new Date().getFullYear() - edadNacimiento;
    alert("Hola " + nombre + ", naciste en el año " + añoNacimiento + ".");
}

document.getElementById("iniciar").addEventListener("click", main);
