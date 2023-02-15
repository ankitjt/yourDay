let financeMonthFilter = document.querySelector( '.financeMonthFilter' ),
  countOfSessions = document.querySelector( '.countOfSessions' ),
  totalMoneyBySessions = document.querySelector( '.totalMoneyBySessions' ),
  countOfSupervisions = document.querySelector( '.countOfSupervisions' ),
  totalMoneyBySupervisions = document.querySelector( '.totalMoneyBySupervisions' ),
  totalMoneySessionArr = [],
  totalMoneySupervisionArr = []

financeMonthFilter.onchange = () =>
{
  let monthYear = financeMonthFilter.value
  let monthYearArr = monthYear.split( '-' )
  totalMoneyBySessions.classList.add( 'ml-2' )
  totalMoneyBySupervisions.classList.add( 'ml-2' )

  totalMoneySessionArr = []
  totalMoneySupervisionArr = []
  countOfSessions.innerText = 0
  countOfSupervisions.innerText = 0
  totalMoneyBySessions.innerText = 0
  totalMoneyBySupervisions.innerText = 0

  for ( let filterMonthData of aptsArr )
  {
    if ( filterMonthData.month === monthYearArr[ 1 ] && filterMonthData.year === monthYearArr[ 0 ] )
    {
      if ( filterMonthData.type === 'Session' )
      {
        if ( filterMonthData.status === 'Completed' || filterMonthData.status === 'Paid Cancelled' )
        {
          totalMoneySessionArr.push( filterMonthData.fees )
          countOfSessions.innerText = totalMoneySessionArr.length
          totalMoneyBySessions.innerText = totalMoneySessionArr.reduce( ( a, b ) => a + b, 0 )
        }
      }

      if ( filterMonthData.type === 'Supervision' )
      {
        if ( filterMonthData.status === 'Completed' || filterMonthData.status === 'Paid Cancelled' )
        {
          totalMoneySupervisionArr.push( filterMonthData.fees )
          countOfSupervisions.innerText = totalMoneySupervisionArr.length
          totalMoneyBySupervisions.innerText = totalMoneySupervisionArr.reduce( ( a, b ) => a + b, 0 )
        }
      }
    }
  }
}




