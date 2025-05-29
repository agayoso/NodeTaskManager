# NodeTaskManager

A simple and modular RESTful API built with Node.js, Express, and MongoDB to manage tasks. This project demonstrates backend development best practices including environment configuration, API routing, controller separation, and MongoDB connection using Mongoose.

## Features

- Add, update, delete, and list tasks.
- RESTful API with clear endpoints.
- MongoDB with Mongoose ODM.
- Environment variables via `.env`.
- Middleware (CORS, Morgan for logging).
- Modular code structure for scalability.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Morgan
- CORS

## API Endpoints

- Method	Endpoint	Description
- GET	/api/tasks	Get all tasks
- POST	/api/tasks	Create a task
- PUT	/api/tasks/:id	Update a task
- DELETE	/api/tasks/:id	Delete a task