import { SAKKLISTA } from "./adat.js";
import { rendezes, poziciok, kiiras } from "./fuggvenyek.js";
import { sorokMegjelenit } from "./tabla.js";
import { utesEllenorzesTeszt } from "./teszt/utesVizsgalatTeszt.js";
rendezes(SAKKLISTA)
kiiras(poziciok());
sorokMegjelenit(SAKKLISTA);
