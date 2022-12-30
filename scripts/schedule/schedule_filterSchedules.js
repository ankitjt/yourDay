let filterFindBtn = document.querySelector( '.filterFindBtn' )
filterFindBtn.onclick = () =>
{
  let scheduleFilterMonth = document.querySelector( '.scheduleFilterMonth' )
  let scheduleFilterStatus = document.querySelector( '.scheduleFilterStatus' )
  if ( patientListButton.innerText === 'By Name' || scheduleFilterMonth.value === '' || scheduleFilterStatus.value === '' )
  {
    promptMessages( 'Use all filters' )
  }
  else
  {
    aptsDb.orderBy( 'aptStartDate' ).onSnapshot( ( querySnapshot ) =>
    {
      scheduleTableRows.innerHTML = ''
      querySnapshot.forEach( ( doc ) =>
      {
        if ( scheduleFilterName.value !== '' || scheduleFilterMonth.value !== '' || scheduleFilterStatus.value !== '' )
        {
          let filterMonth = new Date( doc.data().aptStartDate * 1000 )
          let userMonth = ( filterMonth.getMonth() + 1 ).toString()
          myData = new Date( doc.data().statusUpdatedTimeStamp.seconds * 1000 )

          // All filters are used
          if ( scheduleFilterName.value === doc.data().aptName && scheduleFilterMonth.value === userMonth && scheduleFilterStatus.value === doc.data().appointmentStatus )
          {
            let currentMonthAppointments = /*html*/`
              <tr class="border-l-2 border-b-2 text-[11px] tableRow12 border-r-2 border-gray-200" data-id="${ doc.id }">
                <td class="py-3 px-5 font-semibold">
                  ${ doc.data().aptName }
                </td>
                <td class="py-3 px-5 font-semibold">
                  ${ filterMonth.getDate() }-${ filterMonth.getMonth() + 1 }-${ filterMonth.getFullYear() }
                </td>
                <td class="py-3 px-5 font-semibold">
                  ${ doc.data().aptDay } <br /> ${ doc.data().aptTimeSlot }
                </td>
                <td class="py-3 px-5 font-semibold">
                  ${ doc.data().aptType }
                </td>
              
                <!-- Status -->
                <td class="py-3   px-5 font-semibold">
              
                  <div class="appointmentStatus">
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
                      <span class="text-amber-500">
                        ${ doc.data().appointmentStatus }
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
                    <span class="text-[10px] text-gray-900"> ${ doc.data().statusUpdatedTimeStamp === "" ? '' : myData.toDateString()
                + " " + myData.toLocaleTimeString() } </span>
                  </div>
              
                </td>
              
                <td class="py-3  px-5 font-semibold">
                  <select name="appointmentActions" id="appointmentActions"
                    class="border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-2  aptActions lg:drop-shadow-none drop-shadow-2xl text-xs">
                    <option value="Action" class="font-semibold">
                      Action
                    </option>
                    <option value="Completed" class="font-semibold">
                      Completed
                    </option>
                    <option value="Paid Cancelled" class="font-semibold">
                      Paid Cancelled
                    </option>
                    <option value="Free Cancelled" class="font-semibold">
                      Free Cancelled
                    </option>
                    <option value="Updated" class="font-semibold">
                      Edit/Update
                    </option>
                    <option value="Close" class="font-semibold">
                      Closed
                    </option>
                  </select>
                </td>
              </tr>
                  
              `
            scheduleTableRows.innerHTML += currentMonthAppointments
          }
        }
        appointmentsToUpdate()
      } )

    } )
  }
}