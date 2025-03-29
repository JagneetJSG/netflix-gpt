/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user= useSelector(store=>store.user);
  console.log(user)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
    <div className='flex justify-between'>
      <div className='p-2 w-2/12 items-center	'>
        <img
          className='w-full'
          src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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
