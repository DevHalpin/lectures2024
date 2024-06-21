const array = [1, 2, 4, 8];
//map - Loops an array and returns a new array with the same length but with each element transformed
const alteredArray = array.map((num) => num + 2);
//some - returns true if at least one element in your array passes the test, otherwise return false
// console.log(alteredArray)
const filterArr = array.filter((num) => num > 2);
const boolean = array.some((num) => num % 3 === 0);

const value2 = array.filter((num) => num > 2).map((num) => num + 3);

const myMap = function (arr, callback) {
  const result = [];
  for (const element of arr) {
    result.push(callback(element));
  }
  return result;
};

const myFilter = function (arr, callback) {
  const result = [];
  for (const element of arr) {
    if (callback(element)) {
      result.push(element);
    }
  }
  return result;
};

// const value3 = myFilter(array, num => num > 2).myMap(result, num => num + 3)

// console.log(value3)

const mySome = function (arr, callback) {
  for (const element of arr) {
    
    if (callback(element)) {
      return true;
    }
  }
  return false;
};

const value4 = mySome(
  myMap(
    myFilter(array, (num) => num > 2),
    (num) => num + 3
  ),
  (num) => num % 3 === 0
);

// console.log(value4);
const alteredArray2 = myMap(array, function (num) {
  return num + 2;
});

const filteredArray = myFilter(array, function (num) {
  return num > 2;
});

const someArray = mySome(array, (element) => element % 3 === 0);

// console.log(alteredArray2)
// console.log(filteredArray)
console.log(someArray)

//filter
