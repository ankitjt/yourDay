const generateConfirmPage = () =>
{
  let radios = document.querySelector( 'input[name="weekType"]:checked' )
  apt__confirmPage.page.classList.add( 'left-0' )
  apt__confirmPage.page.classList.remove( '-left-[2000px]' )

  let aptStartDate1 = new Date( apt.startDate.value ).toLocaleDateString()
  let finalCurrentDate = aptStartDate1
  let aptEmailOfUser = apt.email.value
  let correctEmail = aptEmailOfUser.toLowerCase()

  let confirmPageDetails = `
          <div class="flex flex-col w-full h-auto overflow-hidden overflow-y-auto confirmPageDetails">

            <div class="confirmDetails w-2/3 bg-white rounded-xl py-3 px-5 shadow-2xl">

              <!-- Confirm Page Navbar -->
              <nav class="flex items-center w-full py-2 navConfirmPage justify-between">
                <span class="text-sm text-indigo-600 confirmPageTitle">yD</span>
                <h1 class="relative text-lg font-semibold text-center text-emerald-600 ">Confirm Page</h1>
                <div class="dummy"></div>
              </nav>

              <div
                class="my-5 appointmentDetails md:flex md:flex-col md:justify-between">

                <!-- Confirm Appointment Details  -->
                <div
                  class="grid grid-cols-1 appointmentDetailsWrapper lg:grid-cols-1 md:grid-cols-2 gap-y-5 place-items-center text-left">

                  <!-- Appointment Basics ---------------------------------------------------------->
                  <div class='flex flex-col w-full'>
                    
                  <h1 class='text-[10px] text-gray-400 tracking-widest uppercase pb-1 border-b border-gray-300 w-full'>Appointment Structure</h1>

                  <div class="grid grid-cols-4 gap-x-10 gap-y-5 mt-3">
                      <!-- Category  -->
                      <div class="flex flex-col">
                        <span class="confirmCategoryTag text-[11px] font-semibold uppercase">Category</span>
                        <span class="confirmCategory text-xs mt-[2px] font-semibold text-zinc-800">New</span>
                      </div>

                      <!-- Appointment Nature  -->
                      <div class="flex flex-col">
                        <span
                          class="confirmAppointmentNatureTag text-[11px] font-semibold uppercase">Mode</span>
                        <span class="confirmAppointmentNature text-xs mt-[2px] font-semibold text-zinc-800">${ apt.nature.value }</span>
                      </div>

                      <!-- Appointment Type  -->
                      <div class="flex flex-col">
                        <span
                          class="confirmAppointmentTypeTag text-[11px] font-semibold uppercase">Type</span>
                        <span class="confirmAppointmentType text-xs mt-[2px] font-semibold text-zinc-800">${ apt.type.value }</span>
                      </div>

                      <!-- Visit Per Week  -->
                      <div class="flex flex-col">
                        <span class="confirmOccurrenceTypeTag text-[11px] font-semibold uppercase">Visit
                          per
                          week</span>
                        <span class="confirmOccurrenceType text-xs mt-[2px] font-semibold text-zinc-800">${ apt.visitCount.value }</span>
                      </div>

                      <!-- Cycle  -->
                      <div class="flex flex-col">
                        <span class="confirmOccurrenceTypeTag text-[11px] font-semibold uppercase">Cycle</span>
                        <span class="confirmOccurrenceType text-xs mt-[2px] font-semibold text-zinc-800">${ radios.value } days</span>
                      </div>

                    </div>
                  </div>

                  <!-- Patient Details --------------------------------------------------------------->
                  <div class='flex flex-col w-full'>
                    
                    <h1 class='text-[10px] text-gray-400 tracking-widest uppercase pb-1 border-b border-gray-300 w-full'>Patient Details</h1>

                  <div class= "grid grid-cols-4 gap-10 mt-2">
                      <!-- Name  -->
                      <div class="flex flex-col w-full">
                        <span class="confirmNameTag text-[11px] font-semibold uppercase">Name</span>
                        <span class="confirmName text-xs mt-[2px] font-semibold text-zinc-800">${ aptName.value.trim() }</span>
                      </div>

                      <!-- Email  -->
                      <div class="flex flex-col w-full">
                        <span class="confirmEmailTag text-[11px] font-semibold uppercase">Email</span>
                        <span class="confirmEmail text-xs mt-[2px] font-semibold text-zinc-800 lowercase w-16">${ correctEmail.trim() }</span>
                      </div>

                      <!-- Mobile Number  -->
                      <div class="flex flex-col w-full">
                        <span class="confirmMobileNumberTag text-[11px] font-semibold uppercase">Mobile
                          Number</span>
                        <span class="confirmMobileNumber text-xs mt-[2px] font-semibold text-zinc-800">${ apt.pt_countryCode.value + '-' + apt.mobileNumber.value }</span>
                      </div>

                      <!-- Address  -->
                      <div class="flex flex-col w-full">
                        <span class="confirmAddressTag text-[11px] font-semibold uppercase">Address</span>
                        <span class="confirmAddress text-xs mt-[2px] font-semibold text-zinc-800 capitalize">${ apt.address.value }</span>
                      </div>
                    </div>
                  </div>
                 
                  <!-- Slot Details --------------------------------------------------------------------->
                  <div class='flex flex-col w-full'>
                    
                    <h1 class='text-[10px] text-gray-400 tracking-widest uppercase pb-1 border-b border-gray-300 w-full'>Slot Details</h1>

                    <div class="grid grid-cols-1 gap-x-10 gap-y-5 mt-2">

                    <div class="slotDetails grid grid-cols-4 gap-x-10 gap-y-5">
                     <!-- First Date Slot  -->
                      <div class="flex flex-col">
                        <span class="confirmStartDateTag text-[11px] font-semibold uppercase">Start
                          Date</span>
                        <span class="confirmStartDate text-xs mt-[2px] font-semibold text-zinc-800">${ finalCurrentDate }</span>
                      </div>

                      <!-- First Day Slot  -->
                      <div class="flex flex-col">
                        <span class="confirmDayTag text-[11px] font-semibold uppercase">Start Day</span>
                        <span class="confirmDay text-xs mt-[2px] font-semibold text-zinc-800">${ apt.day.value }</span>
                      </div>

                      <!-- First Time Slot  -->
                      <div class="flex flex-col">
                        <span class="confirmTimeSlotTag text-[11px] font-semibold uppercase">Time</span>
                        <span class="confirmTimeSlot text-xs mt-[2px] font-semibold text-zinc-800">${ apt.timeSlot.value.toString() }</span>
                      </div>
                    </div>

                      <!-- Fees  -->
                      <div class="flex flex-col">
                        <span class="confirmFeeTag text-[11px] font-semibold uppercase">Fees</span>
                        <div class="confirmFeesWrapper text-zinc-800 text-xs mt-[2px] font-semibold ">
                          <span>&#8377;</span>
                          <span class="confirmFees">${ apt.fees.value }</span>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  <!-- Emergency Details -------------------------------------------------------------------->
                  <div class='flex flex-col w-full'>
                    
                    <h1 class='text-[10px] text-gray-400 tracking-widest uppercase pb-1 border-b border-gray-300 w-full'>Emergency Details</h1>

                    <div class="grid grid-cols-4 gap-10 mt-2">
                       
                      <!-- Emergency Contact Name  -->
                      <div class="flex flex-col">
                        <span
                          class="confirmEmergencyNameWrapper text-[11px] font-semibold uppercase">Name</span>
                        <span
                          class="confirmEmergencyName text-xs mt-[2px] font-semibold text-zinc-800">${ apt.emergencyName.value }</span>
                      </div>

                      <!-- Emergency Relation  -->
                      <div class="flex flex-col">
                        <span
                          class="confirmEmergencyRelationWrapper text-[11px] font-semibold uppercase">Relation</span>
                        <span class="confirmEmergencyRelation text-xs mt-[2px] font-semibold text-zinc-800">${ apt.relationDetails.value === '' ? apt.emergencyRelation.value : apt.emergencyRelation.value + ' - ' + ( apt.relationDetails.value ) }</span>
                      </div>

                      <!-- Emergency Mobile Number  -->
                      <div class="flex flex-col">
                        <span
                          class="confirmEmergencyMobileNumberWrapper text-[11px] font-semibold uppercase">Mobile
                          Number</span>
                        <span class="confirmEmergencyMobileNumber text-xs mt-[2px] font-semibold text-zinc-800">${ apt.e_countryCode.value + '-' + apt.emergencyMobileNumber.value }</span>
                      </div>

                      <!-- Emergency Address  -->
                      <div class="flex flex-col">
                        <span
                          class="confirmEmergencyAddressWrapper text-[11px] uppercase font-semibold">Address</span>
                        <span
                          class="confirmEmergencyAddress text-sm mt-[2px] font-semibold text-zinc-800">${ apt.emergencyAddress.value }</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <!-- Confirm & Edit buttons  -->
              <div class="flex items-center uppercase justify-center my-10 confirmEdit flex-row text-white">
                <a href="#"
                  class="confirmButton flex tracking-widest mx-2 items-center justify-center py-3 text-xs bg-indigo-600 rounded-md w-28 md:mx-0 ">
                  <span>Confirm</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#"
                  class="confirmPageEditButton flex tracking-widest mx-2 items-center justify-center px-2 py-3 text-xs rounded-md  bg-gray-200 text-indigo-600 w-28 md:mx-4 ">
                  <span>Edit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fill-rule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
  `
  confirmPage.innerHTML = confirmPageDetails
  let slotDetails = document.querySelector( ".slotDetails" )

  if ( visitCount.value > 1 )
  {
    let finalSlotDetails = ''
    for ( let schedule of res )
    {
      finalSlotDetails += `
         <!-- First Date Slot  -->
          <div class="flex flex-col">
            <span class="confirmStartDateTag text-[11px] font-semibold uppercase">${ schedule.order } Date</span>
            <span class="confirmStartDate text-xs mt-[2px] font-semibold text-zinc-800">${ schedule.date } </span>
          </div>

          <!-- First Day Slot  -->
          <div class="flex flex-col">
            <span class="confirmDayTag text-[11px] font-semibold uppercase">${ schedule.order } Day</span>
            <span class="confirmDay text-xs mt-[2px] font-semibold text-zinc-800">${ schedule.day }</span>
          </div>

          <!-- First Time Slot  -->
          <div class="flex flex-col">
            <span class="confirmTimeSlotTag text-[11px] font-semibold uppercase">${ schedule.order } Time</span>
            <span class="confirmTimeSlot text-xs mt-[2px] font-semibold text-zinc-800">${ schedule.newTimeSlot }</span>
          </div>

      `
      slotDetails.innerHTML = finalSlotDetails
    }
  }

  let confirmPageEditButton = document.querySelector( ".confirmPageEditButton" )
  confirmPageEditButton.onclick = () =>
  {
    apt__confirmPage.page.classList.remove( 'left-0' )
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
  }

}
