const express = require('express');

const {
  getAllToDos,
  getToDosById,
  createToDo,
  updateToDo,
  deleteToDo
} = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getAllToDos);
router.get('/:id', getToDosById);
router.post('/', createToDo);
router.put('/:id', updateToDo);
router.delete('/:id', deleteToDo);

module.exports = { toDosRouter: router };
