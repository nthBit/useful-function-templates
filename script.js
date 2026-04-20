// sumOfTripledEvens function

let array = [1, 2, 3, 4, 5];

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

console.log(sumOfTripledEvens(array));

// camelizeString function

let inputString = "my-string";

function camelizeString(str) {
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join('');
}

console.log(camelizeString(inputString));

// filterRange function

let numArray = [5, 3, 8, 1, 9];


function filterRange(arr, a, b) {
    return arr.filter((num) => (num >= a && num <= b));
}

console.log(filterRange(numArray, 1, 4));