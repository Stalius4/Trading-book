import React from 'react';
import aboutImg from '../Images/open-book.png'
import "../Style/about.css"
const AboutPage = () => {



    return (
        <div className='about-outer'>
               <img src={aboutImg} alt="Hero" className='about-img'/>
               <div className='about-main'>
                <h1>About the book</h1>
                <p>There are many gaps in the trading literature that this book will help you to fill. The core of the book is focused on trading momentum stocks and using Level 2. I will be covering a lot of topics to make your trading path more successful such as how to use Time & Sales, best price action, which stocks to trade, how to find entries and exits for your positions or even how to avoid false breakouts. I hope you will find the knowledge that you have been looking for.</p>
               </div>
    </div>

    );
  }

  export default AboutPage;