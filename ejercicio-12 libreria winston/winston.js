const logger = require('./logger/logger')

const funcionError = (nombre) => {
    if (typeof nombre === "string") {
        return `Hola ${nombre}`
    }
    throw new Error("El valor debe ser de tipo string con tu nombre")
}

// const elDoble = miFuncion("a1a")
const nombre = 8;
console.log(typeof nombre)

try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const saludo = funcionError(nombre)
    console.log(saludo);
} catch (e) {
    console.error(e)
} finally {
    console.log("Siempre se ejecuta")
}
