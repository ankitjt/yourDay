let closeSessionsBreakDownWrapper = document.querySelector( '.closeSessionsBreakDownWrapper' )

closeSessionsBreakDownWrapper.onclick = () =>
{
  sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
  sessionsBreakDownWrapper.classList.remove( 'left-0' )
  pb.classList.add( 'lg:left-6' )
}

const showBreakDownOfAppointments = () =>
{
  let moneyScheduledWrapper = document.querySelector( ".moneyScheduledWrapper" ),
    moneyPaidCancelledWrapper = document.querySelector( ".moneyPaidCancelledWrapper" ),
    moneyCompletedWrapper = document.querySelector( ".moneyCompletedWrapper" ),
    moneyTotal = document.querySelector( ".moneyTotal" ),
    moneyFreeCancelledWrapper = document.querySelector( ".moneyFreeCancelledWrapper" ),
    moneyScheduled = document.querySelector( '.moneyScheduled' ),
    monthYear = financeMonthFilterByName.value,
    monthYearArr = monthYear.split( '-' )

  moneyScheduledWrapper.onclick = () =>
  {
    for ( let financeBreakDown of dataArr )
    {
      if ( selectedNameOfPatient === financeBreakDown.name && financeBreakDown.month === monthYearArr[ 1 ] && financeBreakDown.year === monthYearArr[ 0 ] )
      {
        if ( moneyScheduled.innerText === '-' || moneyScheduled.innerText === '0' )
        {
          sessionsBreakDownWrapper.classList.remove( 'left-0' )
          sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
          pb.classList.add( 'lg:left-6' )
        }
        else
        {
          if ( financeBreakDown.status === 'Scheduled' || financeBreakDown.status === 'Pending' )
          {
            sessionsBreakDownWrapper.classList.add( 'left-0' )
            sessionsBreakDownWrapper.classList.remove( '-left-[2000px]' )
            pb.classList.remove( 'lg:left-6' )
            let scheduledData = `
                          <div
                               class="p-3 md:px-4 md:py-3 rounded-md bg-white mb-6  md:hover:drop-shadow-2xl md:hover:-translate-y-2 md:transition-all md:ease-in-out md:shadow-xl cursor-pointer w-full">
                              <div class="details flex flex-col text-xs text-blue-500">
                                <div  class="timeAndDate flex justify-between items-center font-black" >
                                  <span class="time flex items-center justify-between">
                                    <svg  xmlns="http:www.w3.org/2000/svg"  class="h-3 w-3 mr-1"  fill="none"  viewBox="0 0 24 24"
                                      stroke="currentColor"  stroke-width="2" >
                                      <path  stroke-linecap="round"  stroke-linejoin="round"  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span class="clockDetails">
                                      ${ financeBreakDown.slot }
                                      </span>
                                    </span>
                                  <span class="date"> ${ financeBreakDown.day } </span>
                                  </div>
                                <div class="ptName flex mt-2 items-center justify-between">
                                  <div class="ptName-wrapper flex items-center">
                                    <span class="name font-normal mr-2 capitalize"> ${ financeBreakDown.status } </span>
                                    <span class="aptDetails flex items-center">
                                      <span  class="aptType text-white font-medium ${ financeBreakDown.type === "Session" ? 'bg-emerald-600' : 'bg-blue-600' } px-2 py-1 rounded-full" >
                                        ${ financeBreakDown.type === "Supervision" ? 'Supervision' : 'Session' }
                                        </span>
                                      </span>
                                    </div>
                                    <span class="font-semibold">${ financeBreakDown.date + "/" + financeBreakDown.month + "/" + financeBreakDown.year } </span>
                                  </div>
                                  </div>
                             </div>`
            sessionsBreakDown.innerHTML += scheduledData
          }
        }
      }
    }
  }

  moneyCompletedWrapper.onclick = () =>
  {
    let moneyCompleted = document.querySelector( '.moneyCompleted' )
    if ( moneyCompleted.innerText === '-' || moneyCompleted.innerText === '0' )
    {
      sessionsBreakDownWrapper.classList.remove( 'left-0' )
      sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
      pb.classList.add( 'lg:left-6' )
    }
    else
    {
      pb.classList.remove( 'lg:left-6' )
      sessionsBreakDownWrapper.classList.remove( '-left-[2000px]' )
      sessionsBreakDownWrapper.classList.add( 'left-0' )
      sessionsBreakDown.innerText = ""
      db.collection( "appointments" ).orderBy( "dateInMills" ).where( 'aptName', '==', selectedNameOfPatient ).onSnapshot( ( querySnapshot ) =>
      {
        querySnapshot.forEach( ( doc ) =>
        {
          let dates = new Date( doc.data().dateInMills * 1000 )
          let monthYear = financeMonthFilterByName.value
          let monthYearArr = monthYear.split( '-' )
          let finalMonth
          dates.getMonth() + 1 < 10 ? finalMonth = '0' + ( dates.getMonth() + 1 ) : finalMonth = ( dates.getMonth() + 1 ).toString()

          if ( finalMonth === monthYearArr[ 1 ] && dates.getFullYear().toString() === monthYearArr[ 0 ] )
          {
            if ( doc.data().appointmentStatus === "Completed" )
            {
              let scheduledData = `
              <div
                   class="p-3 md:px-4 md:py-3 rounded-md bg-white mb-6  md:hover:drop-shadow-2xl md:hover:-translate-y-2 md:transition-all md:ease-in-out md:shadow-xl cursor-pointer w-full">
                  <div class="details flex flex-col text-xs text-blue-500">
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
                      <span class="date tracking-wider"> ${ doc.data().aptDay } </span>
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

  moneyPaidCancelledWrapper.onclick = () =>
  {
    let moneyPaidCancelled = document.querySelector( '.moneyPaidCancelled' )
    if ( moneyPaidCancelled.innerText === '-' || moneyPaidCancelled.innerText === '0' )
    {
      sessionsBreakDownWrapper.classList.remove( 'left-0' )
      sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
      pb.classList.add( 'lg:left-6' )
    }
    else
    {
      pb.classList.remove( 'lg:left-6' )
      sessionsBreakDownWrapper.classList.add( 'left-0' )
      sessionsBreakDownWrapper.classList.remove( '-left-[2000px]' )
      sessionsBreakDown.innerText = ""
      db.collection( "appointments" ).orderBy( "dateInMills" ).where( "aptName", "==", selectedNameOfPatient ).onSnapshot( ( querySnapshot ) =>
      {
        querySnapshot.forEach( ( doc ) =>
        {
          let dates = new Date( doc.data().dateInMills * 1000 )
          let monthYear = financeMonthFilterByName.value
          let monthYearArr = monthYear.split( '-' )
          let finalMonth
          dates.getMonth() + 1 < 10 ? finalMonth = '0' + ( dates.getMonth() + 1 ) : finalMonth = ( dates.getMonth() + 1 ).toString()

          if ( finalMonth === monthYearArr[ 1 ] && dates.getFullYear().toString() === monthYearArr[ 0 ] )
          {
            if ( doc.data().appointmentStatus === "Paid Cancelled" )
            {
              let scheduledData = `
              <div
                   class="p-3 md:px-4 md:py-3 rounded-md bg-white mb-6  md:hover:drop-shadow-2xl md:hover:-translate-y-2 md:transition-all md:ease-in-out md:shadow-xl cursor-pointer w-full">
                  <div class="details flex flex-col text-xs text-blue-500">
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
                      <span class="date tracking-wider"> ${ doc.data().aptDay } </span>
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

  moneyFreeCancelledWrapper.onclick = () =>
  {
    let moneyFreeCancelled = document.querySelector( '.moneyFreeCancelled' )
    if ( moneyFreeCancelled.innerText === '-' || moneyFreeCancelled.innerText === '0' )
    {
      sessionsBreakDownWrapper.classList.remove( 'left-0' )
      sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
      pb.classList.add( 'lg:left-6' )
    }
    else
    {
      pb.classList.remove( 'lg:left-6' )
      sessionsBreakDownWrapper.classList.add( 'left-0' )
      sessionsBreakDownWrapper.classList.remove( '-left-[2000px]' )
      sessionsBreakDown.innerText = ""
      db.collection( "appointments" ).orderBy( "dateInMills" ).where( "aptName", "==", selectedNameOfPatient ).onSnapshot( ( querySnapshot ) =>
      {
        querySnapshot.forEach( ( doc ) =>
        {
          let dates = new Date( doc.data().dateInMills * 1000 )
          let monthYear = financeMonthFilterByName.value
          let monthYearArr = monthYear.split( '-' )
          let finalMonth
          dates.getMonth() + 1 < 10 ? finalMonth = '0' + ( dates.getMonth() + 1 ) : finalMonth = ( dates.getMonth() + 1 ).toString()

          if ( finalMonth === monthYearArr[ 1 ] && dates.getFullYear().toString() === monthYearArr[ 0 ] )
          {
            if ( doc.data().appointmentStatus === "Free Cancelled" )
            {
              let scheduledData = `
              <div
                   class="p-3 md:px-4 md:py-3 rounded-md bg-white mb-6  md:hover:drop-shadow-2xl md:hover:-translate-y-2 md:transition-all md:ease-in-out md:shadow-xl cursor-pointer w-full">
                  <div class="details flex flex-col text-xs text-blue-500">
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
                      <span class="date tracking-wider"> ${ doc.data().aptDay } </span>
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
}

