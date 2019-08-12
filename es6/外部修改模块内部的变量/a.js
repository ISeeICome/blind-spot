require { a, update } from './b.js';
var b = 55;
update(b);
setInterval(() => {
    console.log(a);
}, 500);