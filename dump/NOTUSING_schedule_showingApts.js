// Showing appointments of the current and previous month.
let startDateArr = []
let startMonthArr = []
let allRecords = []

const showingApts = ( doc ) =>
{
  let lastElementOfUpdatedStatus = doc.data().statusUpdatedTimeStamp[ doc.data().statusUpdatedTimeStamp.length - 1 ]
  let lastUpdatedDate = new Date( lastElementOfUpdatedStatus.seconds * 1000 )

  let abc = new Date( doc.data().dateInMills.at( -1 ) * 1000 )
  allRecords.push( {
    name: doc.data().aptName,
    email: doc.data().aptEmail,
    day: doc.data().aptDay.at( -1 ),
    type: doc.data().aptType,
    time: abc
  } )

  allRecords.sort( function ( a, b )
  {
    return a.time - b.time
  } )
  console.log( allRecords )

  db.collection( 'profiles' ).onSnapshot( ( querySnapshotProfiles ) =>
  {
    querySnapshotProfiles.forEach( ( profileDoc ) =>
    {
      if ( profileDoc.data().aptEmail.at( -1 ) === doc.data().aptEmail )
      {
        startDateArr.push( doc.data().aptStartDate.at( -1 ) )
        startMonthArr.push( doc.data().aptStartMonth.at( -1 ) )
      }
    } )
  } )

  let update = false
  setTimeout( () =>
  {
    let aptStartDate = startDateArr.at( -1 )
    let aptStartMonth = startMonthArr.at( -1 )

    if ( doc.data().aptStartDate.at( -1 ) === aptStartDate && doc.data().aptStartMonth.at( -1 ) === aptStartMonth )
    {
      update = true
    }
    let currentMonthAppointments = `
  
  <div class="flex flex-col justify-center align-middle tableRow12">
    <div class="grid grid-cols-6 text-center py-4 place-items-center text-xs border-b border-gray-200  hover:bg-blue-100 ease-in-out duration-300 text-blue-600 font-semibold px-2" data-id="${ doc.id }">
      <span>
        <span class='scheduleName'>${ doc.data().aptName } </span>
        <span class='scheduleEmail block text-[10px] text-gray-400 font-medium'>${ doc.data().aptEmail } </span>
        <div class='text-center w-full mt-2 font-medium'><button class='addMoreApt ${ update === true ? 'inline' : 'hidden' } text-center rounded-md bg-rose-600 p-2 text-white cursor-pointer text-[10px] '>Add 5 more appointments</button></div>
      </span>
      <span>${ doc.data().aptTimeSlot }</span>
      <span>
        <span> ${ doc.data().aptDay[ doc.data().aptDay.length - 1 ] }, </span>
        <span>${ doc.data().aptStartDate[ doc.data().aptStartDate.length - 1 ] }-${ doc.data().aptStartMonth[ doc.data().aptStartMonth.length - 1 ] }-${ doc.data().aptStartYear[ doc.data().aptStartYear.length - 1 ] } </span>
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
            <span class="text-[10px] font-semibold"> ${ lastElementOfUpdatedStatus === 'NA' ? 'NA' : lastUpdatedDate.toLocaleDateString() + ',' + lastUpdatedDate.toLocaleTimeString() } </span>
          </div> 
      </span>
      <span class=" w-full flex justify-center">
        <select 
          class="aptActions border border-gray-300 text-blue-500 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6">
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
  }, 1000 )


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