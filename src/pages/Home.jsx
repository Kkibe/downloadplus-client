import { useEffect, useState } from 'react';
import Youtube from '../components/Youtube';
import Instagram from '../components/Instagram';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [downloader, setDownloader] = useState('youtube');
  let location = useLocation();
  
  useEffect(() => {
    setDownloader(window.location.href.split('/#')[1]);
  }, [location]);
  return (
    <div className='home'>
      {
        downloader == 'youtube' ? <Youtube /> : <Instagram />
      }
      
    </div>
  );
}
