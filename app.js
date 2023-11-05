// EJERCICIOS NIVEL INTERMEDIO:

// EJERCICIO 1

// let num = 7

// if (num % 1 && num % num){
//     console.log("Es un numero primo")
// } else {
//     console.log("No es un numero primo")
// }
// NO FUNCIONA

// let numero = 10

// function esPrimo() {
//     if (numero <= 1) {
//         console.log("No es un numero primo")
//     }
//     for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             console.log("No es un numero primo")
//         } else {
//             console.log("Es un numero primo")
//         }
//     }
// }
// esPrimo()

// EJERCICIO 2

// const array1=[2,2,2];
// const array2=[3,3,3];

// function suma(array1, array2) {
//     return array1 + array2
// } +
//     console.log(suma(array1+array2));

// NO FUNCIONA


// EJERCICIO 3

// let arrayNum = [3, 5, 6, 7];
// let suma = 0;
// for (i = 0; i < arrayNum.length; i++) {
//     suma = suma + arrayNum[i]
// }
// console.log(suma)

// EJERCICIO 4

// const contarVocales = palabra => {
//         const vocales = "aáeéiíoóuú";
//     let cantidadVocales = 0;
//     for (const letra of palabra) {
//         if (vocales.includes(letra.toLowerCase())) {
//             cantidadVocales++;
//         }
//     }
//     return cantidadVocales;
// };

// const cadena = "Hola mundo. Estoy estudiando programación en JavaScript y tratando de no hacer bucles infinitos";
// const vocales = contarVocales(cadena);
// console.log("La cadena '%s' tiene %d vocales", cadena, vocales);

// EJERCICIO 5

// let data = ["Sofia", "Maria", "Pedro", "Sofia"];

//   let result = data.filter((item,index)=>{
//     return data.indexOf(item) === index;
//   })
//   console.log(result);

// EJERCICIO 6

// function invertirCadena(cad) {
//     var nuevaCadena = "";
//     for (var i = cad.length - 1; i >= 0; i--) {
//         nuevaCadena = nuevaCadena + cad[i];
//     }
//     console.log(nuevaCadena);
// }
// invertirCadena("hola");

// INTERACCIÓN CON EL DOM

// EJERCICIO 1: Carrousel

let carrousel = document.getElementById("carrousel");
let index = 0;
let arrayImg = ["Bandera.jpg", "cordoba.jpg", "glaciar.jpg", "iguazu.jpg", "lagoEspejo.jpg", "llama.jpg", "mar.jpg", "salinas.jpg", "tierraColorada.jpg"];

function carrouselImagen() {
    carrousel.src = `imagenes/${arrayImg[index]}`
    if (index < 8) {
        index++
    } else {
        index = 0
    }
}
setInterval(carrouselImagen, 2000);

// EJERCICIO 2: Leer más
let boton = document.getElementById("boton");

function mostrarParrafo() {
    let elemento = document.getElementById("extra");
    elemento.className = "visible";
    boton.className = "elementoOculto";
}

boton.addEventListener("click", mostrarParrafo)

// EJERCICIO 3: Tarjetas clickeables

let boton2 = document.getElementById("botonTarjeta");

function mostrarTarjeta() {
    let elemento = document.getElementById("extra2");
    elemento.className = "visible2";
    botonTarjetaLlama.className = "elementoOculto2";
}

botonTarjetaLlama.addEventListener("click", mostrarTarjeta)

function mostrarTarjeta2() {
    let elemento2 = document.getElementById("extra3");
    elemento2.className = "visible3";
    botonTarjetaPuma.className = "elementoOculto3";
}

botonTarjetaPuma.addEventListener("click", mostrarTarjeta2)