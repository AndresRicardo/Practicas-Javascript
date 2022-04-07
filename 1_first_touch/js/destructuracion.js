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

const {
    nombre1: aliasNombre1 = "nombrePorDefecto",
    apellido1: aliasApellido1 = "apellidoPorDefecto",
    edad: aliasEdad = "edadPorDefecto",
    estatura: aliasEstatura = 0,
    amigos: aliasAmigos = ["amigo1", "amigo2", "amigo3"],
} = persona;

console.log(
    aliasNombre1,
    aliasApellido1,
    aliasEdad,
    aliasEstatura,
    aliasAmigos
);

const {
    amigos: amigosPersona = [
        "amigoPorDefecto1",
        "amigo2PorDefecto2",
        "amigoPorDefecto3",
    ],
} = persona;

console.log(amigosPersona);
