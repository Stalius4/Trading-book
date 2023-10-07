import React from 'react';
import heroImg from '../Images/hero-book.png'
import "../Style/hero.css"
const HeroPage = () => {



    return (
        <div className='hero-outer'>
         <div className='hero-main'>
            <h1>My Day Trading:</h1>
            <p className='book-title'>Momentum, Level 2 and Reading the Tape</p>
            <p className='waiting-list'>We have 12 people already waiting for the book</p>
            <input placeholder='Email'></input>
            <button>Sign up</button>
            <p className='bottom-text'>Sign up with your email and I will notify you once the book is released.</p>
         </div>
         <img src={heroImg} alt="Hero" className='hero-img'/>
    </div>

    );
  }

  export default HeroPage;