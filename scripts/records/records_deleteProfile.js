// Deleting a user's profile.
let deletePrompts = document.querySelector( '.deletePrompts' )
let confirmDeleteProfile = document.querySelector( '.confirmDeleteProfile' )

deleteProfile.onclick = () =>
{
  deletePrompts.classList.add( 'right-0' )
  deletePrompts.classList.remove( '-right-[3000px]' )
  pageBlocker.classList.remove( 'hidden' )
}

confirmDeleteProfile.onclick = () =>
{
  let deleteProfileReason = document.querySelector( '.deleteProfileReason' )
  let getName = reportByNameFilter.options[ reportByNameFilter.selectedIndex ].getAttribute( 'data-id' )
  let dbRef = db.collection( "profiles" ).doc( getName )

  if ( deleteProfileReason.value === '' )
  {
    promptMessages( 'Please provide reason to delete..', 'error' )
  }
  else
  {
    dbRef.update( {
      softDelete: true,
      reasonForDelete: deleteProfileReason.value,
      profileDeletedOn: firebase.firestore.FieldValue.serverTimestamp()
    } )
    promptMessages( 'Profile Deleted successfully.', 'success' )

    deleteProfileReason.value = ''
    deletePrompts.classList.remove( 'left-0' )
    updateProfileWrapper.classList.remove( 'left-0' )
    profile.classList.add( 'hidden' )
    workContent.classList.add( 'hidden' )
  }
}

let goBackRecords = document.querySelector( '.goBackRecords' )

goBackRecords.onclick = () =>
{
  pageBlocker.classList.add( 'hidden' )
  deletePrompts.classList.remove( 'right-0' )
  deletePrompts.classList.add( '-right-[3000px]' )
}