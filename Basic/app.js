const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            // title: 'The Final Empire',
            // author: 'brandon Sanderson',
            // age: 45,
            // x: 0,
            // y: 0
            books: [
                { 
                title: 'name of the wind',
                author: 'patrick adam',
                img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105',
                isFav: true
                },
                { 
                title: 'the way of kings',
                author: 'brandon sanderson',
                img: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg',
                isFav: false
                },
                {
                title: 'the final empire',
                author: 'brandon rothfuss',
                img: 'https://i.pinimg.com/originals/a4/aa/c1/a4aac1f3d86869bcfd2833e8be768014.jpg',
                isFav: true
                }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        // handleEvent(e, data) {
        //     console.log(e, e.type)
        //     if (data) {
        //         console.log(data);
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')