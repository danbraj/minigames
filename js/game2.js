new Vue({
    el: '#game2',
    data: {
        columns: 16,
        rows: 8,
        map: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    created: function () {
        window.addEventListener('keydown', this.pressKey)
    },
    methods: {
        pressKey: function (e) {
            // console.log(e.keyCode);
            if (e.keyCode == 37) {          // <
                console.log('<');
            } else if (e.keyCode == 38) {   // A
                console.log('A');
            } else if (e.keyCode == 39) {   // >
                console.log('>');
            } else if (e.keyCode == 40) {   // V
                console.log('V');
            }
        }
    }
});