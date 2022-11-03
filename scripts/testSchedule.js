let aptsDb = db.collection( 'appointments' )
let profileDb = db.collection( 'profiles' )
let scheduleFilterName = document.querySelector( '.scheduleFilterName' )
const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
let scheduleTableRows = document.querySelector( '.scheduleTableRows' )
let scheduleFilterMonth = document.querySelector( '.scheduleFilterMonth' )
let scheduleFilterStatus = document.querySelector( '.scheduleFilterStatus' );

( () =>
{
  aptsDb.orderBy( 'aptStartDate', 'desc' ).get().then( ( querySnapshot ) =>
  {
    rowsToDelete()
    querySnapshot.forEach( ( doc ) =>
    {
      let aptStartDate = new Date( doc.data().aptStartDate * 1000 )
      let currentDate = new Date()
      let currentMonth = currentDate.getMonth() + 1
      let lastMonth = currentDate.getMonth()
      let aptStartDateMonth = aptStartDate.getMonth() + 1

      if ( aptStartDateMonth === currentMonth || aptStartDateMonth === lastMonth )
      {
        if ( doc.data().softDelete !== true )
        {
          if ( doc.data().appointmentStatus === 'Scheduled' || doc.data().appointmentStatus === 'Updated' || doc.data().appointmentStatus === 'Pending' )
          {
            showingApts( doc, aptStartDate, aptStartDateMonth )
          }
        }
      }
      updatePendingAps( doc, aptStartDate )
      appointmentsToUpdate()
    } )
  } )

  // Showing profile names in the dropdown filter
  profileDb.onSnapshot( ( querySnapshot ) =>
  {
    let allNames = document.querySelectorAll( '.something' )
    for ( const name123 of allNames )
    {
      name123.remove()
    }
    querySnapshot.forEach( ( doc ) =>
    {
      let patientNames = `
            <option value="${ doc.data().aptName }" class="font-semibold something" data-id="${ doc.id }" >${ doc.data().aptName } <span>${ doc.data().softDelete === true ? '( Deleted )' : '' } </span></option>
            `
      scheduleFilterName.innerHTML += patientNames
    } )

  } )

} )();

// Filtering Data
let filterFindBtn = document.querySelector( '.filterFindBtn' )
filterFindBtn.onclick = () =>
{
  let scheduleFilterMonth = document.querySelector( '.scheduleFilterMonth' )
  let scheduleFilterStatus = document.querySelector( '.scheduleFilterStatus' )
  if ( scheduleFilterName.value === '' || scheduleFilterMonth.value === '' || scheduleFilterStatus.value === '' )
  {
    alert( 'Use all filters' )
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
                  ${ days[ doc.data().aptDay - 1 ] } <br /> ${ doc.data().aptTimeSlot }
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
          // else
          // {
          //   scheduleTableRows.innerText = 'No Records found.'
          // }
        }
        appointmentsToUpdate()
      } )

    } )
  }
}

// Updating Pending Records
const updatePendingAps = ( doc, aptStartDate ) =>
{
  let currentDate = new Date()
  if ( aptStartDate < currentDate )
  {
    let targetRecord = aptsDb.doc( doc.id )
    targetRecord.update( {
      appointmentStatus: 'Pending',
      statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
    } )
  }
}

// Showing appointments of current and previous month.
const showingApts = ( doc, aptStartDate, aptStartDateMonth ) =>
{
  let myData = new Date( doc.data().statusUpdatedTimeStamp.seconds * 1000 )
  let currentMonthAppointments = /*html*/ `
              <tr class="border-l-2 border-b-2 text-[11px] tableRow12 border-r-2 border-gray-200" data-id="${ doc.id
    }">
                <td class="py-3 px-5 font-semibold">
                  ${ doc.data().aptName }
                </td>
                <td class="py-3 px-5 font-semibold">
                  ${ aptStartDate.getDate() }-${ aptStartDateMonth }-${ aptStartDate.getFullYear() }
                </td>
                <td class="py-3 px-5 font-semibold">
                  ${ days[ doc.data().aptDay - 1 ] } <br /> ${ doc.data().aptTimeSlot }
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

// Updating status of appointments.
const appointmentsToUpdate = () =>
{
  let aptActions = document.querySelectorAll( '.aptActions' )
  for ( let i = 0; i < aptActions.length; i++ )
  {
    aptActions[ i ].onchange = () =>
    {

      let selectedRow = aptActions[ i ].parentElement.parentElement

      let rowId = selectedRow.getAttribute( 'data-id' )
      let dbPath = db.collection( 'appointments' ).doc( rowId )
      let ask = 'Do you confirm to update?'

      if ( aptActions[ i ].value === 'Completed' )
      {
        if ( confirm( ask ) === true )
        {
          dbPath.update( {
            appointmentStatus: 'Completed',
            statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
          } )
          location.reload()
        }
        else
        {
          aptActions[ i ].selectedIndex = 0
        }
      }
      else if ( aptActions[ i ].value === 'Paid Cancelled' )
      {
        if ( confirm( ask ) === true )
        {
          dbPath.update( {
            appointmentStatus: 'Paid Cancelled',
            statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp(),

          } )
          location.reload()
        }
        else
        {
          aptActions[ i ].selectedIndex = 0
        }
      }
      else if ( aptActions[ i ].value === 'Free Cancelled' )
      {
        if ( confirm( ask ) === true )
        {
          dbPath.update( {
            appointmentStatus: 'Free Cancelled',
            statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
          } )
          location.reload()
        }
        else
        {
          aptActions[ i ].selectedIndex = 0
        }
      }
      else if ( aptActions[ i ].value === 'Updated' )
      {
        let updateAppointments = document.querySelector( '.updateAppointments' )
        updateAppointments.style.transition = '0.5s ease-in-out'
        updateAppointments.style.right = 0
        dbPath.get().then( ( doc ) =>
        {
          if ( doc.exists )
          {
            updateForm( doc )

            let updateButton = document.querySelector( '.updateButton' )

            updateButton.onclick = () =>
            {
              let occurrenceUpdateHolder = document.querySelector(
                '.occurrenceUpdateHolder'
              ),
                timeSlotUpdateHolder = document.querySelector(
                  '.timeSlotUpdateHolder'
                ),
                dayUpdateHolder =
                  document.querySelector( '.dayUpdateHolder' )

              dbPath.update( {
                aptDay: dayUpdateHolder.value,
                aptTimeSlot: timeSlotUpdateHolder.value,
                aptOccurrenceType: occurrenceUpdateHolder.value,
                appointmentStatus: 'Updated',
                statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
              } )

              updateAppointments.style.right = '-2000px'
            }

            let cancelUpdateButton = document.querySelector(
              '.cancelUpdateButton'
            )
            cancelUpdateButton.onclick = () =>
            {
              aptActions[ i ].selectedIndex = 0
              updateAppointments.style.right = '-2000px'
            }
          }
        } )
      }

    }
  }
}

// Appiontment update form
const updateForm = ( doc ) =>
{
  let updateAppointmentsSection = document.querySelector( '.updateAppointmentsSection' )
  let updateForm = /*html*/`
                        <div class="updateFormWrapper grid grid-cols-2 gap-y-3 gap-x-10 mt-10">

                            <div class="nameUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold"> Name </span>
                            <input type="text" name="nameUpdateCell" id="nameUpdateCell" disabled value="${ doc.data().aptName
    }" class="border-2 border-gray-200 bg-gray-300 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl" />
                            </div>

                            <div class="emailUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold"> Email </span>
                            <input type="text" name="emailUpdateCell" id="emailUpdateCell" disabled value="${ doc.data().aptEmail
    }" class="border-2 border-gray-200 bg-gray-300 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl">
                            </div>

                            <div class="dayUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold">Day</span>
                            <select name="aptDay" id="aptDay"
                            class="dayUpdateHolder border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-3 aptDay lg:drop-shadow-none drop-shadow-2xl text-sm">
                                <option value="${ doc.data().aptDay }" class="font-semibold">
                                ${ days[ doc.data().aptDay - 1 ] }
                                </option>
                                <option value="Monday" class="font-semibold">
                                Monday
                                </option>
                                <option value="Tuesday" class="font-semibold">
                                Tuesday
                                </option>
                                <option value="Wednesday" class="font-semibold">
                                Wednesday
                                </option>
                                <option value="Thursday" class="font-semibold">
                                Thursday
                                </option>
                                <option value="Friday" class="font-semibold">
                                Friday
                                </option>
                                <option value="Saturday" class="font-semibold">
                                Saturday
                                </option>
                                <option value="Sunday" class="font-semibold">
                                Sunday
                                </option>
                            </select>
                            </div>

                            <div class="timeSlotUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold"> Time Slot </span>
                            <select name="aptTimeSlot" id="aptTimeSlot"
                                class="timeSlotUpdateHolder border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-3 aptTimeSlot lg:drop-shadow-none drop-shadow-2xl text-sm">
                                <option value="${ doc.data().aptTimeSlot
    }" class="font-semibold">
                                ${ doc.data().aptTimeSlot }
                                </option>
                                <option value="09:00 - 10:00" class="font-semibold">
                                09:00 - 10:00
                                </option>
                                <option value="10:00 - 11:00" class="font-semibold">
                                10:00 - 11:00
                                </option>
                                <option value="11:00 - 12:00" class="font-semibold">
                                11:00 - 12:00
                                </option>
                                <option value="12:00 - 13:00" class="font-semibold">
                                12:00 - 13:00
                                </option>
                                <option value="13:00 - 14:00" class="font-semibold">
                                13:00 - 14:00
                                </option>
                                <option value="14:00 - 15:00" class="font-semibold">
                                14:00 - 15:00
                                </option>
                                <option value="15:00 - 16:00" class="font-semibold">
                                15:00 - 16:00
                                </option>
                                <option value="16:00 - 17:00" class="font-semibold">
                                16:00 - 17:00
                                </option>
                                <option value="17:00 - 18:00" class="font-semibold">
                                17:00 - 18:00
                                </option>
                                
                            </select>
                            </div>

                            <div class="occurrenceUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold">Occurrence Type</span>
                            <input type="number" name="occurrenceUpdateCell" id="occurrenceUpdateCell" value="${ doc.data().aptOccurrenceType
    }" class="occurrenceUpdateHolder border-2 border-gray-200 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl">
                            </div>

                            <div class="reasonToUpdate">
                            <span class="mb-3 px-1 text-xs font-semibold">Reason to Update</span>
                            <input type="text" name="occurrenceUpdateCell" id="occurrenceUpdateCell" class="reasonToUpdate border-2 border-gray-200 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl">
                            </div>
                            
                        </div>
                        <div class="updateCancelButtons mt-5">
                            <button class="bg-emerald-500 updateButton ml-2 py-3 px-6 text-white text-xs lg:text-md tracking-widest rounded-lg uppercase">Update</button>
                            <button class="bg-rose-500 cancelUpdateButton ml-2 py-3 px-6 text-white text-xs lg:text-md tracking-widest rounded-lg uppercase">Cancel</button>
                        </div>
                        `
  updateAppointmentsSection.innerHTML = updateForm
}

// Clearing old rows in the table
const rowsToDelete = () =>
{
  let tableRowsToDelete = document.querySelectorAll( '.tableRow12' )
  for ( let rowsToDelete of tableRowsToDelete )
  {
    rowsToDelete.remove()
  }
}

// Clear filters
let filterClearBtn = document.querySelector( '.filterClearBtn' )
filterClearBtn.onclick = () =>
{
  location.reload()
}