import './App.css';
import ToDoItem from './components/ToDoItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // axios.get('/todos').then((response) => {
    //   console.log(response);
    //   setItems([...response.data]);
    // });
    const fetchData = async () => {
      try {
        const response = await fetch('/todos');
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const data = await response.json();
        setItems([...data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onDeleteItem = async (id) => {
    const response = await fetch(`/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const items = await response.json();
    
    setItems(items.filter(item => item.id !== id));
  }

  const onAddItem = async (event) => {
    event.preventDefault();
    console.log(event.target.elements.title.value);
    const newItem = {
      title: event.target.elements.title.value,
    };
    const response = await fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    setItems([...items, data]);
  };

  const toDoItemComponentArray = [];
  for (const item of items) {
    toDoItemComponentArray.push(<ToDoItem key={item.id} id={item.id} task={item.title} onDelete={onDeleteItem} />);
  }

  return (
    <div className="App">
      {/* <ToDoItem task={"Buy cheese"}/> */}
      {toDoItemComponentArray}
      <form onSubmit={onAddItem}>
        <input type="text" name="title" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
