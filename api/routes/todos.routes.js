const express = require('express');

const {
  getAllTodos,
  getTodosById,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getAllTodos);
router.get('/:id', getTodosById);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = { todosRouter: router };
