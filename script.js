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

// shuffle function

let numArray5 = [1, 2, 3];

function shuffle(arr) {
    arr.sort(() => (Math.random() - 0.5));
}

shuffle(numArray5);
console.log(numArray5);

// unique function

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let uniqueArray = [];
    for (const string of arr) {
        if (!(uniqueArray.includes(string)))
            uniqueArray.push(string);
    }
    return uniqueArray;
}

console.log(unique(strings));

// mapToNames function

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log(names); // John, Pete, Mary

// mapToObjects

let dan = { name: "Dan", surname: "Smith", id: 1 };
let sam = { name: "Sam", surname: "Hunt", id: 2 };
let jack = { name: "Jack", surname: "Key", id: 3 };

let people = [ dan, sam, jack ];

let peopleMapped = people.map(person => ({
    fullName: `${person.name} ${person.surname}`,
    id: person.id,
}));

console.log( peopleMapped[0].id ) // 1
console.log( peopleMapped[0].fullName ) // John Smith
