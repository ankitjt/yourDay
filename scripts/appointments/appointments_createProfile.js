
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

  // createProfile()

  for ( let i = 0; i < 5; i++ )
  {

    // Getting future Date, Month, Year .
    let futureAppointments = Math.floor( newDate.setDate( newDate.getDate() + 7 ) / 1000 )
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

    // Appointment with One Occurrence
    // db.collection( 'appointments' ).add( {
    //   aptName: apt.name.value,
    //   aptEmail: apt.email.value,
    //   aptMobileNumber: apt.countryCode.value + '-' + apt.mobileNumber.value,
    //   aptDay: apt.day.value,
    //   aptSecondDay: "NA",
    //   aptTimeSlot: apt.timeSlot.value,
    //   aptSecondTimeSlot: "NA",
    //   aptType: apt.type.value,
    //   aptStartDate: appointmentDate[ i ],
    //   aptStartMonth: appointmentMonth[ i ],
    //   aptStartYear: appointmentYear[ i ],
    //   aptSecondStartDate: "NA",
    //   appointmentStatus: 'Scheduled',
    //   aptFees: apt.fees.value,
    //   serverTimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   statusUpdatedTimeStamp: ""
    // } )

  }

  confirmPage.style.left = '-2000px'
  confirmPage.style.transition = '0.5s ease-in-out'
  aptName.value = ''
  aptEmail.value = ''
  aptMobileNumber.value = ''
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
  apt.emergencyAddress.value = ''

  promptMessages( 'Appointment created !!' )
  confirmPage.style.left = '-2000px'

}

const createProfile = () =>
{

  db.collection( "profiles" ).add(
    {
      aptCategory: apt.category.value,
      aptName: apt.name.value,
      aptEmail: [ apt.email.value ],
      aptMobileNumber: [ apt.countryCode.value + '-' + apt.mobileNumber.value ],
      aptDay: [ apt.day.value ],
      aptSecondDay: "NA",
      aptStartDate: confirmStartDate.innerText,
      aptTimeSlot: [ apt.timeSlot.value ],
      aptSecondTimeSlot: "NA",
      aptType: apt.type.value,
      aptAddress: [ apt.address.value ],
      aptNature: apt.nature.value,
      aptOccurrenceType: apt.occurrenceType.value,
      aptSecondStartDate: "NA",
      aptFees: [ apt.fees.value ],
      appointmentStatus: 'Scheduled',
      emergencyName: [ apt.emergencyName.value ],
      patientRelation: [ apt.emergencyRelation.value ],
      emergencyMobileNumber: [ apt.emergencyCountryCode.value + '-' + apt.emergencyMobileNumber.value ],
      emergencyAddress: [ apt.emergencyAddress.value ],
      profileCreatedOn: firebase.firestore.FieldValue.serverTimestamp(),
      profileUpdatedOn: [ 'NA' ],
      softDelete: false,
    }
  )
  let createdTime = firebase.firestore.FieldValue.serverTimestamp()
  // triggerAppointmentMail()
}

editButton.onclick = () => 
{
  confirmPage.style.left = '-2000px'
}
