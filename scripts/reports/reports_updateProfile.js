let updateProfileLink = document.querySelector( ".updateProfileLink" ),
  updateProfileWrapper = document.querySelector( ".updateProfileWrapper" ),

  updateName = document.querySelector( ".updateName" ),
  updateAptNature = document.querySelector( ".updateAptNature" ),
  updateEmail = document.querySelector( ".updateEmail" ),
  updateMobileNumber = document.querySelector( ".updateMobileNumber" ),
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
  pb.classList.remove( 'lg:left-6' )
  if ( patientNamesList.value === '' )
  {
    promptMessages( 'Select Patient name.' )
  }
  else
  {
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

      console.log( ( doc.data().aptMobileNumber[ doc.data().aptMobileNumber.length - 1 ] ) );

      updateName.value = doc.data().aptName
      updateAptNature.value = doc.data().aptType
      updateMobileNumber.value = parseInt( doc.data().aptMobileNumber[ doc.data().aptMobileNumber.length - 1 ] )
      updateEmail.value = doc.data().aptEmail[ doc.data().aptEmail.length - 1 ]
      updateAddress.value = doc.data().aptAddress[ doc.data().aptAddress.length - 1 ]
      updateCreateDate.value = doc.data().aptStartDate
      updateCategory.value = doc.data().aptCategory
      updateOccurrence.value = doc.data().aptOccurrenceType
      updateSlot.value = doc.data().aptDay[ doc.data().aptDay.length - 1 ]
      updateFees.value = parseInt( doc.data().aptFees[ doc.data().aptFees.length - 1 ] )
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

  // *TODO: need to add check for address

  if ( currentProfileName === updateName.value && currentProfileEmail === updateEmail.value && currentProfileMobileNumber === parseInt( updateMobileNumber.value ) && currentProfileFees === parseInt( updateFees.value ) )
  {
    promptMessages( 'No changes found to update' )
  }
  else 
  {
    let dbRef = db.collection( "profiles" ).doc( patientNamesList.value )

    dbRef.update( {
      aptName: updateName.value,
      aptEmail: updateEmail.value,
      aptMobileNumber: updateMobileNumber.value,
      aptAddress: updateAddress.value,
      aptFees: parseInt( updateFees.value ),
      profileUpdateOn: firebase.firestore.Timestamp.fromDate( new Date() )
    } )

    // ** This needs to be updated, adding information to the db is to be configured.

    let whatChanged = document.querySelector( ".whatChanged" )
    if ( updateName.value !== nameOfUser.innerHTML )
    {
      whatChanged.innerText += 'You updated name.'
    }
    if ( updateEmail.value !== email.innerHTML )
    {
      whatChanged.innerText += 'You updated Email.'
    }

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