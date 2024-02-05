
//3-1. flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];

const flattenedArr = arrays.reduce((accumulator, currentArray) => {
	return accumulator.concat(currentArray);
}, []);

console.log("Exercise 3-1: ");
console.log(flattenedArr);

//3-2. loop(value, test, update, body)
function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i);
    }
}
console.log("Exercise 3-2: ");
loop(3, n => n > 0, n => n - 1, console.log);

//3-3. everyLoop(array, test)
//3-4. everySome(array, test)

function everyLoop(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}

function everySome(array, test) {
    return !array.some(element => !test(element));
}
console.log("Exercise 3-3 & 3-4: ");
console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));
