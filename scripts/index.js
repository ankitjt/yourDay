let newUser = document.querySelector( '.newUser' )
let createAccountForm = document.querySelector( '.createAccountForm' )
let backToLoginScreen = document.querySelectorAll( '.backToLoginScreen' )
let createNewAccountBtn = document.querySelector( '.createNewAccountBtn' )
let newUserForm = document.querySelectorAll( '.newUserForm' )

newUser.onclick = () =>
{
  createAccountForm.classList.add( 'right-0' )
}

createNewAccountBtn.onclick = () =>
{
  let createFormFlag = false
  let newName = document.querySelector( '.newName' )
  let newEmail = document.querySelector( '.newEmail' )
  let newCountryCode = document.querySelector( '.newCountryCode' )
  let newMobileNumber = document.querySelector( '.newMobileNumber' )
  let newPassword = document.querySelector( '.newPassword' )
  let confirmNewPassword = document.querySelector( '.confirmNewPassword' )


  for ( let detail of newUserForm )
  {
    if ( detail.value === '' )
    {
      promptMessages( `${ detail.getAttribute( 'title' ) } is blank`, 'error' )
      detail.classList.add( 'border-rose-600' )
      createFormFlag = true
    }
  }
  // Name check.
  let userName = newName.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check1 !== -1 )
  {
    newName.classList.add( 'border-rose-600' )
    promptMessages( 'Name should be only be alphabetic.', 'error' )
    createFormFlag = true
  }

  // Email format check.
  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( newEmail.value ) !== true && newEmail.value !== '' )
  {
    newEmail.classList.add( 'md:border-rose-600' )
    promptMessages( 'Incorrect Email format. Format should be abc@xyz.com', 'error' )
    createFormFlag = true
  }

  // Check for mobile number 
  if ( newMobileNumber.value.length > 10 || newMobileNumber.value.length < 5 )
  {
    if ( newMobileNumber.value.length !== 0 )
    {
      newMobileNumber.classList.add( 'border-rose-600' )
      promptMessages( 'Mobile number should be less than 10 and greater than 5 digits.', 'error' )
      createFormFlag = true
    }
  }

  if ( newPassword.value !== confirmNewPassword.value )
  {
    promptMessages( `${ newPassword.getAttribute( 'title' ) } & ${ confirmNewPassword.getAttribute( 'title' ) } are not same`, 'error' )
    newPassword.classList.add( 'border-rose-600' )
    confirmNewPassword.classList.add( 'border-rose-600' )
    createFormFlag = true
  }

  if ( createFormFlag === false )
  {
    let dateLog = new Intl.DateTimeFormat( 'en-GB', {
      timeZone: 'Asia/Kolkata',
      dateStyle: "medium"
    } )

    let timeLog = new Intl.DateTimeFormat( 'en-GB', {
      timeZone: 'Asia/Kolkata',
      hc: 'h24',
      timeStyle: 'medium'
    } )

    let dayLog = new Intl.DateTimeFormat( 'en-GB', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long'
    } )



    firebase.auth().createUserWithEmailAndPassword( newEmail, newPassword )
      .then( ( userCredential ) =>
      {
        const user = userCredential.user
        console.log( user )
      } )

    console.log( {
      name: newName.value,
      email: newEmail.value,
      mobileNumber: newCountryCode.value + "-" + newMobileNumber.value,
      password: newPassword.value,
      createdDate: dateLog.format( new Date() ),
      createdTime: timeLog.format( new Date() ),
      createdDay: dayLog.format( new Date() )
    } )

    for ( let detail of newUserForm )
    {
      detail.classList.remove( 'border-rose-600' )
      detail.value = ''
      detail.getAttribute( 'title' ) === 'Country Code' ? detail.value = "+91" : ''
    }
    promptMessages( `<p class='text-[10px]'>Account created successfully</p> <p class='text-[10px]'> <a href='#' class='backToLoginScreen1 text-indigo-600 underline text-xs'>Click here</a> to login</p>`, 'success' )

    let backToLoginScreen1 = document.querySelector( '.backToLoginScreen1' )
    backToLoginScreen1.onclick = () =>
    {
      createAccountForm.classList.remove( 'right-0' )
    }
  }
}

for ( let showLogin of backToLoginScreen )
{
  showLogin.onclick = () =>
  {
    createAccountForm.classList.remove( 'right-0' )
    for ( let detail of newUserForm )
    {
      detail.classList.remove( 'border-rose-600' )
      detail.value = ''
      detail.getAttribute( 'title' ) === 'Country Code' ? detail.value = "+91" : ''
    }
  }

}

