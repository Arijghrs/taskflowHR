import express from 'express';
import { addUser, deleteUser, editUser, getUsers } from '../controllers/userController.js';
//import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = express.Router();


router.post('/addUser', addUser);
router.get('/allUsers', getUsers);
router.delete('/deleteUser/:id', deleteUser);
router.put('/editUser/:id', editUser);



export default router;
