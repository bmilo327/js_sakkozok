import { utesEllenorzes } from "../fuggvenyek.js";



const esetLista = [
    {
        pozicio1 : "a1",
        pozicio2 : "a1",
        vart : false,
        szoveg : "egy mezőn nem lehet két bábu"
    },
    {
        pozicio1 : "a1",
        pozicio2 : "c3",
        vart : true,
        szoveg : "bábuk ütik egymás átlósan"
    },
    {
        pozicio1 : "c3",
        pozicio2 : "a1",
        vart : true,
        szoveg : "bábuk ütik egymást átlósan fordítva"
    },
    {
        pozicio1 : "a1",
        pozicio2 : "h8",
        vart : true,
        szoveg : "bábuk ütik egymást sorban"
    },
    {
        pozicio1 : "a1",
        pozicio2 : "a8",
        vart : true,
        szoveg : "bábuk ütik egymást oszlopban"
    },
    {
        pozicio1 : "a1",
        pozicio2 : "d8",
        vart : false,
        szoveg : "bábuk nem ütik egymást"
    },
    {
        pozicio1 : "",
        pozicio2 : "",
        vart : false,
        szoveg : "nincs pozíció megadva"
    },
    {
        pozicio1 : "a12",
        pozicio2 : "xc34",
        vart : false,
        szoveg : "nincsenek ilyen mezők a táblán"
    },
]

export function utesEllenorzesTeszt() {
    for (let index = 0; index < esetLista.length; index++) {
        let eredmeny = utesEllenorzes(esetLista[index].pozicio1, esetLista[index].pozicio2);
        console.assert(eredmeny === esetLista[index].vart, `pozicio1=${esetLista[index].pozicio1}, pozicio2=${esetLista[index].pozicio2}, elvárt:${esetLista[index].vart}, kapott:${eredmeny}`, esetLista[index].szoveg);
    }
    console.log("Minden teszt lefutott");
}

utesEllenorzesTeszt();
