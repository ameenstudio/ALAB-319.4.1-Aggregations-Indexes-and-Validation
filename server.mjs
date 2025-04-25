//Imports
import express from 'express';
import dotenv from 'dotenv';
import gradesRoutes from './routes/gradeRoutes.mjs'

//Setups

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

//Middleware



//Routes
app.use('/api/grades' , gradesRoutes)



//Err handling middleware

//listner
app.listen(PORT, () => {
    console.log('Server running on Port: ${PORT}')
});
