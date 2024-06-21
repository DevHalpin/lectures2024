const username = 'David';
const age = 38;

console.log(age)

const runMyFunc = function (func) {
    console.log(func);

    func(2)
}

const sayHello = function (name) {
    console.log(`Hello ${name}`);
}

runMyFunc(sayHello);

runMyFunc(function (name) {
    console.log(`Hello ${name}`);
})

const timeout = setTimeout( function () {
    console.log('Hello');
}, 1000)