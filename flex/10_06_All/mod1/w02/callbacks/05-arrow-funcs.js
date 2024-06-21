// arrows funcs added in 2015 (ES6)
// advantages of arrow functions:
// 1. no need to use the function keyword
// 2. if only one argument, no need for parentheses
// 3. if only one line of code, no need for curly braces
// 4. if only one line of code, no need for return keyword
// 5. arrow functions DO NOT create 'this' keyword

// implicit => we don't ask for it to happen
// explicity => we ask for it to happen

const sayHello = function (name) {
    return `Hello ${name}`;
}

const sayHello2 = (name) => {
    return `Hello ${name}`;
}

const sayHello3 = name => {
    return `Hello ${name}`;
}

const sayHello4 = name => `Hellooooooooooooooooooooooooooooooooooo
 ${name}`;

console.log(sayHello('David'));
console.log(sayHello2('David'));
console.log(sayHello3('David'));
console.log(sayHello4('David'));