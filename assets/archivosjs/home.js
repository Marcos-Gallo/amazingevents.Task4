import { cardsCreate, createCheck, filterChecks, filterForSearch, } from "./module/functions.js"

const cardsContainer = document.getElementById("mainEvents");
const check = document.getElementById("checksPad");
const buscador = document.getElementById("formSearch");



fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) => {
        const dataEvents = data.events;
        const categFilt = [... new Set(dataEvents.map(categorie => categorie.category))];
        cardsCreate(dataEvents, cardsContainer);
        createCheck(categFilt, check);
        check.addEventListener("change", () => {
            let search = buscador.value.toLowerCase();
            let fnFiltered = filterForSearch(search, dataEvents);
            let aux = filterChecks(fnFiltered);
            cardsCreate(aux);
        });
        buscador.addEventListener('keyup', (e) => {
            let aux = filterChecks(dataEvents);
            let search = buscador.value.toLowerCase();
            let fnFiltered = filterForSearch(search, aux);
            let filtCheckCard = filterChecks(fnFiltered);
            cardsCreate(filtCheckCard)
        });
    })

























































































// const cardsContainer = document.getElementById("main-events")
// const infoCards = data.events
// const datos = infoCards.map(infoCard => infoCard.category
// )
// // createCards(InfoCards)
// //      function createCard (infoCards) {
// //     let card = "";
// //     for (let infoCard of infoCards) {
// //         card += `<div class="card" style="width: 15rem;">
// //     <div class="card-body">
// //     <img src="${infoCard.image}" alt="food-fest">
// //     <h5 class="card-title">${infoCard.name}</h5>
// //     <p class="card-text">${infoCard.description}</p>
// //     <h6 class="card-subtitle mb-2 text-muted">Price: $${infoCard.price}</h6>
// //     <a href="./assets/details.html" class="card-link">More details</a>
// //      </div>
// //      </div>`
// //     }
// //     cardsContainer.innerHTML = card
// // }


// //Buscador
// const formSearch = document.querySelector('#formSearch')
// const buttonSearch = document.querySelector('#buttonSearch')
// // const resultSearch = document.querySelector('#resultSearch')
// const resultSearch = document.querySelector('#main-events')

// const searchFilter = () => {
//     resultSearch.innerHTML = "";
//     let texto = formSearch.value.toLowerCase();
//     for (let infoCard of data.events) {
//         let name = infoCard.name.toLowerCase();
//         if (name.indexOf(texto) !== -1) {
//             resultSearch.innerHTML += `<div class="card" style="width: 15rem;">
//             <div class="card-body">
//                 <img src="${infoCard.image}" alt="food-fest">
//                 <h5 class="card-title">${infoCard.name}</h5>
//                 <p class="card-text">${infoCard.description}</p>
//                 <h6 class="card-subtitle mb-2 text-muted">Price: $${infoCard.price}</h6>
//                 <a href="./assets/details.html" class="card-link">More details</a>
//             </div>
//             </div>`
//         }
//     } if (resultSearch.innerHTML === "") {
//         resultSearch.innerHTML += `<li> Comand not found...</li>`
//     }
// }
// // buttonSearch.addEventListener('click', searchFilter)
// formSearch.addEventListener('keyup', searchFilter)
// searchFilter()

// //checks

// const checks = document.getElementById("checksPad")
// const filtCategories = [... new Set(infoCards.map(categorie => categorie.category))]
// console.log(filtCategories)

// function checksCreate(filtCategories, elemento) {
//     let aux = " "
//     filtCategories.forEach(element => {
//         aux += ` <div class="d-flex  gap-3">
//             <div class="form-check-inline">
//             <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
//             <label class="form-check-label" for="${element}">
//             ${element}
//             </label>
//             </div> `
//     });
//     elemento.innerHTML = aux
// }
// checksCreate(filtCategories, checks)

// function filtroCheck(evento) {
//     let marcarCheck = [...document.querySelectorAll(),].map(check => checks)
// }









// const categoriesFilter = [... new Set(infoCards.map(cat => cat.category))];






























// buttonSearch.addEventListener("click", searchFilter)
// formSearch.addEventListener("keyup", searchFilter)
// function filterOfSearcher(buscar, infoCards) {
//     let f
// }

// formSearch.addEventListener('keyup', (e) => {
//     e.preventDefault()
//     let buscar = formSearch[0].value.toLowerCase();
//     let funcionFiltrado = filtradoDeBuscador(buscar, dataEventos);
//     let checkCardFiltro = filtroCheck(funcionFiltrado);
//     crearCards(checkCardFiltro)
// });

// const check = document.getElementById("checks");



// function createCheck(categoriesFilter, elemento) {
//     let aux = "";
//     categoriesFilter.forEach(element => {
//         aux += ` <div class="input-checks">
//         <input type="checkbox" id="${element}" value="${element}">Food Fair
//         </div>`
//     });
//     elemento.innerHTML = aux;
// }
// createCheck(categoriesFilter, check);

// function filCheck(evento) {
//     let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map((check) => check.value);
//     if (marcarCheck.length === 0) {
//         return evento;
//     }
//     return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
// }
// check.addEventListener("change", () => {
//     let aux = filCheck(infoCards);
//     createCards(aux);
// });


