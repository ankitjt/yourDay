let financePatientList = document.querySelector( ".financePatientList" ),
  profileDetails = document.querySelector( ".profileDetails" ),
  totalMoneySessionsIndividual = document.querySelector( ".totalMoneySessionsIndividual" ),
  findDetailsByName = document.querySelector( ".findDetailsByName" ),
  countOfSessionsIndividual = document.querySelector( ".countOfSessionsIndividual" );

const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
let monthListByName = document.querySelector( ".monthListByName" );

// Getting Names List
( () =>
{
  db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      let patientList = `
        
        <option value="${ doc.data().aptName }" class="font-semibold" data-id="${ doc.id }">${ doc.data().aptName }</option>
      `
      financePatientList.innerHTML += patientList
    } )
  } )
} )();


findDetailsByName.onclick = () =>
{
  if ( financePatientList.value === '' || monthListByName.value === 'Select Month' )
  {
    alert( 'Select name and month' )
  }
  else
  {
    db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        if ( financePatientList.value === doc.data().aptName )
        {
          let profile = `
                <div class="profileName flex items-center justify-between mb-2">
                  <span class="nameTag">Name</span>
                  <span class="name ml-2 tracking-widest capitalize">${ doc.data().aptName }</span>
                </div>
                <div class="profileEmail flex items-center justify-between mb-2">
                  <span class="emailTag">Email</span>
                  <span class="email ml-2 tracking-widest">${ doc.data().aptEmail }</span>
                </div>
                <div class="profileAddress flex items-center justify-between mb-2">
                  <span class="AddressTag">Address</span>
                  <span class="ml-2 tracking-widest">${ doc.data().aptAddress === undefined ? "NA" : doc.data().aptAddress }</span>
                </div>
                <div class="profileMobileNumber flex items-center justify-between mb-2">
                  <span class="mobileTag">Mobile</span>
                  <span class="mobileNumber ml-2 tracking-widest">+91-${ doc.data().aptMobileNumber }</span>
                </div>
                <div class="profileStartDate flex items-center justify-between mb-2">
                  <span class="startDateTag">Start Date</span>
                  <span class="startDate ml-2 tracking-widest">${ doc.data().aptStartDate }</span>
                </div>
                <div class="profileFee flex items-center justify-between mb-2">
                  <span class="feeTag">Fee</span>
                  <span class="fee ml-2 tracking-widest">${ doc.data().aptFees }</span>
                </div>
                <div class="profileCategory flex items-center justify-between mb-2">
                  <span class="categoryTag">Category</span>
                  <span class="category ml-2 tracking-widest">${ doc.data().aptType }</span>
                </div>
                <div class="profileCategory flex items-center justify-between mb-2">
                  <span class="categoryTag">Occurrence ( per week )</span>
                  <span class="category ml-2">${ doc.data().aptOccurrenceType }</span>
                </div>
                <div class="profileCategory flex items-center justify-between ">
                  <span class="categoryTag">Profile Created on</span>
                  <span class="category ml-2">${ new Date( doc.data().profileCreatedOn.seconds * 1000 ) }</span>
                </div>
                
              `;
          profileDetails.innerHTML = profile;
        }
        getCounts()
      } )
    } )

  }

}

const getCounts = () =>
{
  let namesArr = []
  let totalFees = []
  let totalScheduled = []
  let totalPaidCancelled = []
  let totalFreeCancelled = []
  let moneyFromPaidCancelledArray = [ 0 ]
  let totalMoneyFromCompletedSessions,
    moneyFromPaidCancelledSessions,
    moneyBreakDownWrapper = document.querySelector( ".moneyBreakDownWrapper" ),
    moneyBreakData

  moneyBreakDownWrapper.innerHTML = ''
  db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      let newDateFormat = new Date( doc.data().aptStartDate * 1000 )
      if ( ( newDateFormat.getMonth() + 1 ) === parseInt( monthListByName.value ) )
      {
        if ( financePatientList.value === doc.data().aptName )
        {
          namesArr.push( doc.data().aptName )
          if ( doc.data().appointmentStatus === "Scheduled" )
          {
            totalScheduled.push( doc.data().appointmentStatus )
          }

          if ( doc.data().appointmentStatus === "Paid Cancelled" )
          {
            totalPaidCancelled.push( doc.data().appointmentStatus )
            moneyFromPaidCancelledArray.push( doc.data().aptFees )
            moneyFromPaidCancelledSessions = moneyFromPaidCancelledArray.reduce( ( a, b ) => a + b, 0 )

          }

          if ( doc.data().appointmentStatus !== "Paid Cancelled" )
          {
            moneyFromPaidCancelledSessions = 0
          }

          if ( doc.data().appointmentStatus === "Free Cancelled" )
          {
            totalFreeCancelled.push( doc.data().appointmentStatus )
          }

          if ( doc.data().appointmentStatus === "Completed" )
          {
            totalFees.push( doc.data().aptFees )

            totalMoneyFromCompletedSessions = totalFees.reduce( ( a, b ) => a + b, 0 )
          }
          moneyBreakData =
            `
                        <div class="moneyScheduledWrapper flex items-center justify-between mb-3 bg-blue-100 px-3 py-3 rounded-md">
                          <span>Scheduled</span>
                          <span class="moneyScheduled tracking-widest  ${ totalScheduled.length === 0 ? "" : "underline" } cursor-pointer">${ totalScheduled.length }</span>
                        </div>
                        <div class="moneyCompletedWrapper flex items-center justify-between mb-3 bg-blue-100 px-3 py-3 rounded-md">
                          <span>Completed</span>
                          <span class="moneyCompleted tracking-widest ${ totalFees.length === 0 ? "" : "underline" }  cursor-pointer">${ totalFees.length === 0 ? "-" : totalFees.length }</span>
                        </div>
                        <div
                          class="moneyPaidCancelledWrapper flex items-center justify-between mb-3 bg-blue-100 px-3 py-3 rounded-md">
                          <span>Paid Cancelled</span>
                          <span class="moneyPaidCancelled tracking-widest ${ totalPaidCancelled.length === 0 ? "" : "underline" } cursor-pointer">${ totalPaidCancelled.length < 1 ? "-" : totalPaidCancelled.length }</span>
                        </div>
                        <div
                          class="moneyFreeCancelledWrapper flex items-center justify-between mb-3 bg-blue-100 px-3 py-3 rounded-md">
                          <span>Free Cancelled</span>
                          <span class="moneyFreeCancelled tracking-widest ${ totalFreeCancelled.length === 0 ? "" : "underline" } cursor-pointer">${ totalFreeCancelled.length === 0 ? "-" : totalFreeCancelled.length }</span>
                        </div>
                        <hr class="h-1 bg-blue-500 rounded-md my-4">
                        <div class="moneyTotalWrapper flex items-center justify-between mt-5 bg-rose-100 px-3 py-3 rounded-md">
                          <span>Total Due</span>
                          <span class="moneyTotal tracking-widest">
                             <div class="flex"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class='ml-1'>
                              ${ totalMoneyFromCompletedSessions === undefined ? 0 : ( totalMoneyFromCompletedSessions + moneyFromPaidCancelledSessions ) }
                            </span>
                          </div>
                          </span>
                        </div>
                   
                      `
          moneyBreakDownWrapper.innerHTML = moneyBreakData
          showBreakDownOfAppointments()
        }
      }

    } )
  } )
}

const showBreakDownOfAppointments = () =>
{
  let moneyScheduled = document.querySelector( ".moneyScheduled" ),
    moneyPaidCancelled = document.querySelector( ".moneyPaidCancelled" ),
    moneyCompleted = document.querySelector( ".moneyCompleted" ),
    moneyTotal = document.querySelector( ".moneyTotal" ),
    sessionsBreakDown = document.querySelector( ".sessionsBreakDown" ),
    moneyFreeCancelled = document.querySelector( ".moneyFreeCancelled" )

  moneyScheduled.onclick = () =>
  {
    sessionsBreakDown.classList.add( 'left-0' )
    sessionsBreakDown.innerText = ""
    db.collection( "appointments" ).orderBy( "aptStartDate" ).where( "aptName", "==", financePatientList.value ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {

        if ( doc.data().appointmentStatus === "Scheduled" )
        {
          let dates = new Date( doc.data().aptStartDate * 1000 )
          if ( dates.getMonth() + 1 === parseInt( monthListByName.value ) )
          {
            let scheduledData = `
            <div
                 class=" p-3 lg:px-4 lg:py-3 rounded-md bg-gray-100 mb-6  lg:hover:drop-shadow-2xl lg:hover:-translate-y-2 lg:transition-all lg:ease-in-out lg:shadow-xl cursor-pointer w-full">
                <div class="details flex flex-col text-xs">
                  <div  class="timeAndDate flex justify-between items-center font-black" >
                    <span class="time flex items-center justify-between">
                      <svg  xmlns="http:www.w3.org/2000/svg"  class="h-3 w-3 mr-1"  fill="none"  viewBox="0 0 24 24"
                        stroke="currentColor"  stroke-width="2" >
                        <path  stroke-linecap="round"  stroke-linejoin="round"  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                      </svg>
                      <span class="clockDetails tracking-wider">
                        ${ doc.data().aptTimeSlot }
                        </span>
                      </span>
                    <span class="date tracking-wider"> ${ days[ doc.data().aptDay - 1 ] } </span>
                    </div>
                  <div class="ptName flex mt-2 items-center justify-between">
                    <div class="ptName-wrapper flex items-center">
                      <span class="name font-semibold mr-2 capitalize"> ${ doc.data().appointmentStatus } </span>
                      <span class="aptDetails flex items-center">
                        <span  class="aptType ${ doc.data().aptType === " Session" ? 'text-emerald-50' : 'text-blue-50' } ${ doc.data().aptType === "New" ? 'text-slate-100' : '' } tracking-wider font-medium ${ doc.data().aptType === "Session" ? 'bg-emerald-700' : 'bg-blue-700' } ${ doc.data().aptType === "New"
                ? 'bg-rose-700' : '' } px-2 py-1 rounded-full" >
                          ${ doc.data().aptType === "Supervision" ? 'SV' : doc.data().aptType.charAt( 0 ) }
                          </span>
                        </span>
                      </div>
                      <span class="font-semibold">${ dates.getDate() + "/" + ( dates.getMonth() + 1 ) + "/" + dates.getFullYear() } </span>
                    </div>
                    </div>
               </div>`
            sessionsBreakDown.innerHTML += scheduledData

          }
        }
      } )
    } )
  }

  moneyCompleted.onclick = () =>
  {
    sessionsBreakDown.classList.add( 'left-0' )
    sessionsBreakDown.innerText = ""
    db.collection( "appointments" ).where( "aptName", "==", financePatientList.value ).orderBy( "aptStartDate" ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {

        let dates = new Date( doc.data().aptStartDate * 1000 )
        if ( doc.data().appointmentStatus === "Completed" )
        {
          if ( dates.getMonth() + 1 === parseInt( monthListByName.value ) )
          {
            let scheduledData = `
            <div
                 class=" p-3 lg:px-4 lg:py-3 rounded-md bg-emerald-100 mb-6  lg:hover:drop-shadow-2xl lg:hover:-translate-y-2 lg:transition-all lg:ease-in-out lg:shadow-xl cursor-pointer w-full">
                <div class="details flex flex-col text-xs">
                  <div  class="timeAndDate flex justify-between items-center font-black" >
                    <span class="time flex items-center justify-between">
                      <svg  xmlns="http:www.w3.org/2000/svg"  class="h-3 w-3 mr-1"  fill="none"  viewBox="0 0 24 24"
                        stroke="currentColor"  stroke-width="2" >
                        <path  stroke-linecap="round"  stroke-linejoin="round"  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                      </svg>
                      <span class="clockDetails tracking-wider">
                        ${ doc.data().aptTimeSlot }
                        </span>
                      </span>
                    <span class="date tracking-wider"> ${ days[ doc.data().aptDay - 1 ] } </span>
                    </div>
                  <div class="ptName flex mt-2 items-center justify-between">
                    <div class="ptName-wrapper flex items-center">
                      <span class="name font-semibold mr-2 capitalize"> ${ doc.data().appointmentStatus } </span>
                      <span class="aptDetails flex items-center">
                        <span  class="aptType ${ doc.data().aptType === " Session" ? 'text-emerald-50' : 'text-blue-50' } ${ doc.data().aptType === "New" ? 'text-slate-100' : '' } tracking-wider font-medium ${ doc.data().aptType === "Session" ? 'bg-emerald-700' : 'bg-blue-700' } ${ doc.data().aptType === "New"
                ? 'bg-rose-700' : '' } px-2 py-1 rounded-full" >
                          ${ doc.data().aptType === "Supervision" ? 'SV' : doc.data().aptType.charAt( 0 ) }
                          </span>
                        </span>
                      </div>
                      <span class="font-semibold">${ dates.getDate() + "/" + ( dates.getMonth() + 1 ) + "/" + dates.getFullYear() } </span>
                    </div>
                    </div>
               </div>`
            sessionsBreakDown.innerHTML += scheduledData
          }
        }
      } )
    } )
  }

  moneyPaidCancelled.onclick = () =>
  {
    sessionsBreakDown.innerText = ""
    sessionsBreakDown.classList.add( 'left-0' )
    db.collection( "appointments" ).where( "aptName", "==", financePatientList.value ).orderBy( "aptStartDate" ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        if ( doc.data().appointmentStatus === "Paid Cancelled" )
        {
          let dates = new Date( doc.data().aptStartDate * 1000 )
          if ( dates.getMonth() + 1 === parseInt( monthListByName.value ) )
          {
            let scheduledData = `
            <div
                 class=" p-3 lg:px-4 lg:py-3 rounded-md bg-emerald-500 mb-6  lg:hover:drop-shadow-2xl lg:hover:-translate-y-2 lg:transition-all lg:ease-in-out lg:shadow-xl cursor-pointer w-full">
                <div class="details flex flex-col text-xs">
                  <div  class="timeAndDate flex justify-between items-center font-black" >
                    <span class="time flex items-center justify-between">
                      <svg  xmlns="http:www.w3.org/2000/svg"  class="h-3 w-3 mr-1"  fill="none"  viewBox="0 0 24 24"
                        stroke="currentColor"  stroke-width="2" >
                        <path  stroke-linecap="round"  stroke-linejoin="round"  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                      </svg>
                      <span class="clockDetails tracking-wider">
                        ${ doc.data().aptTimeSlot }
                        </span>
                      </span>
                    <span class="date tracking-wider"> ${ days[ doc.data().aptDay - 1 ] } </span>
                    </div>
                  <div class="ptName flex mt-2 items-center justify-between">
                    <div class="ptName-wrapper flex items-center">
                      <span class="name font-semibold mr-2 capitalize"> ${ doc.data().appointmentStatus } </span>
                      <span class="aptDetails flex items-center">
                        <span  class="aptType ${ doc.data().aptType === " Session" ? 'text-emerald-50' : 'text-blue-50' } ${ doc.data().aptType === "New" ? 'text-slate-100' : '' } tracking-wider font-medium ${ doc.data().aptType === "Session" ? 'bg-emerald-700' : 'bg-blue-700' } ${ doc.data().aptType === "New"
                ? 'bg-rose-700' : '' } px-2 py-1 rounded-full" >
                          ${ doc.data().aptType === "Supervision" ? 'SV' : doc.data().aptType.charAt( 0 ) }
                          </span>
                        </span>
                      </div>
                      <span class="font-semibold">${ dates.getDate() + "/" + ( dates.getMonth() + 1 ) + "/" + dates.getFullYear() } </span>
                    </div>
                    </div>
               </div>`
            sessionsBreakDown.innerHTML += scheduledData
          }
        }
      } )
    } )
  }

  moneyFreeCancelled.onclick = () =>
  {
    sessionsBreakDown.innerText = ""
    sessionsBreakDown.classList.add( 'left-0' )
    db.collection( "appointments" ).where( "aptName", "==", financePatientList.value ).orderBy( "aptStartDate" ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        if ( doc.data().appointmentStatus === "Free Cancelled" )
        {
          let dates = new Date( doc.data().aptStartDate * 1000 )
          if ( dates.getMonth() + 1 === parseInt( monthListByName.value ) )
          {
            let scheduledData = `
            <div
                 class=" p-3 lg:px-4 lg:py-3 rounded-md bg-rose-200 mb-6  lg:hover:drop-shadow-2xl lg:hover:-translate-y-2 lg:transition-all lg:ease-in-out lg:shadow-xl cursor-pointer w-full">
                <div class="details flex flex-col text-xs">
                  <div  class="timeAndDate flex justify-between items-center font-black" >
                    <span class="time flex items-center justify-between">
                      <svg  xmlns="http:www.w3.org/2000/svg"  class="h-3 w-3 mr-1"  fill="none"  viewBox="0 0 24 24"
                        stroke="currentColor"  stroke-width="2" >
                        <path  stroke-linecap="round"  stroke-linejoin="round"  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                      </svg>
                      <span class="clockDetails tracking-wider">
                        ${ doc.data().aptTimeSlot }
                        </span>
                      </span>
                    <span class="date tracking-wider"> ${ days[ doc.data().aptDay - 1 ] } </span>
                    </div>
                  <div class="ptName flex mt-2 items-center justify-between">
                    <div class="ptName-wrapper flex items-center">
                      <span class="name font-semibold mr-2 capitalize"> ${ doc.data().appointmentStatus } </span>
                      <span class="aptDetails flex items-center">
                        <span  class="aptType ${ doc.data().aptType === " Session" ? 'text-emerald-50' : 'text-blue-50' } ${ doc.data().aptType === "New" ? 'text-slate-100' : '' } tracking-wider font-medium ${ doc.data().aptType === "Session" ? 'bg-emerald-700' : 'bg-blue-700' } ${ doc.data().aptType === "New"
                ? 'bg-rose-700' : '' } px-2 py-1 rounded-full" >
                          ${ doc.data().aptType === "Supervision" ? 'SV' : doc.data().aptType.charAt( 0 ) }
                          </span>
                        </span>
                      </div>
                      <span class="font-semibold">${ dates.getDate() + "/" + ( dates.getMonth() + 1 ) + "/" + dates.getFullYear() } </span>
                    </div>
                    </div>
               </div>`
            sessionsBreakDown.innerHTML += scheduledData
          }
        }
      } )
    } )
  }
}

