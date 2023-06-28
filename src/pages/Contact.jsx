import React, { useState } from 'react'


function Contact() {
  const [error, setError] = useState(true);
  return (
    <div className='contact'>
          <h1>CONTACT US &nbsp;</h1>
          <h3>Fill out the form below!</h3>
            <form>
                <div>
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='email' />
                </div>
                <div>
                    <input type="text" placeholder='Subject'/>
                </div>
                <div>
                    <textarea placeholder="Message" rows='5'></textarea>
                </div>
                <button>SUBMIT</button>
                {error && <div className="error">Error Submitting Your Form</div>}
            </form>
    </div>
  )
}

export default Contact
