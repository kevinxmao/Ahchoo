import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = props => (
    <div className="auth-links-container">
        <Link to="/">
            <span>Portfolio</span>
        </Link>
        <a href="https://www.linkedin.com/in/kevinxmao/" target="_blank"><span>LinkedIn</span></a>
        <a href="https://github.com/kevinxmao" target="_blank"><span>Github</span></a>
        <a href="#"><span>About</span></a>
    </div>
)

export default NavLinks;