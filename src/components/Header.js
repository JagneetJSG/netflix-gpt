/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user= useSelector(store=>store.user);
  console.log(user)
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, providerId, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            providerId: providerId,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error")
      });
  };

  return (
    <div className='flex justify-between z-50'>
      <div className='p-2 w-2/12 items-center	'>
        <img
          className='w-full'
          src={NETFLIX_LOGO}
        />
      </div>
      { user && <div className='flex p-8 w-2/12 justify-between items-center'>
        <img
          src={user.photoURL}
          className='h-12 w-12'
        />
        <button
          onClick={handleSignOut}
          className='text-white font-bold text-2xl cursor-pointer'
        >
          Sign&nbsp;Out<br/><span className="text-pink-500">{user.displayName}</span>
        </button>
      </div>}
    </div>
  );
};

export default Header;
