import React from 'react'
import profileImage from '../assets/profileImage.webp';
import { FaBell } from 'react-icons/fa'; // Importing the bell icon

export default function Header() {
    return (
        <div className='bg-white h-16 px-4 flex justify-end items-center'>
            <div className="flex items-center space-x-4">
                <div><FaBell className="text-blue-500 cursor-pointer" size={24} /></div>
                <img
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src={profileImage}
                    alt="Profile"
                />
            </div>
        </div>
    )
}