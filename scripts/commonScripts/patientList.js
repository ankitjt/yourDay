let patientNamesList = document.querySelector( '.patientNamesList' );

( () =>
{
  db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
  {
    let allNames = document.querySelectorAll( '.something' )
    for ( const names of allNames )
    {
      names.remove()
    }

    querySnapshot.forEach( ( doc ) =>
    {
      if ( doc.data().softDelete !== true )
      {
        let listOfName = `
        <option title='${ doc.data().aptName + ' , ' + doc.data().aptEmail }' value='${ doc.id }' >
        ${ doc.data().aptName } [ ${ doc.data().aptEmail } ] ( ${ doc.data().aptType === 'Session' ? 'Session' : 'SuperVision' } )
        </option>
        `
        patientNamesList.innerHTML += listOfName
      }
    } )
  } )

} )()


