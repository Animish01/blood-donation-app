const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(
    cors({
        origin: [process.env.APP_URL],
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        credentials: true,
    })
);
app.use(express.json());

const authRouter = require('./Routes/authRoutes');

const PORT = process.env.PORT || 4000;
const uri = process.env.MONGO_URL;

const connectMongo = async () => {
    await mongoose.connect(uri);
    console.log('mongo connected');
}

connectMongo();

app.get('/', (req, res) => {
    res.send('hello world!');
})

app.use('/auth', authRouter);

app.listen(PORT, process.env.HOST_IP, () => {
    console.log('Server listening on port', PORT);
})

console.log('started');
