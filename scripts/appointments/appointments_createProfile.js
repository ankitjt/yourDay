confirmButton.onclick = ( e ) =>
{
  e.preventDefault()
  let count = [ 1, 2, 3, 4, 5 ]

  let firstAppointmentStart = new Date( confirmStartDate.innerText )
  console.log( firstAppointmentStart );
  let firstDate = firstAppointmentStart.getDate().toString() < 10 ? '0' + firstAppointmentStart.getDate().toString() : firstAppointmentStart.getDate().toString()
  let firstMonth = ( firstAppointmentStart.getMonth() + 1 ).toString() < 10 ? '0' + ( firstAppointmentStart.getMonth() + 1 ).toString() : ( firstAppointmentStart.getMonth() + 1 ).toString()
  let firstYear = firstAppointmentStart.getFullYear().toString()
  let appointmentDate = [ firstDate ]
  let appointmentMonth = [ firstMonth ]
  let appointmentYear = [ firstYear ]
  let dateInSeconds = [ firstAppointmentStart / 1000 ]
  let uppercaseName = confirmName.innerText.toUpperCase()

  for ( let i = 0; i < count.length; i++ )
  {
    // Getting future Date, Month, Year for 1 occurrence.
    let futureAppointments = Math.floor( firstAppointmentStart.setDate( firstAppointmentStart.getDate() + 7 ) / 1000 )
    dateInSeconds.push( futureAppointments )

    let some = futureAppointments
    let someTimes = new Date( some * 1000 )

    //Future Dates(1 Occurrence)
    let futureDate = someTimes.getDate().toString()
    let finalFutureDate
    futureDate < 10 ? finalFutureDate = '0' + futureDate : finalFutureDate = futureDate
    appointmentDate.push( finalFutureDate )

    //Future Months(1 Occurrence)
    let futureMonth = ( someTimes.getMonth() + 1 ).toString()
    let finalFutureMonth
    futureMonth < 10 ? finalFutureMonth = '0' + futureMonth : finalFutureMonth = futureMonth
    appointmentMonth.push( finalFutureMonth )

    //Future Years(1 Occurrence)
    let futureYear = someTimes.getFullYear().toString()
    appointmentYear.push( futureYear )

    // Getting future Date, Month, Year for 2 occurrence.
    let secondFutureAppointments = Math.floor( secondAppointmentStart.setDate( secondAppointmentStart.getDate() + 7 ) / 1000 )
    secondDateInSeconds.push( secondFutureAppointments )

    let secondSome = secondFutureAppointments
    let secondSomeTimes = new Date( secondSome * 1000 )

    //Future Dates(2 Occurrence)
    let secondFutureDate = secondSomeTimes.getDate().toString()
    let secondFinalFutureDate
    secondFutureDate < 10 ? secondFinalFutureDate = '0' + futureDate : secondFinalFutureDate = futureDate
    secondAppointmentDate.push( secondFinalFutureDate )

    //Future Months(2 Occurrence)
    let secondFutureMonth = ( secondSomeTimes.getMonth() + 1 ).toString()
    let secondFinalFutureMonth
    secondFutureMonth < 10 ? secondFinalFutureMonth = '0' + secondFutureMonth : secondFinalFutureMonth = secondFutureMonth
    secondAppointmentMonth.push( secondFinalFutureMonth )

    //Future Years(2 Occurrence)
    let secondFutureYear = secondSomeTimes.getFullYear().toString()
    secondAppointmentYear.push( secondFutureYear )

    console.log( {
      type: confirmAppointmentType.innerText,
      mode: [ apt.nature.value ],
      name: uppercaseName,
      email: apt.email.value,
      day: [ confirmDay.innerText ],
      secondDay: confirmSecondDay.innerText === 'NA' ? 'NA' : [ confirmSecondDay.innerText ],
      timeSlot: [ confirmTimeSlot.innerText ],
      secondTimeSlot: confirmSecondTimeSlot.innerText === 'NA' ? 'NA' : [ confirmSecondTimeSlot.innerText ],
      createdDateInSeconds: dateInSeconds[ i ],
      date: [ appointmentDate[ i ] ],
      secondDate: confirmSecondDay.innerText === 'NA' ? 'NA' : [ secondAppointmentDate[ i ] ],
      month: [ appointmentMonth[ i ] ],
      secondMonth: confirmSecondDay.innerText === 'NA' ? 'NA' : [ secondAppointmentMonth[ i ] ],
      year: [ appointmentYear[ i ] ],
      secondYear: confirmSecondDay.innerText === 'NA' ? 'NA' : [ secondAppointmentYear[ i ] ],
      firstSessionOn: `${ appointmentDate[ 0 ] }:${ appointmentMonth[ 0 ] }:${ appointmentYear[ 0 ] }`,
      secondFirstSessionOn: confirmSecondDay.innerText === 'NA' ? 'NA' : `${ secondAppointmentDate[ 0 ] }:${ secondAppointmentMonth[ 0 ] }:${ secondAppointmentYear[ 0 ] }`,
      status: 'Scheduled',
      fees: [ Number( apt.fees.value ) ],
      createdOn: firebase.firestore.Timestamp.fromDate( new Date() ),
      updatedOn: [ 'NA' ],
      softDelete: false,
      visitPerWeek: apt.occurrenceType.value,
      showUpdate: count[ i ] === 5 ? 'update' : ''
    } );
  }


  // Creating Appointment for One Occurrence
  // db.collection( 'appointments' ).doc( `${ apt.email.value }` ).collection( 'details' ).add( {
  //   type: apt.type.value,
  //   mode: [ apt.nature.value ],
  //   name: uppercaseName,
  //   email: apt.email.value,
  //   day: [ apt.day.value ],
  //   secondDay: [ "NA" ],
  //   timeSlot: [ apt.timeSlot.value ],
  //   secondTimeSlot: [ "NA" ],
  //   createdDateInSeconds: dateInSeconds[ i ],
  //   date: [ appointmentDate[ i ] ],
  //   secondDate: [ "NA" ],
  //   month: [ appointmentMonth[ i ] ],
  //   secondMonth: [ "NA" ],
  //   year: [ appointmentYear[ i ] ],
  //   secondYear: [ "NA" ],
  //   firstSessionOn: `${ appointmentDate[ 0 ] }:${ appointmentMonth[ 0 ] }:${ appointmentYear[ 0 ] }`,
  //   status: 'Scheduled',
  //   fees: [ Number( apt.fees.value ) ],
  //   createdOn: firebase.firestore.Timestamp.fromDate( new Date() ),
  //   updatedOn: [ 'NA' ],
  //   softDelete: false,
  //   showUpdate: count[ i ] === 5 ? 'update' : ''
  // } )

  // createProfile()

  confirmPage.style.transition = '0.5s ease-in-out'
  aptName.value = ''
  aptEmail.value = ''
  aptMobileNumber.value = ''
  apt.pt_countryCode.selectedIndex = 0
  aptDay.selectedIndex = 0
  aptType.selectedIndex = 0
  aptNature.selectedIndex = 0
  aptTimeSlot.selectedIndex = 0
  aptCategory.selectedIndex = 0
  aptStartDate.value = ''
  aptFees.value = ''
  aptOccurrenceType.value = ''
  aptAddress.value = ''
  apt.emergencyName.value = ''
  apt.emergencyRelation.value = ''
  apt.emergencyMobileNumber.value = ''
  apt.e_countryCode.selectedIndex = 0
  apt.emergencyAddress.value = ''

  promptMessages( 'Appointment and profile created !!', 'success' )
  apt__confirmPage.page.classList.remove( 'left-0' )
  apt__confirmPage.page.classList.add( '-left-[2000px]' )

  // aptType.removeAttribute( 'disabled', 'true' )
  // aptNature.removeAttribute( 'disabled', 'true' )
  // aptName.removeAttribute( 'disabled', 'true' )
  // aptEmail.removeAttribute( 'disabled', 'true' )
  // aptMobileNumber.removeAttribute( 'disabled', 'true' )
  // apt.pt_countryCode.removeAttribute( 'disabled', 'true' )
  // apt.e_countryCode.removeAttribute( 'disabled', 'true' )
  // aptFees.removeAttribute( 'disabled', 'true' )
  // aptAddress.removeAttribute( 'disabled', 'true' )
  // aptOccurrenceType.removeAttribute( 'disabled', 'true' )
  // emergencyName.removeAttribute( 'disabled', 'true' )
  // emergencyRelation.removeAttribute( 'disabled', 'true' )
  // emergencyMobileNumber.removeAttribute( 'disabled', 'true' )
  // emergencyAddress.removeAttribute( 'disabled', 'true' )

  // aptType.classList.remove( '!bg-gray-400' )
  // aptNature.classList.remove( '!bg-gray-400' )
  // aptName.classList.remove( '!bg-gray-400' )
  // aptEmail.classList.remove( '!bg-gray-400' )
  // aptMobileNumber.classList.remove( '!bg-gray-400' )
  // apt.pt_countryCode.classList.remove( '!bg-gray-400' )
  // apt.e_countryCode.classList.remove( '!bg-gray-400' )
  // aptFees.classList.remove( '!bg-gray-400' )
  // aptAddress.classList.remove( '!bg-gray-400' )
  // aptOccurrenceType.classList.remove( '!bg-gray-400' )
  // emergencyName.classList.remove( '!bg-gray-400' )
  // emergencyRelation.classList.remove( '!bg-gray-400' )
  // emergencyMobileNumber.classList.remove( '!bg-gray-400' )
  // emergencyAddress.classList.remove( '!bg-gray-400' )

  // aptType.classList.remove( 'border-rose-600' )
  // aptNature.classList.remove( 'border-rose-600' )
  // aptName.classList.remove( 'border-rose-600' )
  // aptEmail.classList.remove( 'border-rose-600' )
  // aptMobileNumber.classList.remove( 'border-rose-600' )
  // apt.pt_countryCode.classList.remove( 'border-rose-600' )
  // apt.e_countryCode.classList.remove( 'border-rose-600' )
  // aptFees.classList.remove( 'border-rose-600' )
  // aptAddress.classList.remove( 'border-rose-600' )
  // aptOccurrenceType.classList.remove( 'border-rose-600' )
  // emergencyName.classList.remove( 'border-rose-600' )
  // emergencyRelation.classList.remove( 'border-rose-600' )
  // emergencyMobileNumber.classList.remove( 'border-rose-600' )
  // emergencyAddress.classList.remove( 'border-rose-600' )

  firstStartDateWrapper.classList.add( 'hidden' )
  firstDaySlotWrapper.classList.add( 'hidden' )
  firstTimeSlotWrapper.classList.add( 'hidden' )

  createTwoAptBtn.classList.add( 'hidden' )
  createAptBtn.classList.remove( 'hidden' )
  cancelForOccurrence.classList.add( 'hidden' )
  aptInfo.classList.add( 'hidden' )


}

const createProfile = () =>
{
  let relativeName = apt.relationDetails.value
  let finalRelativeName = relativeName.charAt( 0 ).toUpperCase() + relativeName.slice( 1 )
  let finalRelation = apt.relationDetails.value === '' ? apt.emergencyRelation.value : apt.emergencyRelation.value + ' - ' + finalRelativeName

  let ptName_uppercase = apt.name.value.toUpperCase()
  let e_name_uppercase = apt.emergencyName.value.toUpperCase()

  db.collection( "profiles" ).add(
    {
      category: apt.category.value,
      type: apt.type.value,
      mode: [ apt.nature.value ],
      name: [ ptName_uppercase ],
      email: [ apt.email.value ],
      countryCode: [ apt.pt_countryCode.value ],
      mobileNumber: [ Number( apt.mobileNumber.value ) ],
      address: [ apt.address.value ],
      day: [ apt.day.value ],
      secondDay: [ "NA" ],
      timeSlot: [ apt.timeSlot.value ],
      secondTimeSlot: [ "NA" ],
      visitPerWeek: [ apt.occurrenceType.value ],
      secondDate: [ "NA" ],
      fees: [ Number( apt.fees.value ) ],
      emergency_name: [ e_name_uppercase ],
      patientRelation: [ finalRelation ],
      emergency_countryCode: [ apt.e_countryCode.value ],
      emergency_mobileNumber: [ Number( apt.emergencyMobileNumber.value ) ],
      emergency_address: [ apt.emergencyAddress.value ],
      createdOn: firebase.firestore.Timestamp.fromDate( new Date() ),
      updatedOn: [ 'NA' ],
      softDelete: false,
    }
  )
  triggerAppointmentMail()
}

editButton.onclick = () => 
{
  apt__confirmPage.page.classList.add( '-left-[2000px]' )
  apt__confirmPage.page.classList.remove( 'left-0' )
}
