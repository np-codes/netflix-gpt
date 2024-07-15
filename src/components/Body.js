import React from 'react';
import { BG_IMG, LOGO_IMG } from '../utils/constants';
import { Link } from 'react-router-dom';


const Body = () => {
    

  return (
    <div>
        
        <div className="">
            <img
                className='absolute w-full h-full object-cover'
                src={BG_IMG}
                alt="bg"
            />
        </div>
        <div className='absolute w-full h-full bg-black opacity-80'></div>
        <div 
            className='absolute p-4 w-8/12 sm:w-8/12 md:w-8/12 lg:w-5/12 xl:w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white text-center font-serif'>
            <img
                className=''
                src={LOGO_IMG}
                alt="logo"
            />
            <h1 className='px-2'>
                Why don't scientists trust atoms? Because they make up everything—just like our movie lineup! 
            </h1>
            <h2 className='my-6'> Dive in for laughs and epic plots!</h2>
            <button className=' w-6/12 p-3 my-10 rounded-lg bg-red-600'>
                <Link to={'/login'}>Get Started </Link>
            </button>
        </div>
    </div>
  )
}

export default Body;