//Cadenas = conjunto de caracteres
//1 solo caracter = CHAR

//Exiten 3 formas para crear cadenas JS:
const tradicional = "Hola soy un texto"
const simples = 'un gusto conocerte'
const mnensaje = `Soy un texto muy expecial`

//Backticks permite multilinea + inyección
const nombre = `Jhon`
const carrera = `programador`

const historia = `
Esta es la historia de ${nombre}
de un ${carrera}
que solo queria Vibecodear
`

console.log(historia);

const longitud = carrera.length //Total de carateres
console.log(longitud);

//Metodos
console.log('concat:', carrera.concat(nombre))
console.log('repeat:', carrera.repeat(3))
console.log('', carrera.repeat('a', '@'))
console.log('', carrera.toUpperCase())
console.log('', carrera.toLowerCase())
console.log('', carrera.replace('a', '@'))
console.log('', carrera.split('m'))
console.log('', carrera.trim())


