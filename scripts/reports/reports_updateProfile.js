// Filling selected user profile details in update window.
const updateProfileLinkFunc = () =>
{

  let updateProfileLink = document.querySelectorAll( ".updateProfileLink" ),
    updateProfileWrapper = document.querySelector( ".updateProfileWrapper" ),
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
    profileID, profileEmail, profileFees

  setTimeout( () =>
  {
    for ( let updateLink of updateProfileLink )
    {
      updateLink.onclick = () =>
      {
        let targetE = updateLink.parentElement.parentElement.getAttribute( 'data-id' )
        for ( let profile of profileDetails )
        {
          if ( targetE === profile.id )
          {

            profileID = profile.id
            profileEmail = profile.email
            profileFees = parseInt( profile.fees )
            if ( body.offsetWidth < 1024 )
            {
              updateProfileWrapper.classList.add( '-left-[2000px]' )
              updateProfileWrapper.classList.remove( 'left-0' )
              alert( 'Please view page on a bigger screen as update window will not be available in small screen.' )
            }
            else
            {
              updateProfileWrapper.classList.remove( '-left-[2000px]' )
              updateProfileWrapper.classList.add( 'left-0' )
              pb.classList.remove( 'lg:left-6' )

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
              updateCountPerWeek.value = profile.countPerWeek
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
  }, 2000 )


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
        const batch = db.batch();
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
        promptMessages( 'Profile details saved.', 'success' );
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


