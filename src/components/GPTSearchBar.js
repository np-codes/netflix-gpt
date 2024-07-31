import React, { useRef } from 'react'
import lang from '../utils/languageconst';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai'
import Error from './Error';
import { SearchRecommendedMovies } from '../hooks/useFetchMovieLists';
import { addGPTMoviesResult } from '../utils/gptSlice';
import { Openai } from '../hooks/useOpenai';

const GPTSearchBar = () => {
	const langkey = useSelector((store)=> store?.config.language);
    const searchtext = useRef(null);
    const dispatch = useDispatch();

    //-------------- API to fetch movies recommended by openai --------------------
    
    const handleGPTSearchClick = async() => {

        if (!searchtext.current.value) return;

        const gptMovies = await ( Openai(searchtext.current.value))
        console.log("gptmovies : ",gptMovies)

        const gptMoviesPromise = gptMovies.map((moviename) => SearchRecommendedMovies(moviename));
        console.log("Promise : ",gptMoviesPromise)
        // Here in gptMoviesPromise you will receive only promises because of async function call.
        // In gptMoviesData you will await untill all your promises are fullfilled and you receive data.
        const gptMoviesData = await Promise.all(gptMoviesPromise);
        console.log("Data : ",gptMoviesData)
        
        dispatch(addGPTMoviesResult({gptMovieNames: gptMovies, gptMovies: gptMoviesData}));

    }
    return (
        <div>
            <div className='pt-[8%] flex justify-center'>
				<div className='grid grid-cols-12 gap-5 items-center w-full max-w-screen-md'>
                    <input 
                        ref={searchtext}
                        type="text" 
                        className='p-2 rounded-lg h-12 col-span-9 ' 
                        placeholder={lang[langkey].gptsearchplaceholder}/>
                    <button 
                        className='rounded-lg shadow-lg font-semibold text-xl text-white h-12 md:h-12 px-5 md:px-5 bg-red-600 hover:border-2 border-white col-span-3'
                        onClick={handleGPTSearchClick}    
                    > {lang[langkey].gptsearch} </button>
				</div>
			</div>
        </div>
    )
}

export default GPTSearchBar