const listaCompra = ["Arroz", "Papa", "Vino", "Carne", "Manzana"];
listaCompra.push("Aceite de girasol");
console.log(listaCompra);
listaCompra.pop();
console.log(listaCompra);
const peliFavoritas = [
  {
    titulo: "Batman el caballero de la noche",
    director: "Christopher Nolan",
    fecha: new Date("July 18 2008"),
  },
  {
    titulo: "Batman inicia",
    director: "Christopher Nolan",
    fecha: new Date("June 16 2005"),
  },
  {
    titulo: "Batman asciende",
    director: "Christopher Nolan",
    fecha: new Date("July 27 2012"),
  },
];
const despues2010 = peliFavoritas.filter(peli=>peli.fecha > new Date("January 01 2010"));
console.log(despues2010);

const directores = peliFavoritas.map(directores =>directores.director);
console.log(directores);

const titulos = peliFavoritas.map(titulos => titulos.titulo );
console.log(titulos);

const listaConcat = directores.concat(titulos);
console.log(listaConcat);

const listaConcatFactor = [...directores,...titulos];
console.log(listaConcatFactor);