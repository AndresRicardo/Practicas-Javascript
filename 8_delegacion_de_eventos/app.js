const cajitas = document.querySelectorAll("div");
// console.log(cajitas);

cajitas.forEach((caja) => {
    //con esta forma de seleccionar el elemento en el que se generó el evento se podría inclusive asignar el eventListener al mismo document document.addEventListener((e)=>{})
    caja.addEventListener(
        "click",
        (event) => {
            // event.stopPropagation();
            // console.log(event);
            // const elemento = event.target.id;

            // switch (elemento) {
            //     case "padre":
            //         console.log("rutina si se clickea en padre");
            //         break;
            //     case "hijo":
            //         console.log("rutina si se clickea en hijo");
            //         break;
            //     case "nieto":
            //         console.log("rutina si se clickea en nieto");
            //         break;
            //     default:
            //         console.log("rutina si se clickea en nieto");
            //         brea;
            // }

            if (event.target.matches("#padre")) console.log("click en padre");
            if (event.target.id === "hijo") console.log("click en hijo");
            if (event.target.dataset.value === "divNieto")
                console.log("click en nieto");
        },
        false
    );
});
