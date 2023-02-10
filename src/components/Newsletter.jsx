import { Send } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const scriptUrl = 'https://sheet.best/api/sheets/06a8d0fe-8f2e-4729-8bcf-d7b0d61bf4e8';
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(scriptUrl, {
            Email : email
        }).then((res) => {
            setSuccess(res)
        }).catch(err => {
            setError(err.message);
        })
        e.target.children[0].value = '';
    }

    useEffect(() => {
        setTimeout(() => {
            error && setError(null);
            success && setSuccess(null);
        }, 2000);
    }, [success, error]); 
    return (
        <div className='newsletter' id='subscribe'>
            <h3>Subscribe</h3>
            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email Address'/>
                <button type='submit' title='send'><Send /></button>
            </form>
            {
                error && <p className='error'>{error}!</p>
            }
            {
                success && <p className='success'>Thank You For Subscribing!</p>
            }
        </div>
    );
}
export default Newsletter;