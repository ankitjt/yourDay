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

let forgotPass = document.querySelector( '.forgotPass' )
let contentSection = document.querySelector( '.contentSection' )
forgotPass.onclick = () =>
{
  let forgotPassSection = document.createElement( 'div' )
  forgotPassSection.innerHTML = `<div class='absolute flex flex-col justify-between ease-in-out duration-300 bottom-0 left-0 w-full h-full bg-gray-900 z-30 p-6'>
  
  <!-- Back Arrow -->
  <div class="backArrow">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600 cursor-pointer ease-in-out duration-300 hover:text-white">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  </div>
  
  <div class="resetPasswordWrapper grow flex flex-col items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-48 h-48 text-gray-600">
      <path fill-rule="evenodd" d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z" clip-rule="evenodd" />
    </svg>

    <div class="resetTaglines text-gray-600 uppercase text-xs font-semibold text-center">
      <h1 class='text-xl my-4'>Forgot your Password?</h1>
      <p>Don't worry we got you covered</p>
      <p>Just enter your Login ID below</p>
    </div>
    
    <div class="resetSection w-full mt-5 flex flex-col items-center">
      <div class="w-full relative">
            <input type="email" name="" id="resetLoginID" title="Login ID"
                   class="resetLoginID placeholder-transparent peer w-full my-1 h-12 text-xs font-semibold lowercase text-indigo-600 md:border-transparent rounded-md tracking-widest bg-white"
                   placeholder="email" autocomplete="off" autofocus />
            <label for="resetLoginID"
                   class="loginEmailLabel transition-all absolute text-indigo-600 font-semibold uppercase tracking-widest text-[10px] sm:peer-placeholder-shown:text-indigo-600 peer-placeholder-shown:text-indigo-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:!-translate-y-1/2 left-2.5 top-0 peer-placeholder-shown:uppercase peer-placeholder-shown:text-xs">Login
              ID</label>
          </div>
          <button class="resetPasswordButton mt-5 w-fit py-2 px-4 uppercase tracking-widest font-semibold text-xs bg-rose-600 rounded-md text-white border-indigo-600 ease-in-out duration-300 hover:bg-emerald-600  text-center z-20 group-hover:rounded-r-none flex items-center">Reset Password</button>
    </div>
    
  </div>
    
  </div>`
  contentSection.appendChild( forgotPassSection )
}