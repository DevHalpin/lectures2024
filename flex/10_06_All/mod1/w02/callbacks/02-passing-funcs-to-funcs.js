// higher order function (HOF) => a function that accepts a function as a parameter/argument
// callback => function that we pass to another to be invoked inside of the second function

const runMyFunc = function (func) {
    console.log(func);

    func(2)
}

const sayHello = function (name) {
    console.log(`Hello ${name}`);
}

runMyFunc(sayHello);

const addTwo = function (num) {
    console.log(num + 2);
}

runMyFunc(addTwo);
runMyFunc(console.log);