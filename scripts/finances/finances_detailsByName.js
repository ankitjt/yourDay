let patientProfileWrapper = document.querySelector( '.patientProfileWrapper' )

findDetailsByName.onclick = () =>
{
  profileDetails.innerHTML = ''
  moneyBreakDownWrapper.innerHTML = ''
  sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
  sessionsBreakDownWrapper.classList.remove( 'left-0' )
  pb.classList.add( 'lg:left-6', 'ease-in-out', 'duration-300' )

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

        let finance_profile_data = `
                 
                <div class="profileName flex  flex-col mb-3">
                  <span class="nameTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Name</span>
                  <span class="name capitalize text-blue-600">${ finance_profile.name }</span>
                </div>
                <div class="profileEmail flex  flex-col mb-3">
                  <span class="emailTag text-gray-400 font-semibold uppercase tracking-widest text-[10px] ">Email</span>
                  <span class="email text-blue-600">${ finance_profile.email }</span>
                </div>
                <div class="profileAddress flex   flex-col mb-3">
                  <span class="AddressTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Address</span>
                  <span class="address text-blue-600">${ finance_profile.address }</span>
                  <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor perspiciatis voluptatibus esse similique. Aperiam hic corrupti in iste error quasi tenetur quidem porro quae earum consequatur tempora, eligendi molestias.
                  </span>
                </div>
                <div class="profileMobileNumber flex  flex-col mb-3">
                  <span class="mobileTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Mobile</span>
                  <span class="mobileNumber text-blue-600">${ finance_profile.countryCode }-${ finance_profile.mobileNumber }</span>
                </div>
                <div class="profileAddress flex   flex-col mb-3">
                  <span class="AddressTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Mode</span>
                  <span class="address text-blue-600">${ finance_profile.mode }</span>
                </div>
                <div class="profileAddress flex   flex-col mb-3">
                  <span class="AddressTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Second slot</span>
                  <span class="secondSlot text-blue-600">${ finance_profile.secondTimeSlot }</span>
                </div>
                <div class="e_name flex   flex-col  mb-3">
                  <span class="e_nameTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Emergency Name</span>
                  <span class="startDate text-blue-600">${ finance_profile.emergency_name }</span>
                </div>
                <div class="e_relation flex   flex-col mb-3 ">
                  <span class="e_relationTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Patient Relation</span>
                  <span class="startDate text-blue-600">${ finance_profile.patientRelation }</span>
                </div>
                <div class="e_mobileNumber flex   flex-col mb-3">
                  <span class="e_mobileNumberTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Emergency Mobile Number</span>
                  <span class="startDate text-blue-600">${ finance_profile.emergency_countryCode }-${ finance_profile.emergency_mobileNumber }</span>
                </div>
                <div class="e_address flex  flex-col mb-3 ">
                  <span class="e_addressTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Emergency Address</span>
                  <span class="startDate text-blue-600">${ finance_profile.emergency_address }</span>
                </div>
                <div class="profileFee flex   flex-col mb-3">
                  <span class="feeTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Fees</span>
                  <span class="fee text-blue-600">${ finance_profile.fees }</span>
                </div>
                <div class="profileCategory flex  flex-col mb-3 ">
                  <span class="categoryTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Type</span> 
                  <span class="category text-blue-600">${ finance_profile.type }</span>
                </div>
                <div class="profileCategory flex  flex-col mb-3">
                  <span class="categoryTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Visit per week</span>
                  <span class="category text-blue-600">${ finance_profile.countPerWeek }</span>
                </div>
                <div class="profileCategory flex  flex-col ">
                  <span class="categoryTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Profile Created on</span>
                  <span class="category text-blue-600">${ profileDate.getDate() }-${ profileDate.getMonth() + 1 }-${ profileDate.getFullYear() }, ${ profileDate.toLocaleTimeString() }</span>
                </div>
                <div class="profileCategory flex  flex-col mb-3">
                  <span class="categoryTag text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Profile Status</span>
                  <span class="category ${ finance_profile.softDelete === true ? 'text-red-500' : 'text-emerald-500' }">${ finance_profile.softDelete === true ? 'Deleted' : 'Active' }</span>
                </div>
              `
        profileDetailsSection.innerHTML = finance_profile_data
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