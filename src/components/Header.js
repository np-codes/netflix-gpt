import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGO_IMG } from '../utils/constants'
import { SIGNOUT_API } from '../hooks/useFirebaseAPIS'
import { useSelector } from 'react-redux';
import useAuthCheck from '../hooks/useAuthCheck';


const Header = ({signedin , showsignbtn}) => {
	const [showsignin, setshowsignin] = useState(signedin);
	const [namevisible, setnamevisible] = useState(false);
  	const navigate = useNavigate();
	const user = useSelector((store)=> store?.user)
	useAuthCheck();

	// Signin button could be removed as it is no longer available on header
  	const Signin_Click = () => {
    	setshowsignin(!showsignin);
  	};

  	const Signout_Click = () => {
    	setshowsignin(!showsignin);
		SIGNOUT_API(navigate);
  	};

	const Show_User = () => {
		setnamevisible(!namevisible);
	};

    

  	return (
    	<div 
      		className=' fixed flex items-center justify-between w-full bg-gradient-to-b from-black z-30'>
      		<img 
        		className='w-44 md:w-44'
        		src={LOGO_IMG}
        		alt="logo"
      		/>
			
      		{showsignbtn && (showsignin? 
				<div className='px-3'>
					<Link to='/Login'>
						<button 
							className=' rounded-lg shadow-lg font-semibold text-xl text-white h-10 md:h-10 px-5 md:px-5 bg-red-600'
							onClick={()=>Signin_Click()}
						>Sign In
						</button>
					</Link>
				</div> :
				<div className='flex items-center'>
					<div className='flex flex-col items-center'>
						<button 
							className='rounded-lg shadow-lg font-semibold text-xl text-white h-10 md:h-10 px-5 md:px-5 bg-red-600'
							onClick={()=>Signout_Click()}
						> Sign Out
						</button>
					</div>
					<div className='px-2 flex flex-col items-center'>
						<img
							onClick={()=>Show_User()}
							className='h-14 px-3'
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
      		)}
    	</div>
  	)
};

export default Header;