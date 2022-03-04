const { ToDo } = require("../models/todo.model");
const { filterObj } = require('../utils/filterObj');


exports.getAllToDos = async (req, res) => {
    try {
        const todosDb = await ToDo.findAll({ where: { status: 'active' } })
        res.status(200).json({
            status: 'succes',
            data: {
                todosDb
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.getToDosById = async (req, res) => {
    try {
        const { id } = req.params
        const todo = await ToDo.findOne({ where: { id: id, status: 'active' } })

        if (!todo) {
            res.status(404).json({
                status: 'error',
                message: 'No todo find with the given ID'
            })
            return
        }
        res.status(200).json({
            status: 'success',
            dara: {
                todo
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.createToDo = async (req, res) => {
    try {
        const { title, content } = req.body
        const newToDo = await ToDo.create({
            title,
            content
        })
        if (!newToDo) {
            res.status(404).json({
                status: 'error',
                message: 'No create todo check your title and content'
            })
            return
        }
        res.status(201).json({
            status: 'success',
            data: {
                newToDo
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.updateToDoPatch = async (req, res) => {
    try {
        const { id } = req.params;
        const data = filterObj(req.body, 'title', 'content');
        const todo = await ToDo.findOne({where: {id: id, status: 'active'}})
        if (!todo) {
            res.status(404).json({
              status: 'error',
              message: 'Cant update post, invalid ID'
            });
            return;
          }

        await todo.update({ ...data });
        res.status(201).json({status: 'success'})
        
        
    } catch (error) {
        console.log(error);
    }
}

exports.deleteToDo = async (req, res) => {
 try {
     
 } catch (error) {
     console.log(error);
 }
}