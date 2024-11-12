import React from 'react'

const VideoDetails = ({title,overview}) => {
  
  	return (
			
		<div className='absolute inset-0 w-screen h-screen text-white bg-gradient-to-r from-black z-10 '>
			<div className='absolute w-screen mb-5 top-[45%] md:top-[40%] lg:top-[50%]  px-2 sm:px-6 md:px-10'>
				<h1 className='text-xl sm:text-3xl md:text-6xl font-bold sm:mb-2 md:mb-4'>{title}</h1>
				<h2 className='hidden sm:text-base md:inline-block text-xl font-semibold md:mb-4 md:w-2/3'>{overview}</h2>				
				<div className='my-1 sm:my-2 md:my-3'>
					<button className='rounded-md shadow-lg font-medium text-base sm:text-lg md:text-xl text-white h-8 sm:h-9 md:h-10 px-1 sm:px-3 md:px-5 bg-gray-700 opacity-90 hover:bg-white hover:text-black hover:opacity-100 hover:scale-105 transition-all duration-500 mr-2 sm:mr-5 md:mr-10'> ▷ Play</button>
					<button className='rounded-lg shadow-lg font-medium text-base sm:text-lg md:text-xl text-white  h-8 sm:h-9 md:h-10 px-1 sm:px-3 md:px-5 bg-gray-700 opacity-90 hover:bg-white hover:text-black hover:opacity-100 hover:scale-105 transition-all duration-500 ml-2 sm:ml-5 md:ml-10 '> ⓘ More Info</button>
				</div>
			</div>
			
		</div>
			
  	)
}

export default VideoDetails;