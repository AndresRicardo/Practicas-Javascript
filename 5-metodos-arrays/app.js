const users = [
    { uid: 1, name: "andres", age: 34 },
    { uid: 2, name: "ricardo", age: 35 },
    { uid: 3, name: "pedro", age: 36 },
    { uid: 4, name: "alejandro", age: 37 },
    { uid: 5, name: "carolina", age: 38 },
];
console.log(users);

////////////////////////////////
/////////////// map  ///////////
////////////////////////////////

//el metodo map devuelve un nuevo array de acuerdo con la la funcion alidad pasada mediante el callback (esto en un nuevo array) (este metodo no muta el array original).
//el array.map recorre cada elemento del array original y aplica el callback para devolver un nuevo array.
// const names = users.map((item) => item.name.toUpperCase());
// console.log(names);

///////////////////////////////////
/////////////// filter  ///////////
///////////////////////////////////

// el metodo filter devuelve todos los elementos del array que cumplen con la condicion establecida en el callback (esto en un nuevo array) (este metodo no muta el array original)

// const mayores36 = users.filter((user) => user.age > 36);
// console.log(mayores36);

// const usersFiltrados = users.filter((user) => user.uid !== 4);
// console.log(usersFiltrados);

///////////////////////////////////
//////////////// find  ////////////
///////////////////////////////////

// el metodo find devuelve el primer elemento del array que cumple con la condicion establecida en el callback, este metodo no muta el array original, devuelve un array nuevo

// const findedUser = users.find((item) => item.uid === 3);
// console.log(findedUser);

///////////////////////////////////
//////////////// some  ////////////
///////////////////////////////////

// el metodo some devuelve verdadero si al menos un elemento del array cumple con la condicion establecida en el callback, o false en el otro caso. (este metodo no muta el array original)

// const existe = users.some((item) => item.uid === 4);
// console.log(existe);

// const existe2 = users.some((item) => item.uid === 7);
// console.log(existe2);

///////////////////////////////////
///////////// findIndex  //////////
///////////////////////////////////

// este metodo devuelve el indice del primer elemento del array que cumpla con la funcion de prueba proporcionada mediante el callback, si ningún elemento cumple la condicion devuelve un -1.

// const indice = users.findIndex((item) => item.name === "ricardo");
// console.log(indice);

// const indice2 = users.findIndex((item) => item.name === "amane");
// console.log(indice2);

///////////////////////////////////
/////////////// slice  ////////////
///////////////////////////////////

// este metodo devuelve la parte del array original entre los indices pasados como parametros, el elemento del array original con el indice final pasado como parametro a la funcion slice no se incluye en el el array devuelto

// const subArray = users.slice(2, 5);
// console.log(subArray);

///////////////////////////////////
/////////////// concat  ///////////
///////////////////////////////////

// este metodo une dos o mas arrays en uno solo, este metodo no modifica los arrays originales.

// const array1 = ["q", "w", "e", "r", "t", "y"];
// const array2 = ["a", "s", "d", "f", "g"];
// const array3 = array1.concat(array2);
// console.log(array3);

////////////////////////////////////////////////////
//////////// spread syntax o spread operator ///////
////////////////////////////////////////////////////

// permite a un elemento iterable (como arrays, objetos o strings), ser expandido en lugares donde son esperados

// const array1 = ["q", "w", "e", "r", "t", "y"];
// const array2 = ["a", "s", "d", "f", "g"];
// const array3 = [...array1, ...array2];
// const array4 = [...array2, ...array1];
// const array5 = [...array1, "ricardo", ...array2];
// const array6 = [...array1, ...users, ...array2];
// console.log(array3);
// console.log(array4);
// console.log(array5);
// console.log(array6);

///////////////////////////
//////////// reduce ///////
///////////////////////////

// este metodo ejecuta una función sobre cada elemento del array devilviendo como resultado un unico valor.

// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros);

// EJEMPLO 1: sumar todos los elementos del array mostrando el valor del acumulador y del item en cada iteración

// const suma = numeros.reduce((acumulador, item) => {
//     console.log(acumulador + " : " + item);
//     return acumulador + item;
// });
// console.log(suma);

// EJEMPLO 2: multiplicar todos los elementos del array mostrando el valor del acumulador y del item en cada iteración

// const producto = numeros.reduce((acumulador, item) => {
//     console.log(acumulador + " : " + item);
//     return acumulador * item;
// });
// console.log(producto);

///////////////////////////
//////////// split ////////
///////////////////////////

// este metodo de los strings divide un string deacuerdo con el caracter o cadena de caracteres pasados como parametro y devuelve un array con todos los elementos individuales.

// const stringMeses = "ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic";
// console.log(stringMeses);
// const arrayMeses = stringMeses.split(",");
// console.log(arrayMeses);

///////////////////////////
//////////// join /////////
///////////////////////////

// este metodo junta en un string todos los elementos individuales del array con el separador indicado como parametro, si este se omite, por defecto los elementos son separados por una coma.

// const arrayMeses = [
//     "ene",
//     "feb",
//     "mar",
//     "abr",
//     "may",
//     "jun",
//     "jul",
//     "ago",
//     "sep",
//     "oct",
//     "nov",
//     "dic",
// ];
// console.log(arrayMeses);
// const stringMeses = arrayMeses.join("-");
// console.log(stringMeses);
