const getCounts2 = () =>
{
  let monthYear = financeMonthFilterByName.value,
    monthYearArr = monthYear.split( '-' )

  let scheduled = [],
    pending = [],
    completed = [],
    paidCompleted = [],
    freeCancelled = [],
    totalMoneyFromPaid,
    totalMoneyFromCompleted,
    totalMoneyReceived

  for ( let testData of dataArr )
  {

    if ( testData.month === monthYearArr[ 1 ] && testData.year === monthYearArr[ 0 ] )
    {
      if ( selectedNameOfPatient === testData.name )
      {
        testData.status === 'Scheduled' ? scheduled.push( testData ) : ''
        testData.status === 'Pending' ? pending.push( testData ) : ''

        testData.status === 'Completed' ? completed.push( testData.fees ) : ''
        totalMoneyFromCompleted = completed.reduce( ( a, b ) => a + b, 0 )

        testData.status === 'Paid Cancelled' ? paidCompleted.push( testData.fees ) : ''
        totalMoneyFromPaid = paidCompleted.reduce( ( a, b ) => a + b, 0 )

        testData.status === 'Free Cancelled' ? freeCancelled.push( testData ) : ''

        totalMoneyReceived = totalMoneyFromCompleted + totalMoneyFromPaid

        moneyBreakData =
          `           
                          <div class='p-3'>
                          <div class="moneyScheduledWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Scheduled</span>
                            <span class="moneyScheduled ${ scheduled.length === 0 ? 0 : "underline" } cursor-pointer">${ scheduled.length }</span>
                          </div>
                          <div class="moneyPendingWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Pending</span>
                            <span class="moneyPending ${ pending.length === 0 ? 0 : "underline" } cursor-pointer">${ pending.length }</span>
                          </div>
                          <div class="moneyCompletedWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Completed</span>
                            <span class="moneyCompleted tracking-widest ${ completed.length === 0 ? 0 : "underline" }  cursor-pointer">
                            ${ completed.length }</span>
                          </div>
                          <div
                            class="moneyPaidCancelledWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Paid Cancelled</span>
                            <span class="moneyPaidCancelled tracking-widest ${ paidCompleted.length === 0 ? 0 : "underline" } cursor-pointer">
                            ${ paidCompleted.length }</span>
                          </div>
                          <div
                            class="moneyFreeCancelledWrapper flex items-center justify-between mb-3 bg-gray-100 text-blue-600 font-semibold px-3 py-3 rounded-md ease-in-out duration-300 hover:bg-gray-400 hover:text-white cursor-pointer">
                            <span class='uppercase text-xs tracking-widest'>Free Cancelled</span>
                            <span class="moneyFreeCancelled tracking-widest ${ freeCancelled.length === 0 ? 0 : "underline" } cursor-pointer">
                            ${ freeCancelled.length }</span>
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
                               ${ totalMoneyReceived }
                              </span>
                            </div>
                            </span>
                          </div>
                          <div class='totalLogic my-2 text-[10px] text-rose-600 text-right'>
                            ** (Completed + Paid Cancelled) - Free Cancelled.
                          </div>
                      </div>
                        `
        moneyBreakDownWrapper.innerHTML = moneyBreakData
      }
    }
  }
}