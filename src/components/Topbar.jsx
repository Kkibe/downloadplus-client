import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <a href="https://facebook.com" className='facebook' target='_blank' title='facebook'><Facebook /></a>
        <a href="https://twitter.com" className='twitter' target='_blank' title='twitter'><Twitter /></a>
        <a href="https://instagram.com" className='instagram' target='_blank' title='instagram'><Instagram /></a>
        <a href="https://youtube.com" className='youtube' target='_blank' title='youtube'><YouTube /></a>
        <a href="https://linkedin.com" className='linkedin' target='_blank' title='linkedin'><LinkedIn /></a>
      </div>
      <a href="#subscribe" title='subscribe'><button className='button-primary' type='button' title='subscribe'>subscribe</button></a>
    </div>
  )
}