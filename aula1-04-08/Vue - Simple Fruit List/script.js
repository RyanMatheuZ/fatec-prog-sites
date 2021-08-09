const app = new Vue({
    el: '#app',
    data: {
        fruit: [],
        text: '',
        totalFruit: 0
    },
    methods: {
        onAddFruit() {
            this.fruit.push(this.text)

            this.text = ''

            this.totalFruit = this.fruit.length
        }
    }
})