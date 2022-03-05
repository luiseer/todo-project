const { ToDo } = require("../models/todo.model");
const { filterObj } = require('../utils/filterObj');


exports.getAllToDos = async (req, res) => {
    try {
        const allToDos = await ToDo.findAll({ where: { status: 'active' } })
        res.status(200).json({
            status: 'succes',
            data: {
                allToDos
            }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.createToDo = async (req, res) => {
    try {
        const { content } = req.body
        const newToDo = await ToDo.create({
            content: content
        })
        res.status(201).json({
            status: 'success',
            data: { newToDo }
        })
    } catch (error) {
        console.log(error);
    }
}

exports.updateToDoPatch = async (req, res) => {
    try {
        const { id } = req.params;
        const data = filterObj(req.body, 'title', 'content');
        const todo = await ToDo.findOne({ where: { id: id, status: 'active' } })
        if (!todo) {
            res.status(404).json({
                status: 'error',
                message: 'invalid ID'
            });
            return;
        }

        await todo.update({ ...data });
        res.status(201).json({ status: 'success' })


    } catch (error) {
        console.log(error);
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        const { id } = req.params

        const todo = await ToDo.findOne({
            where: { id: id, status: 'active' }
        })

        if (!todo) {
            res.status(404).json({
                status: 'error',
                message: 'invalid ID'
            })
            return
        }
        await todo.update({ status: 'delete' })
        res.status(204).json({ status: 'success' })

    } catch (error) {
        console.log(error);
    }
}