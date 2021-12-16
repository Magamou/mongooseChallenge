
const express= require('express');
const router= express.Router();
const controller = require('../service/course.controller')



router.get('/courses',async function (req, res) {
    const parts = await controller.findAll();
    res.json(parts)

});

router.get('/courses/:id', async function (req, res) {
    
    const parts = await controller.findById(req.params.id);
    res.json(parts)
});

router.patch('/courses/:id',async function (req, res) {
    const parts = await controller.updateCourse(req.params.id, req.body);
    res.json(parts)
});

router.delete('/courses/:id',async function  (req, res) {
    const part = await controller.deleteCourse(req.params.id);
    res.json(part)
});

router.post('/courses',async function (req, res) {
    const part = await controller.createCourse(req.body);
    res.json(part)
});



module.exports=router;