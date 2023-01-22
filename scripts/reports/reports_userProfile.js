
patientNamesList.onchange = () =>
{
  if ( patientNamesList.value === "" )
  {
    updateProfileWrapper.classList.remove( 'left-0' )
    reportByName.classList.add( 'hidden' )
    pb.classList.add( 'lg:left-6' )
  }
  else
  {
    reportByName.classList.remove( 'hidden' )
    let patientID = patientNamesList.value
    console.log( patientID )
    let profile = db.collection( "profiles" ).doc( patientID )

    // Getting user profile details.
    profile.get().then( ( doc ) =>
    {
      let dbDate = doc.data().profileCreatedOn.seconds * 1000
      let defaultDate = new Date( dbDate )
      let localDate = new Date( dbDate ).toLocaleDateString()

      nameOfUser.innerText = doc.data().aptName
      email.innerText = doc.data().aptEmail[ doc.data().aptEmail.length - 1 ]
      mobileNumber.innerText = doc.data().aptMobileNumber[ doc.data().aptMobileNumber.length - 1 ]
      address.innerText = doc.data().aptAddress[ doc.data().aptAddress.length - 1 ]
      category.innerText = doc.data().aptType
      fee.innerHTML =
        `<div class='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class='ml-1'>${ doc.data().aptFees[ doc.data().aptFees.length - 1 ] }</span> </div>`

      occurrence.innerText = doc.data().aptOccurrenceType[ doc.data().aptOccurrenceType.length - 1 ]
      createDate.innerText = localDate
      slot.innerText = doc.data().aptDay[ doc.data().aptDay.length - 1 ] + " , " + doc.data().aptTimeSlot[ doc.data().aptTimeSlot.length - 1 ]
      whatChanged.innerText = doc.data().profileUpdatedOn[ doc.data().profileUpdatedOn.length - 1 ]
      e_name.innerText = doc.data().emergencyName[ doc.data().emergencyName.length - 1 ]
      e_relation.innerText = doc.data().patientRelation[ doc.data().patientRelation.length - 1 ]
      e_mobileNumber.innerText = doc.data().emergencyMobileNumber[ doc.data().emergencyMobileNumber.length - 1 ]
      e_address.innerText = doc.data().emergencyAddress[ doc.data().emergencyAddress.length - 1 ]

    } )
  }
}