/*variables

let nombre="Mayer Amschel";
let apellido="Rottschild";
let edad=50;
console.log("Mi nombres son "+nombre+"mi apellido es "+apellido+"y tengo "+edad+"años");

let num1 =prompt("Ingrese un numero: ");//convierte en string el prompt
let num2 =prompt("Ingrese otro numero: ");

let suma = num1 + num2;
console.log(suma);

num1 =parseInt(prompt("Ingrese un numero: "));//convierte en string el prompt
num2 =parseInt(prompt("Ingrese otro numero: "));
suma = num1 + num2;
console.log(suma);

isNaN(num1); // pregunta si lo que le paso es un numero

let resultado =edad>=18?"mayor de edad" : "menor de edad";// es un if else compato para condiciones simples
//=== compara valor y el tipo de dato
//!== valor y tipo de dato
//Obejto literal
let alumno = {
    nombre:'Martin',
    apellido: 'Lopez',
    edad:22 //los numeros van sin comillas
}
console.log(alumno);
//Notacion de punto
console.log(alumno.nombre);

//Array
let colores =['rojo','verde','violeta','gris','negro'];

console.log(colores);

for(let i=0;i<colores.length;i++)
{
    console.log(colores[i]);
}

const productos = ['Remera','Pantalon','short','Campera','Medias'];

/*for(const producto of productos)
{
    alert(producto);
}
//metodos de Array

//push()  pop()

productos.push('Zapatillas');
console.log(productos);

productos.pop();

console.log(productos);*/
let card=document.querySelector('.card');
console.log(card);
