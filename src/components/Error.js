import React from 'react'
import { LOGO_IMG } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { resetReduxStore } from '../utils/appStore';

const Error = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleokbtnClick = () => {
		dispatch(resetReduxStore());
		navigate('/login');
	}
  	return (
		<div className='px-1 bg-black w-screen h-screen flex flex-col justify-center '>
			<img
				className='h-[20%] md:[30%] mx-auto'
				src= {LOGO_IMG}
				alt= "logo"
			/>
			<div className='px-2 text-4xl md:text-7xl text-center font-extrabold text-white pt-6 '>
				Something went wrong
			</div>
			<div className='px-2 text-lg md:text-2xl text-center font-bold text-white pt-10'>
				Sorry, we're having trouble with your request. Please try again later.
			</div>
			<button 
				className='bg-red-500 w-1/2 h-12 mx-auto text-4xl font-serif text-white mt-10 md:mt-16 rounded-lg hover:cursor-pointer hover:text-black hover:bg-red-600 hover:scale-105 hover:shadow-lg transition-all duration-500 '
				onClick={handleokbtnClick}
			
			>OK</button>
		</div>
  	)
}

export default Error;