import React, { useRef, useState } from 'react'
import lang from '../utils/languageconst';
import { useDispatch, useSelector } from 'react-redux';
import { SearchRecommendedMovies } from '../hooks/useFetchMovieLists';
import { addGPTMoviesResult } from '../utils/gptSlice';
import { useOpenai } from '../hooks/useOpenai';
import useUserAPIKey from '../hooks/useUserAPIKey';
import {removeAPIKey} from '../utils/configSlice';

const GPTSearchBar = () => {
	const langkey = useSelector((store)=> store?.config?.language);
	const apiKey = useSelector((store)=> store?.config?.userapikey);

    const searchtext = useRef(null);
    const userapikey = useRef(null);

    const [gptsearchbarph , setgptsearchbarph] = useState(apiKey? lang[langkey].gptsearchplaceholder :lang[langkey].withoutkeygptsearchph)
    const [apikeybarph , setapikeyph] = useState(lang[langkey].enterkeyplaceholder)

    const validateAPIKey = useUserAPIKey();
    const dispatch = useDispatch();
    const Openai_Movies_Recommend = useOpenai();

    const btncss = 'rounded-md md:rounded-lg shadow-lg font-semibold text-xs sm:text-base md:text-xl text-white h-8 sm:h-10 md:h-12 bg-red-600 hover:border-2 border-white col-span-3';
    const inputcss = 'p-2 rounded-lg h-8 sm:h-10 md:h-12 col-span-9';

    //-------------- API to fetch movies recommended by openai --------------------
    
    const handleGPTSearchClick = async() => {
        if (!searchtext.current.value || !apiKey) { 
                searchtext.current.value ="";
                return;
            }
        const gptMovies = await ( Openai_Movies_Recommend(searchtext.current.value));
        console.log("gptmovies : ",gptMovies)
        const gptMoviesPromise = gptMovies.map((moviename) => SearchRecommendedMovies(moviename));
        console.log("Promise : ",gptMoviesPromise);
        const gptMoviesData = await Promise.all(gptMoviesPromise);
        console.log("Data : ",gptMoviesData);
        
        dispatch(addGPTMoviesResult({gptMovieNames: gptMovies, gptMovies: gptMoviesData}));

    }
    const handleAPIKey = async() => {
        console.log("userapikey--------////----------",userapikey)
        const inputkey = userapikey.current.value ;
        userapikey.current.value="";
        if(!apiKey) {
            const result = await validateAPIKey(inputkey);
            if(result) {
                setgptsearchbarph(lang[langkey].gptsearchplaceholder)
            }else{
                setapikeyph(lang[langkey].invalidkeymsgph)
            }
        };
          
    }

    const handleRemoveAPIKey = () => {
        dispatch(removeAPIKey());
        setgptsearchbarph(lang[langkey].withoutkeygptsearchph);
        setapikeyph(lang[langkey].enterkeyplaceholder);
    }
    return (
        <div className='pt-28 sm:pt-32 md:pt-28'>
            <div className='flex justify-center w-full'>
				<div className='mx-5 grid grid-cols-12 gap-2 sm:gap-3 md:gap-5 w-full max-w-screen-sm md:max-w-screen-md items-center'>
                    {!apiKey ? (
                        <>
                            <button className= {btncss} onClick={handleAPIKey}>
                                {lang[langkey].enterkey} 
                            </button>
                            <input
                                ref={userapikey}
                                type="text" 
                                className= 'p-2 rounded-lg h-8 sm:h-10 md:h-12 col-span-9'
                                placeholder={apikeybarph}
                            />
                        </>
                    ):  (<>
                            <button className= {btncss} onClick={handleRemoveAPIKey}>
                                {lang[langkey].removekey} 
                            </button>
                            <input
                                type="text" 
                                className= {inputcss} 
                                placeholder={lang[langkey].removekeyplaceholder}
                                disabled
                            />
                        </>)
                    }
                    <input 
                        ref={searchtext}
                        type="text" 
                        className= {inputcss}
                        placeholder={gptsearchbarph}/>
                    <button className= {btncss} onClick={handleGPTSearchClick}>
                        {lang[langkey].gptsearch} 
                    </button>
				</div>
			</div>
        </div>
    )
}

export default GPTSearchBar