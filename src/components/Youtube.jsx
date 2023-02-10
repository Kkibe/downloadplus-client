import { Download } from '@mui/icons-material';
import React, { useRef, useState } from 'react';

export default function Youtube() {

    const [url, setUrl] = useState(null);
    const [downloading, setDownloading] = useState(false);
    const urlRef = useRef();
    const previewArea = useRef();
    const imgTag = useRef();
    const hiddenInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let imgUrl = urlRef.current.value;
    
    previewArea.current.classList.add('active');
     
    if(imgUrl.indexOf('https://www.youtube.com/watch?v=') != -1){ //if entered value is youtube url
        let vidId = imgUrl.split('v=')[1].substring(0, 11);
        setUrl(vidId);
        let ytThumnailUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.current.src = ytThumnailUrl;
        imgTag.current.style.display = 'block'
    } /* else if(imgUrl.indexOf('https://www.youtu.be') != -1){//if video url is looke like this
        let vidId = imgUrl.split('be/')[1].substring(0, 11);
        let ytThumnailUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
        imgTag.current.src = ytThumnailUrl; //passing yt thumnail url             

    } else if(imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) { // if entered value is other image-file url
        imgTag.current.src = imgUrl;
    } else{
        //imgTag.src = imgUrl;
        previewArea.classList.remove('active');
    }

    hiddenInput.current.value = imgTag.current.src; //passing img src*/
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <h1>Download Thumbnail</h1>
        <div className="url-input">
            <h2 >Copy And Paste Video Url:</h2>
            <input type="text" className="url-input" placeholder="https://" autoFocus ref={urlRef}/>
            <div className="field">
                <input type="hidden" ref={hiddenInput}/>
                <div className="bottom-line"/>
            </div>
        </div>
        <div className="preview-area" ref={previewArea}>
            <img src="" alt="thumbnail" ref={imgTag}/>
            <i className="icon fas fa-cloud-download-alt"/>
            <span>Paste video url to see preview</span>
        </div>
        <button className="download-btn" type="submit"><span>Download Thumnail</span> <Download /></button>
    </form>
  );
}