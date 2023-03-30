let closeSessionsBreakDownWrapper = document.querySelector( '.closeSessionsBreakDownWrapper' )
closeSessionsBreakDownWrapper.onclick = () =>
{
  sessionsBreakDownWrapper.classList.add( '-right-[2000px]' )
  sessionsBreakDownWrapper.classList.remove( 'right-0' )
}


const showBreakDownOfAppointments = () =>
{
  let breakDownType = document.querySelectorAll( '.breakDownType' )

  for ( let breakType of breakDownType )
  {
    breakType.onclick = () =>
    {
      if ( pageBody.offsetWidth < 1024 )
      {
        alert( 'Please view page ona bigger screen to see the information.' )
      }
      else
      {
        let rawText = breakType.childNodes[ 1 ].innerText.toLowerCase()
        let statusCheck = rawText.charAt( 0 ).toUpperCase() + rawText.slice( 1 )
        let countSpan = breakType.childNodes[ 3 ].innerText
        finances_breakDownCommon( statusCheck, countSpan )
      }
    }
  }
}

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
        sessionsBreakDown.innerHTML = `<div class='text-rose-600 uppercase tracking-widest'>No breakdown available.</div>`

      }
      else if ( financeBreakDown.status === statusCheck )
      {

        sessionsBreakDownWrapper.classList.add( 'right-0' )
        sessionsBreakDownWrapper.classList.remove( '-right-[2000px]' )

        let updatedDate = new Date( financeBreakDown.statusUpdate.seconds * 1000 )
        let date = updatedDate.getDate()
        let month = updatedDate.getMonth() + 1
        let year = updatedDate.getFullYear()
        let hours = updatedDate.getHours()
        let minutes = updatedDate.getMinutes()
        let seconds = updatedDate.getSeconds()

        let formattedDate = `${ date }/${ month }/${ year }, T: ${ hours }:${ minutes }:${ seconds }`

        let scheduledData = `
         <div
        class="px-3 py-5 rounded-2xl border-l-8 border ${ financeBreakDown.type === 'Session' ? 'border-indigo-600' : 'border-emerald-600' } mb-5 text-[10px] text-slate-700 font-semibold flex flex-col ease-in-out duration-300 hover:shadow-2xl tracking-widest">

          <!-- Time and Date  -->
          <div class="flex justify-between items-center my-1">

            <!-- Slot  -->
            <div class="time flex items-center justify-between">

              <svg xmlns="http:www.w3.org/2000/svg"
                class="h-5 w-5 mr-1 ${ financeBreakDown.type === 'Session' ? 'text-indigo-600' : 'text-emerald-600' }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <span class="clockDetails">
                ${ financeBreakDown.timeSlot }
              </span>

            </div>

            <!-- Time  -->
            <div>
              <span>${ financeBreakDown.date }:${ financeBreakDown.month }:${ financeBreakDown.year }</span>,
              <span> ${ financeBreakDown.day } </span>
            </div>

          </div>

          <!-- Appointment Type  -->
          <div class="flex justify-between my-1">

            <div
              class="${ financeBreakDown.type === 'Session' ? 'text-indigo-600' : 'text-emerald-600' } font-semibold">
              ${ financeBreakDown.type }
            </div>

            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>${ financeBreakDown.fees }</span>
            </div>


          </div>

          <!-- Status update -->
          <div class="flex items-center justify-between ${ financeBreakDown.status === 'Scheduled' ? 'my-0' : 'my-1' } ${ financeBreakDown.status === 'Scheduled' ? 'hidden' : 'inline-block' }">
            <span class="text-[10px] text-indigo-600">${ financeBreakDown.status } on: </span>
            <span>${ financeBreakDown.statusUpdate === 'NA' ? 'NA' : formattedDate }</span>
          </div>

      </div>
      `
        sessionsBreakDown.innerHTML += scheduledData
      }
    }
  }

}

