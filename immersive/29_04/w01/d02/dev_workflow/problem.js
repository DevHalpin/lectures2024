//Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. If any argument is not a whole number, skip it. Do not support negative numbers.
const args = process.argv.slice(2);

let sum = 0;

for(const elephant of args) {
    // console.log('current element ', elephant);
    const num = Number(elephant);
    if (Number.isInteger(num) && num >= 0) {
        sum += num;
    }
}

console.log('sum ', sum);




// const result = process.argv
//   .slice(2)
//   .map(Number)
//   .filter(Number.isInteger)
//   .filter((e) => e > 0)
//   .reduce((a, c) => a + c, 0);

//   console.log(result);

// const myArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// console.log(myArr);

// for(let i = 0; i < myArr.length; i++) {
//     console.log('current element ', myArr[i]);
// }

// console.log();

// console.log();

// for (const element in myArr) {
//     console.log('current element ', myArr[element])
// }
