import Fecha from "./modulos/Fecha.js";
import Tiempo from "./modulos/Tiempo.js";

const probarFecha = _ => {
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
const probarTiempo = _ => {
    const medioDia = new Tiempo(12,0,'am');
    console.log(
        medioDia.getFormato12(),
        medioDia.getFormato24()
    );
}