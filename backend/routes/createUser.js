import { Router } from 'express';
import { Users } from '../models/Users.js';

const router = Router();

router.post('/users', async (req, res) => {
    try {
        const result = await Users.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
})

export default router;