import { createDetail } from "./module/functions.js"

const contenederoCartas = document.getElementById("mainEvents")
const contenedorDetails = document.getElementById("details-content")





fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(response => response.json())
    .then((data) => {
        const contenedorDetails = document.getElementById("details-content")
        const params = new URLSearchParams(location.search)
        const id = params.get("id")
        const evento = data.events.find(evento => evento._id == id)

        createDetail(evento, contenedorDetails)

    })











// const params = new URLSearchParams(location.search)
// const id = params.get("id")
// const nombres = params.get("nombre")
// // document.title = `Details of ${nombres}`
// // const aux = nombres[0].toUpperCase() + nombres.slice(1).toLowerCase

// const evento = data.events.find(evento => evento._id == id)


// console.log(params)

// contenedorDetails.innerHTML = `
//             <div class="card" style="width: 40rem;">
//             <img src="${evento.image}" class="food-festival" alt="detail-img"
//                 style="width: 90%; align-self: center; margin-top: 2rem; border-radius: 10%;">
//             <div class="card-body">
//                 <h5 class="card-title" style="font-size: 2rem;">${evento.name}</h5>
//                 <p class="card-text">${evento.description}</p>
//             </div>
//             <ul class="list-group list-group-flush" style="text-align: center;">
//                 <li class="list-group-item">Category: ${evento.category}</li>
//                 <li class="list-group-item">Date: ${evento.date}</li>
//                 <li class="list-group-item">Place: ${evento.place}</</li>
//                 <li class="list-group-item">Capacity: ${evento.capacity}</</li>
//                 <li class="list-group-item">Assistance:${evento.assistance}</</li>
//                 <li class="list-group-item">Price:${evento.price}</</li>
//             </ul>
//             </div>`
