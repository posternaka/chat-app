import { Router } from 'express';
import { Users } from '../models/Users.js';

const router = Router();

router.get('/users',  async(req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
})

export default router;