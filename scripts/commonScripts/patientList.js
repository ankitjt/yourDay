let patientNamesList = document.querySelector( '.patientNamesList' )
let selectedNameOfPatient
let patientEmail = [];

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
        let listOfNames = `
        <option title='${ doc.data().aptName + ' , ' + doc.data().aptEmail }' value='${ doc.id }' name='${ doc.data().aptName }' class='font-semibold' >
        ${ doc.data().aptName } [ ${ doc.data().aptEmail } ] ( ${ doc.data().aptType === 'Session' ? 'Session' : 'Supervision' } )
        </option>
        `
        patientNamesList.innerHTML += listOfNames
        patientEmail.push( doc.data().aptEmail.at( -1 ) )
      }
    } )
    fetchingData( )
    
  } )
} )()

patientNamesList.onchange = e =>
{
  selectedNameOfPatient = e.target.options[ e.target.selectedIndex ].getAttribute( 'name' )
}