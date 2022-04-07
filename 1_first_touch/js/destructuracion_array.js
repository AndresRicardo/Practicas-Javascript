let cadena = "andres ricardo munoz chacon";

let arreglo = ["andres", "ricardo", "munoz", "chacon"];

let persona = {
    nombre1: "andres",
    nombre2: "ricardo",
    apellido1: "munoz",
    apellido2: "chacon",
    edad: 34,
    estatura: 175,
    amigos: ["sarria", "flaco", "andre"],
};

const [amigo1, amigo2, amigo3] = persona.amigos;

console.log(amigo1, amigo2, amigo3);
