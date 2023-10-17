import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import userRouter from './routes/user.route.js';
dotenv.config();

const app = express();

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use('/api/user', userRouter);
