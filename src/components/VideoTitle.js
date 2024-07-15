import React from 'react'

const VideoTitle = ({title,overview}) => {
  
  	return (
			
		<div className='w-screen h-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
			<h1 className='text-6xl font-bold mb-4'>{title}</h1>
			<h2 className='text-xl font-semibold mb-4 w-1/3'>{overview}</h2>				
			<div className='my-5'>
				<button className='rounded-md shadow-lg font-medium text-xl text-white h-10 md:h-10 px-5 md:px-5 bg-gray-700 opacity-90 hover:bg-white hover:text-black hover:opacity-100 mr-10'> ▷ Play</button>
				<button className='rounded-lg shadow-lg font-medium text-xl text-white h-10 md:h-10 px-5 md:px-5 bg-gray-700 opacity-90 hover:bg-white hover:text-black hover:opacity-100 ml-10 '> ⓘ More Info</button>
			</div>
		</div>
			
  	)
}

export default VideoTitle;