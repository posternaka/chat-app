const express = require('express');
const cors = require('cors');
const db = require('./utils/database.js');

const createConversation = require('./routes/createConversation.js');
const createUser = require('./routes/createUser.js');
const getUsers = require('./routes/getUsers.js');
const getMessages = require('./routes/getMessages.js');
const { log } = require('console');

const PORT = process.env.PORT || 5000;
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(8900, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
}

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage", {
            senderId, 
            text,
        });
    });

    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});

app.use(cors());
app.use(express.json());
app.use('/api', createConversation);
app.use('/api', createUser);
app.use('/api', getUsers);
app.use('/api', getMessages);


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