export default class Nombre {
    /**
     *  
     * @param {String} nombre 
     * @param {String} apellidoPaterno 
     * @param {String} apellidoMaterno 
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
    }
    getApellidoNombre(){
        return `${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`;
    }
    getIniciales(){
        return `${this.apellidoPaterno[0]}${this.apellidoMaterno[0]}${this.nombre[0]}`;
    }
}