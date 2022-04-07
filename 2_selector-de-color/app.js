let inputColor = document.getElementById("inputColor");
let btnVisualizar = document.getElementById("btnVisualizar");
let card = document.querySelector(".card");
let TextoConColor = document.querySelector(".lead");

btnVisualizar.addEventListener("click", () => {
    let col = inputColor.value;
    TextoConColor.textContent = col;
    card.style.backgroundColor = col;
});
