import React from 'react'
import useMovieVideo from '../hooks/useMovieVideo'
import { useSelector } from 'react-redux';

const VideoBG = ({id}) => {
    useMovieVideo(id);
    const trailer = useSelector(store=> store?.movies?.trailerVideo)

    return (
        <div className=" w-screen h-screen overflow-hidden relative">
            {trailer && 
                <div >
                    <iframe
                        className='absolute top-[30%] sm:top-[45%] md:top-1/2 left-[40%] sm:left-[55%] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125 sm:scale-135 md:scale-150 w-full h-full'
                        src={`https://www.youtube.com/embed/${trailer?.key}?si=91WKB2FC5v8BDcqx&autoplay=1&mute=1&controls=1&loop=1`}
                        allowFullScreen
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    >
                    </iframe>
                    <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
                </div>
            }    
        </div>
    )
};

export default VideoBG;

/*  {trailer && 
            <iframe 
                className='w-screen top-0 left-0 h-screen scale-[1.2] overflow-hidden bg-red-500 ' 
                src={`https://www.youtube.com/embed/${trailer?.key}?si=91WKB2FC5v8BDcqx?&autoplay=1&mute=1&controls=1&loop=1`}
                allowFullScreen="allowFullScreen"
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"    
            >       
            </iframe>
    } */