import express from 'express';
import cors from 'cors';
import { db } from './utils/database.js';

import createConversation from './routes/createConversation.js';
import createUser from './routes/createUser.js';
import getUsers from './routes/getUsers.js';
import getMessages from './routes/getMessages.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', createConversation);
app.use('/api', createUser);
app.use('/api', getUsers);
app.use('/api', getMessages);

const start = async () => {
    try {
        await db.sync();
        app.listen(PORT, () => {
            console.log('Success server')
        });
    } catch (error) {
        console.log(error);
    }
}

start();