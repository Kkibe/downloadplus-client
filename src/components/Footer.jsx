
import { MailOutline} from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='section-wrapper'>
               <div className="col-md-4 pt-5">
                    <h2 className="text-success h2 border-bottom pb-3 border-success">Youtube Downloader</h2>
                    <a href="mailto:support@ql.com" title='mailto'>
                        <MailOutline />
                        <span>support@ql.com</span>
                    </a>
                </div>
                <section>
                    <h2>Downloaders</h2>
                    <div className='items-container'>
                        <a href='#' title='tiktok'>TikTok</a>
                        <a href='#' title='instagram'>Instagram </a>
                        <a href='#' title='twitter'>Twitter </a>
                        <a href='#' title='facebook'>Facebook</a>
                    </div>
                </section>

                <section>
                    <h2>QL Downloader</h2>
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