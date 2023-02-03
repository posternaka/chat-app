const express = require('express');
const cors = require('cors');
const db = require('./utils/database.js');

const createConversation = require('./routes/createConversation.js');
const createUser = require('./routes/createUser.js');
const getUsers = require('./routes/getUsers.js');
const getMessages = require('./routes/getMessages.js');

const PORT = process.env.PORT || 5000;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(PORT, {
    cors: {
        origin: 'http://localhost:3000/'
    }
});

app.use(cors());
app.use(express.json());
app.use('/api', createConversation);
app.use('/api', createUser);
app.use('/api', getUsers);
app.use('/api', getMessages);

io.on('connection', (socket) => {
    console.log('user connected', socket);
})

const start = async () => {
    try {
        await db.sync();
        server.listen(PORT, () => {
            console.log('Success server')
        });
    } catch (error) {
        console.log(error);
    }
}

start();