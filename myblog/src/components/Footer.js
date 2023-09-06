import React from 'react';
import './Footer.css'
function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Bloggy Blogs</p>
        </footer>
    );
}
export default Footer;