const getCounts = () =>
{
  db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
  {
    let namesArr = []
    let totalFees = []
    let totalScheduled = []
    let totalPaidCancelled = []
    let totalFreeCancelled = []
    let moneyFromPaidCancelledArray = [ 0 ]

    let totalMoneyFromCompletedSessions,
      moneyFromPaidCancelledSessions,
      moneyBreakData

    querySnapshot.forEach( ( doc ) =>
    {
      let newDateFormat = new Date( doc.data().dateInMills * 1000 )
      let monthYear = financeMonthFilterByName.value

      let monthYearArr = monthYear.split( '-' )
      let finalMonth
      let finalYear = newDateFormat.getFullYear().toString()
      newDateFormat.getMonth() + 1 < 10 ? finalMonth = '0' + ( newDateFormat.getMonth() + 1 ) : finalMonth = ( newDateFormat.getMonth() + 1 ).toString()

      

      if ( finalMonth === monthYearArr[ 1 ] && finalYear === monthYearArr[ 0 ] )
      {
        if ( selectedNameOfPatient === doc.data().aptName )
        {
          namesArr.push( doc.data().aptName )

          if ( doc.data().appointmentStatus === "Scheduled" || doc.data().appointmentStatus === 'Pending' )
          {
            totalScheduled.push( doc.data().appointmentStatus )
          }

          if ( doc.data().appointmentStatus === "Paid Cancelled" )
          {
            totalPaidCancelled.push( doc.data().appointmentStatus )
            moneyFromPaidCancelledArray.push( doc.data().aptFees )
            moneyFromPaidCancelledSessions = moneyFromPaidCancelledArray.reduce( ( a, b ) => a + b, 0 )
          }

          if ( doc.data().appointmentStatus !== "Paid Cancelled" )
          {
            moneyFromPaidCancelledSessions = 0
          }

          if ( doc.data().appointmentStatus === "Free Cancelled" )
          {
            totalFreeCancelled.push( doc.data().appointmentStatus )
          }

          if ( doc.data().appointmentStatus === "Completed" )
          {
            totalFees.push( doc.data().aptFees )
            totalMoneyFromCompletedSessions = totalFees.reduce( ( a, b ) => a + b, 0 )
          }
          moneyBreakData =
            `           
                          <div class='p-3'>
                          <div class="moneyScheduledWrapper flex items-center justify-between mb-3 bg-gray-800 text-white md:text-blue-600 md:bg-blue-100  px-3 py-3 rounded-md">
                            <span>Scheduled/Pending</span>
                            <span class="moneyScheduled tracking-widest  ${ totalScheduled.length === 0 ? "" : "underline" } cursor-pointer">${ totalScheduled.length }</span>
                          </div>
                          <div class="moneyCompletedWrapper flex items-center justify-between mb-3 bg-gray-800 text-white md:text-blue-600 md:bg-blue-100  px-3 py-3 rounded-md">
                            <span>Completed</span>
                            <span class="moneyCompleted tracking-widest ${ totalFees.length === 0 ? "" : "underline" }  cursor-pointer">${ totalFees.length === 0 ? "-" : totalFees.length }</span>
                          </div>
                          <div
                            class="moneyPaidCancelledWrapper flex items-center justify-between mb-3 bg-gray-800 text-white md:text-blue-600 md:bg-blue-100  px-3 py-3 rounded-md">
                            <span>Paid Cancelled</span>
                            <span class="moneyPaidCancelled tracking-widest ${ totalPaidCancelled.length === 0 ? "" : "underline" } cursor-pointer">${ totalPaidCancelled.length < 1 ? "-" : totalPaidCancelled.length }</span>
                          </div>
                          <div
                            class="moneyFreeCancelledWrapper flex items-center justify-between mb-3 bg-gray-800 text-white md:text-blue-600 md:bg-blue-100  px-3 py-3 rounded-md">
                            <span>Free Cancelled</span>
                            <span class="moneyFreeCancelled tracking-widest ${ totalFreeCancelled.length === 0 ? "" : "underline" } cursor-pointer">${ totalFreeCancelled.length === 0 ? "-" : totalFreeCancelled.length }</span>
                          </div>
                          <hr class="h-1 bg-blue-500 rounded-md my-4">
                          <div class="moneyTotalWrapper flex items-center justify-between mt-5 bg-rose-800 text-white px-3 py-3 rounded-md">
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

      // else if ( monthYearArr[ 1 ] !== doc.data().aptStartMonth[ doc.data().aptStartMonth.length - 1 ]  )
      // {
      //   console.log( monthYearArr[ 1 ], doc.data().aptStartMonth[ doc.data().aptStartMonth.length - 1 ] );
      //   moneyBreakDownWrapper.innerHTML = `
      //        <div class='h-full w-full p-3 text-center'>
      //          <span class='text-red-500'>No appointments are scheduled.</span>
      //        </div>
      //      `
      // }


    } )
  } )
}
