import React from 'react'
import { POSTER_CDN_URL } from '../utils/constants'

const MovieCard = ({moviedetail}) => {
  	return (
    	<div className=' flex-none w-40 h-56 m-2 items-center justify-center relative hover:border-4 border-solid border-red-600 hover:scale-105 transition-transform duration-400'>
			<img 
				className='w-full h-full object-cover'
				src= {`${POSTER_CDN_URL}${moviedetail.poster_path}`}
				alt={moviedetail.title}
			/>
        
    	</div>
  	)
}

export default MovieCard