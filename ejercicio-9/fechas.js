const fechaHoy = new Date();
const fechaNacimiento = new Date(1990,8,18);
console.log(fechaNacimiento);
const masTarde = (fechaHoy > fechaNacimiento);
console.log(masTarde);
const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);
const mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);
const anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);