// this is the video running in bg in top of neflix 
import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBG from './VideoBG';
import useMovieVideo from '../hooks/useMovieVideo'


const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[1];
    const {title, overview, id } = mainMovie;

  return (
    <div>
        <VideoTitle title={title} overview={overview} id={id}/>
        <VideoBG id={id}/>
        
    </div>
  )
}

export default MainContainer