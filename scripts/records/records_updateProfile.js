// Filling selected user profile details in update window.
const updateProfile = () =>
{

  let panicButtonRecords = document.querySelector( '.pb' ),
    updateName = document.querySelector( ".updateName" ),
    updateEmail = document.querySelector( ".updateEmail" ),
    updateMobileNumber = document.querySelector( ".updateMobileNumber" ),
    updateCountryCode = document.querySelector( ".update_countryCode" ),
    updateAddress = document.querySelector( ".updateAddress" ),
    updateType = document.querySelector( '.updateType' ),
    updateMode = document.querySelector( '.updateMode' ),
    updateCountPerWeek = document.querySelector( ".updateOccurrence" ),
    updateTimeSlot = document.querySelector( ".updateSlot" ),
    updateDay = document.querySelector( ".updateDay" ),
    update_emergency_name = document.querySelector( ".update_e_name" ),
    update_emergency_mobileNumber = document.querySelector( ".update_e_mobileNumber" ),
    update_emergency_address = document.querySelector( ".update_e_address" ),
    update_patientRelation = document.querySelector( ".update_e_relation" ),
    updateFees = document.querySelector( ".updateFees" ),
    patientRow = document.querySelectorAll( '.patientRow' ),
    patientDetails = document.querySelector( '.patientDetails' ),
    patientProfileWrapper = document.querySelector( '.patientProfileWrapper' ),
    profileID, profileEmail, profileFees

  for ( let row of patientRow )
  {
    row.onclick = () =>
    {
      updateProfileWrapper.classList.add( '-left-[2000px]' )
      updateProfileWrapper.classList.remove( 'left-0' )
      panicButtonRecords.classList.add( 'lg:left-6' )
      let rowID = row.getAttribute( 'data-id' )
      for ( let updateProfile of profileDetails )
      {
        if ( rowID === updateProfile.id )
        {
          patientProfileWrapper.classList.remove( 'hidden' )
          let allProfileDetails =
            `
            <div class="my-2 personalWrapper">
                <h1 class="pb-1 text-[11px] font-semibold text-slate-500 uppercase border-b">Personal</h1>
                <div class="grid md:grid-cols-4 grid-cols-2 my-2 font-semibold gap-x-5 gap-y-3 personalDetails">
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Name</div>
                    <div class="mt-1">${ updateProfile.name }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Email</div>
                    <div class="mt-1">${ updateProfile.email }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Mobile Number</div>
                    <div class="mt-1">${ updateProfile.mobileNumber }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Address</div>
                    <div class="text-justify mt-1">${ updateProfile.address }</div>
                  </div>
                </div>
              </div>
              <div class="my-2 appointmentsWrapper">
                <h1 class="pb-1 text-[11px] font-semibold text-slate-500 uppercase border-b">Appointment</h1>
                <div class="grid md:grid-cols-4 grid-cols-2 my-2 font-semibold gap-x-5 gap-y-3 appointmentDetails">
                  
                <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Type</div>
                    <div class="mt-1">${ updateProfile.type }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Mode</div>
                    <div class="mt-1">${ updateProfile.mode }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Time Slot</div>
                    <div class="mt-1 patientTimeSlot">${ updateProfile.timeSlot }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Day</div>
                    <div class="mt-1">${ updateProfile.day }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Fees</div>
                    <div class="mt-1">${ updateProfile.fees }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Date</div>
                    <div class="mt-1">${ updateProfile.email }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Visit per week</div>
                    <div class="mt-1">${ updateProfile.visitPerWeek }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Second Time Slot</div>
                    <div class="mt-1">${ updateProfile.secondTimeSlot }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Second Day</div>
                    <div class="mt-1">${ updateProfile.secondDay }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Second Date</div>
                    <div class="mt-1">${ updateProfile.secondDate }</div>
                  </div>
                </div>
              </div>
              <div class="my-2 emergencyWrapper">
                <h1 class="pb-1 text-[11px] font-semibold text-slate-500 uppercase border-b">Emergency Contact</h1>
                <div class="grid md:grid-cols-4 grid-cols-2 my-2 font-semibold gap-x-5 gap-y-3 emergency ">
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Name</div>
                    <div class="mt-1">${ updateProfile.emergency_name }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Relation</div>
                    <div class="mt-1">${ updateProfile.patientRelation }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Mobile Number</div>
                    <div class="mt-1">${ updateProfile.emergency_mobileNumber }</div>
                  </div>
                  <div class="fieldWrapper">
                    <div class="profileTag font-semibold uppercase text-[9px] text-gray-500 tracking-wider">Address</div>
                    <div class="mt-1">${ updateProfile.emergency_address }</div>
                  </div>
                </div>
              </div>
          `
          let updateProfileEmail = updateProfile.email
          patientDetails.innerHTML = allProfileDetails
          showGraph( updateProfileEmail )
          detailsToUpdate( rowID )
        }
      }
    }
  }

  const detailsToUpdate = rowID =>
  {
    showUpdateWindow.onclick = () =>
    {

      for ( let profile of profileDetails )
      {
        if ( rowID === profile.id )
        {
          profileID = profile.id
          profileEmail = profile.email
          profileFees = parseInt( profile.fees )

          if ( pageBody.offsetWidth < 1024 )
          {
            alert( 'Please view page on a bigger screen as update window will not be available in small screen.' )
          }
          else
          {
            updateProfileWrapper.classList.remove( '-left-[2000px]' )
            updateProfileWrapper.classList.add( 'left-0' )
            panicButtonRecords.classList.remove( 'lg:left-10' )

            updateName.value = ''
            updateEmail.value = ''
            updateAddress.value = ''
            updateType.value = ''
            updateCountPerWeek.value = ''
            updateTimeSlot.selectedIndex = 0
            updateMode.selectedIndex = 0
            updateDay.selectedIndex = 0
            updateFees.value = ''
            updateMobileNumber.value = ''
            update_emergency_name.value = ''
            update_emergency_mobileNumber.value = ''
            update_emergency_address.value = ''
            update_patientRelation.selectedIndex = 0

            updateName.value = profile.name
            updateMobileNumber.value = parseInt( profile.mobileNumber )
            updateEmail.value = profile.email
            updateAddress.value = profile.address
            updateType.value = profile.type
            updateMode.value = profile.mode
            updateCountPerWeek.value = profile.visitPerWeek
            updateTimeSlot.value = profile.timeSlot
            updateDay.value = profile.day
            updateFees.value = profile.fees
            update_emergency_name.value = profile.emergency_name
            update_emergency_mobileNumber.value = parseInt( profile.emergency_mobileNumber )
            update_emergency_address.value = profile.emergency_address
            update_patientRelation.value = profile.patientRelation
          }
        }
      }
    }

  }


  // Updating user profile.
  let updateProfileButton = document.querySelector( ".updateProfileButton" )
  updateProfileButton.onclick = () =>
  {
    let profiles_DB = db.collection( "profiles" ).doc( profileID )
    profiles_DB.update( {
      name: firebase.firestore.FieldValue.arrayUnion( updateName.value ),
      email: firebase.firestore.FieldValue.arrayUnion( updateEmail.value ),
      countryCode: firebase.firestore.FieldValue.arrayUnion( updateCountryCode.value ),
      mobileNumber: firebase.firestore.FieldValue.arrayUnion( Number( updateMobileNumber.value ) ),
      address: firebase.firestore.FieldValue.arrayUnion( updateAddress.value ),
      fees: firebase.firestore.FieldValue.arrayUnion( Number( updateFees.value ) ),
      day: firebase.firestore.FieldValue.arrayUnion( updateDay.value ),
      timeSlot: firebase.firestore.FieldValue.arrayUnion( updateTimeSlot.value ),
      mode: firebase.firestore.FieldValue.arrayUnion( updateMode.value ),
      updatedOn: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) ),
      emergency_name: firebase.firestore.FieldValue.arrayUnion( update_emergency_name.value ),
      emergency_countryCode: firebase.firestore.FieldValue.arrayUnion( update_emergency_countryCode.value ),
      emergency_mobileNumber: firebase.firestore.FieldValue.arrayUnion( Number( update_emergency_mobileNumber.value ) ),
      patientRelation: firebase.firestore.FieldValue.arrayUnion( update_patientRelation.value ),
      emergency_address: firebase.firestore.FieldValue.arrayUnion( update_emergency_address.value ),
    } )

    if ( profileFees !== updateFees.value )
    {
      alert( 'Changes will affect all future appointments!' )
    }

    // Updating user profile in Db appointments.
    // NEED TO ADD CHECK FOR EMAIL, NAME, FEES
    let appointment_DB = db.collection( `appointments/${ profileEmail }/details` )
    const currentDate = Date.now()
    const updatedData = {
      fees: Number( updateFees.value ),
      updatedOn: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) )
    }

    appointment_DB
      .get()
      .then( qs =>
      {
        const batch = db.batch()
        qs.forEach( doc =>
        {
          if ( doc.data().dateInMills.at( -1 ) >= currentDate / 1000 )
          {
            batch.update( doc.ref, updatedData )
          }
        } )
        return batch.commit()
      } )
      .catch( err => { promptMessages( err ) } )
      .then( () =>
      {
        promptMessages( 'Profile details saved.', 'success' )
      } )

    // let listRef = firebase.storage().ref( `ptNotes` )
    // listRef.listAll().then( ( res ) =>
    // {
    //   res.prefixes.forEach( ( folderRef ) =>
    //   {
    //     var batch = db.batch()
    //     if ( folderRef.name === nameOfUser.innerText )
    //     {
    //       let userBucket = listRef.child( nameOfUser.innerText )
    //       batch.update( userBucket, folderRef.name === nameOfUser.innerText )
    //       batch.commit()
    //     }
    //   } )
    // } )
    // promptMessages( 'Profile Updated' )
  }
}


