// Almacener un texto en un variable y luego mostrarlo en orden inverso en la consola
// Ejemplo: "senati" -> "itanes"
let texto = "senati";
let invertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
}

console.log(invertido);


//Crear una variable donde alamcene un direccion de correo electrónico
//Verificar si el correo es valido cuando tiene un solo @
//Ejemplo: 
// jhon@gmail.com   [correcto]
// luis@gmail@.com  [incorrecto]
// mariagmail.com   [incorrecto]


let correo = "jhon@gmail.com";
let contador = 0;

for (let i = 0; i < correo.length; i++) {
    if (correo[i] == "@") {
        contador++;
    }
}

if (contador == 1) {
    console.log("Correo correcto");
} else {
    console.log("Correo incorrecto");
}