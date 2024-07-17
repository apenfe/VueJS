'use strict'

new Vue({

    el: 'main',
    data: {
        texto: "Hola mundo desde vue2",
        nombre: "Adrián",
        apellidos: "Peñalver Fernández",
        nota: 4,
        peliculas: ['batman','los mercenarios','spiderman','Anastasia'],
        frutas: [
            {nombre: "manzana", temporada: "invierno", precio: 'bajo'},
            {nombre: "uva", temporada: "invierno", precio: 'medio'},
            {nombre: "fresa", temporada: "verano", precio: 'alto'}
        ],
        superfruta: {nombre: "mandarina", temporada: "verano", precio: 'bajo'},
        peliculaNueva: null
    },
    methods: {
        crearPelicula(){
            alert('metodo crear pelicula --> '+this.peliculaNueva);
            this.peliculas.unshift(this.peliculaNueva);
            this.peliculaNueva = null;
        },
        borrarPelicula(indice){
            this.peliculas.splice(indice,1);
            alert('metodo borrar pelicula -->'+indice);
        }
    },
    computed: {
        nombreYapellidos(){

            var date = new Date();
            var year = date.getFullYear();

            return this.nombre + " " + this.apellidos + " - Nota: " + this.nota + " Año: " + year;
        },
        peliculasOrdenadas(){
            var lista = this.peliculas.slice();
            return lista.sort();
        }
    }
});