import Fecha from "./modulos/Fecha.js";
import Tiempo from "./modulos/Tiempo.js";
import Nombre from "./modulos/Nombre.js";
import Doctor from "./modulos/Doctor.js";
import Paciente from "./modulos/Paciente.js";

const ulisesNombre = new Nombre('Ulises', 'Ramirez', 'Martinez');
const ulisesFechaNacimiento = new Fecha(24, 9, 2000);

const probarFecha = _ => {

    console.log(
        ulisesFechaNacimiento.getAnnios(),
        ulisesFechaNacimiento.getDiaFecha(),
        ulisesFechaNacimiento.getDias(),
        ulisesFechaNacimiento.getFecha(),
        ulisesFechaNacimiento.getMeses(),
        ulisesFechaNacimiento.getSemanas()
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
        ulisesNombre.getApellidoNombre(),
        ulisesNombre.getIniciales(),
        ulisesNombre.getNombreCompleto()
    );
}
const probarDoctor = _ => {
    const doctor = new Doctor(ulisesNombre, 'Cirujano', 31233998831, 'dsfbsdgb');
    console.log(doctor.getPerfil());
}
const probarPaciente = _ => {
    const paciente = new Paciente(ulisesNombre,ulisesFechaNacimiento,3123398831);
    console.log(paciente.getPerfil());
}
