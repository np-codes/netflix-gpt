import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from './firebase';
import { addUser } from "./userSlice";


// SignUP API this will create a new user and save its credentials
// There is also an updatePRofile api which is present inside just for updating name (it can be removed and name and pic can be added directly) 
export const SIGNUP_API = (name, email, password, dispatch, seterrormsg, onSuccess) => {
    //creating const dispatch here can throw error
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up Logic
            const user = userCredential.user;
            // ...
            updateProfile(user, {
                displayName: name, 
                photoURL: "https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755"
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
                onSuccess();
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

// SignOut API for signing user out
export const SIGNOUT_API = (navigate) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/');
    }).catch((error) => {
        navigate("/error");
    });
}