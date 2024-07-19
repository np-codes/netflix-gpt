import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from "../utils/userSlice";
import { USER_IMG } from "../utils/constants";


// SignUP API this will create a new user and save its credentials
// There is also an updatePRofile api which is present inside just for updating name (it can be removed and name and pic can be added directly) 
export const SIGNUP_API = (name, email, password, dispatch, seterrormsg) => {
    //creating const dispatch here can throw error
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up Logic
            const user = userCredential.user;
            // ...
            updateProfile(user, {
                displayName: name, 
                photoURL: USER_IMG
            }).then(() => {
                // Profile updated!
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(
                    addUser({
                            uid: uid, 
                            email: email, 
                            displayName: displayName,
                            photoURL: photoURL,
                        })
                );
            }).catch((error) => {
                // An error occurred
                seterrormsg (error)
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorCode);
        });
};

//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
// SignIn API this will match the email and password in our data and allow user to enter
export const SIGNIN_API = (email, password, seterrormsg) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorCode);
        });
};

//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
// SignOut API for signing user out
export const SIGNOUT_API = (navigate) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/login');
    }).catch((error) => {
        navigate("/error");
    });
}