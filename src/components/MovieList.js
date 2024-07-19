import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    if(!movies) return;
    return (
        <div className='overflow-x-hidden mx-5 my-6' >
            <div>
                <h1 className='text-white text-2xl font-medium m-2'>{title}</h1>
                <div className='scrollbar_hide flex flex-row gap-4 overflow-x-auto'>
                    {movies.map((movie) => 
                        <MovieCard moviedetail = {movie} key = {movie.id} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList