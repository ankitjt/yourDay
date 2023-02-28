let patientProfileWrapper = document.querySelector( '.patientProfileWrapper' )
let panicButton124 = document.querySelector( '.pb' )
findDetailsByName.onclick = () =>
{
  profileDetails.innerHTML = ''
  moneyBreakDownWrapper.innerHTML = ''
  sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
  sessionsBreakDownWrapper.classList.remove( 'left-0' )
  panicButton124.classList.add( 'lg:left-6', 'ease-in-out', 'duration-300' )

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
                    <h1 class="pb-1 mb-5 text-[11px] tracking-widest font-semibold text-slate-500 uppercase border-b">Appointment Details</h1>
                    <div class="grid md:grid-cols-4 grid-cols-3 font-semibold gap-x-5 gap-y-3 appointmentDetails">
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Type</div>
                        <div class="mt-1">${ finance_profile.type }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Mode</div>
                        <div class="mt-1">${ finance_profile.mode }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Time Slot</div>
                        <div class="mt-1 patientTimeSlot">${ finance_profile.timeSlot }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Day</div>
                        <div class="mt-1">${ finance_profile.day }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Fees</div>
                        <div class="mt-1">${ finance_profile.fees }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Date</div>
                        <div class="mt-1">${ finance_profile.email }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Visit per week</div>
                        <div class="mt-1">${ finance_profile.visitPerWeek }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Second Time Slot</div>
                        <div class="mt-1">${ finance_profile.secondTimeSlot }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Second Day</div>
                        <div class="mt-1">${ finance_profile.secondDay }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Second Date</div>
                        <div class="mt-1">${ finance_profile.secondDate }</div>
                      </div>
                      <div class="fieldWrapper">
                        <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">First Session On</div>
                        <div class="mt-1">${ aptDetail.firstSessionOn }</div>
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

clearScreen.onclick = () =>
{
  patientProfileWrapper.classList.add( 'hidden' )
  patientNamesList.selectedIndex = 0
  financeMonthFilterByName.value = ''
  sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
  sessionsBreakDownWrapper.classList.remove( 'left-0' )
  pb.classList.add( 'lg:left-6', 'ease-in-out', 'duration-300' )
}