createTwoAptBtn.onclick = () =>
{

  if ( firstStartDate.innerText === aptStartDate.value && firstDaySlot.innerText === aptDay.value && firstTimeSlot.innerText === aptTimeSlot.value )
  {

    promptMessages( 'You are giving same details...' )

  }
  else
  {

    confirmName.innerText = aptName.value.trim()
    confirmEmail.innerText = aptEmail.value.trim()
    confirmMobileNumber.innerText = aptMobileNumber.value
    confirmStartDate.innerText = firstStartDate.innerText
    confirmSecondStartDate.innerText = aptStartDate.value
    confirmDay.innerText = firstDaySlot.innerText
    confirmSecondDay.innerText = aptDay.value
    confirmTimeSlot.innerText = firstTimeSlot.innerText
    confirmSecondTimeSlot.innerText = aptTimeSlot.value.toString()
    confirmFees.innerText = aptFees.value
    confirmAppointmentType.innerText = aptType.value
    confirmOccurrenceType.innerText = aptOccurrenceType.value
    confirmCategory.innerText = aptCategory.value
    confirmPage.style.transition = '0.5s ease-in-out'
    confirmPage.style.left = 0

  }
}