let filterFindBtn = document.querySelector( '.filterFindBtn' )
let patientNameFromDropdown

patientNamesList.onchange = ( e ) => {
  patientNameFromDropdown = e.target.options[ e.target.selectedIndex ].getAttribute( 'name' )
}

filterFindBtn.onclick = () =>
{
  aptsRange.classList.add( 'hidden' )
  let scheduleFilterMonth = document.querySelector( '.scheduleFilterMonth' )
  let scheduleFilterStatus = document.querySelector( '.scheduleFilterStatus' )
  if ( patientNamesList.value === '' || scheduleFilterMonth.value === '' || scheduleFilterStatus.value === '' )
  {
    promptMessages( 'Use all filters' )
  }
  else
  {
    let totalAptCount = []
    scheduleTableRows.innerHTML = ''
    let monthYear = scheduleFilterMonth.value
    monthYearArr = monthYear.split( '-' )
    
    aptsDb.orderBy( 'aptStartDate' ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        let filterMonth = new Date( doc.data().aptStartDate * 1000 )
        
        let finalMonth
        let finalYear = filterMonth.getFullYear()
        filterMonth.getMonth() + 1 < 10 ? finalMonth = '0' + ( filterMonth.getMonth() + 1 ).toString() : finalMonth = ( filterMonth.getMonth() + 1 ).toString()
        myData = new Date( doc.data().statusUpdatedTimeStamp.seconds * 1000 )

        // All filters are used
        if ( patientNameFromDropdown === doc.data().aptName && finalMonth === monthYearArr[ 1 ] && finalYear.toString() === monthYearArr[ 0 ] && scheduleFilterStatus.value === doc.data().appointmentStatus )
        {

          // Updating count 
          totalAptCount.push( doc.data().appointmentStatus )
          appointmentCount.innerText = `( ${ totalAptCount.length } )`;

          // Showing Appointments 
          let currentMonthAppointments = `
  
  <div class="flex flex-col justify-center align-middle tableRow12">
              <div class="grid grid-cols-6 text-center py-4 place-items-center text-xs border-b border-gray-200  hover:bg-blue-100 ease-in-out duration-300 text-blue-600 font-semibold px-2" data-id="${ doc.id }">
             
              <span>
                <span class='scheduleName'>${ doc.data().aptName } </span>
                <span class='scheduleEmail block text-[10px] text-gray-400 font-medium'>${ doc.data().aptEmail } </span>
              </span>
              <span>${ doc.data().aptTimeSlot }</span>
              <span>
                <span> ${ doc.data().aptDay }, </span>
                <span>${ filterMonth.getDate() }-${ finalMonth }-${ filterMonth.getFullYear() } </span>
              </span>
              <span>${ doc.data().aptType }</span>
              <span>
                <div class="appointmentStatus uppercase text-xs">
                    <div class="${ doc.data().appointmentStatus === "Completed" ? "block" : "hidden" }">
                      <span class="text-emerald-500">
                        ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                      </span>
                    </div>
                    <div class="${ doc.data().appointmentStatus === "Cancelled" ? "block" : "hidden" }">
                      <span class="text-red-500">
                        ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                      </span>
                    </div>
                    <div class="${ doc.data().appointmentStatus === "Updated" ? "block" : "hidden" }">
                      <span class="text-amber-500">
                        ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                      </span>
                    </div>
                    <div class="${ doc.data().appointmentStatus === "Pending" ? "block" : "hidden" }">
                      <span class="text-amber-600 animate-ping">
                        ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                      </span>
                    </div>
                    <div class="${ doc.data().appointmentStatus === "Scheduled" ? "block" : "hidden" }">
                      <span>
                        ${ doc.data().appointmentStatus === "Scheduled" ? "Scheduled" : doc.data().appointmentStatus }
                      </span>
                    </div>
                    <span class='text-xs text-orange-500'>${ doc.data().softDelete === true ? 'Profile Deleted' : '' } </span>
                  </div>
              
               <div class="statusUpdateTime">
                    <span class="text-[10px] font-semibold"> ${ doc.data().statusUpdatedTimeStamp === "" ? '' : myData.toDateString()
              + " " + myData.toLocaleTimeString() } </span>
                  </div> 
              </span>
              <span class=" w-full flex justify-center">
                <select 
                  class="aptActions border border-gray-300 text-blue-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6">
                  <option selected>Select</option>
                  <option value="Completed" class='font-semibold text-gray-900'>Completed</option>
                  <option value="Free Cancelled" class='font-semibold text-gray-900'>Free Cancelled</option>
                  <option value="Paid Cancelled" class='font-semibold text-gray-900'>Paid Cancelled</option>
                  <option value="Updated" class='font-semibold text-gray-900'>Update</option>
                  <option value="Closed" class='font-semibold text-gray-900'>Closed</option>
                </select>
              </span>
            </div>
            </div>
  `
          scheduleTableRows.innerHTML += currentMonthAppointments
          appointmentsToUpdate()
          
        }


      } )

    } )
  }
}