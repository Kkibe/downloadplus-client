import { Search } from '@mui/icons-material';
import React, { useState } from 'react';
import Icon from '../assets/ql.png';

 const  Navbar = () => {
    return (
        <div className='navbar'>
            <a href="/" className="logo" title='ql-downloader'>
                <img src={Icon} alt="ql downloader" />
            </a>
            <nav>
                <a href="/" title='home' className='active'>Downloader</a>
                <a href="/blogs" title='blogs'>Blog</a>
                <a href="/about" title='about'>About Us</a>
                <a href="/contact" title='contact'>Contact</a>
            </nav>

            <div className='d-flex p-2'>
                <a className="nav-icon d-none d-lg-inline me-3" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                    <Search />
                </a>
            </div>
        </div>
    );
}

export default Navbar;