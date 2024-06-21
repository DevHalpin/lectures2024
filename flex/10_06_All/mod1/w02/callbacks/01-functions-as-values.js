//function declaration
function sayHello(name, age) {
    console.log(`Hello ${name}.  You are ${age} years old.`);
}
// sayHello();


// function expression
const sayHello2 = function() {
    console.log('Hello');
    return 'Hello';
}

// sayHello2();
// sayHello2.username = "David";

// console.log(sayHello2());
// console.log(sayHello2);
// console.log(sayHello2.toString())

const funcs = [];

funcs.push(sayHello);
funcs.push(sayHello2);
funcs.push(console.log);

console.log(funcs);
 funcs[2]('Hello world');
 funcs[0]('David', 38)