//Estructuras = OBJETOS
//Desestructuras = ABRIR OBJETOS
const persona = {
  apellidos : "Francia Minaya",
  nombres : "Jhon Edward",
  edad : 42,
  skills: ["PHP", "Java", "Javascript"]
}

//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const apellidos = persona.nombres
const edad = persona.edad
*/

const {nombres, skills } = persona

console.log(nombres, skills)

