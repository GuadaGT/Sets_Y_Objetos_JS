const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date (1992, 6, 24);
console.log(fechaNacimiento);

const esTarde = fechaHoy > fechaNacimiento;
console.log(esTarde);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);
const mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);
const anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);

