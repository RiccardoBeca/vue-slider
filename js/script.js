/* 
Descrizione:
Partendo dal markup consegnato rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente
*/


const app = new Vue({

    el: "#app",
    data: {
        
        indiceSlides: 0,
        // data property con array di oggetti
        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
    },

    methods: {
        // con  questa funzione associo la proprieta' indiceSlides come parametro della funzione in modo che esso possa incrementare o decrementare quando andro' a chiamare le successive funzioni 
        cambiaImmagine( indice ) {
            this.indiceSlides = indice;
        },
        // chiamando la funzione l'indice verra' incrementato
        incrementa() {
            this.indiceSlides++;
            if (this.indiceSlides > this.slides.length - 1) {
                this.indiceSlides = 0;
            }
            console.log(this.incrementa);
        },
        // chiamando la funzione l'indice verra' incrementato
        decrementa() {
            this.indiceSlides--;
            if (this.indiceSlides < 0) {
                this.indiceSlides = this.slides.length -1;
            }
            console.log(this.decrementa);
        },
    }
})




