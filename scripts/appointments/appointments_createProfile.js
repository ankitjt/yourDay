confirmButton.onclick = ( e ) =>
{
  e.preventDefault()

  // Getting selected date in the array 
  let firstAppointmentDate = new Date( apt.startDate.value )
  let firstDate = firstAppointmentDate.getDate().toString() < 10 ? '0' + firstAppointmentDate.getDate().toString() : firstAppointmentDate.getDate().toString()
  let firstMonth = ( firstAppointmentDate.getMonth() + 1 ).toString() < 10 ? '0' + ( firstAppointmentDate.getMonth() + 1 ).toString() : ( firstAppointmentDate.getMonth() + 1 ).toString()
  let firstYear = firstAppointmentDate.getFullYear().toString()
  let appointmentDate = [ firstDate ]
  let appointmentMonth = [ firstMonth ]
  let appointmentYear = [ firstYear ]
  let dateInSeconds = [ firstAppointmentDate / 1000 ]
  let uppercaseName = apt.name.value.toUpperCase()

  createProfile()

  // Creating future appointments.
  let count = [ 1, 2, 3, 4, 5 ]

  for ( let i = 0; i < count.length; i++ )
  {

    // Getting future Date, Month, Year .
    let futureAppointments = Math.floor( firstAppointmentDate.setDate( firstAppointmentDate.getDate() + 7 ) / 1000 )
    dateInSeconds.push( futureAppointments )
    let some = futureAppointments
    let someTimes = new Date( some * 1000 )

    let futureDate = someTimes.getDate().toString()
    let finalFutureDate
    futureDate < 10 ? finalFutureDate = '0' + futureDate : finalFutureDate = futureDate
    appointmentDate.push( finalFutureDate )

    let futureMonth = ( someTimes.getMonth() + 1 ).toString()
    let finalFutureMonth
    futureMonth < 10 ? finalFutureMonth = '0' + futureMonth : finalFutureMonth = futureMonth
    appointmentMonth.push( finalFutureMonth )

    let futureYear = someTimes.getFullYear().toString()
    appointmentYear.push( futureYear )

    // Creating Appointment for One Occurrence
    db.collection( 'appointments' ).doc( `${ apt.email.value }` ).collection( 'details' ).add( {
      type: apt.type.value,
      mode: [ apt.nature.value ],
      name: uppercaseName,
      email: apt.email.value,
      day: [ apt.day.value ],
      secondDay: [ "NA" ],
      timeSlot: [ apt.timeSlot.value ],
      secondTimeSlot: [ "NA" ],
      createdDateInSeconds: dateInSeconds[ i ],
      date: [ appointmentDate[ i ] ],
      secondDate: [ "NA" ],
      month: [ appointmentMonth[ i ] ],
      secondMonth: [ "NA" ],
      year: [ appointmentYear[ i ] ],
      secondYear: [ "NA" ],
      status: 'Scheduled',
      fees: [ Number( apt.fees.value ) ],
      createdOn: firebase.firestore.Timestamp.fromDate( new Date() ),
      updatedOn: [ 'NA' ],
      softDelete: false,
      showUpdate: count[ i ] === 5 ? 'update' : ''
    } )

  }

  apt__confirmPage.page.classList.add( '-left-[2000px]' )
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

  promptMessages( 'Appointment created !!' )
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
      countPerWeek: [ apt.occurrenceType.value ],
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
