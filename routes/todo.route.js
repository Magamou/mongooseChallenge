const myDbService = require('../data/data.layer');
const express= require('express');
const router= express.Router();

router.get('/',function (req, res) {
    let todos = myDbService.getTodoArray();
    res.json(todos);
});

router.post('/', function (req, res) {
    let todo = req.body;
    myDbService.saveTodo(todo);
    newTodos= myDbService.getTodoArray();
    res.json({
        message: 'Todo saved successfully',
        items:newTodos,
        totalItems: newTodos.length
    });
});


// to complete update todo
router.put('/', function (req, res) {
    let _newTodo=req.body;
    myDbService.updateTodo(_newTodo)
    res.json({message:'Todo was updated successfully'});
});

//to complete delete todo
router.delete('/:id', function (req, res) {
    let _id=req.params;
    myDbService.deleteTodo(_id.toString());
    res.json({message:'This todo was deleted successfully'});
});

module.exports=router;