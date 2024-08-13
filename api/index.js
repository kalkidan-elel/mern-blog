import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';
import commentRoutes from './routes/comment.routes.js';
import cookieParser from 'cookie-parser';

//There is no userRoutes in ./routes/user.routes.js but it works well.
dotenv.config();   //dotenv dependencies used to use the .env in the app

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB is Connected");
    }).catch((err) => {
        console.log(err);
    });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

//Add a middleware and a function to handle error
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});