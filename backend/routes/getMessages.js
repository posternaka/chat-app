import { Router } from 'express';
import { Conversation } from '../models/Conversation.js';

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

export default router;