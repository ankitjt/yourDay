( () =>
{
  aptsDb.orderBy( 'aptStartDate', 'desc' ).get().then( ( querySnapshot ) =>
  {
    rowsToDelete()
    querySnapshot.forEach( ( doc ) =>
    {
      let aptStartDate = new Date( doc.data().aptStartDate * 1000 )
      let currentDate = new Date()
      let currentMonth = currentDate.getMonth() + 1
      let lastMonth = currentDate.getMonth()
      let aptStartDateMonth = aptStartDate.getMonth() + 1

      if ( aptStartDateMonth === currentMonth || aptStartDateMonth === lastMonth )
      {
        if ( doc.data().softDelete !== true )
        {
          if ( doc.data().appointmentStatus === 'Scheduled' || doc.data().appointmentStatus === 'Updated' || doc.data().appointmentStatus === 'Pending' )
          {
            showingApts( doc, aptStartDate, aptStartDateMonth )
          }
        }
      }
      updatePendingAps( doc, aptStartDate )
      appointmentsToUpdate()
    } )
  } )

  // Showing profile names in the dropdown filter
  profileDb.onSnapshot( ( querySnapshot ) =>
  {
    let allNames = document.querySelectorAll( '.something' )
    for ( const name123 of allNames )
    {
      name123.remove()
    }
    querySnapshot.forEach( ( doc ) =>
    {
      let patientNames = `
            <option value="${ doc.data().aptName }" class="font-semibold something" data-id="${ doc.id }" >${ doc.data().aptName } <span>${ doc.data().softDelete === true ? '( Deleted )' : '' } </span></option>
            `
      scheduleFilterName.innerHTML += patientNames
    } )

  } )

} )()