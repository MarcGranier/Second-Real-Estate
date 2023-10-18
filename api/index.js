import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
