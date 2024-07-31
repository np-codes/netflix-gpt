import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTRecommendation = () => {
    const { gptMovieNames, gptMovieDetails } = useSelector((store) => store.gpt);
    if (!gptMovieNames) return;
    return (
        <div className='p-4 m-4'>
            {gptMovieDetails.map((movie,index) => {
                const name = gptMovieNames[index];
                return <MovieList key={index} title={name +" and related"} movies={movie} />
            })}
        </div>
    )
}

export default GPTRecommendation