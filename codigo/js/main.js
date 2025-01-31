Vue.component('articulos', {

    template: `

    <div class="componente-articulos">
        <h1>COMPONENTE {{titulo}}</h1>
        <h1>Listado por AJAX</h1>

        <ul v-if="posts">
            <li v-for="(post, indice) in posts">
                {{indice}}: {{post.title}}
            </li>
        </ul>
        <span v-else>Cargando lista por ajax...</span>
    </div>
    `,
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((respuesta) => {
            this.posts = respuesta.data;
        });
    },
    data(){
        return{
            titulo: "articulos",
            posts: null,
        }
    }
});

Vue.component('frutas', {
    props: ['objeto'],
    data(){
        return{
            titulo: "frutas",
        }
    },
    mounted(){
        console.log(this.objeto);
    }
});

Vue.component('padre', {
    template: `<div>
    <h1>COMPONENTE PADRE</h1>
        <div>
        <hijo></hijo>
        </div>
    </div>`
});

Vue.component('hijo', {
    template: `<p style="background: yellow;">
    soy un parrafo en el componente hijo
    </p>`
});


Vue.filter('mayusculas', (value) => value.toUpperCase());

new Vue({

    el: 'main',
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((respuesta) => {
            this.posts = respuesta.data;
        });
    },
    data: {
        elegido: 'padre',
        posts: null,
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
        peliculaNueva: null,
        busqueda: '',
        confirmado: null
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
        },
        marcar(index){
            this.confirmado = index;
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
        },
        buscarFruta(){
            return this.frutas.filter((fruta) => fruta.nombre.includes(this.busqueda));
        }
    }
});

const vue2 = new Vue({

    el: '#app',
    data: {
        texto: "Segunda instancia vue",
    }

});

const vue3 = new Vue({

    el: '#tercera',
    data: {
        texto: "Tercera instancia vue",
    }
    
});