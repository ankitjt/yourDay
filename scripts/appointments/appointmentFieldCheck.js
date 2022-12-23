const fieldValidators = () =>
{
  let userName = aptName.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check1 !== -1 )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Name should be only be alphabetic.' )
  }

  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( aptEmail.value ) !== true )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Incorrect Email format. Format should be abc@xyz.com' )
  }

  if ( aptMobileNumber.value > 10 || aptMobileNumber.value < 5 )
  {
    confirmPage.style.left = '-2000px'
    promptMessages('Mobile Number should be more than 5 or less than 10 numbers.')
  }
}