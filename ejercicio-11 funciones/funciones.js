function basic() {
  console.log(true);
}
basic();

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve();
    } else {
      reject();
    }
  }, 5000);
});
promise
  .then(() => console.log("Hola soy una promesa"))
  .catch(() => console.log("Error en la promesa"))
  .finally(() => console.log("siempre se ejectua"));

function* generaPares() {
  let i = 0;
  while (true) {
    if (i % 2 === 0) {
        yield i;
    }
    i++;
  }
}

const pares = generaPares();

console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
console.log(pares.next().value);
