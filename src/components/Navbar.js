import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth >= 768){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    Luis Cruz
                    <div className='navbar-trail'>
                        Bachelor of Science in Computer Science
                    </div>
                </Link>
                <div onClick={handleClick}>
                    <i className={button ? click ? "fa-solid fa-xmark menu-icon" : "fa-solid fa-bars menu-icon" : ""}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/skills' className={button ? click ? "nav-links" : "disabled" : "nav-links"} onClick={closeMenu}>
                            Skills
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className={button ? click ? "nav-links" : "disabled" : "nav-links"} onClick={closeMenu}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar