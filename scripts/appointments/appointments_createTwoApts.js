
createTwoAptBtn.onclick = () =>
{
  if ( firstStartDate.innerText === aptStartDate.value || firstDaySlot.innerText === days[ aptDay.value - 1 ] )
  {
    promptMessages( 'You are giving same details...', 'error' )
  }
  else
  {
    confirmName.innerText = aptName.value.trim()
    confirmEmail.innerText = aptEmail.value.trim()
    confirmMobileNumber.innerText = countryCode.value + '-' + aptMobileNumber.value
    confirmStartDate.innerText = firstStartDate.innerText
    confirmSecondStartDate.innerText = aptStartDate.value
    confirmDay.innerText = firstDaySlot.innerText
    confirmSecondDay.innerText = days[ aptDay.value - 1 ]
    confirmTimeSlot.innerText = firstTimeSlot.innerText
    confirmSecondTimeSlot.innerText = aptTimeSlot.value.toString()
    confirmFees.innerText = aptFees.value
    confirmAppointmentType.innerText = aptType.value
    confirmOccurrenceType.innerText = aptOccurrenceType.value
    confirmCategory.innerText = aptCategory.value
    confirmEmergencyName.innerText = emergencyName.value
    confirmEmergencyRelation.innerText = emergencyRelation.value
    confirmEmergencyMobileNumber.innerText = emergencyCountryCode.value + '-' + emergencyMobileNumber.value
    confirmEmergencyAddress.innerText = emergencyAddress.value

    confirmPage.style.transition = '0.5s ease-in-out'
    confirmPage.style.left = 0

  }
}