import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const useAuthCheck = () => {
    const navigate = useNavigate();
	const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email , displayName , photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                navigate('/browser');
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/login')
            }
          });
		  // unsubscribe onauthstatechanged callback when unmounted
		  return () => unsubscribe();
    },[]);
};

export default useAuthCheck;