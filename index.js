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
console.log(test.length(), '- length test');

test.set('moon', 'silver');

console.log(test.entries());
console.log(test.length(), '- length test');

test.set('moon', '---TEST---');

console.log(test.entries());
console.log(test.length(), '- length test');

console.log(test.get('kite'), '- get test');
console.log(test.has('lion'), '- testing if "lion" key exists');
console.log(test.has('chimpanzee'), '- testing if "chimpanzee" key exists');

test.remove('elephant');
console.log(test.entries());
console.log(test.length(), '- length test');

console.log(test.keys());
console.log(test.values());