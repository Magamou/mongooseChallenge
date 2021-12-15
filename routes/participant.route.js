
const express= require('express');
const router= express.Router();
const controller = require('../source/controller')



router.get('/participants',async function (req, res) {
    const parts = await controller.findAll();
    res.json(parts)

});

router.get('/participants/:id', async function (req, res) {
    
    const parts = await controller.findById(req.params.id);
    res.json(parts)
});

router.patch('/participants/:id',async function (req, res) {
    const parts = await controller.updateParticipant(req.params.id, req.body);
    res.json(parts)
});

router.delete('/participants/:id',function (req, res) {
    const part = await controller.deleteParticipant(req.params.id);
    res.json(part)
});

router.post('/participants',function (req, res) {
  
});

module.exports=router;