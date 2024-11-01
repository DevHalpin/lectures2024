const PORT = 8080;
const express = require('express');
const app = express();
const cors = require('cors');
const uniqid = require('uniqid');
const morgan = require('morgan');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const data = [
  {
    id: uniqid(),
    title: 'Buy milk',
    completed: false,
  },
  {
    id: uniqid(),
    title: 'Buy eggs',
    completed: false,
  },
  {
    id: uniqid(),
    title: 'Buy bread',
    completed: false,
  },
];

app.get('/todos', (req, res) => {
  res.json(data);
});

app.post('/todos', (req, res) => {
    console.log(req);
  const newTodo = req.body;
  newTodo.id = uniqid();
  newTodo.completed = false;
  data.push(newTodo);
  res.json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((todo) => todo.id === id);
  if (index === -1) {
    res.status(404).json({message:'Todo not found'});
    return;
  }
  data.splice(index, 1);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});