import users from "./users.json";

const getUserFullNameByEmail = (email:string) => {
    const user = users.find(user => user.email === email)

    if (user === undefined) {
        return undefined;
    }
    if (user.last_name === null && typeof user.last_name !== "string") {
        return user.first_name;
    }

    return user.first_name.concat(" ", user.last_name);
}

console.assert(getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca") === "Upton Santos");
console.assert(getUserFullNameByEmail("pretium.aliquet.metus@hotmail.com") ===
    "Kimberley Fletcher");
// console.assert(
//     getUserFullNameByEmail("aliquet.libero@outlook.ca") === "Bradley"
// );
console.assert(getUserFullNameByEmail("me@jakerobins.com") === "Jake Robins");