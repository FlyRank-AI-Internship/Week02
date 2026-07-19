Yeh raha aapke `todo-api` project ke liye ek behtareen **README.md**. Aap ise copy karke apne project folder mein `README.md` file bana kar paste kar dein.

---

```markdown
# Task API

A simple CRUD API for managing a to-do list, built with Node.js and Express. This project demonstrates the fundamentals of backend development, including RESTful routing, input validation, and API documentation.

## Features
- **Create**: Add new tasks to the list.
- **Read**: List all tasks or view a specific task by ID.
- **Update**: Edit task titles or completion status.
- **Delete**: Remove tasks from the list.
- **Documentation**: Interactive API testing via Swagger UI.

## Requirements
- Node.js (v14+)
- npm

## Installation & Running
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd todo-api

```

2. Install dependencies:
```bash
npm install

```


3. Start the server:
```bash
node index.js

```


The server will be running at `http://localhost:3000`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/` | API Information |
| GET | `/health` | Check server status |
| GET | `/tasks` | List all tasks |
| GET | `/tasks/:id` | Get a specific task |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

## Testing

### Example Request (Create Task)

```bash
curl -i -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy milk"}'

```

### Swagger UI

Once the server is running, visit `http://localhost:3000/docs` in your browser to interact with the API endpoints directly.

## Mortality Experiment

*Note: Because this API uses in-memory storage, all data is reset whenever the server restarts. This demonstrates the necessity of persistent databases for real-world applications.*

---

*Built as part of W2 · A1 assignment.*

```

---

```
