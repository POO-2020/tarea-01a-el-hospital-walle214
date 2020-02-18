import Fecha from "./modulos/Fecha.js";
import Tiempo from "./modulos/Tiempo.js";
import Nombre from "./modulos/Nombre.js";
import Doctor from "./modulos/Doctor.js";

const ulises = new Nombre('Ulises', 'Ramirez', 'Martinez');

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
    const medioDia = new Tiempo(12, 0, 'am');
    console.log(
        medioDia.getFormato12(),
        medioDia.getFormato24()
    );
}
const probarNombre = _ => {
    console.log(
        ulises.getApellidoNombre(),
        ulises.getIniciales(),
        ulises.getNombreCompleto()
    );
}
const probarDoctor = _ => {
    const doctor = new Doctor(ulises, 'Cirujano', 31233998831, 'dsfbsdgb');
    console.log(doctor.getPerfil());
}
