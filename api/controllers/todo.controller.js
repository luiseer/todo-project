const { Todos } = require("../models/todo.model");


exports.getAllToDos = async (req, res) => {
    try {
        const todosDb = await Todos.findAll({where: {starus: 'active'}})
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

exports.getToDosById = async (req, res) =>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}

exports.createToDo = async (req, res) =>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}

exports.updateToDo = async (req, res) =>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}
exports.deleteToDo = async (req, res) =>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}