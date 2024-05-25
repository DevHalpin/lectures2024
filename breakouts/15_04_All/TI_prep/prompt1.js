// Given the following data:

const data = [
  { name: "Alice", hobbies: ["Rock Climbing", "Programming"] },
  { name: "Bob", hobbies: ["Sky Diving", "Knitting"] },
  { name: "Carol", hobbies: ["Knitting", "Programming", "Curling"] },
];

// Write a function that returns an array of hobbies.
// Ensure there are no duplicate values in the array.

// create a result array to hold the result
// iterate over the data array 
// iterate the hobbies object inside of the array
// check if the current hobby is inside of the result array already, if it is, don't add it, otherwise add to array
// return array

const getHobbies = (users) => {
    const result = new Set;
    for (const element of users) {
        for (const hobby of element.hobbies) {
            if (!result.includes(hobby)) {
                result.push(hobby)
            }
        }
    }
    return result
    // for (const element of users) {
    //     for (const hobby in element) {
    //         if (hobby === "hobbies") {
    //             // check if hobby is already in the array
    //             // if not in the array
    //             results.append(element[hobby]) // append hobbies into results
    //         }
    //     }
    // }
    return result
};

const result = getHobbies(data);
console.log(result); // [ 'Rock Climbing', 'Programming', 'Sky Diving', 'Knitting', 'Curling' ]
