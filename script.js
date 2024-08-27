const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".Mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Función para eliminar tildes y caracteres especiales
function limpiarTexto(texto) {
    // Elimina tildes y caracteres especiales
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); // Elimina tildes
    // Reemplaza caracteres especiales con espacios vacíos
    texto = texto.replace(/[^a-zA-Z\s]/g, '');
    return texto;
}

function botonEncriptar() {
    const textoLimpio = limpiarTexto(textArea.value);
    const textoEncriptado = encriptar(textoLimpio);
    mensaje.value = textoEncriptado; // Estamos mostrando el texto encriptado al usuario
    textArea.value = ""; // Acá limpiamos el campo del texto después de que el usuario introduce la palabra
    mensaje.style.backgroundImage = "none"; // Acá quitamos la imagen del muñeco cuando se encripta la palabra
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // Estas son las llaves de encriptación tomando las vocales
    stringEncriptada = stringEncriptada.toLowerCase(); // El metodo toLowerCase sirve para convertir las letras ingresadas en minusculas, esa es una de las condiciones del reto

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); // Acá realizamos la sustitución de las letras con el metodo replaceAll, el cual reemplaza unos caracteres por otros
        }
    }
    return stringEncriptada;
}

function botonDesencriptar() {
    const textoLimpio = limpiarTexto(textArea.value);
    const textoDesencriptado = desencriptar(textoLimpio);
    mensaje.value = textoDesencriptado; // Estamos mostrando el texto desencriptado al usuario
    textArea.value = ""; // Acá limpiamos el campo del texto después de que el usuario introduce la palabra para desencriptar
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; // Estas son las llaves de encriptación tomando las vocales
    stringDesencriptada = stringDesencriptada.toLowerCase(); // El metodo toLowerCase sirve para convertir las letras ingresadas en minusculas, esa es una de las condiciones del reto

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); // Acá realizamos la sustitución de las letras con el metodo replaceAll, el cual reemplaza unos caracteres por otros
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    // Selecciona el texto del área de mensaje
    mensaje.select();
    // Copia el texto al portapapeles
    document.execCommand('copy');
    // Muestra un mensaje de confirmación (opcional)
    //alert('Texto copiado al portapapeles!');
}