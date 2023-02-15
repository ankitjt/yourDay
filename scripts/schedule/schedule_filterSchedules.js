let filterFindBtn = document.querySelector( '.filterFindBtn' )
let appointmentCountNumber = []
filterFindBtn.onclick = () =>
{
  appointmentCountNumber = []
  aptsRange.classList.add( 'hidden' )
  let scheduleFilterMonth = document.querySelector( '.scheduleFilterMonth' )
  let scheduleFilterStatus = document.querySelector( '.scheduleFilterStatus' )
  if ( selectedNameOfPatient === '' || scheduleFilterMonth.value === '' || scheduleFilterStatus.value === '' )
  {
    promptMessages( 'Use all filters' )
  }
  else
  {
    scheduleTableRows.innerHTML = ''
    let monthYear = scheduleFilterMonth.value
    let monthYearArr = monthYear.split( '-' )


    for ( let filteredAppointment of aptsArr )
    {
      if ( filteredAppointment.name === selectedNameOfPatient && filteredAppointment.month === monthYearArr[ 1 ] && filteredAppointment.year === monthYearArr[ 0 ] && scheduleFilterStatus.value === filteredAppointment.status )
      {
        appointmentCountNumber.push( filteredAppointment )
        appointmentCount.innerText = `( ${ appointmentCountNumber.length } )`

        let currentMonthAppointments = `
                  <div class="flex flex-col justify-center align-middle tableRow12">
                    <div
                      class="grid grid-cols-6 px-2 py-4 text-xs font-semibold text-center text-blue-600 duration-300 ease-in-out border-b border-gray-200 place-items-center hover:bg-blue-100"
                      data-id="${ filteredAppointment.id }">
                    <span>
                        <span class='scheduleName'>${ filteredAppointment.name } </span>
                        <span class='scheduleEmail block text-[10px] text-gray-400 font-medium'>${ filteredAppointment.email } </span>
                       <span class='showUpdate ${ filteredAppointment.showUpdate === 'update' ? 'inline-block' : 'hidden' } bg-rose-500 px-2 py-1 mt-1 text-white font-normal rounded-md uppercase text-[10px] cursor-pointer'>${ filteredAppointment.showUpdate } </span>
                    </span>
                      <span>${ filteredAppointment.slot }</span>
                      <span>
                        <span> ${ filteredAppointment.day }, </span> <br />
                        <span class='date'>${ filteredAppointment.date }-${ filteredAppointment.month }-${ filteredAppointment.year } </span>
                      </span>
                      <span>${ filteredAppointment.type }</span>
                      <span>
                        <div class="text-xs uppercase appointmentStatus">
                         <span class="text-emerald-600">
                              ${ filteredAppointment.status }
                            </span>
                          <span class='text-xs text-orange-500'>${ filteredAppointment.profileStatus === true ? 'Profile Deleted' : '' } </span>
                        </div>
    
                        <div class="statusUpdateTime">
                          <span class="text-[10px] font-semibold">
                          ${ lastElementOfUpdatedStatus === 'NA' ? '' : lastUpdatedDate.toLocaleDateString() + ',' + lastUpdatedDate.toLocaleTimeString() }
                            </span>
                        </div>
                      </span>
                      <span class="flex justify-center w-full ">
                        <select
                          class="block w-5/6 text-xs text-blue-500 border border-gray-300 rounded-lg aptActions focus:ring-blue-500 focus:border-blue-500">
                          <option selected>Select</option>
                          <option value="Completed" class='font-semibold text-gray-900'>Completed</option>
                          <option value="Free Cancelled" class='font-semibold text-gray-900'>Free Cancelled</option>
                          <option value="Paid Cancelled" class='font-semibold text-gray-900'>Paid Cancelled</option>
                          <option value="Update" class='font-semibold text-gray-900'>Update</option>
                          <option value="Closed" class='font-semibold text-gray-900'>Closed</option>
                        </select>
                      </span>
                    </div>
                  </div>
                `
        scheduleTableRows.innerHTML += currentMonthAppointments
      }
    }
    addMoreAppointments()
    updateAppointmentStatus()
  }
}

// Clear filters
let filterClearBtn = document.querySelector( '.filterClearBtn' )
filterClearBtn.onclick = () =>
{
  location.reload()
}