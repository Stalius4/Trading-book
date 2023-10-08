import React from 'react';
import stockImg from '../Images/stock.jpg'
import amazonImg from '../Images/amazon.png'
import "../Style/price.css"
const PricePage = () => {



    return (
        <div className='price-outer'>
               <div className='price-main'>
                <h1>Pricing</h1>
                <p>I do not provide any courses, scanners or tutorials. This book is coming together from the compilation of my notes and I believe it has its worth due to being immensely detailed and covering rare subjects. Since I am planning on the book to be coloured, it will have a little price due to printing costs.</p>
                <div className='price-flex'>
                    <div className='price'>Price : $25-30</div>
                    <img src={amazonImg} alt="amazon" className='amazon-img' />
                </div>
               </div>
               <img src={stockImg} alt="stock" className='stock-img'/>
    </div>

    );
  }

  export default PricePage;