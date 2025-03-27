# M8W21 Concluding React

[Video](https://vimeo.com/1069817587/0022082927)  
[Code](https://github.com/DevHalpin/lectures2024/tree/main/flex/21_10_All/mod8/w21/concluding_react)


## To Do:

[x] Build a Simple App

## Running this Example

Open a terminal window:

```BASH
cd ./back-end            # Enter the back-end folder
npm install              # Install dependencies
npm start # Start the Express server
```

Open a **second** terminal window:

```BASH
cd ./front-end # Enter the front-end folder
npm install    # Install dependencies
npm run dev      # Start the React development server
```

### To-Do App

* Back-End (Express)
    * API - JSON
* Front-End (React)

## Data

```js
const toDos = [
    {
        id: 'jfsdkljfdklsflsdlflsd' // uniqid()
        task: 'Buy Milk',
        completed: true // || false
    },
    {
        id: 'sdfdsfdsfdfdsfffsdfsd' // uniqid()
        task: 'Study React',
        completed: false
    }
];
```

## API Endpoints

Index, Delete, Edit

* Index:  `GET /api/todos` (Show all to-dos.)
* Delete: `DELETE /api/todos/:id` (Delete single to-do.)
* Edit: `POST /api/todos/:id/complete` (Edit single to-do completion status.)

### React Planning

Components:
* ToDoItem

## Resources

* [Add React in One Minute](https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)
* [JavaScript XML (JSX)](https://react.dev/learn/writing-markup-with-jsx)
* [Babel](https://babeljs.io/)
* [JavaScript ES6 Module Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [React "StrictMode"](https://react.dev/reference/react/StrictMode)
* [Components and Props](https://react.dev/learn/your-first-component)
* [Using the State Hook](https://react.dev/reference/react/useState)
* [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Robots.txt](https://www.robotstxt.org/robotstxt.html)
* [Favicon.ico & App Icon Generator](https://www.favicon-generator.org/)
