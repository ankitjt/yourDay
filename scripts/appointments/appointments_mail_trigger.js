const triggerAppointmentMail = () =>
{
  let createdOn = new Date()

  emailjs.init( '11bMyXUdLWDCysXm0' )
  emailjs.send( "service_ra7p8t7", "appointment_creation_mai", {
    name: confirmName.innerText,
    from_name: "yourDay",
    email_to: confirmEmail.innerText,
    name: confirmName.innerText,
    email: confirmEmail.innerText,
    mobileNumber: confirmMobileNumber.innerText,
    address: confirmAddress.innerText,
    day: confirmDay.innerText,
    secondDay: "NA",
    date: confirmStartDate.innerText,
    secondDate: "NA",
    timeSlot: confirmTimeSlot.innerText,
    secondTimeSlot: "NA",
    type: confirmAppointmentType.innerText,
    mode: confirmAppointmentNature.innerText,
    visitPerWeek: confirmOccurrenceType.innerText,
    fees: confirmFees.innerText,
    emergency_name: confirmEmergencyName.innerText,
    emergency_address: confirmEmergencyAddress.innerText,
    emergency_mobileNumber: confirmEmergencyMobileNumber.innerText,
    patientRelation: confirmEmergencyRelation.innerText,
    createdOn: createdOn
  } )
}