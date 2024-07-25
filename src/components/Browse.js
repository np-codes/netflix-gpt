import React from 'react'
import Header from './Header'
import {useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies} from '../hooks/useFetchMovieLists'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import GPTSearch from './GPTSearch';


const Browse = () => {
	const { showGPTSearch } = useSelector(store => store.gpt)
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();
  	return (
    	<div className='bg-black h-screen overflow-x-hidden'>
      		<Header loggedin={true}/>
			{showGPTSearch? 
				<GPTSearch /> :<>
				<MainContainer />
				<SecondaryContainer />
				</>
			}
            
            
    	</div>	
  )
}
export default Browse