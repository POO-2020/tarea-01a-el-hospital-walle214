export default class Tiempo {
    /**
     * 
     * @param {Number} hora 
     * @param {Number} minutos 
     * @param {String} periodo AM/PM
     */
    constructor(hora, minutos, periodo = 'AM') {
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = periodo.toUpperCase();
    }
    getFormato12() {
        return `${this.hora}:${this.minutos} ${this.periodo}`;
    }
    getFormato24() {
        return `${this.hora += this.periodo==='AM' ? 0 : 12}:${this.minutos}`;
    }
}