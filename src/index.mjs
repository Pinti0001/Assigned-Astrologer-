import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routs/userRoutes.mjs'
import astrologerRouter from './routs/astrologerRoutes.mjs'

// Create an Express app
const app = express();

// Middleware to parse incoming request bodies as JSON
app.use(express.json());

// Connect to MongoDB database
mongoose.connect("mongodb+srv://pintupk:hppk12pintu@cluster0.z14ijp4.mongodb.net/GuruCool")
.then(()=> console.log("databse connected")) // success message if connected
.catch((err) => console.log(err.message));  // error message if connection fails

// Mount user and astrologer routers at endpoint
app.use('/astrologer', astrologerRouter);
app.use('/user',userRouter);

// Start the server and listen on port 8000
app.listen(8000, ()=>console.log("server started on port :", 8000));