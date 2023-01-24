let updateProfileLink = document.querySelector( ".updateProfileLink" ),
  updateProfileWrapper = document.querySelector( ".updateProfileWrapper" ),
  updateInput = document.querySelectorAll( '.updateInput' ),

  updateName = document.querySelector( ".updateName" ),
  updateAptNature = document.querySelector( ".updateAptNature" ),
  updateEmail = document.querySelector( ".updateEmail" ),
  updateMobileNumber = document.querySelector( ".updateMobileNumber" ),
  updateCountryCode = document.querySelector( ".update_countryCode" ),
  updateAddress = document.querySelector( ".updateAddress" ),
  updateCreateDate = document.querySelector( ".updateCreateDate" ),
  updateCategory = document.querySelector( ".updateCategory" ),
  updateOccurrence = document.querySelector( ".updateOccurrence" ),
  updateSlot = document.querySelector( ".updateSlot" ),
  update_e_name = document.querySelector( ".update_e_name" ),
  update_e_mobileNumber = document.querySelector( ".update_e_mobileNumber" ),
  update_e_address = document.querySelector( ".update_e_address" ),
  update_e_relation = document.querySelector( ".update_e_relation" ),
  updateFees = document.querySelector( ".updateFees" ),

  currentProfileName = '',
  currentProfileEmail = '',
  currentProfileMobileNumber = '',
  currentProfileAddress = '',
  currentProfileFees = ''

// Filling selected user profile details in update window.
updateProfileLink.onclick = () =>
{
  if ( body.offsetWidth < 1024 )
  {
    updateProfileWrapper.classList.add( '-left-[2000px]' )
    updateProfileWrapper.classList.remove( 'left-0' )
    alert( 'Please view page on a bigger screen as update window will not be available in small screen.' )
  }

  pb.classList.remove( 'lg:left-6' )
  if ( patientNamesList.value === '' )
  {
    promptMessages( 'Select Patient name.' )
  }
  else
  {
    updateProfileWrapper.classList.remove( '-left-[2000px]' )
    updateProfileWrapper.classList.add( 'left-0' )

    db.collection( "profiles" ).doc( patientNamesList.value ).get().then( ( doc ) =>
    {
      updateName.value = ''
      updateAptNature.value = ''
      updateEmail.value = ''
      updateAddress.value = ''
      updateCreateDate.value = ''
      updateCategory.value = ''
      updateOccurrence.value = ''
      updateSlot.value = ''
      updateFees.value = ''
      updateMobileNumber.value = ''
      update_e_name.value = ''
      update_e_mobileNumber.value = ''
      update_e_address.value = ''
      update_e_relation.selectedIndex = 0

      let fetchCreateDate = doc.data().profileCreatedOn.seconds * 1000
      let finalCreateDate = new Date( fetchCreateDate ).toLocaleDateString()

      updateName.value = doc.data().aptName
      updateAptNature.value = doc.data().aptType
      updateMobileNumber.value = parseInt( doc.data().aptMobileNumber[ doc.data().aptMobileNumber.length - 1 ] )
      updateEmail.value = doc.data().aptEmail[ doc.data().aptEmail.length - 1 ]
      updateAddress.value = doc.data().aptAddress[ doc.data().aptAddress.length - 1 ]
      updateCreateDate.value = finalCreateDate
      updateCategory.value = doc.data().aptCategory
      updateOccurrence.value = doc.data().aptOccurrenceType
      updateSlot.value = doc.data().aptDay[ doc.data().aptDay.length - 1 ]
      updateFees.value = doc.data().aptFees[ doc.data().aptFees.length - 1 ]
      update_e_name.value = doc.data().emergencyName[ doc.data().emergencyName.length - 1 ]
      update_e_mobileNumber.value = parseInt( doc.data().emergencyMobileNumber[ doc.data().emergencyMobileNumber.length - 1 ] )
      update_e_address.value = doc.data().emergencyAddress[ doc.data().emergencyAddress.length - 1 ]
      update_e_relation.value = doc.data().patientRelation[ doc.data().patientRelation.length - 1 ]
    } )
  }
}

// Updating user profile.

let updateProfileButton = document.querySelector( ".updateProfileButton" )

updateProfileButton.onclick = () =>
{
  let profileDetails = document.querySelector( ".profileDetails" )
  for ( let input of updateInput )
  {
    console.log( input.value )
  }
  // *TODO: need to add check for address

  if ( currentProfileName === updateName.value && currentProfileEmail === updateEmail.value && currentProfileMobileNumber === parseInt( updateMobileNumber.value ) && currentProfileFees === updateFees.value )
  {
    promptMessages( 'No changes found to update' )
  }
  else 
  {
    let dbRef = db.collection( "profiles" ).doc( patientNamesList.value )

    // dbRef.update( {
    //   aptName: updateName.value,
    //   aptEmail: firebase.firestore.FieldValue.arrayUnion( updateEmail.value ),
    //   apt_pt_countryCode: firebase.firestore.FieldValue.arrayUnion( updateCountryCode.value ),
    //   aptMobileNumber: firebase.firestore.FieldValue.arrayUnion( updateMobileNumber.value ),
    //   aptAddress: firebase.firestore.FieldValue.arrayUnion( updateAddress.value ),
    //   aptFees: firebase.firestore.FieldValue.arrayUnion( updateFees.value ),
    //   profileUpdatedOn: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) )
    // } )

    // Updating user profile in Db appointments.
    let newDbRef = db.collection( 'appointments' )
    newDbRef.onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        var batch = db.batch()
        if ( doc.data().aptName === nameOfUser.innerText )
        {
          let newDb = newDbRef.doc( doc.id )
          batch.update( newDb, { 'aptName': updateName.value } )
          batch.commit()
        }
      } )

    } )

    let listRef = firebase.storage().ref( `ptNotes` )
    listRef.listAll().then( ( res ) =>
    {
      res.prefixes.forEach( ( folderRef ) =>
      {
        var batch = db.batch()
        if ( folderRef.name === nameOfUser.innerText )
        {
          let userBucket = listRef.child( nameOfUser.innerText )
          batch.update( userBucket, folderRef.name === nameOfUser.innerText )
          batch.commit()
        }
      } )
    } )
    promptMessages( 'Profile Updated' )
  }
}