// Deleting a user's profile.

let deleteProfileButton = document.querySelector( '.deleteProfileButton' )
let deletePrompts = document.querySelector( '.deletePrompts' )
let confirmDeleteProfile = document.querySelector( '.confirmDeleteProfile' )

deleteProfileButton.onclick = () =>
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
    promptMessages( 'Please provide reason to delete..' )
  }
  else
  {
    dbRef.update( {
      softDelete: true,
      reasonForDelete: deleteProfileReason.value,
      profileDeletedOn: firebase.firestore.FieldValue.serverTimestamp()
    } )
    promptMessages( 'Profile Deleted successfully.' )

    deleteProfileReason.value = ''
    deletePrompts.classList.remove( 'left-0' )
    updateProfileWrapper.classList.remove( 'left-0' )
    profile.classList.add( 'hidden' )
    workContent.classList.add( 'hidden' )
  }
}