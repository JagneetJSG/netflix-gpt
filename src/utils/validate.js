export const validate = (
  emailIdRef,
  passwordRef,
//   firstnameRef,
//   lastNameRef
) => {
  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    emailIdRef
  );
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordRef);
//   const validateFirstName = /^[a-zA-Z]+$/.test(firstnameRef);
//   const validateLastName = /^[a-zA-Z]+$/.test(lastNameRef);

//   console.log(validateFirstName);
  if (!validateEmail) return "Invalid Email Id!!";
  if (!validatePassword) return "Invalid Password!!";
//   if (!validateFirstName) return "Invalid First Name!!";
//   if (!validateLastName) return "Invalid Last Name!!";

  return null;
};
