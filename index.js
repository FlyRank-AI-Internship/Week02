const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
    { id: 1, title: "Learn Express", done: false },
    { id: 2, title: "Build CRUD API", done: false },
    { id: 3, title: "Publish to GitHub", done: false }
];

// Stage 2
app.get('/tasks', (req, res) => res.json(tasks));
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: `Task ${req.params.id} not found` });
    res.json(task);
});

// Stage 1
app.get('/', (req, res) => res.json({ name: "Task API", version: "1.0", endpoints: ["/tasks"] }));
app.get('/health', (req, res) => res.json({ status: "ok" }));

app.listen(3000, () => console.log('Server running on port 3000'));