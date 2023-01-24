const triggerAppointmentMail = () =>
{
  emailjs.init( '11bMyXUdLWDCysXm0' )
  emailjs.send( "service_ra7p8t7", "appointment_creation_mai", {
    pt_name: confirmName.innerText,
    from_name: "yourDay",
    user_email: confirmEmail.innerText,
    aptCategory: confirmCategory.innerText,
    aptName:confirmName.innerText,
    aptEmail: confirmEmail.innerText,
    aptMobileNumber: confirmMobileNumber.innerText,
    aptAddress: confirmAddress.innerText,
    aptDay: confirmDay.innerText,
    aptSecondDay: "NA",
    aptStartDate: confirmStartDate.innerText,
    aptSecondStartDate: "NA",
    aptTimeSlot: confirmTimeSlot.innerText,
    aptSecondTimeSlot: "NA",
    aptType: confirmAppointmentType.innerText,
    aptNature: confirmAppointmentNature.innerText,
    aptOccurrenceType: confirmOccurrenceType.innerText,
    aptFees: confirmFees.innerText,
    profileCreatedOn: firebase.firestore.FieldValue.serverTimestamp()
  } )
}