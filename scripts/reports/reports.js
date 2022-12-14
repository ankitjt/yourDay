// Closing update profile wrapper.
let closeUpdateProfileWrapper = document.querySelector( ".closeUpdateProfileWrapper" )

closeUpdateProfileWrapper.onclick = () =>
{
    updateProfileWrapper.classList.remove( 'left-0' )
    patientList.selectedIndex = 0
    reportByName.classList.add( 'hidden' )
}

// Go back on in delete profile prompt.

let goBack = document.querySelector( '.goBack' )

goBack.onclick = () =>
{
    deletePrompts.classList.remove( 'left-0' )
}