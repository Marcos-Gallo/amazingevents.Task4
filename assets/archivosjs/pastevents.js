import { cardCreatePast, checkCreatePast, filterCheckPast, filtradoDeBuscadorPast } from "./module/functions.js"

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) => {
        const dataEventosPast = data.events;
        const buscador = document.getElementById("formSearch");
        const check = document.getElementById("checksPad");
        const filtrarCategorias = [... new Set(dataEventosPast.map(categoria => categoria.category))];
        cardCreatePast(dataEventosPast);
        checkCreatePast(filtrarCategorias, check);
        check.addEventListener("change", () => {
            let aux = filterCheckPast(dataEventosPast);
            cardCreatePast(aux);
        });
        buscador.addEventListener('keyup', (e) => {
            e.preventDefault()
            let buscar = buscador.value.toLowerCase();
            let functionFilt = filtradoDeBuscadorPast(buscar, dataEventosPast);
            let checkCardFiltPast = filterCheckPast(functionFilt);
            cardCreatePast(checkCardFiltPast)
        });
    })
