const fs = require('fs');
const needle = require('needle');

//readFile
fs.readFile("files/name.txt", "utf-8", (err, data) => {
    if (err) {
        return console.error(err)
    }

    needle.get(`https://api.agify.io?name=${data}`, (err, res, body) => {
        if (err) {
            return console.error(err);
        }

        const {name, age, count} = body;
        const msg = `${name} is probably ${age} years old?  Who knows?  This has been asked ${count} times!`

        fs.writeFile("files/result.txt", msg, 'utf-8', (err) => {
            if (err) {
                return console.error(err)
            }

            console.log("File written successfully!");
        });
    });
});