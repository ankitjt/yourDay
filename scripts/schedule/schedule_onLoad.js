scheduleGalleryView.innerHTML = `${ loadingAnimation }`
scheduleTableRows.innerHTML = `${ loadingAnimation }`

setTimeout( () =>
{
  let appointmentCountNumber = []
  let currentMonthAppointments = ''
  let mobileView = ''
  for ( let eachRecord of aptsArr )
  {
    if ( parseInt( eachRecord.month ) === parseInt( local_month ) || parseInt( eachRecord.month ) === parseInt( local_month ) - 1 )
    {
      if ( eachRecord.status === 'Pending' || eachRecord.status === 'Scheduled' )
      {
        appointmentCountNumber.push( eachRecord )

        mobileView = `
                  <div
                   class="1 px-3 py-5  rounded-2xl  border-l-8 border ${ eachRecord.type === "Session" ? 'border-emerald-600' : 'border-blue-600' } ${ eachRecord.type === "Session" ? 'text-emerald-700' : 'text-blue-700' } ${ eachRecord.type === "New" ? 'text-rose-700' : '' } mb-5" text-xs
             >
               <div class="details flex flex-col text-xs">
                 <div
                   class="timeAndDate flex justify-between items-center font-black"
                 >
                   <span class="time flex items-center justify-between">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       class="h-5 w-5 mr-1"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       stroke-width="2"
                     >
                       <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                       />
                     </svg>
                     <span class="clockDetails">
                       ${ eachRecord.slot }
                     </span>
                   </span>
                   <div class='flex flex-col justify-between'>
                    <span class="date text-xs"> ${ eachRecord.day }, ${ eachRecord.date }-${ eachRecord.month }-${ eachRecord.year } </span>
                   </div>
                 </div>
                 <div class="ptName flex mt-2 items-center justify-between">
                   <div class="ptName-wrapper flex items-center">
                     <span class="name font-normal mr-2 capitalize"> ${ eachRecord.name } </span>
                     <span class="aptDetails flex items-center">
                       <span
                         class="aptType text-xs ${ eachRecord.type === "Session" ? 'bg-emerald-700' : 'bg-blue-700' } font-normal text-white px-2 py-1 rounded-full"
                       >
                         ${ eachRecord.type === "Supervision" ? 'Supervision' : 'Session' }
                       </span>
                     </span>
                   </div>
                    <span class="status text-red-500 font-normal"> ${ eachRecord.status } </span>
                   </div>
                 </div>
               </div>
             </div>
         `
        scheduleGalleryView.innerHTML += mobileView

        // Desktop View
        appointmentCount.innerText = `( ${ appointmentCountNumber.length } )`

        currentMonthAppointments += `
                 
                    <tr
                      class="font-semibold tracking-wider ease-in-out text-gray-700 bg-white transition:300 hover:bg-blue-100 text-[10px] border-b border-gray-300 uppercase"
                      data-id="${ eachRecord.id }">

                       <!-- Name & Email -->
                      <td class="px-6 py-3 w-16">
                        <span class='scheduleName'>${ eachRecord.name } </span>
                        <span class='scheduleEmail block text-[10px] font-semibold lowercase'>${ eachRecord.email } </span>
                        <span class='showUpdate ${ eachRecord.showUpdate === ' update' ? 'inline-block' : 'hidden' } bg-rose-500
                          px-2 py-1 mt-1 text-white font-normal rounded-md uppercase text-[10px] cursor-pointer'>
                          ${ eachRecord.showUpdate } </span>
                      </td>

                      <!-- Time  -->
                      <td class="px-6 py-3 w-fit">${ eachRecord.timeSlot }</td>

                      <!-- Date  -->
                      <td class="px-6 py-3 w-fit">
                        <span> ${ eachRecord.day }, </span> <br />
                        <span class='date'>${ eachRecord.date }-${ eachRecord.month }-${ eachRecord.year } </span>
                      </td>

                      <!-- Type  -->
                      <td class="px-6 py-3">
                        <span class='${ eachRecord.type === 'Session' ? 'text-blue-600' : 'text-emerald-600' }'>
                        ${ eachRecord.type }
                        </span>
                      </td>

                      <!-- Mode  -->
                      <td title='${ eachRecord.mode === 'Online' ? 'Online' : 'Offline' }' class="px-6 py-3 text-center">
                        <img src='../assets/sofa.svg' class='h-5 w-5  ${ eachRecord.mode === 'Offline' ? 'block' : 'hidden' }' />
                        <img src='../assets/laptop.svg' class='h-5 w-5  ${ eachRecord.mode === 'Online' ? 'block' : 'hidden' }' />
                      </td>

                    <!-- Status  -->
                    <td class="px-6 py-3">
                      <div class="uppercase appointmentStatus">
                        <span class="text-emerald-600">
                          ${ eachRecord.status }
                        </span>
                        <span class='text-orange-500'>${ eachRecord.profileStatus === true ? 'Profile Deleted' : '' }
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
  }
  addMoreAppointments()
  updateAppointmentStatus()
}, 2000 )

