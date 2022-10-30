let appointmentsDb = db.collection( 'appointments' )
let profileDb = db.collection( 'profiles' )
let scheduleFilterName = document.querySelector('.scheduleFilterName')
const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

// Fetching current month appointments 
( () =>
{
    currentDate = new Date()
    let scheduleTableRows = document.querySelector( '.scheduleTableRows' )
    let currentMonth = currentDate.getMonth() + 1

    appointmentsDb.orderBy( 'aptStartDate' ).get().then( ( querySnapshot ) =>
    {
        rowsToDelete()
        querySnapshot.forEach( ( doc ) =>
        {
            let aptStartDate = new Date( doc.data().aptStartDate * 1000 )
            let aptStartDateMonth = aptStartDate.getMonth() + 1
            if ( aptStartDateMonth === currentMonth )
            {
                if ( doc.data().appointmentStatus === 'Scheduled' || doc.data().appointmentStatus === 'Updated' )
                {
                    let myData = new Date( doc.data().statusUpdatedTimeStamp.seconds * 1000 )
                    let currentMonthAppointments = `
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
                                  <div class="${ doc.data().appointmentStatus === "Scheduled" ? "block" : "hidden" }">
                                    <span>
                                      ${ doc.data().appointmentStatus === "Scheduled" ? "Scheduled" : doc.data().appointmentStatus }
                                    </span>
                                  </div>
                                </div>
        
                                <div class="statusUpdateTime"> 
                                  <span class="text-[10px] text-gray-900"> ${ doc.data().statusUpdatedTimeStamp === "" ? '' : myData.toDateString() + " " + myData.toLocaleTimeString() } </span>
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
        } )
    } )

    // Showing names in the dropdown filter
    profileDb.onSnapshot( ( querySnapshot ) =>
    {
        let allNames = document.querySelectorAll( '.something' )
        for ( const name123 of allNames )
        {
            name123.remove()
        }
        querySnapshot.forEach( ( doc ) =>
        {
            if ( doc.data().softDelete !== true )
            {
                let patientNames = `
                <option value="${ doc.data().aptName }" class="font-semibold something" data-id="${ doc.id }" >${ doc.data().aptName }</option>
                `
                scheduleFilterName.innerHTML += patientNames
            }
        } )
    } )
} )()

// Filtering Data
let filterFindBtn = document.querySelector( '.filterFindBtn' )
filterFindBtn.onclick = () =>
{
    let scheduleFilterMonth = document.querySelector('.scheduleFilterMonth')
    let scheduleFilterStatus = document.querySelector( '.scheduleFilterStatus' )
    if ( scheduleFilterName.value === '' && scheduleFilterMonth.value === '' && scheduleFilterStatus.value === '' )
    {
        alert('Please select at least one filter to find results')
    }
    // console.log(scheduleFilterName.value, scheduleFilterMonth.value, scheduleFilterStatus.value);
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