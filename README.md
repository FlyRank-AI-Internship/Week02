# 🚀 Task API

A simple RESTful CRUD API built with **Node.js**, **Express.js**, and **Swagger UI** for managing a to-do list. This project was developed as part of the **FlyRank AI Internship – Backend Track (Week 2 Assignment)**.

---

## 📌 Features

- Create a new task
- View all tasks
- View a single task by ID
- Update an existing task
- Delete a task
- Input validation
- Proper HTTP status codes
- Interactive API documentation using Swagger UI
- In-memory data storage (No database)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Swagger UI Express
- OpenAPI 3.0
- Git & GitHub

---

## 📂 Project Structure

```
todo-api/
│
├── index.js
├── openapi.json
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/FlyRank-AI-Internship/Week02.git
```

### Navigate into the project

```bash
cd Week02
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
npm start
```

The server will start at:

```
http://localhost:3000
```

---

## 📖 API Documentation

Swagger UI is available at:

```
http://localhost:3000/docs
```

You can test all endpoints directly from your browser using Swagger UI.

---

# 📌 API Endpoints

| Method | Endpoint | Description |
|----------|----------------|---------------------------|
| GET | / | API Information |
| GET | /health | Server Health Check |
| GET | /tasks | Get All Tasks |
| GET | /tasks/:id | Get Task by ID |
| POST | /tasks | Create New Task |
| PUT | /tasks/:id | Update Existing Task |
| DELETE | /tasks/:id | Delete Task |

---

## 📥 Sample Request

### Create Task

**POST** `/tasks`

```json
{
  "title": "Complete FlyRank Assignment"
}
```

---

## 📤 Sample Response

```json
{
  "id": 4,
  "title": "Complete FlyRank Assignment",
  "done": false
}
```

---

## ❌ Error Response

```json
{
  "error": "Title is required and must be a non-empty string"
}
```

---

## ✅ HTTP Status Codes

| Status Code | Description |
|--------------|----------------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 404 | Not Found |

---

## 🧪 Testing

You can test the API using:

- Swagger UI
- Postman
- curl

Example:

```bash
curl -i http://localhost:3000/tasks
```

---

## 📌 Notes

This project uses **in-memory storage**, meaning:

- No database is used.
- Data is stored only while the server is running.
- Restarting the server resets the task list to its default values.

---

## 👨‍💻 Author

**Muhammad Ahmad Zaheer**

FlyRank AI Internship – Backend Track

GitHub:
https://github.com/FlyRank-AI-Internship/Week02

---

## 📜 License

This project is developed for educational purposes as part of the FlyRank AI Internship.
