// https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function simpleArraySum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    sum += array[index];
  }
  return sum;
};

console.log(simpleArraySum([1, 2, 3, 10, 40]));