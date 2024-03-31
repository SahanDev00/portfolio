import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DarkMode from '../components/DarkMode';

const Navbar = () => {
    const location = useLocation();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const shouldShowDarkModeButton = location.pathname !== '/';

    return (
        <header className='header'>
            <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
                <p className='blue-gradient_text'>SD</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to='about' className='text-black dark:text-white'>
                    About
                </NavLink>
                <NavLink to='projects' className='text-black dark:text-white'>
                    Projects
                </NavLink>
            </nav>
            {shouldShowDarkModeButton && (
                <div onClick={toggleDarkMode} className=' block top-7 right-7 dark:text-white'>
                    <DarkMode />
                </div>
            )}
        </header>
    );
};

export const darkModeFunc = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return {
        isDarkMode,
        toggleDarkMode,
    };
};


export default Navbar;
