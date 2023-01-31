import { Router } from 'express';
import { Conversation } from '../models/Conversation.js';

const router = Router();

router.post('/conversation', async (req, res) => {
    try {
        const result = await Conversation.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
})

export default router;