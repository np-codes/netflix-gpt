// this will have the different row of movie lists
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import lang from '../utils/languageconst'

const SecondaryContainer = () => {
	const movielist = useSelector((store) => store.movies);
	const langkey = useSelector((store) => store.config.language);

  	return (
		<div className='z-10 relative -top-[45%] sm:-top-[48%] md:-top-[25%] p-1 sm:p-2 md:p-3 m-1 sm:m-2 md:m-3'>
			<MovieList title={lang[langkey].movielisttitle1} movies = {movielist.UpcomingMovies} />
			<MovieList title={lang[langkey].movielisttitle2} movies = {movielist.nowPlayingMovies} />
			<MovieList title={lang[langkey].movielisttitle3} movies = {movielist.PopularMovies}/>
			<MovieList title={lang[langkey].movielisttitle4} movies = {movielist.TopRatedMovies}/>
		</div>
  	)
}

export default SecondaryContainer