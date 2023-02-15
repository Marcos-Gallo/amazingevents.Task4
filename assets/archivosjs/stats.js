import { createTable, income, assistanceUp, assistancePast, createTablePast, createTableStat, statistics } from "./module/functions.js"

let api = "https://mindhub-xj03.onrender.com/api/amazing";

const tableC = document.getElementById("cont-table")


async function fetchData() {
    try {
        const response = await fetch(api)
        const data = await response.json()


        const pastEvents = data.events.filter(event => event.date < data.currentDate)
        const upEvents = data.events.filter(event => event.date > data.currentDate)

        const capacity = pastEvents.reduce((a, b) => a.capacity > b.capacity ? a : b)
        const AssistanceH = pastEvents.reduce((a, b) => (a.assistance / a.capacity * 100) < (b.assistance / b.capacity * 100) ? a : b)
        const AssistanceM = pastEvents.reduce((a, b) => (a.assistance / a.capacity * 100) > (b.assistance / b.capacity * 100) ? a : b)

        // Upcoming events

        const categoryUp = upEvents.map(event => event.category)
        const categoryFirstUp = [...new Set(categoryUp)]
        const incomeUp = income(upEvents, categoryFirstUp)
        const assistanceUpData = assistanceUp(pastEvents, categoryFirstUp)

        // Past events

        const categoryPast = pastEvents.map(event => event.category)
        const categoryFirstPast = [...new Set(categoryPast)]
        const incomePast = income(pastEvents, categoryFirstPast)
        const assistancePastData = assistancePast(pastEvents, categoryFirstPast)


        let table = createTable(AssistanceH, AssistanceM, capacity)
        let tableA = createTableStat(categoryFirstUp, incomeUp, assistanceUpData)
        let tableB = createTablePast(categoryFirstPast, incomePast, assistancePastData)

        let tableX = table + tableA + tableB
        tableC.innerHTML = tableX
    }
    catch (error) {
        console.log(`The error is`, error);
    }
}
fetchData()