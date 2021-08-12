const app = new Vue({
    el: '#app',
    data: {
        species: ['Peixe', 'Cachorro', 'Gato', 'Jabuti', 'Hamster', 'Cavalo', 'Papagaio'],
        totalPets: 0,
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

            this.totalPets += 1

            this.name = ''
            this.specie = ''
        }
    }
})