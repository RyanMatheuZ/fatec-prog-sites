const app = new Vue({
    el: '#app',
    data: {
        text: '',
        tasks: []
    },
    methods: {
        onAddTask() {
            this.tasks.push(this.text)

            this.text = ''
        },

        onClearTask() {
            this.text = ''
        }
    }
})