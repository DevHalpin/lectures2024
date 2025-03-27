// Server API
const PORT = 8080;
const app = require('express')();
const cors = require('cors');
const uniqid = require('uniqid');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());

const data = [
    {id: uniqid(), task: 'buy milk', done: false},
    {id: uniqid(), task: 'wash dishes', done: false},
    {id: uniqid(), task: 'walk the dog', done: true},
    {id: uniqid(), task: 'pet the cat', done: false}
];

app.get("/todos", (req, res) => {
    res.json(data);
})

app.post("/todos/:id/delete", (req, res) => {
    const id = req.params.id
    console.log("id",id);
    const index = data.findIndex((item) => {
        return item.id === id
    });
    console.log("index", index)
    if (index !== -1) {
        data.splice(index, 1)
    }
    res.json(data);
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));