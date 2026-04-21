// sumOfTripledEvens function

let numArray = [1, 2, 3, 4, 5];

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

console.log(sumOfTripledEvens(numArray));

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

// filterRange function (creates new array)

let numArray1 = [5, 3, 8, 1, 9];


function filterRange(arr, a, b) {
    return arr.filter((num) => (num >= a && num <= b));
}

console.log(filterRange(numArray1, 1, 4));

// filterRangeInPlace function (edits old array)

let numArray2 = [5, 3, 8, 1, 9];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(numArray2, 1, 4);
console.log(numArray2);

// decreasingSortInPlace function

let numArray3 = [100, 20, 3];

function decreasingSortInPlace(arr) {
    arr.sort((a, b) => b - a);
}

decreasingSortInPlace(numArray3);
console.log(numArray3);

// copySorted function

let numArray4 = [5, 3, 8, 1, 9];

function copySorted(arr) {
    return arr.toSorted((a, b) => a - b);
}

let sortedArray = copySorted(numArray4);
console.log(sortedArray);

