import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Header from './Header';
import { BG_IMG } from '../utils/img';
import { Link } from 'react-router-dom';


const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email , displayName , photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate('/browser');
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/')
            }
          });
    },[]);

  return (
    <div>
        <Header signedin={true} showsignbtn={true}/>
        <div className="">
            <img
                className='absolute w-full h-full object-cover'
                src={BG_IMG}
                alt="bg"
            />
        </div>
        <div className='absolute w-full h-full bg-black opacity-65'></div>
        <div 
            className='absolute p-4 w-8/12 sm:w-8/12 md:w-8/12 lg:w-5/12 xl:w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white text-center font-serif'>
            <h1 className='p-4'>
                Why don't scientists trust atoms? Because they make up everything—just like our movie lineup! 
            </h1>
            <h2 className='p-4'> Dive in for laughs and epic plots!</h2>
            <button className=' w-6/12 p-3 my-4 rounded-lg bg-red-600'>
                <Link to={'/Login'}>Get Started </Link>
            </button>
        </div>
    </div>
  )
}

export default Body;