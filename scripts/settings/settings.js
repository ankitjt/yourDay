
let profileDetailsFields = document.querySelector( '.profileDetailsFields' )

firebase.auth().onAuthStateChanged( ( user ) =>
{
  if ( user )
  {
    let profileDetailsContent = `
       <!-- Name  -->
              <div class="profileNameWrapper flex flex-col justify-between mb-3">

                <p class="nameTag uppercase">Name:</p>

                <div class="oldDetails h-fit w-full flex items-center justify-between">
                  <div class="relative w-full mt-2">
                    <input type="text" name="" id="profileName" title="Full Name" placeholder="full name"
                      class="profileName placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold uppercase text-indigo-600 border border-indigo-600 sm:border-gray-300 sm:text-slate-900 bg-gray-900 sm:bg-transparent rounded-md tracking-widest"
                      disabled />
                    <label for="profileName"
                      class="transition-all profileNameLabel absolute text-gray-400 font-semibold uppercase tracking-widest text-[10px] sm:peer-placeholder-shown:text-gray-900 peer-placeholder-shown:text-indigo-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:!-translate-y-1/2 left-2.5 top-0 peer-placeholder-shown:uppercase peer-placeholder-shown:text-xs">
                      ${ user.displayName }
                    </label>
                  </div>

                  <span title="Click to edit.">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="editField w-6 h-6 ml-4 cursor-pointer hover:text-white hover:sm:text-indigo-600 ease-in-out duration-300">
                      <path
                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path
                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </span>
                </div>

              </div>

              <!-- Email  -->
              <div class="profileEmailWrapper flex flex-col justify-between mb-3">

                <p class="emailTag uppercase">Email:</p>

                <div class="oldDetails h-fit w-full flex items-center justify-between">
                  <div class="relative w-full mt-2">
                    <input type="email" name="" id="profileEmail" title="Email" placeholder="full name"
                      class="profileEmail placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold lowercase text-indigo-600 border border-indigo-600 sm:border-gray-300 sm:text-slate-900 bg-gray-900 sm:bg-transparent rounded-md tracking-widest"
                      disabled />
                    <label for="profileEmail"
                      class="transition-all absolute text-gray-400 font-semibold tracking-widest text-[10px] sm:peer-placeholder-shown:text-gray-900 peer-placeholder-shown:text-indigo-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:!-translate-y-1/2 left-2.5 top-0  peer-placeholder-shown:text-xs">
                      ${ user.email }
                    </label>
                  </div>

                  <span title="Click to edit.">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="editField w-6 h-6 ml-4 cursor-pointer hover:text-white hover:sm:text-indigo-600 ease-in-out duration-300">
                      <path
                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path
                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </span>


                </div>

              </div>

              <!-- Mobile Number  -->
              <div class="profileMobileNumberWrapper flex flex-col justify-between mb-3">

                <p class="mobileNumberTag uppercase">MobileNumber:</p>

                <div class="oldDetails h-fit w-full flex items-center justify-between">
                  <div class="relative w-full mt-2">
                    <input type="number" name="" id="profileMobileNumber" title="Email" placeholder="full name"
                      class="placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold uppercase text-indigo-600 border border-indigo-600 sm:border-gray-300 sm:text-slate-900 bg-gray-900 sm:bg-transparent rounded-md tracking-widest"
                      disabled />
                    <label for="profileMobileNumber"
                      class="transition-all absolute text-gray-400 font-semibold uppercase tracking-widest text-[10px] sm:peer-placeholder-shown:text-gray-900 peer-placeholder-shown:text-indigo-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:!-translate-y-1/2 left-2.5 top-0 peer-placeholder-shown:uppercase peer-placeholder-shown:text-xs">
                      99999999999
                    </label>
                  </div>

                  <span title="Click to edit.">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="editField w-6 h-6 ml-4 cursor-pointer hover:text-white hover:sm:text-indigo-600 ease-in-out duration-300">
                      <path
                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path
                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </span>

                </div>

              </div>

              <!-- Password  -->
              <div class="profilePasswordWrapper flex flex-col justify-between mb-3">

                <p class="passwordTag uppercase">Password:</p>

                <div class="oldDetails h-fit w-full flex items-center justify-between">
                  <div class="relative w-full mt-2">
                    <input type="password" name="" id="profilePassword" title="Email" placeholder="full name"
                      class="placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold uppercase text-indigo-600 border border-indigo-600 sm:border-gray-300 sm:text-slate-900 bg-gray-900 sm:bg-transparent rounded-md tracking-widest"
                      disabled />
                    <label for="profilePassword"
                      class="transition-all absolute text-gray-400 font-semibold uppercase tracking-widest text-[10px] sm:peer-placeholder-shown:text-gray-900 peer-placeholder-shown:text-indigo-600 peer-placeholder-shown:top-1/2 peer-placeholder-shown:!-translate-y-1/2 left-2.5 top-0 peer-placeholder-shown:uppercase peer-placeholder-shown:text-xs">
                      ${ user.password }
                    </label>
                  </div>

                  <span title="Click to edit.">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="editField w-6 h-6 ml-4 cursor-pointer hover:text-white hover:sm:text-indigo-600 ease-in-out duration-300">
                      <path
                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path
                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </span>

                </div>

              </div>
    `
    profileDetailsFields.innerHTML = profileDetailsContent

    let editFields = document.querySelectorAll( '.editField' )
    for ( let field of editFields )
    {
      field.onclick = () =>
      {

        let targetField = field.parentElement.parentElement.childNodes[ 1 ].childNodes[ 1 ]
        targetField.toggleAttribute( 'disabled' )
        targetField.classList.toggle( 'sm:border-emerald-600' )
        targetField.classList.toggle( 'border-emerald-600' )
        targetField.classList.toggle( 'border-2' )
        targetField.focus()

      }
    }

    let updateProfileButton = document.querySelector( '.updateProfileButton' )
    updateProfileButton.onclick = () =>
    {
      for ( let field of editFields )
      {
        if ( field.getAttribute( 'disabled' ) === true )
        {
          promptMessages( 'Edit at least one field to update. Use the \'Edit icon\'. ' )
        }
      }
      const userIs = firebase.auth().currentUser
      if ( userIs )
      {
        let profileName = document.querySelector( '.profileName' )

        console.log( profileName.disabled )
        if ( profileName.disabled === false )
        {
          let finalUpdatedName = profileName.value.trim()
          user.updateProfile( {
            displayName: finalUpdatedName
          } )
            .then( () =>
            {
              promptMessages( 'Profile updated successfully', 'success', 'refresh' )
            } )
            .catch( err => { promptMessages( err.message, 'error' ) } )
        }

        let profileEmail = document.querySelector( '.profileEmail' )
        if ( profileEmail.disabled === false )
        {
          let finalUpdatedEmail = profileEmail.value.trim()
          user.updateEmail( finalUpdatedEmail )
            .then( () =>
            {
              promptMessages( 'Profile Updated successfully', 'success', 'refresh' )
            } )
            .catch( err => promptMessages( err.message, 'error' ) )
        }

      }

    }
  }
} )