const colors = [
    'red',
    'green',
    'blue',
    'yellow'
];

const hTimer = document.querySelector('#timer');
const hQuestion = document.querySelector('#question');

let timer = 5;
setInterval(() => {
    if (timer == 0) {
        const index = Math.floor(Math.random() * 4);
        console.log(index, colors[index]);
        hQuestion.style.backgroundColor = colors[index];
        timer = 5;
    } 
    hTimer.textContent = timer--;
}, 1000);