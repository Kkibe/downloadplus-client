import { DownloadDoneOutlined,FindInPage, HighQualityOutlined, MoneyOffOutlined} from '@mui/icons-material';
import React from 'react';

const Featured = () => {
    return (
    <section className="featured">
        <header>
            <h1>Why Choose QL Downloader?</h1>
            <p>QL Downloader is the best video downloader you can find on internet.</p>
        </header>
        <div className="wrapper">
            <div className="item">
                <h1 ><DownloadDoneOutlined/></h1>
                <h2>Easy Downloader</h2>
            </div>
            <div className="item">
                <h1><HighQualityOutlined/></h1>
                <h2>High Quality</h2>
            </div>
            <div className="item">
                <h1><FindInPage/></h1>
                <h2>Search For Videos</h2>
            </div>
            <div className="item">
                <h1><MoneyOffOutlined /></h1>
                <h2>100% Free</h2>
            </div>
        </div>
    </section>
    );
}
export default Featured;