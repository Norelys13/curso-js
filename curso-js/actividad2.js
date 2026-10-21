// Crear un objeto que almacena datos de una mascota
// desestructurar utilizando un minimo de 4 variables
// mostrar en consola.

const mascota = {
  nombre: "Max",
  edad: 3,
  raza: "Siamés",
  color: "gris",
  especie: "gato",
}

const { nombre, edad, raza, color } = mascota;

console.log(nombre, edad, raza, color);
