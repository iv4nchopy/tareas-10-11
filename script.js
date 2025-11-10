// ===== Página 1 =====
function bienvenida() {
    alert("¡Bienvenido a mi sitio web interactivo!");
    let nombre = prompt("¿Cuál es tu nombre?");
    document.getElementById("mensajeBienvenida").innerText = "¡Hola, " + nombre + "!";
    document.getElementById("nombreUsuario").innerText = "Bienvenido/a, " + nombre + " 🎉";
}

// ===== Página 2 =====
function verificarEdad() {
    alert("Bienvenido a la galería de imágenes.");
    let edad = prompt("¿Cuál es tu edad?");
    if (edad > 20) {
        alert("Tienes " + edad + " años, eres mayor de 20.");
    } else {
        alert("Tienes " + edad + " años, eres menor o igual a 20.");
    }
}

// ===== Página 3 =====
function multiplicar() {
    alert("Vamos a multiplicar 2 números.");
    let n1 = parseFloat(prompt("Ingresa el primer número:"));
    let n2 = parseFloat(prompt("Ingresa el segundo número:"));
    alert("El resultado es: " + (n1 * n2));
}

function elevar() {
    alert("Vamos a elevar un número al cuadrado.");
    let n = parseFloat(prompt("Ingresa el número:"));
    alert("El resultado es: " + (n ** 2));
}

function restar() {
    alert("Vamos a restar 2 números.");
    let n1 = parseFloat(prompt("Ingresa el primer número:"));
    let n2 = parseFloat(prompt("Ingresa el segundo número:"));
    alert("El resultado es: " + (n1 - n2));
}
