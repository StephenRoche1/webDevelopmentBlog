import React from 'react';
import './Navigation.css'
function Navigation(){
    return(
        <nav>
            <ul>
                <li><a href='/'></a>Home</li>
                <li><a href='/about'>About</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='/contact'>Contact Us</a></li>
            </ul>
        </nav>
    );
}
export default Navigation;