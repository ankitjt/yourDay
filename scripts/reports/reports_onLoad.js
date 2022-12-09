( () =>
{
  let sessionCounts = [],
    supervisionCounts = [],
    cancelledCounts = [],
    updatedCounts = [],
    pendingCounts = []

  db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      if ( doc.data().aptType === 'Session' )
      {
        sessionCounts.push( doc.data().aptType )
      }
      if ( doc.data().aptType === 'Supervision' )
      {
        supervisionCounts.push( doc.data().aptType )
      }

      if ( doc.data().appointmentStatus === 'Cancelled' )
      {
        cancelledCounts.push( doc.data().appointmentStatus )
      }
      if ( doc.data().appointmentStatus === 'Updated' )
      {
        updatedCounts.push( doc.data().appointmentStatus )
      }
      if ( doc.data().appointmentStatus === 'Pending' )
      {
        pendingCounts.push( doc.data().appointmentStatus )
      }
    } )

    totalSessionsCount.innerText = sessionCounts.length
    totalSupervisionCount.innerText = supervisionCounts.length
    totalCancelledCount.innerText = cancelledCounts.length
    totalRescheduledCount.innerText = updatedCounts.length
    totalPendingCount.innerText = pendingCounts.length

  } )

} )()