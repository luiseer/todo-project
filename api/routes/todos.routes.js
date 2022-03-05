const express = require('express');

const {
  getAllToDos,
  getToDosById,
  createToDo,
  updateToDoPatch,
  deleteToDo
} = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getAllToDos);
router.post('/', createToDo);
router.patch('/:id', updateToDoPatch);
router.delete('/:id', deleteToDo);

module.exports = { toDosRouter: router };
