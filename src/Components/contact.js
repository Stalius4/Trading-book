import React from 'react';

import "../Style/contact.css"
const ContactPage = () => {



    return (
        <div className='contact-outer'>
               <div className='form'>
                <h1>Fill the form. It’s easy.</h1>
                <div className='form-flex'>
                    <div className='name-email-flex'>
                        <div>
                            <div className='form-text'>First Name</div>
                            <input className='form-input' type="text" />
                        </div>
                        <div>
                            <div className='form-text'>Email</div>
                            <input className='form-input' type='text' ></input>
                        </div>
                    </div>
                    <div className='message-flex'>
                    <div className='form-text'>Write your message</div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button type='submit' >Send message</button>
                
                </div>
               </div>
               <div className='right-side'>
                <h1>Let’s talk about everything.</h1>
                <p>If you have any questions, suggestions or business propositions, please fill out the form and I will get back to you within 24 hours.</p>

               </div>
        
    </div>

    );
  }

  export default ContactPage;