import bcrypt from 'bcryptjs';
import prisma from '../models/userModel.js';
import { generateToken } from '../utils/jwt.js';
import nodemailer from 'nodemailer';


//add
export const addUser = async (req, res) => {
  const { name, email, password, department } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        department,
        password: hashedPassword,
        //role: role || 'EMPLOYEE',
      },
    });

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like SendGrid, Mailgun, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or App Password if 2FA is enabled
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Your email address
      to: email, // Send email to the newly created user
      subject: 'Your Account Has Been Created!',
      text: `Hello ${name},\n\nYour account has been successfully created.\n\nHere are your account details:\n\nEmail: ${email}\nPassword: ${password} (Please change it after logging in).\n\nThank you,\nYour Company Team.`,
    };

    // Send the email with credentials
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    // Respond with success
    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'An error occurred while creating the user.' });
  }
};



//get users
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






  
  