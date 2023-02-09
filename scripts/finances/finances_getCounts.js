const getCounts = () =>
{
  let
    namesArr = [],
    totalFees = [],
    totalScheduled = [],
    totalPending = [],
    totalPaidCancelled = [],
    totalFreeCancelled = [],
    moneyFromPaidCancelledArray = [ 0 ],
    totalMoneyFromCompletedSessions,
    moneyFromPaidCancelledSessions,
    moneyBreakData,
    monthYear = financeMonthFilterByName.value,
    monthYearArr = monthYear.split( '-' )

  for ( let getCountData of dataArr )
  {

    if ( getCountData.month === monthYearArr[ 1 ] && getCountData.year === monthYearArr[ 0 ] )
    {
      if ( selectedNameOfPatient === getCountData.name )
      {
        namesArr.push( getCountData.name )

        if ( getCountData.status === "Scheduled" )
        {
          totalScheduled.push( getCountData.status )
        }

        if ( getCountData.status === 'Pending' )
        {
          totalPending.push( getCountData.status )
        }

        if ( getCountData.status === "Paid Cancelled" )
        {
          totalPaidCancelled.push( getCountData.status )
          moneyFromPaidCancelledArray.push( getCountData.fees )
          moneyFromPaidCancelledSessions = moneyFromPaidCancelledArray.reduce( ( a, b ) => a + b, 0 )
        }

        if ( getCountData.status === "Free Cancelled" )
        {
          totalFreeCancelled.push( getCountData.status )
        }

        if ( getCountData.status === "Completed" )
        {
          totalFees.push( getCountData.fees )
          totalMoneyFromCompletedSessions = totalFees.reduce( ( a, b ) => a + b, 0 )
        }
        console.log( totalMoneyFromCompletedSessions, moneyFromPaidCancelledSessions )
        moneyBreakData =
          `           
                          <div class='p-3'>
                          <div class="moneyScheduledWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Scheduled</span>
                            <span class="moneyScheduled ${ totalScheduled.length === 0 ? "" : "underline" } cursor-pointer">${ totalScheduled.length }</span>
                          </div>
                          <div class="moneyPendingWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Pending</span>
                            <span class="moneyPending ${ totalPending.length === 0 ? "" : "underline" } cursor-pointer">${ totalPending.length }</span>
                          </div>
                          <div class="moneyCompletedWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Completed</span>
                            <span class="moneyCompleted tracking-widest ${ totalFees.length === 0 ? "" : "underline" }  cursor-pointer">${ totalFees.length === 0 ? "-" : totalFees.length }</span>
                          </div>
                          <div
                            class="moneyPaidCancelledWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Paid Cancelled</span>
                            <span class="moneyPaidCancelled tracking-widest ${ totalPaidCancelled.length === 0 ? "" : "underline" } cursor-pointer">${ totalPaidCancelled.length < 1 ? "0" : totalPaidCancelled.length }</span>
                          </div>
                          <div
                            class="moneyFreeCancelledWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Free Cancelled</span>
                            <span class="moneyFreeCancelled tracking-widest ${ totalFreeCancelled.length === 0 ? "" : "underline" } cursor-pointer">${ totalFreeCancelled.length === 0 ? "0" : totalFreeCancelled.length }</span>
                          </div>
                          <hr class="h-1 bg-blue-600 rounded-md my-4">
                          <div class="moneyTotalWrapper flex items-center justify-between mt-5 bg-rose-600 text-white px-3 py-3 rounded-md">
                            <span>Total Due</span>
                            <span class="moneyTotal tracking-widest">
                               <div class="flex"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span class='ml-1'>
                                ${ totalMoneyFromCompletedSessions === undefined ? '-' : ( totalMoneyFromCompletedSessions + moneyFromPaidCancelledSessions ) }
                              </span>
                            </div>
                            </span>
                          </div>
                      </div>
                        `
        moneyBreakDownWrapper.innerHTML = moneyBreakData
        showBreakDownOfAppointments()
      }
    }
  }
}
