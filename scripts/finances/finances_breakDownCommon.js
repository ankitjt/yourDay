const finances_breakDownCommon = ( statusCheck, countSpan ) =>
{
  sessionsBreakDown.innerText = ""
  let monthYear = financeMonthFilterByName.value,
    monthYearArr = monthYear.split( '-' )

  for ( let financeBreakDown of dataArr )
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

        let scheduledData = `
                          <div class="px-3 py-5 rounded-2xl border-l-8 border ${ financeBreakDown.type === 'Session' ? 'border-blue-600' : 'border-emerald-600' } mb-5 text-xs text-slate-900 font-semibold flex flex-col ">
                          
                        <div class="timeAndDate flex flex-row justify-between items-center font-black">
                          <span class="time flex items-center justify-between">
                            <svg xmlns="http:www.w3.org/2000/svg" class="h-5 w-5 mr-1 ${ financeBreakDown.type === 'Session' ? 'text-blue-600' : 'text-emerald-600' }" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="clockDetails">
                              ${ financeBreakDown.slot }
                            </span>
                          </span>
                          <div class="others">
                            <span class="">${ financeBreakDown.date }:${ financeBreakDown.month }:${ financeBreakDown.year }</span>,
                            <span class="day"> ${ financeBreakDown.day } </span>
                          </div>
                        </div>
                        <div class="ptName-wrapper flex flex-col items-start justify-between mt-2 ">
                          <span class="aptType ${ financeBreakDown.type === 'Session' ? 'bg-blue-600' : 'bg-emerald-600' } px-3 py-1 mb-2 rounded-full text-white font-normal">
                            ${ financeBreakDown.type }
                          </span>
                          <span class="name mr-2 ${ financeBreakDown.status === 'Scheduled' ? 'hidden' : 'inline-block' }"> ${ financeBreakDown.status } on: <br /> <span>${ financeBreakDown.statusUpdate === 'NA' ? 'NA' : new Date( financeBreakDown.statusUpdate.seconds * 1000 ) } </span>
                        </div>
                      </div>
        `
        sessionsBreakDown.innerHTML += scheduledData
      }
    }
  }

}