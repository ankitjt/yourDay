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
  let newCEmail = document.querySelector( '.newCEmail' )
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

  // Correspondence Email format check.
  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( newCEmail.value ) !== true && newCEmail.value !== '' )
  {
    newCEmail.classList.add( 'md:border-rose-600' )
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

    let newUserDetails = {
      displayName: newName.value,
      email: newEmail.value,
      phoneNumber: newCountryCode.value + "-" + newMobileNumber.value,
      password: newPassword.value,
      createdDate: dateLog.format( new Date() ),
      createdTime: timeLog.format( new Date() ),
      createdDay: dayLog.format( new Date() )
    }

    // Adding new users to the database
    firebase.auth().createUserWithEmailAndPassword( newUserDetails.email, newUserDetails.password )
      .then( ( userCredential ) =>
      {
        const user = userCredential.user
        console.log( user )
        const newUser = firebase.auth().currentUser
        newUser.updateProfile( {
          displayName: newName.value
        } )
        for ( let detail of newUserForm )
        {
          detail.classList.remove( 'border-rose-600' )
          detail.value = ''
          detail.getAttribute( 'title' ) === 'Country Code' ? detail.value = "+91" : ''
        }
        promptMessages( `<p class='text-[10px]'>Account created successfully</p> <p class='text-[10px]'> <a href='#' class='backToLoginScreen1 text-indigo-600 underline text-xs'>Click here</a> to login</p>`, 'success' )
      } )
      .catch( ( err ) =>
      {
        promptMessages( err.code + err.message )
      } )

    let backToLoginScreen = document.querySelector( '.backToLoginScreen1' )
    backToLoginScreen.onclick = () =>
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

let loginBtn = document.querySelector( ".loginBtn" )
let loginInputs = document.querySelectorAll( ".loginInputs" )
let loginID = document.querySelector( '.loginID' )
let loginPass = document.querySelector( '.loginPassword' )

loginBtn.onclick = () =>
{
  for ( let loginInput of loginInputs )
  {
    if ( loginInput.value === '' )
    {
      promptMessages( `${ loginInput.getAttribute( 'title' ) } cannot be blank`, 'error' )
    }
  }
  checkCredentials()
}

loginPass.onkeydown = ( e ) =>
{
  if ( e.key === 'Enter' )
  {
    e.preventDefault()
    loginBtn.click()
  }
}

const checkCredentials = () =>
{
  firebase.auth().signInWithEmailAndPassword( loginID.value, loginPass.value )
    .then( () =>
    {
      firebase.auth().onAuthStateChanged( ( user ) =>
      {
        if ( user )
        {
          window.location.href = './src/appointments.html'
        }
      } )
    } )
    .catch( ( error ) =>
    {
      if ( error.code === 'auth/user-not-found' )
      {
        promptMessages( 'Login ID or Password do not match.', 'error' )

      }
    } )
}

let passwordResetSection = document.querySelector( '.passwordResetSection' )

let backArrow = document.querySelector( '.backArrow' )
backArrow.onclick = () =>
{
  passwordResetSection.classList.remove( 'right-0' )
}

let forgotPass = document.querySelector( '.forgotPass' )
forgotPass.onclick = () =>
{
  passwordResetSection.classList.add( 'right-0' )
}

let passwordResetButton = document.querySelector( '.passwordResetButton' )
passwordResetButton.onclick = () =>
{
  let resetLoginID = document.querySelector( '.resetLoginID' )
  if ( resetLoginID.value === '' )
  {
    promptMessages( 'Login ID cannot be blank', 'error' )
  }
  else
  {
    firebase.auth().sendPasswordResetEmail( resetLoginID.value )
      .then( () =>
      {
        promptMessages( 'Password reset request sent on your email, please check', 'success' )
      } )
      .catch( ( error ) =>
      {
        var errorCode = error.code
        var errorMessage = error.message
        promptMessages( errorCode, errorMessage )
      } )
  }
}



