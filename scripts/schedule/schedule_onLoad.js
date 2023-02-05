( () =>
{
  setTimeout( () =>
  {
    let dataFromDb = []
    for ( let currentEmail of patientEmail )
    {
      db.collection( `appointments/${ currentEmail }/details` ).where( 'aptEmail', '==', currentEmail ).get().then( ( querySnapshot ) =>
      {
        let lastElementOfUpdatedStatus
        let lastUpdatedDate
        querySnapshot.forEach( ( doc ) =>
        {
          let aptStartDate = new Date( doc.data().dateInMills.at( -1 ) * 1000 )
          lastElementOfUpdatedStatus = doc.data().statusUpdatedTimeStamp.at( -1 )
          lastUpdatedDate = new Date( lastElementOfUpdatedStatus.seconds * 1000 )
          let currentDate = new Date()
          let currentMonth = currentDate.getMonth()
          let lastMonth = currentDate.getMonth() - 1
          let aptStartDateMonth = aptStartDate.getMonth()

          if ( aptStartDateMonth === currentMonth || aptStartDateMonth - 1 === lastMonth )
          {
            if ( doc.data().appointmentStatus === 'Pending' || doc.data().appointmentStatus === 'Scheduled' || doc.data().appointmentStatus === 'Updated' )
            {
              dataFromDb.push( {
                type: doc.data().aptType,
                slot: doc.data().aptTimeSlot.at( -1 ),
                day: doc.data().aptDay.at( -1 ),
                name: doc.data().aptName,
                status: doc.data().appointmentStatus,
                convertedDate: aptStartDate,
                id: doc.id,
                email: doc.data().aptEmail,
                date: doc.data().aptStartDate.at( -1 ),
                month: doc.data().aptStartMonth.at( -1 ),
                year: doc.data().aptStartYear.at( -1 ),
                showUpdate: doc.data().showUpdate
              } )
              addMoreAppointments()
              // autoUpdatePendingAppointments( doc, aptStartDate )
              updateAppointmentStatus()
            }
          }
        } )

        // Sorting Data
        dataFromDb.sort( ( a, b ) =>
        {
          return a.convertedDate - b.convertedDate
        } )

        //Showing Appointments on page.
        scheduleGalleryView.innerHTML = ''
        scheduleTableRows.innerHTML = ''
        for ( let eachRecord of dataFromDb )
        {
          appointmentCount.innerText = `( ${ dataFromDb.length } )`

          // Phone View
          let appointmentPill = `
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
          scheduleGalleryView.innerHTML += appointmentPill

          // Desktop View
          let currentMonthAppointments = `
              <div class="flex flex-col justify-center align-middle tableRow12">
                <div
                  class="grid grid-cols-6 px-2 py-4 text-xs font-semibold text-center text-blue-600 duration-300 ease-in-out border-b border-gray-200 place-items-center hover:bg-blue-100"
                  data-id="${ eachRecord.id }">
                <span>
                    <span class='scheduleName'>${ eachRecord.name } </span>
                    <span class='scheduleEmail block text-[10px] text-gray-400 font-medium'>${ eachRecord.email } </span>
                   <span class='showUpdate ${ eachRecord.showUpdate === 'update' ? 'inline-block' : 'hidden' } bg-rose-500 px-2 py-1 mt-1 text-white font-normal rounded-md uppercase text-[10px] cursor-pointer'>${ eachRecord.showUpdate } </span>
                </span>
                  <span>${ eachRecord.slot }</span>
                  <span>
                    <span> ${ eachRecord.day }, </span> <br />
                    <span>${ eachRecord.date }-${ eachRecord.month }-${ eachRecord.year } </span>
                  </span>
                  <span>${ eachRecord.type }</span>
                  <span>
                    <div class="text-xs uppercase appointmentStatus">
                      <div class="${ eachRecord.status === " Completed" ? "block" : "hidden" }">
                        <span class="text-emerald-500">
                          ${ eachRecord.status === undefined ? "Scheduled" : eachRecord.status }
                        </span>
                      </div>
                      <div class="${ eachRecord.status === " Cancelled" ? "block" : "hidden" }">
                        <span class="text-red-500">
                          ${ eachRecord.status === undefined ? "Scheduled" : eachRecord.status }
                        </span>
                      </div>
                      <div class="${ eachRecord.status === " Updated" ? "block" : "hidden" }">
                        <span class="text-amber-500">
                          ${ eachRecord.status === undefined ? "Scheduled" : eachRecord.status }
                        </span>
                      </div>
                      <div class="${ eachRecord.status === " Pending" ? "block" : "hidden" }">
                        <span class="text-amber-600 animate-ping">
                          ${ eachRecord.status === undefined ? "Scheduled" : eachRecord.status }
                        </span>
                      </div>
                      <div class="${ eachRecord.status === " Scheduled" ? "block" : "hidden" }">
                        <span>
                          ${ eachRecord.status === "Scheduled" ? "Scheduled" : eachRecord.status }
                        </span>
                      </div>
                      <span class='text-xs text-orange-500'>${ eachRecord.profileStatus === true ? 'Profile Deleted' : '' } </span>
                    </div>

                    <div class="statusUpdateTime">
                      <span class="text-[10px] font-semibold">
                      ${ lastElementOfUpdatedStatus === 'NA' ? 'NA' : lastUpdatedDate.toLocaleDateString() + ',' + lastUpdatedDate.toLocaleTimeString() }
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
      } )
    }
  }, 1000 )
} )()