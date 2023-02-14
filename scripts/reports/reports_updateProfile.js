// Filling selected user profile details in update window.
const updateProfileLinkFunc = () =>
{

  let updateProfileLink = document.querySelectorAll( ".updateProfileLink" ),
    updateProfileWrapper = document.querySelector( ".updateProfileWrapper" ),
    updateName = document.querySelector( ".updateName" ),
    updateAptNature = document.querySelector( ".updateAptNature" ),
    updateEmail = document.querySelector( ".updateEmail" ),
    updateMobileNumber = document.querySelector( ".updateMobileNumber" ),
    updateCountryCode = document.querySelector( ".update_countryCode" ),
    updateAddress = document.querySelector( ".updateAddress" ),
    updateCategory = document.querySelector( ".updateCategory" ),
    updateOccurrence = document.querySelector( ".updateOccurrence" ),
    updateSlot = document.querySelector( ".updateSlot" ),
    updateDay = document.querySelector( ".updateDay" ),
    update_e_name = document.querySelector( ".update_e_name" ),
    update_e_mobileNumber = document.querySelector( ".update_e_mobileNumber" ),
    update_e_address = document.querySelector( ".update_e_address" ),
    update_e_relation = document.querySelector( ".update_e_relation" ),
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
              updateAptNature.value = ''
              updateEmail.value = ''
              updateAddress.value = ''
              updateCategory.value = ''
              updateOccurrence.value = ''
              updateSlot.selectedIndex = 0
              updateDay.selectedIndex = 0
              updateFees.value = ''
              updateMobileNumber.value = ''
              update_e_name.value = ''
              update_e_mobileNumber.value = ''
              update_e_address.value = ''
              update_e_relation.selectedIndex = 0

              updateName.value = profile.name
              updateAptNature.value = profile.type
              updateMobileNumber.value = parseInt( profile.mobileNumber )
              updateEmail.value = profile.email
              updateAddress.value = profile.address
              updateCategory.value = profile.category
              updateOccurrence.value = profile.occurrence
              updateSlot.value = profile.timeSlot
              updateDay.value = profile.day
              updateFees.value = profile.fees
              update_e_name.value = profile.e_name
              update_e_mobileNumber.value = parseInt( profile.e_mobileNumber )
              update_e_address.value = profile.e_address
              update_e_relation.value = profile.relation
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
      aptName: updateName.value,
      aptEmail: firebase.firestore.FieldValue.arrayUnion( updateEmail.value ),
      apt_pt_countryCode: firebase.firestore.FieldValue.arrayUnion( updateCountryCode.value ),
      aptMobileNumber: firebase.firestore.FieldValue.arrayUnion( updateMobileNumber.value ),
      aptAddress: firebase.firestore.FieldValue.arrayUnion( updateAddress.value ),
      aptFees: firebase.firestore.FieldValue.arrayUnion( parseInt( updateFees.value ) ),
      aptDay: firebase.firestore.FieldValue.arrayUnion( updateDay.value ),
      aptTimeSlot: firebase.firestore.FieldValue.arrayUnion( updateSlot.value ),
      profileUpdatedOn: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) ),
      emergencyName: firebase.firestore.FieldValue.arrayUnion( update_e_name.value ),
      emergencyMobileNumber: firebase.firestore.FieldValue.arrayUnion( update_e_mobileNumber.value ),
      patientRelation: firebase.firestore.FieldValue.arrayUnion( update_e_relation.value ),
      emergencyAddress: firebase.firestore.FieldValue.arrayUnion( update_e_address.value ),
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
      aptFees: parseInt( updateFees.value ),
      statusUpdatedTimeStamp: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) )
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
        promptMessages( 'Profile details saved.' );
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


