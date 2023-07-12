const datosPersonales =
{
    nombre: "Guadalupe",
    apellido: "Gutiérrez",
    edad: 30,
    altura: 159,
    eresDesarrollador: true
};
console.log(datosPersonales);

const edad = datosPersonales.edad;
console.log(edad);

const amigosDatosPersonales =
[ datosPersonales,
{
    nombre: "Ana",
    apellido: "Cervera",
    edad: 33,
    altura: 167,
    eresDesarrollador: false
},
{
    nombre: "Rubén",
    apellido: "Berjilios",
    edad: 31,
    altura: 185,
    eresDesarrollador: true
}];
console.log(amigosDatosPersonales);

const ordenEdad = amigosDatosPersonales.sort((a, b) => b.edad - a.edad);
console.log(ordenEdad);