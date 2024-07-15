import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addTrailerVideo} from '../utils/moviesSlice';

const useMovieVideo = (id) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_OPTIONS);
        const json = await data.json();
        const filtervideos = json.results.filter(video => video.type === "Trailer" );
        const trailer = filtervideos.length? filtervideos[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
    };
    useEffect(()=> {
        getMovieVideo();
    },[]);

};

export default useMovieVideo;