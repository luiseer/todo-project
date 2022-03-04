// Create server Express

// Define endpoint for ToDos
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)
 
// IMPORTANT: Prettier format

// Install cors library (npm i cors)

const express = require('express');
const cors = require('cors')
const { Todos } = require('./models/todo.model');
const { toDosRouter } = require('./routes/todos.routes');


const { sequelize } = require('./utils/database');
const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/v1/todos', toDosRouter)

sequelize
    .authenticate()
    .then(() => console.log('Database authenticade'))
    .catch(error => console.log(error))



sequelize
    .sync()
    .then(() => console.log('Database Sync... ok'))
    .catch(error => (error))


app.listen(4001, () => {
    console.log('API Runing');
})