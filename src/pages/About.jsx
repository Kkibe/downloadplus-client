import React from 'react'

function About() {
  return (
    <div className='about'>
      <section>
            <h1>About Us</h1>
            <iframe  width="560" height="315"  src="https://www.youtube.com/embed/c1xTDSIXit8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
      <ul className="accordion" id='faq'>
        <h2>Frequently Asked Questions</h2>
        <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">What is SnapSave Downloader?</label>
            <div className="content">
                <p>
                    <ul>
                        <li>Step 1: Open the Youtube app on your phone or visit the Youtube.com website.</li>
                        <li>Step 2: Find and open the video you want to download and click the Share button then continue pressing the Copy link button.</li>
                        <li>Step 3: Go to SnapSave.io website, paste the copied Youtube link in the search box and press the Download button.</li>
                    </ul>
                </p>
            </div>
        </li>
        <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">How to download Youtube videos fastest?</label>
            <div className="content">
                <p>
                    SnapSave is a Youtube downloader, allowing to download high quality 
                    Youtube videos: 1080p, 2k, 4k for free. Support PC, tablet, phone 
                    (iPhone, Android) without software installation.
                </p>
            </div>
        </li>

        <li>
            <input type="radio" name="accordion" id="second" />
            <label for="second">How to download Youtube videos on Android for free?</label>
            <div className="content">
                <p>
                    Copy the link to the Youtube video → Go to SnapSave.io → Paste the copied 
                    Youtube link in the search box → Download.
                </p>
            </div>
        </li>

        <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">Where are downloaded Youtube videos saved?</label>
            <div className="content">
                <p>
                    Please check the "Downloads" folder in your phone or the "download history" 
                    section of your browser.
                </p>
            </div>
        </li>

        <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">How to download highest quality Youtube videos?</label>
            <div className="content">
                <p>
                    SnapSave is a Youtube downloader, which allows you to convert and download 
                    videos from Youtube in best quality: 1080p, 2k, 4k in few easy steps.
                </p>
            </div>
        </li>

        <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">Do I have to pay to download Youtube videos?</label>
            <div className="content">
                <p>
                    Absolutely not, our Youtube downloader allows to download Youtube videos for free. 
                    You can download any Youtube video without limitation.
                </p>
            </div>
        </li>
    </ul>
    </div>
  )
}

export default About
