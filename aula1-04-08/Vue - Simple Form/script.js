const app = new Vue({
    el: '#app',
    data: {
        name: '',
        age:'',
        gender: '',
        message: ''
    },
    methods: {
        onClear(event) {
            event.preventDefault()

            this.name = ''
            this.age = ''
            this.gender = ''
            this.message = ''
        },

        onSubmit(event) {
            event.preventDefault()

            this.message = 'Mensagem enviada!'
        }
    }
})