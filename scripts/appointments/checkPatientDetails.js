const checkPatientDetails = fieldFlag =>
{
  // Name check.
  let userName = apt.name.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check1 !== -1 )
  {
    apt.name.classList.add( 'md:border-rose-600' )
    promptMessages( 'Name should be only be alphabetic.', 'error' )
    fieldFlag = true;

  }

  // Email format check.
  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( apt.email.value ) !== true && apt.email.value !== '' )
  {
    apt.email.classList.add( 'md:border-rose-600' )
    promptMessages( 'Incorrect Email format. Format should be abc@xyz.com', 'error' )
    fieldFlag = true;

  }

  // Check for mobile number 
  if ( apt.mobileNumber.value.length > 10 || apt.mobileNumber.value.length < 5 )
  {
    if ( apt.mobileNumber.value.length !== 0 )
    {
      apt.mobileNumber.classList.add( 'border-rose-600' )
      promptMessages( 'Mobile number should be less than 10 and greater than 5 digits.', 'error' )
      fieldFlag = true;

    }
  }
}