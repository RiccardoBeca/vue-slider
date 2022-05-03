/* 

Descrizione:
Partendo dal markup consegnato rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente




*/


const app = new Vue({

    el: "#app",
    data: {

        indiceSlides: 0,
    
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
        cambiaImmagine( indice ) {
            this.indiceSlides = indice;
        },
        incrementa() {
            this.indiceSlides++
            if (this.indiceSlides > this.slides.lenght - 1) {
                this.indiceSlides = 0;
            }
        },
        decrementa() {
            this.indiceSlides--
            if (this.indiceSlides < 0) {
                this.indiceSlides = this.indiceSlides.lenght -1;
            }
            
        },
    }

})




