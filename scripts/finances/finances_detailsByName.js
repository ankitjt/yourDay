let patientProfileWrapper = document.querySelector( '.patientProfileWrapper' )
let panicButton124 = document.querySelector( '.pb' )
findDetailsByName.onclick = () =>
{
  profileDetails.innerHTML = ''
  moneyBreakDownWrapper.innerHTML = ''
  sessionsBreakDownWrapper.classList.add( '-right-[2000px]' )
  sessionsBreakDownWrapper.classList.remove( 'right-0' )


  if ( patientNamesList.value === '' || financeMonthFilterByName.value === '' )
  {
    promptMessages( 'Select name and month.', 'error' )
    patientProfileWrapper.classList.add( 'hidden' )
  }
  else
  {
    patientProfileWrapper.classList.remove( 'hidden' )

    for ( let finance_profile of profileDetails )
    {
      if ( selectedEmailOfPatient === finance_profile.email )
      {
        let profileDate = new Date( finance_profile.createdOn.seconds * 1000 )
        for ( let aptDetail of aptsArr )
        {
          if ( selectedEmailOfPatient === aptDetail.email )
          {
            let finance_profile_data =
              `
                  <div class="my-2 appointmentsWrapper">
                    <h1 class="pb-1 mb-5 text-[11px] tracking-widest font-semibold text-indigo-600 uppercase border-b">Appointment Details</h1>
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 font-semibold gap-x-5 gap-y-3 appointmentDetails text-gray-500">
                      <div class="fieldWrapper flex md:block items-center text-xs justify-between">
                        <div class="profileTag font-semibold uppercase  tracking-wider text-[10px]">Type</div>
                        <div class="mt-1 text-indigo-600 lg:text-slate-700 tracking-widest">${ finance_profile.type }</div>
                      </div>
                      <div class="fieldWrapper flex md:block items-center text-xs justify-between">
                        <div class="profileTag font-semibold uppercase tracking-wider text-[10px]">Mode</div>
                        <div class="mt-1 text-indigo-600 lg:text-slate-700 tracking-widest">${ finance_profile.mode }</div>
                      </div>
                      <div class="fieldWrapper flex md:block items-center text-xs justify-between">
                        <div class="profileTag font-semibold uppercase tracking-wider text-[10px]">Time Slot</div>
                        <div class="mt-1 text-indigo-600 lg:text-slate-700 tracking-widest patientTimeSlot">${ finance_profile.timeSlot }</div>
                      </div>
                      <div class="fieldWrapper flex md:block items-center text-xs justify-between">
                        <div class="profileTag font-semibold uppercase tracking-wider text-[10px]">Day</div>
                        <div class="mt-1 text-indigo-600 lg:text-slate-700 tracking-widest">${ finance_profile.day }</div>
                      </div>
                      <div class="fieldWrapper flex md:block items-center text-xs justify-between">
                        <div class="profileTag font-semibold uppercase tracking-wider text-[10px]">Fees</div>
                        <div class="mt-1 text-indigo-600 lg:text-slate-700 tracking-widest">${ finance_profile.fees }</div>
                      </div>
                      <div class="fieldWrapper flex md:block items-center text-xs justify-between">
                        <div class="profileTag font-semibold uppercase tracking-wider text-[10px]">Visit per week</div>
                        <div class="mt-1 text-indigo-600 lg:text-slate-700 tracking-widest">${ finance_profile.visitPerWeek }</div>
                      </div>
                      <div class="fieldWrapper flex md:block items-center text-xs justify-between">
                        <div class="profileTag font-semibold uppercase tracking-wider text-[10px]">Second Time Slot</div>
                        <div class="mt-1 text-indigo-600 lg:text-slate-700 tracking-widest">${ finance_profile.secondTimeSlot }</div>
                      </div>
                      <div class="fieldWrapper flex md:block items-center text-xs justify-between">
                        <div class="profileTag font-semibold uppercase tracking-wider text-[10px]">Second Day</div>
                        <div class="mt-1 text-indigo-600 lg:text-slate-700 tracking-widest">${ finance_profile.secondDay }</div>
                      </div>
                      <div class="fieldWrapper flex md:block items-center text-xs justify-between">
                        <div class="profileTag font-semibold uppercase tracking-wider text-[10px]">First Session On</div>
                        <div class="mt-1 text-indigo-600 lg:text-slate-700 tracking-widest">${ aptDetail.firstSessionOn }</div>
                      </div>
                      
                    </div>
                  </div>
                  </div>
              `
            profileDetailsSection.innerHTML = finance_profile_data
          }
        }
        getCounts()
      }
    }
  }

}

