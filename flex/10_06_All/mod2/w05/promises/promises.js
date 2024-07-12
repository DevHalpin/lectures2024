const fs = require("fs");
const needle = require("needle");

// fs.promises
//   .readFile("files/name.txt", "utf-8")
//   .then((data) => {
//     return needle(`https://api.agify.io?name=${data}`);
//   })
//   .then((data) => {
//     const { name, age, count } = data.body;
//     const msg = `${name} is probably ${age} years old?  Who knows?  This has been asked ${count} times!`;
//     return fs.promises.writeFile("files/result.txt", msg, "utf-8");
//   })
//   .then(() => {
//     console.log("File written successfully");
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("Execution finished!");
//   });


// Turning a callback function into a promise based function
const writeFilePromised = (filePath, data, encoding) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, encoding, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve("File was written successfully");
        });
    });
};

writeFilePromised("files/test.txt", "Hello World", "utf-8")
.then((message) => console.log(message))
.catch((err) => console.error(err))

// const myPromise = new Promise((resolve, reject) => {
//   if (100 > 500) {
//     resolve("yes"); //{status: 'fulfilled' value:'yes'}
//   } else {
//     reject("no");
//   }
// });
// const secondPromise = needle(`https://api.agify.io?name=David`);
// const thirdPromise = needle(`https://api.agif.io?name=Anthony`);
// myPromise.then((message) => console.log(message)).catch((err) => console.log(err))


// Promise.all([myPromise, secondPromise, thirdPromise])
//   .then((data) => console.log("Data: ", data[0]))
//   .catch((err) => console.error("Error: ", err));

// Promise.allSettled([myPromise, secondPromise, thirdPromise])
//   .then((data) => console.log("Data: ", data))
//   .catch((err) => console.error("Error: ", err));

// Promise.race([secondPromise, thirdPromise])
//   .then((data) => console.log("Data: ", data))
//   .catch((err) => console.error("Error: ", err));

// Promise.any([secondPromise, thirdPromise])
//   .then((data) => console.log("Data: ", data))
//   .catch((err) => console.error("Error: ", err));

// const asyncFunction = async () => {
//     const data = await fs.readFile("files/name.txt", "utf-8")
//     console.log(data)

// }

// asyncFunction();
