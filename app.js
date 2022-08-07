const first = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'the final empire',
            author: 'Arapu Trevor',
            age: 26
        }
    },
    methods: {
        toggleBooks() {
            this.showBooks = !this.showBooks
        },
        changeTitle(title) {
            this.title = title
        }
    }
})

first.mount('#app')