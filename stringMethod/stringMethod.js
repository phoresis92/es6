//ES2015 string에 새로운 매서드들

let str = "hello world ! ^^ ~~";
let matchstr = "hello";

console.log(str.startsWith(matchstr)); true
console.log(str.endsWith(matchstr)); false

matchstr = "^ ~~";

console.log(str.endsWith(matchstr)); true

matchstr = "world";

console.log(str.includes(matchstr)); true
console.log(str.includes("^^^")); false
