const objeto = {
    nombre: "Santiago",
    edad: 32,
    Desarrollador: true,
    fechaNacimiento: new Date("september 18 1990"),
    libro:{
        titulo:"El club de las 5 am",
        autor: "Robin Sharma",
        fecha: new Date("December 4 2018"),
        url: new URL("https://www.amazon.com/-/es/Robin-Sharma-ebook/dp/B07JMYM1DY"),
    },
};

console.log(objeto.libro.url);