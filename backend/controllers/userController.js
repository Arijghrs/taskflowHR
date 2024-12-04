import bcrypt from 'bcryptjs';
//import jwt from 'jsonwebtoken';
import prisma from '../models/userModel.js';
import { generateToken } from '../utils/jwt.js';


//add
export const addUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: role || 'HR',
        },
      });
  
      res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getUsers = async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      console.log('Fetched users:', users); // Check what this logs
      res.status(200).json({ message: 'Users fetched successfully', users });
    } catch (error) {
      console.error('Fetch users error:', error);
      res.status(500).json({ message: 'An error occurred while fetching the users.' });
    }
  };
  

//delete
  export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedUser = await prisma.user.delete({
        where: {
          id: parseInt(id), 
        },
      });
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'An error occurred while deleting the user.' });
    }
  };


//edit 
export const editUser = async (req, res) => {
  const { id } = req.params; 
  const { name, email, password } = req.body; 

  try {
   
    const existingUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    let updatedData = { name, email };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

  
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: updatedData,
    });

    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'An error occurred while updating the user.' });
  }
};



  
  