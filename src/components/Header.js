import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { LANGUAGES_SUPPORTED, LOGO_IMG } from '../utils/constants'
import { SIGNOUT_API } from '../hooks/useFirebaseAPIS'
import { useDispatch, useSelector } from 'react-redux';
import useAuthCheck from '../hooks/useAuthCheck';
import { toggleGPTSearchPage } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import lang from '../utils/languageconst';


const Header = ({loggedin}) => {
	const [showsignin, setshowsignin] = useState(loggedin);
	const [namevisible, setnamevisible] = useState(false);
  	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store)=> store?.user);
	const langkey= useSelector((store)=> store?.config.language);

	useAuthCheck();

  	const handleSignout_Click = () => {
    	setshowsignin(!showsignin);
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
      		className=' fixed flex items-center justify-between w-full bg-gradient-to-b from-black z-30'>
      		<img 
        		className='w-44 md:w-44'
        		src={LOGO_IMG}
        		alt="logo"
      		/>
			<div className='flex items-center mx-10 gap-4'>
				<div className=''> 
					<select className='rounded-lg shadow-lg font-semibold text-xl text-white h-10 md:h-10 px-2 md:px-2 bg-red-600'
						onChange={handleLanguageChange}
					>
						{LANGUAGES_SUPPORTED.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
					</select>
				</div>
				{showsignin &&
					(<div className='flex items-center gap-4'>
						
						<button 
							className='rounded-lg shadow-lg font-semibold text-xl text-white h-10 md:h-10 px-5 md:px-5 bg-red-600 hover:border-2 border-white'	
							onClick={() => handleGPTSearchClick()}
						> {lang[langkey].gptsearch}
						</button>
						<button 
							className='rounded-lg shadow-lg font-semibold text-xl text-white h-10 md:h-10 px-5 md:px-5 bg-red-600 hover:border-2 border-white'
							onClick={()=> handleSignout_Click()}
						> {lang[langkey].signout}
						</button>
						<div className='flex flex-col items-center'>
							<img
								onClick={()=> handleShow_User()}
								className='h-14'
								src={user?.photoURL}
								alt='usericon'
							/>
							{namevisible && <div className='absolute top-full text-2xl font-black text-center text-white' >
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