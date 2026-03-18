import { SAKKLISTA } from "./adat.js";
import { sorokMegjelenit } from "./tabla.js";

export function rendezes(lista) {
  let nevAZElem = document.getElementById("nevAZ");
  let nevZAElem = document.getElementById("nevZA");
  let nemzNoElem = document.getElementById("nemzNo");
  let nemzCsokkElem = document.getElementById("nemzCsokk");
  let gyozelemNoElem = document.getElementById("gyozelemNo");
  let gyozelemCsokkElem = document.getElementById("gyozelemCsokk");

  nevAZElem.addEventListener("click", function () {
    lista.sort(function (a, b) {
      return a.nev > b.nev ? 1 : -1;
    });
    sorokMegjelenit(lista);
  });

  nevZAElem.addEventListener("click", function () {
    lista.sort(function (a, b) {
      return a.nev < b.nev ? 1 : -1;
    });
    sorokMegjelenit(lista);
  });

  nemzNoElem.addEventListener("click", function () {
    lista.sort(function (a, b) {
      return a.nemzetiteg > b.nemzetiseg ? 1 : -1;
    });
    sorokMegjelenit(lista);
  });

  nemzCsokkElem.addEventListener("click", function () {
    lista.sort(function (a, b) {
      return a.nemzetiseg < b.nemzetiseg ? 1 : -1;
    });
    sorokMegjelenit(lista);
  });

  gyozelemNoElem.addEventListener("click", function () {
    lista.sort(function (a, b) {
      return a.gyozelmek_szama - b.gyozelmek_szama;
    });
    sorokMegjelenit(lista);
  });

  gyozelemCsokkElem.addEventListener("click", function () {
    lista.sort(function (a, b) {
      console.log(b.gyozelem_szama);
      return b.gyozelmek_szama - a.gyozelmek_szama;
    });
    sorokMegjelenit(lista);
  });
}

export function ppoziciok() {
  let lep1Elem = document.getElementById("pozicio1");
  let lep2Elem = document.getElementById("pozicio2");

  let gombElem = document.getElementById("gomb");
  gombElem.addEventListener("click", function () {
    let lep1 = lep1Elem.value;
    let lep2 = lep2Elem.value;
    console.log(lep1, lep2);
    utesEllenorzes(lep1, lep2);
  });
}

export function utesEllenorzes(lep1, lep2) {
    let o1 = lep1[0];
    let s1 = lep1[1];
    let o2 = lep2[0];
    let s2 = lep2[1];

    switch (o1) {
        case "a":
            o1 = 1;
            break;
        case "b":
            o1 = 2;
            break;
        case "c":
            o1 = 3;
            break;
        case "d":
            o1 = 4;
            break;
        case "e":
            o1 = 5;
            break;
        case "f":
            o1 = 6;
            break;
        case "g":
            o1 = 7;
            break;
        case "h":
            o1 = 8;
            break;
    }

    switch (o2) {
        case "a":
            o2 = 1;
            break;
        case "b":
            o2 = 2;
            break;
        case "c":
            o2 = 3;
            break;
        case "d":
            o2 = 4;
            break;
        case "e":
            o2 = 5;
            break;
        case "f":
            o2 = 6;
            break;
        case "g":
            o2 = 7;
            break;
        case "h":
            o2 = 8;
            break;
    }

    

    if (o1 === o2) {
        return true;
    }else if (s1 === s2) {
        return true;
    }else if (o2) {

    }
}
