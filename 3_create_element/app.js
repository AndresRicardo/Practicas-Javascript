const listaHtml = document.querySelector("#lista");
const liTemplate = document.querySelector("#liTemplate");
const fragmento = document.createDocumentFragment();

const paises = [
    "colombia",
    "ecuador",
    "peru",
    "bolivia",
    "brasil",
    "argentina",
];

mostrarMensaje = (asd) => {
    console.log("mensaje: " + asd.target.textContent);
};

paises.forEach((pais) => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true); //de esta menera (con el firstElementChild) se permite por ejemplo adicionar listeners. de lo contrario poniendo solamente const clone = liTemplate.content.cloneNode(true); no se podrian adicionar eventListeners

    clone.querySelector("span").textContent = pais;
    clone.addEventListener("click", mostrarMensaje);
    fragmento.appendChild(clone);
});

listaHtml.appendChild(fragmento);

// const fragmento = document.createDocumentFragment();

// paises.forEach((pais) => {
//     const li = document.createElement("li");
//     li.textContent = pais;
//     fragmento.appendChild(li); //appendChild solamente puede haber un child en el mismo contenedor y genera reflow por cada vez que empuja un child en un elemento perteneciente al dom, pero fragment no pertenece al dom, por lo que cuando se empuja un elemento dentro de un fragment, no se genera reflow, por tanto primero hacemos todo con el fragment
// });

// console.log(fragmento);
// lista.appendChild(fragmento);
