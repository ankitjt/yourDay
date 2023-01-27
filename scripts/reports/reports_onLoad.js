let sessionCounts = [],
  scheduledCount = [],
  completedCount = [],
  supervisionCounts = [],
  totalFreeCancelledCount = [],
  totalPaidCancelledCount = [],
  updatedCounts = [],
  pendingCounts = [];

( () =>
{

  db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      if ( doc.data().aptType === 'Session' )
      {
        sessionCounts.push( doc.data().aptType )
      }
      if ( doc.data().appointmentStatus === 'Scheduled' )
      {
        scheduledCount.push( doc.data().appointmentStatus )
      }
      if ( doc.data().appointmentStatus === 'Completed' )
      {
        completedCount.push( doc.data().appointmentStatus )
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
    totalScheduledCount.innerText = scheduledCount.length
    totalCompletedCount.innerText = completedCount.length
    totalSupervisionCount.innerText = supervisionCounts.length
    totalFreeCancelledCounts.innerText = totalFreeCancelledCount.length
    totalPaidCancelledCounts.innerText = totalPaidCancelledCount.length
    totalRescheduledCount.innerText = updatedCounts.length
    totalPendingCount.innerText = pendingCounts.length

  } )

} )()

let monthListByNameReports = document.querySelector( '.monthListByNameReports' )

monthListByNameReports.onchange = () =>
{
  let monthYear = monthListByNameReports.value
  let monthYearArr = monthYear.split( '-' )
  let finalMonth = monthYearArr[ 1 ].replace( '0', '' )
  
  sessionCounts = []
  scheduledCount = []
  completedCount = []
  supervisionCounts = []
  totalFreeCancelledCount = []
  totalPaidCancelledCount = []
  updatedCounts = []
  pendingCounts = []
  totalSessionsCount.innerText = 0
  totalScheduledCount.innerText = 0
  totalCompletedCount.innerText = 0
  totalSupervisionCount.innerText = 0
  totalFreeCancelledCounts.innerText = 0
  totalPaidCancelledCounts.innerText = 0
  totalRescheduledCount.innerText = 0
  totalPendingCount.innerText = 0

  db.collection( 'appointments' ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      let getMonth = new Date( doc.data().dateInMills * 1000 )
      let monthForDb = getMonth.getMonth() + 1
      let finalYear = getMonth.getFullYear()
      if ( finalMonth === monthForDb.toString() && monthYearArr[ 0 ] === finalYear.toString() )
      {
        if ( doc.data().aptType === 'Session' )
        {
          sessionCounts.push( doc.data().aptType )
          totalSessionsCount.innerText = sessionCounts.length
        }
        if ( doc.data().appointmentStatus === 'Scheduled' )
        {
          scheduledCount.push( doc.data().appointmentStatus )
          totalScheduledCount.innerText = scheduledCount.length
        }
        if ( doc.data().appointmentStatus === 'Completed' )
        {
          completedCount.push( doc.data().appointmentStatus )
          totalCompletedCount.innerText = completedCount.length
        }
        if ( doc.data().aptType === 'Supervision' )
        {
          supervisionCounts.push( doc.data().aptType )
          totalSupervisionCount.innerText = supervisionCounts.length
        }

        if ( doc.data().appointmentStatus === 'Free Cancelled' )
        {
          totalFreeCancelledCount.push( doc.data().appointmentStatus )
          totalFreeCancelledCounts.innerText = totalFreeCancelledCount.length
        }
        if ( doc.data().appointmentStatus === 'Paid Cancelled' )
        {
          totalPaidCancelledCount.push( doc.data().appointmentStatus )
          totalPaidCancelledCounts.innerText = totalPaidCancelledCount.length
        }
        if ( doc.data().appointmentStatus === 'Updated' )
        {
          updatedCounts.push( doc.data().appointmentStatus )
          totalRescheduledCount.innerText = updatedCounts.length
        }
        if ( doc.data().appointmentStatus === 'Pending' )
        {
          pendingCounts.push( doc.data().appointmentStatus )
          totalPendingCount.innerText = pendingCounts.length
        }
      }
    } )
  } )
}