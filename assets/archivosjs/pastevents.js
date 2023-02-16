import { cardCreatePast, checkCreatePast, filterCheckPast, filterForSearchPast } from "./module/functions.js"

const buscador = document.getElementById("formSearch");
const check = document.getElementById("checksPad");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) => {
        const dataEventosPast = data.events;

        const categFilt = [... new Set(dataEventosPast.map(categoria => categoria.category))];
        cardCreatePast(dataEventosPast);
        checkCreatePast(categFilt, check);
        check.addEventListener("change", () => {
            let search = buscador.value.toLowerCase();
            let functionFilt = filterForSearchPast(search, dataEventosPast);
            let aux = filterCheckPast(functionFilt);
            cardCreatePast(aux);
        });
        buscador.addEventListener('keyup', (e) => {
            let aux = filterCheckPast(dataEventosPast);
            let search = buscador.value.toLowerCase();
            let functionFilt = filterForSearchPast(search, aux);
            let checkCardFiltPast = filterCheckPast(functionFilt);
            cardCreatePast(checkCardFiltPast)
        });
    })
