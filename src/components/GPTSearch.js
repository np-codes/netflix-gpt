import React from 'react'
import lang from '../utils/languageconst';
import { useSelector } from 'react-redux';

const GPTSearch = () => {
	const langkey = useSelector((store)=> store?.config.language);
	return (
		<div className=' '>
			<div className='pt-[8%] flex justify-center'>
				<div className='grid grid-cols-12 gap-5 items-center w-full max-w-screen-md'>
				<input 
					type="text" 
					className='p-2 rounded-lg h-12 col-span-9 ' 
					placeholder={lang[langkey].gptsearchplaceholder}/>
				<button className='rounded-lg shadow-lg font-semibold text-xl text-white h-12 md:h-12 px-5 md:px-5 bg-red-600 hover:border-2 border-white col-span-3'> {lang[langkey].gptsearch} </button>
				</div>
				
			</div>
		</div>
	)
}

export default GPTSearch;