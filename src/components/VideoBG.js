import React from 'react'
import useMovieVideo from '../hooks/useMovieVideo'
import { useSelector } from 'react-redux';

const VideoBG = ({id}) => {
    useMovieVideo(id);
    const trailer = useSelector(store=> store?.movies?.trailerVideo)

    return (
        <div className=" w-screen h-screen">
            {trailer && 
            <iframe 
                className='w-screen top-0 left-0 h-screen  bg-red-500 ' 
                src={`https://www.youtube.com/embed/${trailer?.key}?si=91WKB2FC5v8BDcqx?&autoplay=1&mute=1&controls=1&loop=1`}
                allowFullScreen="allowFullScreen"
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                 >
            </iframe>
            }
            
        </div>
    )
}

export default VideoBG;

//<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-0"></div> https://youtu.be/LP50dmF_E4c?si=91WKB2FC5v8BDcqx
