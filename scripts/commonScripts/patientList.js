let patientList = document.querySelector( '.patientList' );
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
        let patientNames = `
                
                <option value="${ doc.data().aptName }" class="md:font-semibold md:flex md:items-center md:justifiy-between w-full h-auto text-xs my-10" data-id="${ doc.id }" >
                <div>${ doc.data().aptName } ${doc.data().aptType === 'Session' ? '(S)' : '(SV)' } </div> &nbsp;
                <div class="text-red-500 lowercase ml-10">( ${ doc.data().aptEmail } )</div> &nbsp;
                </option>
                <br />
                `
        patientList.innerHTML += patientNames
      }
    } )
  } )
} )()