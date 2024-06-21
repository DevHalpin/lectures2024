// Single Responsibilty Principle => our code should be responsible for only one activity

const loopArrayAndPrintNames = (names) => {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

const loopArray = (hotdog, cheese) => {
    for (let i = 0; i < hotdog.length; i++) {
        cheese(hotdog[i]);
    }
}

const printName = (name) => {
    console.log(name);
}

const names = ['David', 'Jenny', 'Rick', 'Sasha', 'John'];

loopArray(names, printName);

const numbers = [1, 2, 3, 4, 5];

const addTwo = (num) => {
    console.log(num + 2);
}

loopArray(numbers, addTwo);

numbers.forEach(addTwo);
