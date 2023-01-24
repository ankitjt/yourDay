confirmButton.onclick = ( e ) =>
{
  e.preventDefault()

  // Getting selected date in the array 
  let newDate = new Date( apt.startDate.value )
  let firstDay = newDate.getDate().toString()
  let firstMonth = ( newDate.getMonth() + 1 ).toString()
  let firstYear = newDate.getFullYear().toString()
  let appointmentDate = [ firstDay ]
  let appointmentMonth = [ firstMonth ]
  let appointmentYear = [ firstYear ]
  let newDateInSec = newDate / 1000
  
  let dateInMills = [ newDateInSec ]
  let convertFees = parseInt( apt.fees.value )

  createProfile()

  for ( let i = 0; i < 5; i++ )
  {

    // Getting future Date, Month, Year .
    let futureAppointments = Math.floor( newDate.setDate( newDate.getDate() + 7 ) / 1000 )
    dateInMills.push( futureAppointments )
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



    // Creating Appointment with One Occurrence
    db.collection( 'appointments' ).add( {
      aptName: apt.name.value,
      aptEmail: apt.email.value,
      aptDay: [ apt.day.value ],
      aptSecondDay: "NA",
      aptTimeSlot: [ apt.timeSlot.value ],
      aptSecondTimeSlot: "NA",
      aptType: apt.type.value,
      dateInMills: [ dateInMills[ i ] ],
      aptStartDate: [ appointmentDate[ i ] ],
      aptStartMonth: [ appointmentMonth[ i ] ],
      aptStartYear: [ appointmentYear[ i ] ],
      aptSecondStartDate: "NA",
      appointmentStatus: 'Scheduled',
      aptFees: convertFees,
      serverTimeStamp: firebase.firestore.Timestamp.fromDate( new Date() ),
      statusUpdatedTimeStamp: [ 'NA' ]
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
  let convertFees = parseInt( apt.fees.value )

  db.collection( "profiles" ).add(
    {
      aptCategory: apt.category.value,
      aptName: ptName_uppercase,
      aptEmail: [ apt.email.value ],
      apt_pt_countryCode: [ apt.pt_countryCode.value ],
      aptMobileNumber: [ apt.mobileNumber.value ],
      aptDay: [ apt.day.value ],
      aptSecondDay: "NA",
      aptTimeSlot: [ apt.timeSlot.value ],
      aptSecondTimeSlot: "NA",
      aptType: apt.type.value,
      aptAddress: [ apt.address.value ],
      aptNature: apt.nature.value,
      aptOccurrenceType: apt.occurrenceType.value,
      aptSecondStartDate: "NA",
      aptFees: [ convertFees ],
      emergencyName: [ e_name_uppercase ],
      patientRelation: [ finalRelation ],
      emergency_countryCode: [ apt.e_countryCode.value ],
      emergencyMobileNumber: [ apt.emergencyMobileNumber.value ],
      emergencyAddress: [ apt.emergencyAddress.value ],
      profileCreatedOn: firebase.firestore.Timestamp.fromDate( new Date() ),
      profileUpdatedOn: [ 'NA' ],
      softDelete: false,
    }
  )
  let createdTime = firebase.firestore.FieldValue.serverTimestamp()
  // triggerAppointmentMail()
}

editButton.onclick = () => 
{
  apt__confirmPage.page.classList.add( '-left-[2000px]' )
  apt__confirmPage.page.classList.remove( 'left-0' )
}
