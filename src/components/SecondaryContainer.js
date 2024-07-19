// this will have the different row of movie lists
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
	const movielist = useSelector((store) => store.movies)

  	return (
		<div className='z-20 relative -top-40  '>
			<MovieList title={"Now Playing"} movies = {movielist.nowPlayingMovies}/>
			<MovieList title={"Popular"} movies = {movielist.PopularMovies}/>
			<MovieList title={"Top Rated"} movies = {movielist.TopRatedMovies}/>
			<MovieList title={"Upcoming"} movies = {movielist.UpcomingMovies}/>
		</div>
  	)
}

export default SecondaryContainer