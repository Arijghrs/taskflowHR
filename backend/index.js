import express from 'express';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app =express();
app.use(express.json());


//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  //test api
app.get('/test', (req, res) => {
    try {
      res.status(200).json({ message: 'API is working' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.use('/auth', authRoutes);

  
app.listen(5002,()=>{
    console.log("server running at port 5002")
});