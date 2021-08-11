const app = new Vue({
    el: '#app',
    data: {
        pets: [],
        name: '',
        specie: ''
    },
    methods: {
        onRegister() {
            this.pets.push({
                petName: this.name,
                petSpecie: this.specie
            })

            this.name = ''
            this.specie = ''
        }
    }
})