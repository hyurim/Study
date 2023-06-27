/* 
const age = 28;
let a, b, c;

// a = age.toString(2);
// b = age.toString(8);
// c = age.toString(16);

a = parseInt(age.toString(2), 2);
b = parseInt(age.toString(8), 8);
c = parseInt(age.toString(16), 16);

console.log(a);
console.log(b);
console.log(c);
 */

const uri = 'http://example.com?name=임종현&job=programmer&teacher';

const enc = encodeURI(uri);
console.log(enc);