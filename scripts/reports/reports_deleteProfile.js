// Deleting a user's profile.
let deletePrompts = document.querySelector( '.deletePrompts' )
let confirmDeleteProfile = document.querySelector( '.confirmDeleteProfile' )

deleteProfile.onclick = () =>
{
  deletePrompts.classList.add( 'left-0' )
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