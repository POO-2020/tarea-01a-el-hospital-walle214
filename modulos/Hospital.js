import Doctor from "./Doctor.js";

export default class Hospital {
    /**
     * 
     * @param {String} nombre nombre del hospital
     * @param {String} direccion direccion del hospital
     */
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.doctores = [];
        this.citas = []
    }
    /**
     * @param {Doctor} doctor 
     */
    registrarDoctor(doctor) {
        return this.doctores.push(doctor);
    }
    listarDoctores() {
        this.doctores.map(d => console.log(d.getPerfil(),'\n'));
    }
}