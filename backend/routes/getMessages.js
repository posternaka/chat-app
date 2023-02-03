const Router = require('express');
const Conversation = require('../models/Conversation.js');

const router = Router();

router.get('/conversation',  async(req, res) => {
    try {
        const conversation = await Conversation.findAll();
        res.status(200).json(conversation);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
})

module.exports = router;