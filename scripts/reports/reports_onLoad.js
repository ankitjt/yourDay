( () =>
{
  let sessionCounts = [],
    supervisionCounts = [],
    totalFreeCancelledCount = [],
    totalPaidCancelledCount = [],
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

      if ( doc.data().appointmentStatus === 'Free Cancelled' )
      {
        totalFreeCancelledCount.push( doc.data().appointmentStatus )
      }
      if ( doc.data().appointmentStatus === 'Paid Cancelled' )
      {
        totalPaidCancelledCount.push( doc.data().appointmentStatus )
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
    totalFreeCancelledCounts.innerText = totalFreeCancelledCount.length
    totalPaidCancelledCounts.innerText = totalPaidCancelledCount.length
    totalRescheduledCount.innerText = updatedCounts.length
    totalPendingCount.innerText = pendingCounts.length

  } )

} )()