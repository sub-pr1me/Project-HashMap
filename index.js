import { HashMap } from "./script.js";

const test = HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.entries());
console.log(test.length());
console.log(test.loadFactor());

// test.set('moon', 'silver');

// console.log(test.entries());
// console.log(test.length());
// console.log(test.loadFactor());