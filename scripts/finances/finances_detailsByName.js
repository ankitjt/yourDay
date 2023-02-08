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
    promptMessages( 'Select name and month.' )
    patientProfileWrapper.classList.add( 'hidden' )
  }
  else
  {
    patientProfileWrapper.classList.remove( 'hidden' )

    db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        if ( patientNamesList.value === doc.id )
        {
          let profileDate = new Date( doc.data().profileCreatedOn.seconds * 1000 )
          let profile = `
                <div class="profileName flex  flex-col mb-3">
                  <span class="nameTag text-gray-400 font-medium text-xs">Name</span>
                  <span class="name capitalize">${ doc.data().aptName }</span>
                </div>
                <div class="profileEmail flex  flex-col mb-3">
                  <span class="emailTag text-gray-400 font-medium text-xs ">Email</span>
                  <span class="email">${ doc.data().aptEmail[ doc.data().aptEmail.length - 1 ] }</span>
                </div>
                <div class="profileAddress flex   flex-col mb-3">
                  <span class="AddressTag text-gray-400 font-medium text-xs">Address</span>
                  <span class="address">${ doc.data().aptAddress[ doc.data().aptAddress.length - 1 ] }</span>
                </div>
                <div class="profileMobileNumber flex  flex-col mb-3">
                  <span class="mobileTag text-gray-400 font-medium text-xs">Mobile</span>
                  <span class="mobileNumber">${ doc.data().apt_pt_countryCode[ doc.data().apt_pt_countryCode.length - 1 ] }-${ doc.data().aptMobileNumber[ doc.data().aptMobileNumber.length - 1 ] }</span>
                </div>
                <div class="profileAddress flex   flex-col mb-3">
                  <span class="AddressTag text-gray-400 font-medium text-xs">Nature</span>
                  <span class="address">${ doc.data().aptNature }</span>
                </div>
                <div class="profileAddress flex   flex-col mb-3">
                  <span class="AddressTag text-gray-400 font-medium text-xs">Second slot</span>
                  <span class="address">${ doc.data().aptSecondTimeSlot }</span>
                </div>
                <div class="e_name flex   flex-col  mb-3">
                  <span class="e_nameTag text-gray-400 font-medium text-xs">Emergency Name</span>
                  <span class="startDate">${ doc.data().emergencyName[ doc.data().emergencyName.length - 1 ] }</span>
                </div>
                <div class="e_relation flex   flex-col mb-3 ">
                  <span class="e_relationTag text-gray-400 font-medium text-xs">Patient Relation</span>
                  <span class="startDate">${ doc.data().patientRelation[ doc.data().patientRelation.length - 1 ] }</span>
                </div>
                <div class="e_moblieNumber flex   flex-col mb-3">
                  <span class="e_moblieNumberTag text-gray-400 font-medium text-xs">Emergency Mobile Number</span>
                  <span class="startDate">${ doc.data().emergency_countryCode[ doc.data().emergency_countryCode.length - 1 ] }-${ doc.data().emergencyMobileNumber[ doc.data().emergencyMobileNumber.length - 1 ] }</span>
                </div>
                <div class="e_address flex  flex-col mb-3 ">
                  <span class="e_addressTag text-gray-400 font-medium text-xs">Emergency Address</span>
                  <span class="startDate">${ doc.data().emergencyAddress[ doc.data().emergencyAddress.length - 1 ] }</span>
                </div>
                <div class="profileFee flex   flex-col mb-3">
                  <span class="feeTag text-gray-400 font-medium text-xs">Fee</span>
                  <span class="fee">${ doc.data().aptFees[ doc.data().aptFees.length - 1 ] }</span>
                </div>
                <div class="profileCategory flex  flex-col mb-3 ">
                  <span class="categoryTag text-gray-400 font-medium text-xs">Category</span> 
                  <span class="category">${ doc.data().aptType }</span>
                </div>
                <div class="profileCategory flex  flex-col mb-3">
                  <span class="categoryTag text-gray-400 font-medium text-xs">Occurrence ( per week )</span>
                  <span class="category">${ doc.data().aptOccurrenceType }</span>
                </div>
                <div class="profileCategory flex  flex-col ">
                  <span class="categoryTag text-gray-400 font-medium text-xs">Profile Created on</span>
                  <span class="category">${ profileDate.getDate() }-${ profileDate.getMonth() + 1 }-${ profileDate.getFullYear() }, ${ profileDate.getHours() }:${ profileDate.getMinutes() }</span>
                </div>
                <div class="profileCategory flex  flex-col mb-3">
                  <span class="categoryTag text-gray-400 font-medium text-xs">Profile Status</span>
                  <span class="category ${ doc.data().softDelete === true ? 'text-red-500' : 'text-emerald-500' }">${ doc.data().softDelete === true ? 'Deleted' : 'Active' }</span>
                </div>
                
              `
          profileDetails.innerHTML = profile
          getCounts()
        }
      } )
    } )

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