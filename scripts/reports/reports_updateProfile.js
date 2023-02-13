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
    profileID

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
    let profileDetails = document.querySelector( ".profileDetails" )
    let dbRef = db.collection( "profiles" ).doc( profileID )
    console.log( profileID )

    // dbRef.update( {
    //   aptName: updateName.value,
    //   aptEmail: firebase.firestore.FieldValue.arrayUnion( updateEmail.value ),
    //   apt_pt_countryCode: firebase.firestore.FieldValue.arrayUnion( updateCountryCode.value ),
    //   aptMobileNumber: firebase.firestore.FieldValue.arrayUnion( updateMobileNumber.value ),
    //   aptAddress: firebase.firestore.FieldValue.arrayUnion( updateAddress.value ),
    //   aptFees: firebase.firestore.FieldValue.arrayUnion( parseInt( updateFees.value ) ),
    //   profileUpdatedOn: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) ),
    //   emergencyName: firebase.firestore.FieldValue.arrayUnion( update_e_name.value ),
    //   emergencyMobileNumber: firebase.firestore.FieldValue.arrayUnion( update_e_mobileNumber.value ),
    //   patientRelation: firebase.firestore.FieldValue.arrayUnion( update_e_relation.value ),
    //   emergencyAddress: firebase.firestore.FieldValue.arrayUnion( update_e_address.value ),
    // } )

    // Updating user profile in Db appointments.
    // SHOULD ONLY UPDATE IF EMAIL,NAME AND FEES IS UPDATED
    // let newDbRef = db.collection( 'appointments' )
    // newDbRef.onSnapshot( ( querySnapshot ) =>
    // {
    //   querySnapshot.forEach( ( doc ) =>
    //   {
    //     var batch = db.batch()
    //     if ( doc.data().aptName === nameOfUser.innerText )
    //     {
    //       let newDb = newDbRef.doc( doc.id )
    //       batch.update( newDb, { 'aptName': updateName.value } )
    //       batch.commit()
    //     }
    //   } )

    // } )

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


