let datesArr = [];
( () =>
{
  setTimeout( () =>
  {
    for ( let email of patientEmail )
    {
      db.collection( `appointments/${ email }/details` ).onSnapshot( ( querySnapshot ) =>
      {
        querySnapshot.forEach( ( doc ) =>
        {
          let newDate = new Date( doc.data().dateInMills.at( -1 ) * 1000 )
          datesArr.push( newDate )
          datesArr.sort( ( a, b ) =>
          {
            return b - a
          } )
          scheduleTableRows.innerHTML = ''
          for ( let date of datesArr )
          {
            scheduleTableRows.innerHTML += `<div>${ date }</div>`
          }
        } )
      } )
    }

  }, 1000 )
} )()