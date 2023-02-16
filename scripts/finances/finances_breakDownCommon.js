const finances_breakDownCommon = ( statusCheck, countSpan ) =>
{
  sessionsBreakDown.innerText = ""
  let monthYear = financeMonthFilterByName.value,
    monthYearArr = monthYear.split( '-' )

  for ( let financeBreakDown of aptsArr )
  {
    if ( selectedNameOfPatient === financeBreakDown.name && financeBreakDown.month === monthYearArr[ 1 ] && financeBreakDown.year === monthYearArr[ 0 ] )
    {
      if ( countSpan === '0' )
      {
        sessionsBreakDownWrapper.classList.remove( 'left-0' )
        sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
        pb.classList.add( 'lg:left-6' )
      }
      else if ( financeBreakDown.status === statusCheck )
      {

        sessionsBreakDownWrapper.classList.add( 'left-0' )
        sessionsBreakDownWrapper.classList.remove( '-left-[2000px]' )
        pb.classList.remove( 'lg:left-6' )

        let updatedDate = new Date( financeBreakDown.statusUpdate.seconds * 1000 )
        let date = updatedDate.getDate()
        let month = updatedDate.getMonth() + 1
        let year = updatedDate.getFullYear()
        let hours = updatedDate.getHours()
        let minutes = updatedDate.getMinutes()
        let seconds = updatedDate.getSeconds()

        let formattedDate = `${ date }/${ month }/${ year }, T: ${ hours }:${ minutes }:${ seconds }`

        let scheduledData = `
                          <div class="px-3 py-5 rounded-2xl border-l-8 border ${ financeBreakDown.type === 'Session' ? 'border-blue-600' : 'border-emerald-600' } mb-5 text-xs text-slate-900 font-semibold flex flex-col ">
                          
                        <div class="timeAndDate flex flex-row justify-between items-center font-black">
                          <span class="time flex items-center justify-between">
                            <svg xmlns="http:www.w3.org/2000/svg" class="h-5 w-5 mr-1 ${ financeBreakDown.type === 'Session' ? 'text-blue-600' : 'text-emerald-600' }" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="clockDetails">
                              ${ financeBreakDown.timeSlot }
                            </span>
                          </span>
                          <div class="others">
                            <span class="">${ financeBreakDown.date }:${ financeBreakDown.month }:${ financeBreakDown.year }</span>,
                            <span class="day"> ${ financeBreakDown.day } </span>
                          </div>
                        </div>
                        <div class="ptName-wrapper flex mt-2 flex-col">
                          <div class="dummy_new w-full flex justify-between mt-2 items-center">
                            <div>
                              <span class="aptType ${ financeBreakDown.type === 'Session' ? 'bg-blue-600' : 'bg-emerald-600' } px-3 py-1 mb-2 rounded-full text-white font-normal">
                              ${ financeBreakDown.type }
                              </span>
                            </div>
                            <div class="feesEachApt flex">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span class="feeAmount">${ financeBreakDown.fees }</span>
                            </div>
                          </div>
                          </div>
                          <div>
                           <span class="name mt-2 ${ financeBreakDown.status === 'Scheduled' ? 'hidden' : 'inline-block' }"> 
                            ${ financeBreakDown.status } on: <span>${ financeBreakDown.statusUpdate === 'NA' ? 'NA' : formattedDate } 
                          </span>
                        </div>
                      </div>
        `
        sessionsBreakDown.innerHTML += scheduledData
      }
    }
  }

}