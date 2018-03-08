var game = new Vue({
    el: '#game',
    data: {
        intervalId: null,
        taskCounter: 0,
        timer: 5,
        score: 0,
        isAvailableAnswer: true,
        isCorrectAnswer: false,
        currColor: 'white',
        colors: [
            'red',
            'green',
            'blue',
            'yellow'
        ]
    },
    methods: {
        countdown: function () {
            this.timer--;
            if (this.isCorrectAnswer || this.timer == 0) {
                this.isCorrectAnswer = false;
                const index = Math.floor(Math.random() * 4);
                // console.log(index, this.colors[index]);
                this.currColor = this.colors[index];
                this.taskCounter++;
                this.isAvailableAnswer = true;
                this.timer = 5;
            }
        },
        answer: function (evt) {
            // console.log(evt.target);
            if (this.isAvailableAnswer && evt.target.attributes['data-name'].textContent === this.currColor) {
                this.isAvailableAnswer = false;
                this.score++;
                this.isCorrectAnswer = true;
            }
        }
    },
    mounted: function () {
        this.intervalId = setInterval(this.countdown, 1000);
    }
});