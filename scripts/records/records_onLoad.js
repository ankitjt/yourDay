let sessionCounts = [],
  scheduledCount = [],
  completedCount = [],
  supervisionCounts = [],
  totalFreeCancelledCount = [],
  totalPaidCancelledCount = [],
  updatedCounts = [],
  pendingCounts = [];

let monthListByNameReports = document.querySelector( '.monthListByNameReports' )

// Default list of all appointments
setTimeout( () =>
{
  for ( let reportData of aptsArr )
  {
    if ( reportData.type === 'Session' )
    {
      sessionCounts.push( reportData.type )
    }
    if ( reportData.type === 'Supervision' )
    {
      supervisionCounts.push( reportData.type )
    }

    if ( reportData.status === 'Scheduled' )
    {
      scheduledCount.push( reportData.status )
    }
    if ( reportData.status === 'Completed' )
    {
      completedCount.push( reportData.status )
    }
    if ( reportData.status === 'Free Cancelled' )
    {
      totalFreeCancelledCount.push( reportData.status )
    }
    if ( reportData.status === 'Paid Cancelled' )
    {
      totalPaidCancelledCount.push( reportData.status )
    }
    if ( reportData.status === 'Updated' )
    {
      updatedCounts.push( reportData.status )
    }
    if ( reportData.status === 'Pending' )
    {
      pendingCounts.push( reportData.status )
    }
    totalSessionsCount.innerText = sessionCounts.length
    totalScheduledCount.innerText = scheduledCount.length
    totalCompletedCount.innerText = completedCount.length
    totalSupervisionCount.innerText = supervisionCounts.length
    totalFreeCancelledCounts.innerText = totalFreeCancelledCount.length
    totalPaidCancelledCounts.innerText = totalPaidCancelledCount.length
    totalRescheduledCount.innerText = updatedCounts.length
    totalPendingCount.innerText = pendingCounts.length
  }
}, 2000 )

// List of appointments by Month and year
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

  for ( let breakMonthData of aptsArr )
  {
    if ( breakMonthData.month === monthYearArr[ 1 ] && breakMonthData.year === monthYearArr[ 0 ] )
    {
      if ( breakMonthData.type === 'Session' )
      {
        sessionCounts.push( breakMonthData.type )
      }
      if ( breakMonthData.type === 'Supervision' )
      {
        supervisionCounts.push( breakMonthData.type )
      }

      if ( breakMonthData.status === 'Scheduled' )
      {
        scheduledCount.push( breakMonthData.status )
      }
      if ( breakMonthData.status === 'Completed' )
      {
        completedCount.push( breakMonthData.status )
      }
      if ( breakMonthData.status === 'Free Cancelled' )
      {
        totalFreeCancelledCount.push( breakMonthData.status )
      }
      if ( breakMonthData.status === 'Paid Cancelled' )
      {
        totalPaidCancelledCount.push( breakMonthData.status )
      }
      if ( breakMonthData.status === 'Updated' )
      {
        updatedCounts.push( breakMonthData.status )
      }
      if ( breakMonthData.status === 'Pending' )
      {
        pendingCounts.push( breakMonthData.status )
      }
      totalSessionsCount.innerText = sessionCounts.length
      totalScheduledCount.innerText = scheduledCount.length
      totalCompletedCount.innerText = completedCount.length
      totalSupervisionCount.innerText = supervisionCounts.length
      totalFreeCancelledCounts.innerText = totalFreeCancelledCount.length
      totalPaidCancelledCounts.innerText = totalPaidCancelledCount.length
      totalRescheduledCount.innerText = updatedCounts.length
      totalPendingCount.innerText = pendingCounts.length
    }
  }

}