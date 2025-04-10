import users from "../users.json";

const getUserFullNameByEmail = (email:string): string => {
  const user = users.find((user) => user.email === email);
  if (user === undefined) {
    return "No user found";
  }
  if (typeof user.last_name != "string") {
    return user.first_name;
  }
  return user.first_name.concat(" ", user.last_name);
};

// test cases
console.assert(
  getUserFullNameByEmail("nibh.vulputate.mauris@outlook.ca") === "Upton Santos"
);
console.assert(
  getUserFullNameByEmail("pretium.aliquet.metus@hotmail.com") ===
    "Kimberley Fletcher"
);

// User has null last name
console.assert(
  getUserFullNameByEmail("aliquet.libero@outlook.ca") === "Bradley"
);

// user does not exist
console.assert(getUserFullNameByEmail("me@jakerobins.com") === "Jake Robins");