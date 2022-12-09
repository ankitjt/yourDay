let aptName = document.querySelector( '.aptName' ),
  createAptBtn = document.querySelector( '.createAptBtn' ),
  aptEmail = document.querySelector( '.aptEmail' )
    
createAptBtn.onclick = () =>
{
  let userName = aptName.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check1 !== -1 )
  {
    alert('Invalid name')
  }
  else
  {
    alert('Name ok!!')
  }

  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( aptEmail.value ) === true )
  {
    alert('Correct Email')
  }
  else
  {
    alert('Incorrect Email format.')
  }
  // aptName.value = ''
  // aptEmail.value = ''
}