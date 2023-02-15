import { cardsCreateUp, createCheckUp, filterCheckUp, filterForSearchUp } from "./module/functions.js"

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) => {
        const dataEventosUp = data.events;
        const buscador = document.getElementById("formSearch");
        const check = document.getElementById("checksPad");
        const filtrarCategorias = [... new Set(dataEventosUp.map(categoria => categoria.category))];
        cardsCreateUp(dataEventosUp);
        createCheckUp(filtrarCategorias, check);
        check.addEventListener("change", () => {
            let aux = filterCheckUp(dataEventosUp);
            cardsCreateUp(aux);
        });
        buscador.addEventListener('keyup', (e) => {
            e.preventDefault()
            let buscar = buscador.value.toLowerCase();
            let functionFilt = filterForSearchUp(buscar, dataEventosUp);
            let checkCardFiltUp = filterCheckUp(functionFilt);
            cardsCreateUp(checkCardFiltUp)
        });
    })











