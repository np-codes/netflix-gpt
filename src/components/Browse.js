import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';


const Browse = () => {
	
	useNowPlayingMovies();

  	return (
    	<div>
      		<Header signedin={false} showsignbtn={true}/>
			<MainContainer/>
    	</div>	
  )
}
export default Browse