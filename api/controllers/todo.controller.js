const { Todos } = require("../models/todo.model");


exports.getAllTodos = async (req, res) => {
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