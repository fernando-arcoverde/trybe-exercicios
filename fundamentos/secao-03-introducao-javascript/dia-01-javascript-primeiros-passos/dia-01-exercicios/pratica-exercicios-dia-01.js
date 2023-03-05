let a = 70;
let b = 43;
let c = 32

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// if (a > b) {
//     console.log(a + ' maior ' + b);
// } else {
//     console.log(b + ' maior ' + a);
// }

if (a > b && a > c) {
    console.log(a + ' é maior que ' + b + ' e ' + c + '.');
} else if (b > a && b > c) {
    console.log(b + ' é maior que ' + a + ' e ' + c + '.');
} else {
    console.log(c + ' é maior que ' + a + ' e ' + b + '.');
}