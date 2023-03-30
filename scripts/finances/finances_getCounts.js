const getCounts = () =>
{
  let monthYear = financeMonthFilterByName.value,
    monthYearArr = monthYear.split( '-' ),
    nameOfMonth = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
  let moreSplitter = monthYearArr[ 1 ].split( '' )

  let scheduled = [],
    pending = [],
    completed = [],
    paidCompleted = [],
    freeCancelled = [],
    totalMoneyFromPaid,
    totalMoneyFromCompleted,
    totalMoneyFreeCancelled,
    recordsArr = [],
    totalMoneyReceived

  for ( let testData of aptsArr )
  {

    if ( testData.month === monthYearArr[ 1 ] && testData.year === monthYearArr[ 0 ] )
    {
      recordsArr.push( testData )
      if ( selectedNameOfPatient === testData.name )
      {

        testData.status === 'Scheduled' ? scheduled.push( testData ) : ''
        testData.status === 'Pending' ? pending.push( testData ) : ''

        testData.status === 'Completed' ? completed.push( testData.fees ) : ''
        totalMoneyFromCompleted = completed.reduce( ( a, b ) => a + b, 0 )

        testData.status === 'Paid Cancelled' ? paidCompleted.push( testData.fees ) : ''
        totalMoneyFromPaid = paidCompleted.reduce( ( a, b ) => a + b, 0 )

        testData.status === 'Free Cancelled' ? freeCancelled.push( testData.fees ) : ''
        totalMoneyFreeCancelled = freeCancelled.reduce( ( a, b ) => a + b, 0 )

        totalMoneyReceived = totalMoneyFromCompleted + totalMoneyFromPaid

        moneyBreakData =
          `           
                           <h1 class="py-4 pb-1 text-[11px] tracking-widest font-semibold lg:text-indigo-600 text-gray-500 uppercase border-b">Month's Record</h1> 
                           
                           <div class='grid grid-cols-1 lg:grid-cols-2 md:gap-x-5 md:gap-y-5 mt-5 text-indigo-600 '>

                            <div title='Click to view breakdown'
                            class="moneyScheduledWrapper breakDownType flex items-center justify-between px-6 mb-3 lg:bg-gray-50 shadow-2xl font-semibold py-4 rounded-md ease-in-out duration-300 hover:bg-indigo-600 hover:text-white cursor-pointer">
                              <span class='text-xs tracking-widest'>Scheduled</span>
                              <span class="moneyScheduled text-lg ml-5 ${ scheduled.length === 0 ? 0 : 'underline' } cursor-pointer">${ scheduled.length }</span>
                            </div> 

                            <div title='Click to view breakdown'
                            class="moneyPendingWrapper breakDownType flex items-center justify-between px-6 mb-3 lg:bg-gray-50 shadow-2xl font-semibold py-4 rounded-md ease-in-out duration-300 hover:bg-indigo-600 hover:text-white cursor-pointer">
                              <span class='text-xs tracking-widest'>Pending</span>
                              <span class="moneyPending text-lg ml-5 ${ pending.length === 0 ? 0 : 'underline' } cursor-pointer">${ pending.length }</span>
                            </div> 

                            <div title='Click to view breakdown'
                            class="moneyCompletedWrapper breakDownType flex items-center justify-between px-6 mb-3 lg:bg-gray-50 shadow-2xl font-semibold py-4 rounded-md ease-in-out duration-300 hover:bg-indigo-600 hover:text-white cursor-pointer">
                              <span class='text-xs tracking-widest'>Completed</span>
                              <span class="moneyCompleted text-lg ml-5 tracking-widest ${ completed.length === 0 ? 0 : 'underline' }  cursor-pointer">
                              ${ completed.length }</span>
                            </div>

                            <div title='Click to view breakdown'
                              class="moneyPaidCancelledWrapper breakDownType flex items-center justify-between px-6 mb-3 lg:bg-gray-50 shadow-2xl font-semibold py-4 rounded-md ease-in-out duration-300 hover:bg-indigo-600 hover:text-white cursor-pointer">
                              <span class='text-xs tracking-widest'>Paid Cancelled</span>
                              <span class="moneyPaidCancelled text-lg ml-5 tracking-widest ${ paidCompleted.length === 0 ? 0 : 'underline' } cursor-pointer ">
                              ${ paidCompleted.length }</span>
                            </div>

                            <div title='Click to view breakdown'
                              class="moneyFreeCancelledWrapper breakDownType flex items-center justify-between px-6 mb-3 lg:bg-gray-50 shadow-2xl font-semibold py-4 rounded-md ease-in-out duration-300 hover:bg-indigo-600 hover:text-white cursor-pointer">
                              <span class='text-xs tracking-widest'>Free Cancelled</span>
                              <span class="moneyFreeCancelled tracking-widest ${ freeCancelled.length === 0 ? 0 : 'underline' } cursor-pointer text-lg ml-5">
                              ${ freeCancelled.length }</span>
                            </div>
                          </div>
                          </div>
                          <hr class="h-1 bg-indigo-600 rounded-md my-4">
                          <div class="moneyTotalWrapper text-xs flex items-center justify-between tracking-widest mt-5 bg-indigo-600 text-slate-50 px-3 py-3 rounded-md">
                            <span class='uppercase'>Total Due for ${ nameOfMonth[ moreSplitter[ 1 ] - 1 ] }</span>
                            <span class="moneyTotal">
                               <div class="flex"> 
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24"
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
                          <div class='totalLogic my-2 text-[10px] text-indigo-600 text-right'>
                            ** Completed + Paid Cancelled
                          </div>
                     
                        `
        moneyBreakDownWrapper.innerHTML = moneyBreakData
        showBreakDownOfAppointments()
      }
    }
    else if ( recordsArr.length === 0 || recordsArr.length === undefined )
    {
      moneyBreakDownWrapper.innerHTML = `<p class='text-rose-600 font-semibold px-10 py-4 text-center'>No appointments found.</p>`
    }
  }
}