/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LANGUAGE_MODES, NETFLIX_LOGO } from "../utils/constants";
import { changeLanguage } from "../utils/appConfigurationsSlice";
import { removeGPTData } from "../utils/gptFunctionalityData";
import { removeMovieCategoriesData } from "../utils/nowPlayingMovieSlice";

const Header = ({ stateVariable, setShouldGptOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const screenWidth = window.innerWidth;
  const handleGptSearchClick = () => {
    //load GPT page
    setShouldGptOpen();
  };
  const handleLanguageChangeClick = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    if (!stateVariable) {
      dispatch(removeGPTData());
    }
  }, [stateVariable]);
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
        dispatch(removeMovieCategoriesData());
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className='flex justify-between z-40'>
      <div className='p-2 w-2/12 items-center	'>
        <img className='w-full' src={NETFLIX_LOGO} />
      </div>
      {user &&
        (screenWidth > 991 ? (
          <div className='flex p-8 w-4/12 justify-between items-center'>
            <button
              onClick={handleGptSearchClick}
              className='bg-[#999999] rounded-lg border-black border-2 p-2 text-xl font-bold text-white'
            >
              {stateVariable ? "Home Page" : "GPT Search"}
            </button>
            {stateVariable && (
              <select
                onChange={handleLanguageChangeClick}
                className='bg-[#999999] rounded-lg border-black border-2 p-2 text-xl font-bold'
              >
                {LANGUAGE_MODES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <div className='flex items-center'>
              <img src={user.photoURL} className='h-12 w-12' />
              <button
                onClick={handleSignOut}
                className='text-white font-bold text-2xl cursor-pointer'
              >
                Sign&nbsp;Out
                <br />
                <span className='text-pink-500'>{user.displayName}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className='p-2 w-1/12 content-center justify-items-center'>
            <MenuItems
              GptSearchBtn={handleGptSearchClick}
              stateVariable={stateVariable}
              langChange={handleLanguageChangeClick}
              handleSignout={handleSignOut}
              user={user}
            />
          </div>
        ))}
    </div>
  );
};

export default Header;

export const MenuItems = ({
  GptSearchBtn,
  stateVariable,
  langChange,
  handleSignout,
  user,
}) => {
  const [isToggle, setIsToggle] = useState(false);
  const toggleMenuItems = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <div>
        <button className='text-white' onClick={toggleMenuItems}>
          ☰
        </button>
      </div>
      {isToggle && (
        <div className='mobile-menu relative z-50'>
          <div className='menu-item-box'>
            <button
              onClick={GptSearchBtn}
              className='bg-[#999999] rounded-lg border-black border-2 p-1 text-md font-bold text-white'
            >
              {stateVariable ? "Home Page" : "GPT Search"}
            </button>
            {stateVariable && (
              <select
                onChange={langChange}
                className='bg-[#999999] rounded-lg border-black border-2 p-2 text-md font-bold'
              >
                {LANGUAGE_MODES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <div className='justify-items-center'>
              <img src={user.photoURL} className='h-12 w-12' />
              <button
                onClick={handleSignout}
                className='text-white font-bold text-md cursor-pointer h-l'
              >
                Sign&nbsp;Out
                <br />
                <span className='text-pink-500'>{user.displayName}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
