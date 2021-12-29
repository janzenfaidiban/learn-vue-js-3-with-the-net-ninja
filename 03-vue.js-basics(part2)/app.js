const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss' },
                { title: 'the way of kings', author: 'brandong sanderson' },
                { title: 'the final empire', author: 'brandong sanderson' },
            ]
        }
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if(data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }

})

app.mount('#app')