import TodoItem from "./components/ToDoItem"
import "./App.css"
import { useState, useEffect } from "react"
function App() {
 const [items, setItems] = useState([]);

 async function getData() {
  try {
   const response = await(fetch('/todos'))
   if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
   }

   const data = await response.json();
   return data
   
  }
  catch (error) {
    console.log(`Error was received ${error}`)
  }
 }
 useEffect(() => {
   const fetchData = async() => {
    const data = await getData();
    setItems([...data])
   };
   fetchData();
 }, [])

const onDeleteItem = async (id) => {
  console.log('Clicked!', id);
  const response = await fetch(`/todos/${id}/delete`, { method: 'POST'});
  if (!response.ok) {
    throw new Error("something went wrong")
  }
  setItems(items.filter(item => item.id !== id));
}

//  const toDoItemComponentArr = [];
//  for (const item of items) {
//   toDoItemComponentArr.push(<TodoItem key={item.id} task={item.task}/>)
//  }
const toDoItemComponentArr = items.map((item) => {
  return <TodoItem key={item.id} id={item.id} task={item.task} onDelete={onDeleteItem} />
});
 

 return (
  <div className="App">
    <div>
      {toDoItemComponentArr}
    </div>
  </div>

 )
}

export default App
