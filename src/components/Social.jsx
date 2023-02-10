import React from 'react';
import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material';
const Social = () => {
    return (
    <div className='social'>
        <a href='https://facebook.com' title='facebook' ><Facebook className='facebook'/></a>
        <a href='https://twitter.com' title='instagram' ><Instagram className='instagram'/></a>
        <a href='https://instagram.com' title='twitter'><Twitter className='twitter'/></a>
        <a href='https://youtube.com' title='youtube'><YouTube className='youtube'/></a>
        <a href='https://linkedin.com' title='linkedin'><LinkedIn className='linkedin'/></a>
        <a href='https://pinterest.com' title='pinterest'><Pinterest className='pinterest'/></a>
    </div>
    );
}
export default Social;