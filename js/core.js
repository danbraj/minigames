const colors = [
    'red',
    'green',
    'blue',
    'yellow'
];

const hTimer = document.querySelector('#timer');
const hQuestion = document.querySelector('#question');
const hAnswersList = document.querySelector('#answers-list');
const hScore = document.querySelector('#score');

let isAvailableAnswer = true;
let timer = 5;
const countdown = () => {
    if (timer == 0) {
        const index = Math.floor(Math.random() * 4);
        console.log(index, colors[index]);
        hQuestion.style.backgroundColor = colors[index];
        isAvailableAnswer = true;
        timer = 5;
    } 
    hTimer.textContent = timer--;
}

let score = 0;
hAnswersList.addEventListener('click', function(evt) {
    if (isAvailableAnswer && evt.target.attributes['data-name'].textContent === hQuestion.style.backgroundColor) {
        isAvailableAnswer = false;
        hScore.textContent = ++score;
        timer = 0;
    }
});

setInterval(countdown, 1000);