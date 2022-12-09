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
  updateFees = document.querySelector( ".updateFees" ),

  currentProfileName = '',
  currentProfileEmail = '',
  currentProfileMobileNumber = '',
  currentProfileAddress = '',
  currentProfileFees = ''

// Filling selected user profile details in update window.

updateProfileLink.onclick = () =>
{
  if ( patientList.value === 'Select' )
  {
    promptMessages( 'Select Patient name' )
  }
  else
  {
    updateProfileWrapper.classList.add( 'left-0' )
    let getName = patientList.options[ patientList.selectedIndex ].getAttribute( 'data-id' )

    db.collection( "profiles" ).doc( getName ).get().then( ( doc ) =>
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
      profileUpdatedOn.value = ''

      updateName.value = doc.data().aptName
      updateAptNature.value = doc.data().aptType
      updateEmail.value = doc.data().aptEmail
      updateAddress.value = doc.data().aptAddress === undefined ? 'NA' : doc.data().aptAddress
      updateCreateDate.value = doc.data().aptStartDate
      updateCategory.value = doc.data().aptCategory
      updateOccurrence.value = doc.data().aptOccurrenceType
      updateSlot.value = days[ doc.data().aptDay - 1 ]
      updateFees.value = doc.data().aptFees
      let feesToNum = parseInt( updateFees.value )

      updateMobileNumber.value = doc.data().aptMobileNumber
      let mobileToNum = parseInt( updateMobileNumber.value )

      currentProfileName = doc.data().aptName
      currentProfileEmail = doc.data().aptEmail
      currentProfileAddress = doc.data().aptAddress
      currentProfileMobileNumber = mobileToNum
      currentProfileFees = feesToNum

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
    let getName = patientList.options[ patientList.selectedIndex ].getAttribute( 'data-id' )
    let dbRef = db.collection( "profiles" ).doc( getName )

    dbRef.update( {
      aptName: updateName.value,
      aptEmail: updateEmail.value,
      aptMobileNumber: updateMobileNumber.value,
      aptAddress: updateAddress.value,
      aptFees: parseInt( updateFees.value ),
      profileUpdateOn: firebase.firestore.FieldValue.serverTimestamp()
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