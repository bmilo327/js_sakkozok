import { megjelenit } from "./sorok.js";


export function sorokMegjelenit(SAKKLISTA) {
    let tbodyElem = document.getElementById("tbody");
    tbodyElem.innerHTML = "";
    SAKKLISTA.forEach(function (adat, index) {
        megjelenit(adat, tbodyElem);
    })
}