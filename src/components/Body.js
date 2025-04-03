/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG, USER_AVATAR } from "../utils/constants";

const Body = () => {
  const [isNotAUser, setIsNotAUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleFormToggle = () => {
    setIsNotAUser(true);
  };
  const emailIdRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const handleClick = () => {
    //Write or call validation code..
    const validateMessage = validate(
      emailIdRef.current.value,
      passwordRef.current.value
      // firstNameRef.current.value,
      // lastNameRef.current.value
    );
    setErrorMessage(validateMessage);

    if (!errorMessage && isNotAUser) {
      createUserWithEmailAndPassword(
        auth,
        emailIdRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: firstNameRef.current.value,
            photoURL: USER_AVATAR
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  photoURL: photoURL,
                  displayName: displayName,
                })
              )
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ". " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailIdRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ". " + errorMessage);
        });
    }
  };

  return (
    <div className='relative'>
      <img src={NETFLIX_BG} />
      <div className='w-4/12 p-10 absolute middle-form top-[50%] left-[50%] bg-black/80 rounded-lg text-white'>
        <h1 className='font-bold text-4xl mb-8'>
          {isNotAUser ? "Sign Up" : "Sign In"}
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
          {isNotAUser && (
            <input
              ref={firstNameRef}
              type="text"
              name='FirstName'
              placeholder='FirstName'
              className='p-3 bg-slate-700'
            />
          )}
          {isNotAUser && (
            <input
              ref={lastNameRef}
              type="text"
              name='LastName'
              placeholder='LastName'
              className='p-3 my-4 bg-slate-700'
            />
          )}
          <input
            ref={emailIdRef}
            type="email"
            name='emilId'
            placeholder='Email Id'
            className='p-3 mb-4 bg-slate-700'
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder='Password'
            className='p-3 mb-2 bg-slate-700'
          />
          {errorMessage && (
            <p className='font-bold text-red-600'>{errorMessage}</p>
          )}
          <button
            onClick={handleClick}
            className='p-3 mt-7 font-bold text-xl bg-red-600 rounded-lg'
          >
            {isNotAUser ? "Sign Up" : "Sign In"}
          </button>
        </form>
        {!isNotAUser && (
          <p className='py-10 text-lg text-cyan-500'>
            New to NETFLIX?{" "}
            <span onClick={handleFormToggle}>
              <u>
                <strong>Sign Up Now!!</strong>
              </u>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Body;
