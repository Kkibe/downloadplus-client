import Icon from '../assets/ql.png';

 const  Navbar = () => {
    return (
        <div className='navbar'>
            <a href="/" className="logo" title='ql-downloader'>
                <img src={Icon} alt="video downloader" />
            </a>
            <nav>
                <a href="/" title='home' className='active'>Downloader</a>
                <a href="/blogs" title='blogs'>Blog</a>
                <a href="/about" title='about'>About Us</a>
                <a href="/contact" title='contact'>Contact</a>
            </nav>
        </div>
    );
}

export default Navbar;