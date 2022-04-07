const regExp = /ricardo/i; //para evaluar si se contiene ricardo (i=ignorar mayus)
const regExp2 = /[@!%&]/gi; //dentro de los corchetes se pueden poner todos los caracteres especiales que se requiera evaluar
const regExp3 = /andres|andrés/i; // la barra vertical hace de operador or, por tanto se puede validar simultaneamente si se encuentra cualqueira de las 2 opciones
const regExp4 = /[A-Z]/; //para evaluar si hay letras mayusculas
const regExp5 = /[a-z]/; //para evaluar si hay letras mayusculas
const regExp6 = /[0-9]/; //para evaluar si hay numeros
const regExp7 = /^\d+$/gi; //para evaluar si hay solo numeros
const regExp8 = /^[a-zA-Z]*$/; //para evaluar si hay solo letras
const regExp9 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; //para evaluar si hay solo letras pueden llevar tildes

const regExp10 =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; //para evaluar un email

console.log(regExp.test("andres ricardo munoz chacon"));
console.log(regExp2.test("cosa de locos andres@gmail.com"));
console.log(regExp3.test("Andrés"));
console.log(regExp4.test("aDa"));
console.log(regExp5.test("SSSsSSS"));
console.log(regExp6.test("aaa7aaa"));
console.log(regExp7.test("777777"));
console.log(regExp8.test("awd"));
console.log(regExp8.test("aéñÑd"));
console.log(regExp10.test("andres1234@gmail.com.co"));
