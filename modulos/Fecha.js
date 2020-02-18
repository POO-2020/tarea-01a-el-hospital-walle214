export default class Fecha {
    /**
     * 
     * @param {String} dia Dia del mes
     * @param {String} mes Mes del año, comienza en 0(Enero)
     * @param {String} annio Año de la fecha
     */
    constructor(dia, mes, annio) {
        this.fecha = new Date(annio, mes, dia);
    }
    getMsecTrascurridos() {
        return Date.now() - this.fecha;
    }
    getAnnios() {
        return Math.trunc(this.getMsecTrascurridos() / 31557600000);
    }
    getMeses() {
        return Math.trunc(this.getMsecTrascurridos() / 2629800000);
    }
    getSemanas() {
        return Math.trunc(this.getMsecTrascurridos() / 604800000);
    }
    getDias() {
        return Math.trunc(this.getMsecTrascurridos() / 86400000);
    }
    getFecha() {
        const meses = ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agto', 'Sept', 'Oct', 'Nov', 'Dic'];
        return `${this.fecha.getDate()}/${meses[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`;
    }
    getDiaFecha() {
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return dias[this.fecha.getDay()];
    }
}