let patientProfileWrapper = document.querySelector( '.patientProfileWrapper' )

findDetailsByName.onclick = () =>
{
  profileDetails.innerHTML = ''
  moneyBreakDownWrapper.innerHTML = ''
  sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
  sessionsBreakDownWrapper.classList.remove( 'left-0' )
  pb.classList.add( 'lg:left-6', 'ease-in-out', 'duration-300' )

  if ( patientName.innerText === 'By Name' || financeMonthFilterByName.value === '' )
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
        if ( patientName.innerText === doc.data().aptName )
        {
          let profileDate = new Date( doc.data().profileCreatedOn.seconds * 1000 )
          let profile = `
                <div class="profileName flex  flex-col mb-3">
                  <span class="nameTag text-gray-400 font-medium text-xs">Name</span>
                  <span class="name capitalize">${ doc.data().aptName }</span>
                </div>
                <div class="profileEmail flex  flex-col mb-3">
                  <span class="emailTag text-gray-400 font-medium text-xs ">Email</span>
                  <span class="email">${ doc.data().aptEmail }</span>
                </div>
                <div class="profileAddress flex   flex-col mb-3">
                  <span class="AddressTag text-gray-400 font-medium text-xs">Address</span>
                  <span class="address">${ doc.data().aptAddress === undefined ? "NA" : doc.data().aptAddress }</span>
                </div>
                <div class="profileMobileNumber flex  flex-col mb-3">
                  <span class="mobileTag text-gray-400 font-medium text-xs">Mobile</span>
                  <span class="mobileNumber">+91-${ doc.data().aptMobileNumber }</span>
                </div>
                <div class="profileStartDate flex   flex-col mb-3">
                  <span class="startDateTag text-gray-400 font-medium text-xs">Start Date</span>
                  <span class="startDate">${ doc.data().aptStartDate }</span>
                </div>
                <div class="e_name flex   flex-col  mb-3">
                  <span class="e_nameTag text-gray-400 font-medium text-xs">Emergency Name</span>
                  <span class="startDate">${ doc.data().emergencyName === undefined ? 'NA' : doc.data().emergencyName }</span>
                </div>
                <div class="e_relation flex   flex-col mb-3 ">
                  <span class="e_relationTag text-gray-400 font-medium text-xs">Patient Relation</span>
                  <span class="startDate">${ doc.data().patientRelation === undefined ? 'NA' : doc.data().patientRelation }</span>
                </div>
                <div class="e_moblieNumber flex   flex-col mb-3">
                  <span class="e_moblieNumberTag text-gray-400 font-medium text-xs">Emergency Mobile Number</span>
                  <span class="startDate">${ doc.data().emergencyMobileNumber === undefined ? 'NA' : doc.data().emergencyMobileNumber }</span>
                </div>
                <div class="e_address flex  flex-col mb-3 ">
                  <span class="e_addressTag text-gray-400 font-medium text-xs">Emergency Address</span>
                  <span class="startDate">${ doc.data().emergencyAddress === undefined ? 'NA' : doc.data().emergencyAddress }</span>
                </div>
                <div class="profileFee flex   flex-col mb-3">
                  <span class="feeTag text-gray-400 font-medium text-xs">Fee</span>
                  <span class="fee">${ doc.data().aptFees }</span>
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
  patientName.innerText = 'By Name'
  financeMonthFilterByName.value = ''
  sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
  sessionsBreakDownWrapper.classList.remove( 'left-0' )
  pb.classList.add( 'lg:left-6', 'ease-in-out', 'duration-300' )
}