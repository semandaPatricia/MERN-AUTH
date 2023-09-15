import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  //const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-blue-200'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold'>Authentication App</h1>
      </Link>
      <ul className='flex gap-4'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/profile'>
          
            <img src="https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt='profile' className='h-7 w-7 rounded-full object-cover' />
          
            <li>Sign In</li>
          
        </Link>
      </ul>
    </div>
  </div>
);
  
}

export default Header