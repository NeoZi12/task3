const arr = [0, 1, 0, 1, 0];

let countZeros = 0;

arr.forEach((elem) => {
  elem == 0 ? countZeros++ : (countZeros = countZeros);
});

console.log(countZeros);
