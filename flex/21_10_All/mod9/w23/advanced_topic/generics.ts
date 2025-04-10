function identity<T>(arg: T) {
  return arg;
}

const numberResult = identity(42);
const stringResult = identity("Hello, TypeScript!");

function reverseArray<T>(items: T[]): T[] {
  return items.reverse();
}
const numberArray = [1, 2, 3];
const stringArray = ["apple", "banana", "cherry"];
const reversedNumberArray = reverseArray(numberArray);
const reversedStringArray = reverseArray(stringArray);
const reversedMixedArray = reverseArray([1, "apple", true]);

interface ApiResponse<T> {
    data: T;
    error: string | null;
}

interface User {
    id: number;
    name: string;
    email: string;
}

const userResponse: ApiResponse<User> = {
    data: {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com"
    },
    error: null,
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const email = getProperty(userResponse.data, "email");
console.log("User Email", email);
