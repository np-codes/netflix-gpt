import React from 'react';
import { BG_IMG, LANGUAGES_SUPPORTED, LOGO_IMG } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../utils/configSlice';

const Body = () => {
    const dispatch = useDispatch();

    const handleGetStarted = (langkey) => {
        dispatch(changeLanguage(langkey));
    }

    return (
        <div>
            <div className="">
                <img
                    className='absolute w-full h-full object-cover'
                    src={BG_IMG}
                    alt="bg"
                />
            </div>
            <div className='absolute w-full h-full bg-black opacity-80'></div>
            <div 
                className=' absolute p-4 w-8/12 sm:w-8/12 md:w-8/12 lg:w-5/12 xl:w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white text-center font-serif'>
                <img
                    className=''
                    src={LOGO_IMG}
                    alt="logo"
                />
                <h1 className='px-2'>
                    Why don't scientists trust atoms? Because they make up everything—just like our movie lineup! 
                </h1>
                <h2 className='my-6'> Dive in for laughs and epic plots!</h2> 
            </div>
            <div className=' absolute mt-[70%] w-full flex items-center justify-center'>
                <div className=''>
                {LANGUAGES_SUPPORTED.map (
                    lang => 
                    <button 
                        className=' p-3 m-10 col-span-2 text-2xl font-bold text-white text-center font-serif rounded-lg bg-red-600'
                        onClick={() => handleGetStarted(lang.identifier)}>
                        <Link to={'/login'}>{lang.getstarted}</Link>
                    </button>
                )}
                </div>
            </div>
        </div>
    )
}

export default Body;