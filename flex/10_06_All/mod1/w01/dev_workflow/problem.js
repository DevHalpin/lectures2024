//Write a program that takes in an unlimited number of command line arguments 
//and prints out the sum of them. If any argument is not a whole number, skip it. 
//Do not support negative numbers.

// console.log(process.argv)

// const array = process.argv.splice(0, 2);

// console.log();

// console.log(array)
// console.log(process.argv)
// const test = ['10','5', 0, -5, 2.5, 'apple']

// for (let index = 0; index < test.length; index++) {
//     console.log(test[index])
// }

// console.log();

// for(const index in test) {
//     console.log(test[index])
// }
const array = process
.argv
.slice(2)
.map((arrayItem) => Number(arrayItem)) // returns array of converted numbers or NaNs
.filter((mappedArrayItem) => Number.isInteger(mappedArrayItem)) // returns array of filtered values
.filter(element => element > 0) // returns array of filtered values
.reduce((accumulator , currentValue) => accumulator + currentValue, 0); // returns a single result of all values added


console.log(array)


// let total = 0;

// for (const value of array) {
//     const converted = Number(value);
//     if (converted > 0 && Number.isInteger(converted)) {
//         total += converted;
//     }
// }
// console.log("total ", total)
