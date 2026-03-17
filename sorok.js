
export function megjelenit(
    adat = {nev, nemzetiseg, gyozelmek_szama}, tbodyElem)
    {
        let szoveg = `
            <tr>
                <td>${adat.nev}</td>
                <td>${adat.nemzetiseg}</td>
                <td>${adat.gyozelmek_szama}</td>
            </tr>
        `;
    tbodyElem.innerHTML += szoveg;
}