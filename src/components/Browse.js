import React from 'react'
import Header from './Header'
import {useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies} from '../hooks/useFetchMovieLists'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
	
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();

  	return (
    	<div className='bg-black overflow-x-hidden'>
      		<Header signedin={false} showsignbtn={true}/>
            <MainContainer />
            <SecondaryContainer />
            
    	</div>	
  )
}
export default Browse