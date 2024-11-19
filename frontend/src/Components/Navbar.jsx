import React from 'react';
import Annotixword from '../assets/Annotixword.svg';
import { Link } from 'react-router-dom';
import { Button, colors } from '@mui/material';
import { red } from '@mui/material/colors';
import { withEmotionCache } from '@emotion/react';


export const Navbar = () => {
  return (
   <>
   <header>
   <nav className='flex justify-between items-center w-[92%] mx-auto'>
    <div>
        <img className= "w-20"src= {Annotixword}  alt='wordlogo'/>
    </div>
    <div className="links">
        <uL className ="flex justify-center space-x-5">
              <Link to ='/product'><li className='hover:underline'>Product</li></Link>  
              <Link to ='/learderboard'><li className='hover:underline'>Leaderboards</li></Link> 
              <Link to ='/enterprise'><li className='hover:underline'>Enterprise</li></Link>
              <Link to ='/government'><li className='hover:underline'>Government</li></Link>  
              <Link to ='/customers'><li className='hover:underline' >Customers</li></Link> 
        </uL>
    </div>
    <div>
    <Button sx={{backgroundColor: 'white',color:'black', '&:hover': { backgroundColor: '#ab47bc'}}}>Sign In</Button>
    </div>
   </nav>
   </header>
   
   </>
  );
};
