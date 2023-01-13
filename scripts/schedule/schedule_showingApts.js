// Showing appointments of current and previous month.
const showingApts = ( doc ) =>
{
  let myData = new Date( doc.data().statusUpdatedTimeStamp.seconds * 1000 )
  let currentMonthAppointments = `
  
  <div class="flex flex-col justify-center align-middle tableRow12">
              <div class="grid grid-cols-6 text-center py-4 place-items-center text-xs border-b border-gray-200  hover:bg-blue-100 ease-in-out duration-300 text-blue-600 font-semibold px-2" data-id="${ doc.id }">
             
              <span>
                <span class='scheduleName'>${ doc.data().aptName } </span>
                <span class='scheduleEmail block text-[10px] text-gray-400 font-medium'>${ doc.data().aptEmail } </span>
              </span>
              <span>${ doc.data().aptTimeSlot }</span>
              <span>
                <span> ${ doc.data().aptDay}, </span>
                <span>${ doc.data().aptStartDate }-${ doc.data().aptStartMonth }-${ doc.data().aptStartYear } </span>
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