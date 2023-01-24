// Closing update profile wrapper.
let closeUpdateProfileWrapper = document.querySelector( ".closeUpdateProfileWrapper" )

closeUpdateProfileWrapper.onclick = () =>
{
    updateProfileWrapper.classList.remove( 'left-0' )
    updateProfileWrapper.classList.add( '-left-[2000px]' )
    patientNamesList.selectedIndex = 0
    reportByName.classList.add( 'hidden' )
    pb.classList.add( 'lg:left-6' )
}

// Go back on in delete profile prompt.

let goBack = document.querySelector( '.goBack' )

goBack.onclick = () =>
{
    deletePrompts.classList.remove( 'left-0' )
}