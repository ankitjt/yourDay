let patientList = document.querySelector( '.patientList' );
( () =>
{
  db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
  {
    let allNames = document.querySelectorAll( '.something' )
    for ( const name123 of allNames )
    {
      name123.remove()
    }

    querySnapshot.forEach( ( doc ) =>
    {
      if ( doc.data().softDelete !== true )
      {
        let patientNames = `
                <option value="${ doc.data().aptName }" class="font-semibold something text-xs w-1/2" data-id="${ doc.id }" >${ doc.data().aptName }</option>
                `
        patientList.innerHTML += patientNames
      }
    } )
  } )
} )()