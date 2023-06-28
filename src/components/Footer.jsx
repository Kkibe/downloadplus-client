import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='section-wrapper'>
                <section>
                    <h2>Downloaders</h2>
                    <div className='items-container'>
                        <a href='/#youtube' title='youtube'>Youtube</a>
                        <a href='/#tiktok' title='tiktok'>TikTok</a>
                        <a href='/#instagram' title='instagram'>Instagram </a>
                        <a href='/#twitter' title='twitter'>Twitter </a>
                        <a href='/#facebook' title='facebook'>Facebook</a>
                    </div>
                </section>

                <section>
                    <h2>Downloaders</h2>
                    <div className='items-container'>
                        <a href='/' title='home'>Home</a>
                        <a href='/about' title='about'>About Us</a>
                        <a href='/blogs' title='blogs'>Blogs</a>
                        <a href='/contact' title='contact'>Contact Us</a>
                    </div>
                </section>
            </div>
            <hr />
            <div className='footer-bottom'>
                <p>&copy; 2022 QL Downloader -  made with  by SSYoutube.</p>
                <a href='#' title='privacy'>Privacy & cookies</a>
                <a href='/about/#faq' title='faq'>FAQ</a>
                <a title='/help'>Help</a>
                <a title='/terms'>Terms of Service</a>
            </div>
        </div>
    );
}

export default Footer;