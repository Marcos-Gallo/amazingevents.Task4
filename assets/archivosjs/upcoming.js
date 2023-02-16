import { cardsCreateUp, createCheckUp, filterCheckUp, filterForSearchUp } from "./module/functions.js"

const buscador = document.getElementById("formSearch");
const check = document.getElementById("checksPad");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) => {
        const dataEventosUp = data.events;
        const filtrarCategorias = [... new Set(dataEventosUp.map(categoria => categoria.category))];
        cardsCreateUp(dataEventosUp);
        createCheckUp(filtrarCategorias, check);
        check.addEventListener("change", () => {
            let search = buscador.value.toLowerCase();
            let functionFilt = filterForSearchUp(search, dataEventosUp);
            let aux = filterCheckUp(functionFilt);
            cardsCreateUp(aux);
        });
        buscador.addEventListener('keyup', (e) => {
            let aux = filterCheckUp(dataEventosUp);
            let search = buscador.value.toLowerCase();
            let functionFilt = filterForSearchUp(search, aux);
            let checkCardFiltUp = filterCheckUp(functionFilt);
            cardsCreateUp(checkCardFiltUp)
        });
    })











