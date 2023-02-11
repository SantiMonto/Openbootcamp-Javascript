const yo = {
  nombre: "Santiago",
  apellido: "Montoya",
  edad: 32,
  altura: 168,
  eresDesarrollador: true,
};
const edad = yo.edad;
console.log(edad);

const datos = [
  yo,
  {
    nombre: "Juan Camilo",
    apellido: "Vanegas",
    edad: 31,
    altura: 180,
    eresDesarrollador: true,
  },
  {
    nombre: "Camilo",
    apellido: "Arango",
    edad: 33,
    altura: 178,
    eresDesarrollador: false,
  },
];

console.log(datos);

datos.sort((a,b) => b.edad - a.edad);
console.log(datos);