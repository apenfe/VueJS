'use strict'

new Vue({

    el: 'main',
    data: {
        texto: "Hola mundo desde vue2",
        nombre: "nombre por defecto",
        nota: 4,
        peliculas: ['batman','los mercenarios','spiderman'],
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
    }
});