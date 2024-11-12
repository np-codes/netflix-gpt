import React, { useRef, useState } from 'react';
import { BG_IMG } from '../utils/constants';
import { check_valid_Data } from '../utils/validate';
import Header from './Header';
import { SIGNIN_API, SIGNUP_API } from '../hooks/useFirebaseAPIS';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageconst';

const Login = () => {
    const[issigninform , setissigninform] = useState(true);
    const[errormsg , seterrormsg] = useState(null);
    const dispatch = useDispatch();
    const email =  useRef(null);
    const password =  useRef(null);
    const firstname = useRef(null);
    const lastname = useRef(null);
    const langkey = useSelector(store => store.config.language);

    const inputcss = "p-1.5 sm:p-2.5 md:p-4 m-1.5 md:m-2 w-8/12 md:w-10/12 rounded-md text-white text-lg border-2 bg-black bg-opacity-80 border-gray-400";

    const togglesigninform = () => {
        seterrormsg(null);
        email.current.value = null;
        password.current.value = null;
        setissigninform(!issigninform);
    };

    const handleformsubmit = () => {
        // Form data validation
        const message = check_valid_Data(email.current.value, password.current.value);
        seterrormsg(message);

        if(message!==null) {
            email.current.value = null;
            password.current.value = null;
            return;
        }
        if(!issigninform){
            //Sign up logic
            const name = firstname.current.value+" "+lastname.current.value;
            SIGNUP_API(name, email.current.value, password.current.value, dispatch, seterrormsg)
        }
        else{
            //Sign in Logic
            SIGNIN_API(email.current.value, password.current.value, seterrormsg)
        }
    };
    const signin_or_signup = (issigninform) => {
        return issigninform? lang[langkey].signin : lang[langkey].signup
    }

  return (
    <div> 
        <Header loggedin={false}/>
        <div className="absolute inset-0 z-0 ">
            <img
                className='h-full w-full object-cover'
                src={BG_IMG}
                alt="bg"
            />
        </div>
        <div className='absolute flex items-center justify-center top-1/2 transform -translate-y-1/2 w-full  '>
            <div className='w-[300px] sm:w-[400px] sm:p-3 md:p-6  bg-black bg-opacity-80 rounded-md '>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col sm:gap-1 md:gap-3 items-center'>
                <h1 
                    className='p-2 my-1 sm:my-2 md:my-3 text-white text-3xl sm:text-4xl md:text-5xl font-bold'
                >{signin_or_signup(issigninform)}</h1>
                
                {!issigninform &&(
                    <div className='flex flex-col sm:gap-1 md:gap-3 w-full items-center'>
                        <input ref={firstname} type="text" placeholder={lang[langkey].fnameplaceholder} className= {inputcss}/>
                        <input ref={lastname} type="text" placeholder={lang[langkey].lnameplaceholder} className= {inputcss}/>
                    </div>) 
                }
                <input 
                    ref={email} 
                    type="text" 
                    placeholder={lang[langkey].emailplaceholder} 
                    className= {inputcss}
                /> 
                <input 
                    ref={password} 
                    type="text" 
                    placeholder={lang[langkey].passwordplaceholder} 
                    className= {inputcss} 
                /> 
                <p className='text-red-600'>{errormsg}</p>
                <button 
                    onClick={() => handleformsubmit()}
                    className='p-1.5 sm:p-2.5 md:p-4 m-1.5 md:m-2 w-8/12 md:w-10/12 bg-red-600 text-white font-semibold text-xl rounded-md hover:cursor-pointer hover:text-black hover:scale-105 transition-all duration-500'
                >{signin_or_signup(issigninform)}</button>

                <h2 className='p-1 md:p-3 m-2 text-white'>{issigninform? lang[langkey].msgfornewuser : lang[langkey].msgforregistereduser}&nbsp;
                    <span onClick={()=>togglesigninform()} className='hover:cursor-pointer hover:underline hover:text-blue-500'>{signin_or_signup(!issigninform)+"."}</span>
                </h2>
            </form>
            </div>
        </div>
    </div>
    
  )
}

export default Login;