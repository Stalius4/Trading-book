import React from 'react';
import logo from '../Images/logo.png'
import "../Style/navbar.css"
const Navbar = () => {
    // Component logic goes here
    return (
     <div className='navbar-outer'>
      <div className='navbar-inner'> 
      
        <div className='nav-logo'><img src={logo} alt='sds'></img></div> 
        <ul class="navbar">
      
    <li><div>About</div></li>
    <li><div>Price</div></li>
    <li><div>Contact</div></li>
    <li><button className='sign-up-btn'>Sign-up</button></li>
</ul>

       
      </div>
    </div>

    );
  }

  export default Navbar;