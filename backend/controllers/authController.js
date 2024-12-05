import bcrypt from 'bcryptjs';
import prisma from '../models/userModel.js';
import { generateToken } from '../utils/jwt.js';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user.id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createHRUserIfNotExists = async () => {
  try {
    // Check if the HR user already exists
    const hrUser = await prisma.user.findUnique({
      where: { email: 'hr@example.com' },  // HR email
    });

    // If the HR user doesn't exist, create a new one
    if (!hrUser) {
      const hashedPassword = await bcrypt.hash('defaultPassword123', 10);  // Default password

      await prisma.user.create({
        data: {
          name: 'HR User',  // Name for the HR user
          email: 'hr@example.com',  // HR email
          password: hashedPassword,  // Password (hashed)
          department: 'HR',  // HR department
          role: 'HR',  // Role is HR
        },
      });

      console.log('HR user created!');
    } else {
      console.log('HR user already exists.');
    }
  } catch (error) {
    console.error('Error creating HR user:', error);
  }
};







