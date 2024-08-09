import React from 'react'
import { POSTER_CDN_URL } from '../utils/constants'

const MovieCard = ({moviedetail}) => {
	if(!moviedetail.poster_path) return
  	return (
    	<div className=' flex-none w-20 sm:w-28 md:w-40 h-28 sm:h-40 md:h-56 sm:mx-2 items-center justify-center relative hover:border-4 border-solid border-red-600 hover:scale-100 transition-transform duration-1000'>
			<img 
				className='w-full h-full object-cover'
				src= {`${POSTER_CDN_URL}${moviedetail?.poster_path}`}
				alt={moviedetail.title}
			/>
    	</div>
  	)
}

export default MovieCard