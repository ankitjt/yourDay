
confirmButton.onclick = ( e ) =>
{
  e.preventDefault()

  let newDate = new Date( apt.startDate.value )
  let newDateInSeconds = newDate / 1000
  let appointmentsDates = [ newDateInSeconds ]
  // createProfile()
  let userDate = apt.startDate.value;
  let splits = userDate.split( '-' )
  console.log( splits );

  for ( let i = 0; i < 5; i++ )
  {
    let futureAppointments = Math.floor( newDate.setDate( newDate.getDate() + 7 ) / 1000 )
    let some = futureAppointments / 1000;
    let futureNewDate = new Date( some )
    console.log(futureNewDate);
    let futureDate = futureNewDate.getDate()
    let futureMonth = futureNewDate.getMonth() + 1
    let futureYear = futureNewDate.getFullYear()
    let final = futureDate.toString()+futureMonth.toString()+futureYear.toString()
    appointmentsDates.push( final )
    // console.log(appointmentsDates);
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