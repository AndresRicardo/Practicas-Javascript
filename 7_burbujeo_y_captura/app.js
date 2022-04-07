const cajitas = document.querySelectorAll("div");
// console.log(cajitas);

cajitas.forEach((caja) => {
    caja.addEventListener(
        "click",
        (event) => {
            // console.log(event);
            event.stopPropagation();
            console.log(`mensaje click ${event.target.id}`);
        },
        false
    );
});
