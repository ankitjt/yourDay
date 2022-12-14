let aptInfo = document.querySelector('.aptInfo')
const forSecondOccurrenceType = () =>
{

  createAptBtn.classList.add( 'hidden' )
  createTwoAptBtn.classList.remove( 'hidden' )
  aptInfo.classList.remove( 'hidden' )

  confirmPage.style.left = '-2000px'
  aptType.setAttribute( 'disabled', 'true' )
  aptName.setAttribute( 'disabled', 'true' )
  aptEmail.setAttribute( 'disabled', 'true' )
  aptMobileNumber.setAttribute( 'disabled', 'true' )
  aptFees.setAttribute( 'disabled', 'true' )
  aptAddress.setAttribute('disabled', 'true')
  aptOccurrenceType.setAttribute( 'disabled', 'true' )

  aptType.classList.add( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptName.classList.add( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptEmail.classList.add( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptMobileNumber.classList.add( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptFees.classList.add( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptAddress.classList.add( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptOccurrenceType.classList.add( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )

  firstStartDateWrapper.classList.remove( 'hidden' )
  firstDaySlotWrapper.classList.remove( 'hidden' )
  firstTimeSlotWrapper.classList.remove( 'hidden' )

  firstStartDate.innerText = aptStartDate.value
  firstDaySlot.innerText = days[aptDay.value - 1]
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

  aptType.classList.remove( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptName.classList.remove( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptEmail.classList.remove( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptMobileNumber.classList.remove( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptFees.classList.remove( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptAddress.classList.remove( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )
  aptOccurrenceType.classList.remove( 'md:bg-blue-600', 'md:text-white', 'md:font-light' )

  firstStartDateWrapper.classList.add( 'hidden' )
  firstDaySlotWrapper.classList.add( 'hidden' )
  firstTimeSlotWrapper.classList.add( 'hidden' )

  createTwoAptBtn.classList.add( 'hidden' )
  createAptBtn.classList.remove( 'hidden' )
  cancelForOccurrence.classList.add( 'hidden' )
  aptInfo.classList.add( 'hidden' )

  aptOccurrenceType.value = "1"

}