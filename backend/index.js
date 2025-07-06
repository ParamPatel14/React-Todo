//Basic Express BoilerPlate

const express = require('express');
const { createTodo } = require('./types');

const app = express();

app.use(express.json());


// body {
  //   title: string;
  //   description: string;
// }

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You Sent the Wrong Data",
        })
        return;
    }
    
});

app.get('/todos', (req, res) => {
    res.send('Hello World!');
});

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You Sent the Wrong Data",
        })
        return;
    }
});


app.listen(3000)