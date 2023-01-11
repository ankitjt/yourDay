
confirmButton.onclick = ( e ) =>
{
  e.preventDefault()

  // Getting selected date in the array 
  let newDate = new Date( apt.startDate.value )
  let firstDay = newDate.getDate().toString()
  let firstMonth = (newDate.getMonth() + 1).toString()
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
    appointmentDate.push( futureDate )
    
    let futureMonth = (someTimes.getMonth() + 1).toString()
    appointmentMonth.push( futureMonth )
    
    let futureYear = someTimes.getFullYear().toString()
    appointmentYear.push( futureYear )

    // db.collection( 'appointments' ).add( {
    //   aptName: confirmName.innerText,
    //   aptEmail: confirmEmail.innerText,
    //   aptMobileNumber: confirmMobileNumber.innerText,
    //   aptDay: confirmDay.innerText,
    //   aptSecondDay: "NA",
    //   aptTimeSlot: confirmTimeSlot.innerText,
    //   aptSecondTimeSlot: "NA",
    //   aptType: confirmAppointmentType.innerText,
    //   aptStartDate: appointmentsDates[ i ],
    //   aptSecondStartDate: "NA",
    //   appointmentStatus: 'Scheduled',
    //   aptFees: Number( confirmFees.innerText ),
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

  promptMessages( 'Appointment created !!' )
  confirmPage.style.left = '-2000px'

}

// const createProfile = () =>
// {

//   db.collection( "profiles" ).add(
//     {
//       aptCategory: confirmCategory.innerText,
//       aptName: confirmName.innerText,
//       aptEmail: confirmEmail.innerText,
//       aptMobileNumber: confirmMobileNumber.innerText,
//       aptDay: confirmDay.innerText,
//       aptSecondDay: "NA",
//       aptStartDate: confirmStartDate.innerText,
//       aptTimeSlot: confirmTimeSlot.innerText,
//       aptSecondTimeSlot: "NA",
//       aptType: confirmAppointmentType.innerText,
//       aptAddress: confirmAddress.innerText,
//       aptNature: confirmAppointmentNature.innerText,
//       aptOccurrenceType: confirmOccurrenceType.innerText,
//       aptSecondStartDate: "NA",
//       aptFees: confirmFees.innerText,
//       appointmentStatus: 'Scheduled',
//       emergencyName: confirmEmergencyName.innerText,
//       patientRelation: confirmEmergencyRelation.innerText,
//       emergencyMobileNumber: confirmEmergencyMobileNumber.innerText,
//       emergencyAddress: confirmEmergencyAddress.innerText,
//       profileCreatedOn: firebase.firestore.FieldValue.serverTimestamp(),
//     }
//   )
//   let createdTime = firebase.firestore.FieldValue.serverTimestamp()
//     triggerAppointmentMail()
// }