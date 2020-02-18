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
        const msecNow = Date.now.getMilliseconds();
        return this.fecha.getMilliseconds() - msecNow;
    }
    getAnnios() {
        return Math.trunc(this.getMsecTrascurridos() / 31, 556, 900, 000);
    }
    getMeses() {
        return Math.trunc(this.getMsecTrascurridos() / 2.628e+9);
    }
    getSemanas() {
        return Math.trunc(this.getMsecTrascurridos() / 6.048e+8);
    }
    getDias() {
        return Math.trunc(this.getMsecTrascurridos() / 8.64e+7);
    }
    getFech() {
        const meses = ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agto', 'Sept', 'Oct', 'Nov', 'Dic'];
        return `${this.fecha.getDay()}/${meses[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`;
    }
    getDiaFecha() {
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return dias[this.fecha.getDay()];
    }
}