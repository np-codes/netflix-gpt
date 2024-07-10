import React, { useRef, useState } from 'react';
import { BG_IMG } from '../utils/img';
import { checkvalidData } from '../utils/validate';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { SIGNIN_API, SIGNUP_API } from '../utils/apis';
import { useDispatch } from 'react-redux';


const Login = () => {
    const[issigninform , setissigninform] = useState(true);
    const[errormsg , seterrormsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email =  useRef(null);
    const password =  useRef(null);
    const firstname = useRef(null);
    const lastname = useRef(null);

    const inputcss = "p-4 m-2 w-10/12 rounded-md text-white text-lg border-2 bg-black bg-opacity-80 border-gray-400";

    const togglesigninform = () => {
        seterrormsg(null);
        email.current.value = null;
        password.current.value = null;
        setissigninform(!issigninform);
    };

    const handleformsubmit = () => {
        // Form data validation
        const message = checkvalidData(email.current.value, password.current.value);
        seterrormsg(message);

        if(message!==null) {
            email.current.value = null;
            password.current.value = null;
            return;
        }
        if(!issigninform){
            //Sign up logic
            const name = firstname.current.value+" "+lastname.current.value;
            SIGNUP_API(name, email.current.value, password.current.value, dispatch, seterrormsg, ()=> {navigate('/browser')})
        }
        else{
            //Sign in Logic
            SIGNIN_API(email.current.value, password.current.value, seterrormsg)
        }
    };

  return (
    <div> 
        <Header signedin={true} showsignbtn={false}/>
        <div className="absolute w-full h-full">
            <img
                className='absolute w-full h-full object cover'
                src={BG_IMG}
                alt="bg"
            />
        </div>
        <div 
            className='absolute w-[400px] p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 rounded-md '>
            
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-3 items-center'>
                <h1 
                    className='p-2 my-3 text-white text-5xl font-bold'
                >{issigninform? "Sign In" : "Sign Up"}</h1>
                
                {!issigninform &&(
                    <div className='flex flex-col gap-3 w-full items-center'>
                        <input ref={firstname} type="text" placeholder="First name" className= {inputcss}/>
                        <input ref={lastname} type="text" placeholder="Last name" className= {inputcss}/>
                    </div>) 
                }
                <input ref={email} type="text" placeholder="Email Address" className= {inputcss}/> 
                <input ref={password} type="text" placeholder="Password" className= {inputcss} /> 
                <p className='text-red-600'>{errormsg}</p>
                <button 
                    onClick={() => handleformsubmit()}
                    className='p-3 m-2 w-10/12 bg-red-600 text-white font-semibold text-xl rounded-md'
                >{issigninform? "Sign In" : "Sign Up"}</button>

                <h2 className='p-3 m-2 text-white'>{issigninform? "New to NetflixGPT?" : "Already registered?"}&nbsp;
                    <span onClick={()=>togglesigninform()} className='hover:cursor-pointer hover:underline hover:text-blue-500'>{issigninform? "Sign up now." : "Sign in now."}</span>
                </h2>
            </form>
        </div>
    </div>
    
  )
}

export default Login;