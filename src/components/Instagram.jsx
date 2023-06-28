import { Download } from '@mui/icons-material';
import React, { useRef, useState } from 'react';

export default function Instagram() {
    const [downloading, setDownloading] = useState(false);
    const urlRef = useRef();
    const previewArea = useRef();
    const imgTag = useRef();
    const hiddenInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let link = urlRef.current.value;
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <h1>Instagram Downloader</h1>
        <div >
            <h2 >Copy And Paste Video Url:</h2>
            <input type="text" placeholder="https://" autoFocus ref={urlRef}/>
            <div className="field">
                <input type="hidden" ref={hiddenInput}/>
            </div>
        </div>
        <div className="preview-area" ref={previewArea}>
            <img src="" ref={imgTag} alt='instagram downloder'/>
            <i className="icon fas fa-cloud-download-alt"/>
            <span>Paste video url to see preview</span>
        </div>
        <button className="download-btn" type="submit"><span>Download Thumnail</span> <Download /></button>
    </form>
  );
}