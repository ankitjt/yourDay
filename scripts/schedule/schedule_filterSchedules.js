let filterFindBtn = document.querySelector( '.filterFindBtn' )
filterFindBtn.onclick = () =>
{
  let currentMonthAppointments = ''
  aptsRange.classList.add( 'hidden' )
  let dummyData = [];
  let scheduleFilterMonth = document.querySelector( '.scheduleFilterMonth' )
  let scheduleFilterStatus = document.querySelector( '.scheduleFilterStatus' )
  if ( selectedNameOfPatient === '' || scheduleFilterMonth.value === '' || scheduleFilterStatus.value === '' )
  {
    promptMessages( 'Use all filters', 'error' )
  }
  else
  {
    scheduleTableRows.innerHTML = `${ loadingAnimation }`

    let monthYear = scheduleFilterMonth.value
    let monthYearArr = monthYear.split( '-' )
    setTimeout( () =>
    {
      for ( let filteredAppointment of aptsArr )
      {
        if ( filteredAppointment.email === selectedEmailOfPatient && filteredAppointment.month === monthYearArr[ 1 ] && filteredAppointment.year === monthYearArr[ 0 ] && scheduleFilterStatus.value === filteredAppointment.status )
        {
          dummyData.push( filteredAppointment )
        }
      }
      if ( dummyData.length )
      {
        for ( let eachData of dummyData )
        {
          appointmentCount.innerText = `( ${ dummyData.length } )`
          currentMonthAppointments += `
                 
                    <tr
                      class="font-semibold tracking-wider ease-in-out text-gray-700 bg-white transition:300 hover:bg-blue-100 text-[10px] border-b border-gray-300 uppercase"
                      data-id="${ eachData.id }">

                       <!-- Name & Email -->
                      <td class="px-6 py-3 w-16">
                        <span class='scheduleName'>${ eachData.name } </span>
                        <span class='scheduleEmail block text-[10px] font-semibold lowercase'>${ eachData.email } </span>
                        <span class='showUpdate ${ eachData.showUpdate === 'update' ? 'inline-block' : 'hidden' } bg-rose-500
                          px-2 py-1 mt-1 text-white font-normal rounded-md uppercase text-[10px] cursor-pointer'>
                          ${ eachData.showUpdate } </span>
                      </td>

                      <!-- Time  -->
                      <td class="px-6 py-3 w-fit">${ eachData.timeSlot }</td>

                      <!-- Date  -->
                      <td class="px-6 py-3 w-fit">
                        <span> ${ eachData.day }, </span> <br />
                        <span class='date'>${ eachData.date }-${ eachData.month }-${ eachData.year } </span>
                      </td>

                      <!-- Type  -->
                      <td class="px-6 py-3">
                        <span class='${ eachData.type === 'Session' ? 'text-blue-600' : 'text-emerald-600' }'>
                        ${ eachData.type }
                        </span>
                      </td>

                      <!-- Mode  -->
                      <td title='${ eachData.mode === 'Online' ? 'Online' : 'Offline' }' class="px-6 py-3 text-center">
                        <img src='../assets/sofa.svg' class='h-5 w-5  ${ eachData.mode === 'Offline' ? 'block' : 'hidden' }' />
                        <img src='../assets/laptop.svg' class='h-5 w-5  ${ eachData.mode === 'Online' ? 'block' : 'hidden' }' />
                      </td>

                    <!-- Status  -->
                    <td class="px-6 py-3">
                      <div class="uppercase appointmentStatus">
                        <span class="text-emerald-600">
                          ${ eachData.status }
                        </span>
                        <span class='text-orange-500'>${ eachData.profileStatus === true ? 'Profile Deleted' : '' }
                        </span>
                      </div>
                      <div class="statusUpdateTime">
                        <span class="text-[10px] font-semibold">
                          ${ lastElementOfUpdatedStatus === 'NA' ? '' : lastUpdatedDate.toLocaleDateString() + ',' +
              lastUpdatedDate.toLocaleTimeString() }
                        </span>
                      </div> 
                    </td>

                    <!-- Action  -->
                    <td class="flex justify-center px-6 py-3">
                      <select
                        class="block w-full text-xs text-blue-500 border border-gray-300 rounded-lg aptActions focus:ring-blue-500 focus:border-blue-500">
                        <option selected>Select</option>
                        <option value="Completed" class='font-semibold text-gray-900'>Completed</option>
                        <option value="Free Cancelled" class='font-semibold text-gray-900'>Free Cancelled</option>
                        <option value="Paid Cancelled" class='font-semibold text-gray-900'>Paid Cancelled</option>
                        <option value="Update" class='font-semibold text-gray-900'>Update</option>
                        <option value="Closed" class='font-semibold text-gray-900'>Closed</option>
                      </select>
                    </td>
                  </tr>

                `
          scheduleTableRows.innerHTML = currentMonthAppointments
        }
      }
      else
      {
        appointmentCount.innerText = `( ${ dummyData.length } )`
        scheduleTableRows.innerHTML = `<p class='text-rose-600 font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mb-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
        <span>No records found.</span>
      </p>`
      }
    }, 2000 )
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