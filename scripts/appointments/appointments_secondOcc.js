const forSecondOccurrenceType = () =>
{

  createAptBtn.classList.add( 'hidden' )
  createTwoAptBtn.classList.remove( 'hidden' )

  confirmPage.style.left = '-2000px'
  aptType.setAttribute( 'disabled', 'true' )
  aptName.setAttribute( 'disabled', 'true' )
  aptEmail.setAttribute( 'disabled', 'true' )
  aptMobileNumber.setAttribute( 'disabled', 'true' )
  aptFees.setAttribute( 'disabled', 'true' )
  aptOccurrenceType.setAttribute( 'disabled', 'true' )

  aptType.classList.add( 'bg-gray-300' )
  aptName.classList.add( 'bg-gray-300' )
  aptEmail.classList.add( 'bg-gray-300' )
  aptMobileNumber.classList.add( 'bg-gray-300' )
  aptFees.classList.add( 'bg-gray-300' )
  aptOccurrenceType.classList.add( 'bg-gray-300' )

  firstStartDateWrapper.classList.remove( 'hidden' )
  firstDaySlotWrapper.classList.remove( 'hidden' )
  firstTimeSlotWrapper.classList.remove( 'hidden' )

  firstStartDate.innerText = aptStartDate.value
  firstDaySlot.innerText = aptDay.value
  firstTimeSlot.innerText = aptTimeSlot.value

  cancelForOccurrence.classList.remove( 'hidden' )

}

cancelForOccurrence.onclick = () =>
{

  aptType.removeAttribute( 'disabled', 'true' )
  aptName.removeAttribute( 'disabled', 'true' )
  aptEmail.removeAttribute( 'disabled', 'true' )
  aptMobileNumber.removeAttribute( 'disabled', 'true' )
  aptFees.removeAttribute( 'disabled', 'true' )
  aptOccurrenceType.removeAttribute( 'disabled', 'true' )

  aptType.classList.remove( 'bg-gray-300' )
  aptName.classList.remove( 'bg-gray-300' )
  aptEmail.classList.remove( 'bg-gray-300' )
  aptMobileNumber.classList.remove( 'bg-gray-300' )
  aptFees.classList.remove( 'bg-gray-300' )
  aptOccurrenceType.classList.remove( 'bg-gray-300' )

  firstStartDateWrapper.classList.add( 'hidden' )
  firstDaySlotWrapper.classList.add( 'hidden' )
  firstTimeSlotWrapper.classList.add( 'hidden' )

  createTwoAptBtn.classList.add( 'hidden' )
  createAptBtn.classList.remove( 'hidden' )
  cancelForOccurrence.classList.add( 'hidden' )

  aptOccurrenceType.value = "1"

}