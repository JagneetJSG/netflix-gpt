/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";

const Body = () => {
  const [isNotAUser, setIsNotAUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
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
      passwordRef.current.value,
      // firstNameRef.current.value,
      // lastNameRef.current.value
    );
    // console.log(firstNameRef.current.value);
    setErrorMessage(validateMessage);
  };

  return (
    <div className='relative'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_medium.jpg' />
      <div className='w-4/12 p-10 absolute middle-form top-[50%] left-[50%] bg-black/80 rounded-lg text-white'>
        <h1 className='font-bold text-4xl mb-8'>
          {isNotAUser ? "Sign Up" : "Sign In"}
        </h1>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
          {isNotAUser && (
            <input
              ref={firstNameRef}
              name='FirstName'
              placeholder='FirstName'
              className='p-3 bg-slate-700'
            />
          )}
          {isNotAUser && (
            <input
              ref={lastNameRef}
              name='LastName'
              placeholder='LastName'
              className='p-3 my-4 bg-slate-700'
            />
          )}
          <input
            ref={emailIdRef}
            name='emilId'
            placeholder='Email Id'
            className='p-3 mb-4 bg-slate-700'
          />
          <input
            ref={passwordRef}
            name='password'
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
