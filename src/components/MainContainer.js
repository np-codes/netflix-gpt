// this is the video running in bg in top of neflix 
import React from 'react'
import { useSelector } from 'react-redux'
import VideoDetails from './VideoDetails';
import VideoBG from './VideoBG';


const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[1];
    const {title, overview, id } = mainMovie;

  	return (
		<div className='relative'>
			<VideoDetails title={title} overview={overview} id={id}/>
			<VideoBG id={id}/>
		</div>
  	)
}

export default MainContainer