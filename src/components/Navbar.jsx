import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='navbar'>
        <div className='logo'>
            {/* <img src="" alt="" /> */}
        </div>
        
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
         <GiHamburgerMenu/>
      </div>

        <ul className={`nav-item ${isOpen ? "open" : ""}` }>
                <Link to='/' ><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
                <Link to='/todo'><li>Todo</li></Link>
        </ul>
    </div>
  );
}

export default Navbar;