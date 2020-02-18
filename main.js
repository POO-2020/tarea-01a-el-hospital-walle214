import Fecha from "./modulos/Fecha.js";

const probarFecha = () => {
    const ulises = new Fecha(24, 9, 2000);

    console.log(
        ulises.getAnnios(),
        ulises.getDiaFecha(),
        ulises.getDias(),
        ulises.getFecha(),
        ulises.getMeses(),
        ulises.getSemanas()
    );
}