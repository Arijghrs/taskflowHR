import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { createHRUserIfNotExists } from './controllers/authController.js';

dotenv.config();

const app = express();
app.use(express.json());

// Correct CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend's origin
  credentials: true,               // Allow cookies/authorization headers
}));

// Remove manual CORS headers (no need with cors middleware)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Add 'Authorization' for JWT
  next();
});

// Test API
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'API is working' });
});

app.delete('/test-delete', (req, res) => {
  res.status(200).json({ message: 'DELETE route is working' });
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

createHRUserIfNotExists();

app.listen(5002, () => {
  console.log('Server running at port 5002');
});
