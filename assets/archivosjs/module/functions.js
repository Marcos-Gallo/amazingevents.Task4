//home
export function cardsCreate(list) {
    const cardsContainer = document.getElementById("mainEvents");
    let card = "";
    for (let evento of list) {
        card += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="card-img-top p-2" alt="${evento.name}.img">
    <div class="card-body">
    <h5> ${evento.name} </h5>
    <p class="card-text" id="textoParrafo"> ${evento.description} </p>
    <div id="boton1">
    <p> Price: $ ${evento.price} </p>
    <a href="./assets/details.html?id=${evento._id}&nombre=${evento.name}" class="btn btn-primary" id="move">Details</a>
    </div>
    </div>
</div>`
    }
    cardsContainer.innerHTML = card;
}

export function createCheck(list, elemento) {
    let aux = "";
    list.forEach(element => {
        aux += ` <div class="d-flex  gap-3">
        <div class="form-check-inline">
        <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
        <label class="form-check-label" for="${element}">
        ${element}
        </label>
        </div> `
    });
    elemento.innerHTML = aux;
}
export function filterChecks(evento) {
    let tiltCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map(check => check.value);
    if (tiltCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => tiltCheck.includes(filterCheck.category));
}
export function filterForSearch(search, dataEvents) {
    let filteredSearch = dataEvents.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(search))
    if (filteredSearch.length === 0) {
        return

    }
    return filteredSearch;
}

//upcoming

export function cardsCreateUp(dataEventosUp) {
    const tarjeta = document.getElementById("mainEvents");
    let card = "";
    for (let evento of dataEventosUp) {
        if (evento.date > "2022-09-01") {
            card += `<div class="card" style="width: 18rem;">
            <img src="${evento.image}" class="card-img-top p-2" alt="${evento.name}.img">
            <div class="card-body">
            <h5> ${evento.name} </h5>
            <p class="card-text" id="textoParrafo"> ${evento.description} </p>
            <div id="boton1">
            <p> Price: $ ${evento.price} </p>
            <a href= "details.html?id=${evento._id}&nombre=${evento.name}" class="btn btn-primary" id="move">Details</a>"
            </div>
            </div>
        </div>`
        }
    }
    tarjeta.innerHTML = card;
}


export function createCheckUp(list, elemento) {
    let aux = "";
    list.forEach(element => {
        aux += ` <div class="d-flex  gap-3">
        <div class="form-check-inline">
        <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
        <label class="form-check-label" for="${element}">
        ${element}
        </label>
        </div> `
    });
    elemento.innerHTML = aux;
}

export function filterCheckUp(evento) {
    let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map((check) => check.value);
    if (marcarCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
}

export function filterForSearchUp(buscar, dataEventosUp) {
    let buscadorFiltrado = dataEventosUp.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(buscar))
    if (buscadorFiltrado.length === 0) {

    }
    return buscadorFiltrado;
}

//pastevents

export function cardCreatePast(dataEventosPast) {
    const tarjeta = document.getElementById("mainEvents");
    let card = "";
    for (let evento of dataEventosPast) {
        if (evento.date < "2022-09-01") {
            card += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="card-img-top p-2" alt="${evento.name}.img">
    <div class="card-body">
    <h5> ${evento.name} </h5>
    <p class="card-text" id="textoParrafo"> ${evento.description} </p>
    <div id="boton1">
    <p> Price: $ ${evento.price} </p>
    <a href= "details.html?id=${evento._id}&nombre=${evento.name}" class="btn btn-primary" id="move">Details</a>"
    </div>
    </div>
</div>`
        }
    }
    tarjeta.innerHTML = card;
}

export function checkCreatePast(list, elemento) {
    let aux = "";
    list.forEach(element => {
        aux += ` <div class="d-flex  gap-3">
        <div class="form-check-inline">
        <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
        <label class="form-check-label" for="${element}">
        ${element}
        </label>
        </div> `
    });
    elemento.innerHTML = aux;
}

export function filterCheckPast(evento) {
    let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map((check) => check.value);
    if (marcarCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
}

export function filterForSearchPast(buscar, dataEventosPast) {
    let buscadorFiltrado = dataEventosPast.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(buscar))
    if (buscadorFiltrado.length === 0) {

    }
    return buscadorFiltrado;
}


//details
export function createDetail(evento, container) {
    container.innerHTML = `
    <div class="card" style="width: 40rem;">
    <img src="${evento.image}" class="food-festival" alt="detail-img"
        style="width: 90%; align-self: center; margin-top: 2rem; border-radius: 10%;">
    <div class="card-body">
        <h5 class="card-title" style="font-size: 2rem;">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
    </div>
    <ul class="list-group list-group-flush" style="text-align: center;">
        <li class="list-group-item">Category: ${evento.category}</li>
        <li class="list-group-item">Date: ${evento.date}</li>
        <li class="list-group-item">Place: ${evento.place}</</li>
        <li class="list-group-item">Capacity: ${evento.capacity}</</li>
        <li class="list-group-item">${evento.assistance === undefined ? 'Estimate' : 'Assistance'}:</span> ${evento.assistance === undefined ? evento.estimate : evento.assistance}</</li>
        <li class="list-group-item">Price:${evento.price}</</li>
    </ul>
    </div>`

}

//stats

export function createTable(assistanceUp, assistanceM, capacityM) {
    return `<table>
    <thead>
    <tr class="title-stats">
    <th scope="col" colspan="3" class="title-table1">Event statistics</th>
    </tr>
    <tr>
    <th>Event with the highest persentage of attendance</th>
    <th>Event with the lowest percentage of attendance</th>
    <th>Event with larger capacity</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <th>${assistanceM.name} ${(assistanceM.assistance / assistanceM.capacity * 100).toFixed(2)}%</th>
    <th>${assistanceUp.name} ${(assistanceUp.assistance / assistanceUp.capacity * 100).toFixed(2)}%</th>
    <th>${capacityM.name} ${capacityM.capacity}</th>
    </tr>
    </tbody>
    </table>
    `
}
export function income(lists, noRepeat) {
    let income = [];
    for (let i = 0; i < noRepeat.length; i++) {
        let earn = 0;
        for (let list of lists) {
            if (list.category === noRepeat[i]) {
                if (list.estimate !== undefined) {
                    earn += list.price * list.estimate
                } else {
                    earn += list.price * list.assistance
                }
            }
        }
        income.push(earn);
    }
    return income;
}
export function assistanceUp(lists, noRepeat) {
    let percentage = []
    for (let i = 0; i < noRepeat.length; i++) {
        let estimateT = 0
        let capacityT = 0
        for (let list of lists) {
            if (list.category === noRepeat[i]) {
                estimateT += list.estimate
                capacityT += list.capacity
            }
        }
        percentage.push(estimateT / capacityT * 100)
    }
    return percentage
}
export function assistancePast(lists, noRepeat) {
    let percentage = []
    for (let i = 0; i < noRepeat.length; i++) {
        let assistanceT = 0
        let capacityT = 0
        for (let list of lists) {
            if (list.category === noRepeat[i]) {
                capacityT += (list.capacity)
                assistanceT += (list.assistance)
            }
        }
        percentage.push(assistanceT / capacityT * 100)
    }
    return percentage
}
export function createTableStat(noRepeat, income, assistanceP) {
    let stat = statistics(noRepeat, income, assistanceP);

    return `
    <table>
    <thead>
    <tr class="title-stats">
    <th colspan="3">Upcoming events statistics by category</th>
    </tr>
    <tr>
    <th>Categories</th>
    <th>Revenues</th>
    <th>Persentage of attendance</th>
    </tr>
    </thead>
    <tbody>
    ${stat}
    </tbody
    </table>
    `
}
export function createTablePast(noRepeat, income, assistanceP) {
    let stat = statistics(noRepeat, income, assistanceP);

    return `<table>
    <thead>
    <tr class="title-stats">
      <th colspan="3">Past Events statistic by category</th>
    </tr>
    <tr>
      <th>Categories</th>
      <th>Revenues</th>
      <th>Percentage of attendance</th>
    </tr>
    </thead>
    <tbody>
    ${stat}
  </tbody>
  </table>`;
}
export function statistics(noRepeat, income, assistanceP) {
    let statistics = ""
    for (let i = 0; i < noRepeat.length; i++) {
        statistics += `
        <tr>
        <td>${noRepeat[i]}</td>
        <td>$${income[i]}</td>
        <td>${assistanceP[i].toFixed(2)}%</td>
        </tr>
        `
    }
    return statistics
}