import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { LANGUAGES_SUPPORTED, LOGO_IMG } from '../utils/constants'
import { SIGNOUT_API } from '../hooks/useFirebaseAPIS'
import { useDispatch, useSelector } from 'react-redux';
import useAuthCheck from '../hooks/useAuthCheck';
import { toggleGPTSearchPage } from '../utils/gptSlice';
import { changeLanguage, removeAPIKey } from '../utils/configSlice';
import lang from '../utils/languageconst';
import { resetReduxStore } from '../utils/appStore';


const Header = ({loggedin}) => {
	const [showsignin, setshowsignin] = useState(loggedin);
	const [namevisible, setnamevisible] = useState(false);
  	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store)=> store?.user);
	const langkey= useSelector((store)=> store?.config.language);
	const langdata= useSelector((store)=> store?.config.langlist);// not used anywhere 
	const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
	const btndesign = 'rounded-md md:rounded-lg shadow-lg font-semibold text-xs sm:text-base md:text-xl text-white h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 bg-red-600 hover:cursor-pointer hover:text-black hover:bg-red-600 hover:scale-105 hover:shadow-lg transition-all duration-500'

	useAuthCheck();

  	const handleSignout_Click = () => {
    	setshowsignin(!showsignin);
		dispatch(resetReduxStore());
		SIGNOUT_API(navigate);
  	};

	const handleShow_User = () => {
		setnamevisible(!namevisible);
	};

	const handleGPTSearchClick = () => {
		dispatch(toggleGPTSearchPage());
	}

	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	}
  	return (
    	<div 
      		className='absolute flex items-center justify-between w-full bg-gradient-to-b from-black z-30 flex-col md:flex-row'>
      		{ <img 
        		className='w-36 sm:w-40 md:w-44'
        		src={LOGO_IMG}
        		alt="logo"
      		/>
		  }
			<div className='flex items-center px-3 md:gap-2  '>
				<div className='mx-2'> 
					<select className={btndesign}
						onChange={handleLanguageChange}
						value={langkey}
					>
						{LANGUAGES_SUPPORTED.map(lang => <option
							className="p-2 font-semibold text-xs sm:text-base md:text-xl bg-red text-gray-800 hover:bg-gray-200 focus:bg-gray-300"
							key={lang.identifier} 
							value={lang.identifier}>{lang.name}</option>)}
					</select>
				</div>
				{showsignin &&
					(<div className='flex items-center gap-2 sm:gap-3 md:gap-4 mr-2'>
						
						{ <button 
							className= {btndesign}	
							onClick={handleGPTSearchClick}
						> {lang[langkey].gptsearch}
						</button>}

						<button 
							className= {btndesign}	
							onClick={handleSignout_Click}
						> {lang[langkey].signout}
						</button>
						<div className='flex flex-col items-center'>
							<img
								onClick={handleShow_User}
								className='h-10 md:h-14 rounded-md md:rounded-lg shadow-l hover:cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-500'
								src={user?.photoURL}
								alt='usericon'
							/>
							{namevisible && <div className='absolute top-full text-l md:text-2xl font-black text-center text-white' >
								{user?.displayName?.split('').map((letter,index) => (
									<div key={index}>{letter.toUpperCase()}</div>
								))}
							</div>}
						</div >
					</div>
					)
				}
			</div>
			
    	</div>
  	)
};

export default Header;