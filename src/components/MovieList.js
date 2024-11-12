import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    if(!movies) return;
    console.log(movies)
    return (
        <div className='overflow-x-hidden my-1 sm:m-2 md:my-4' >
            <div>
                <h1 className='text-white text-base sm:text-lg md:text-2xl font-medium sm:mx-1 md:mx-2 my-1 sm:my-2 md:my-3'>{title}</h1>
                <div className='scrollbar_hide flex flex-row gap-4 overflow-x-auto '>
                    {movies.map((movie) => 
                        <MovieCard moviedetail = {movie} key = {movie.id} />
                    )}
                </div>
            </div>
        </div>
    )
};

export default MovieList;