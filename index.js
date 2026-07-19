const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
    { id: 1, title: "Learn Express", done: false },
    { id: 2, title: "Build CRUD API", done: false },
    { id: 3, title: "Publish to GitHub", done: false }
];

// Stage 1
app.get('/', (req, res) => res.json({ name: "Task API", version: "1.0", endpoints: ["/tasks"] }));
app.get('/health', (req, res) => res.json({ status: "ok" }));

// Stage 2
app.get('/tasks', (req, res) => res.json(tasks));
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: `Task ${req.params.id} not found` });
    res.json(task);
});



// Stage 3
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title is missing" });
    const newTask = { id: tasks.length + 1, title, done: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});


// Stage 4
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: "Not found" });
    task.title = req.body.title || task.title;
    task.done = req.body.done !== undefined ? req.body.done : task.done;
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Not found" });
    tasks.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));