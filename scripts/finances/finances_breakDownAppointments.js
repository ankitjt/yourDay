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
