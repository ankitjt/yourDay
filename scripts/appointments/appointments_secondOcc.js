let aptInfo = document.querySelector( '.aptInfo' )
let notes = document.querySelector( '.notes' )
const forSecondOccurrenceType = () =>
{
  notes.classList.add( 'hidden' )
  createAptBtn.classList.add( 'hidden' )
  createTwoAptBtn.classList.remove( 'hidden' )
  aptInfo.classList.remove( 'hidden' )

  confirmPage.style.left = '-2000px'
  aptType.setAttribute( 'disabled', 'true' )
  aptNature.setAttribute( 'disabled', 'true' )
  aptName.setAttribute( 'disabled', 'true' )
  aptEmail.setAttribute( 'disabled', 'true' )
  aptMobileNumber.setAttribute( 'disabled', 'true' )
  apt.pt_countryCode.setAttribute( 'disabled', 'true' )
  emergencyCountryCode.setAttribute( 'disabled', 'true' )
  aptFees.setAttribute( 'disabled', 'true' )
  aptAddress.setAttribute( 'disabled', 'true' )
  aptOccurrenceType.setAttribute( 'disabled', 'true' )
  emergencyName.setAttribute( 'disabled', 'true' )
  emergencyRelation.setAttribute( 'disabled', 'true' )
  emergencyMobileNumber.setAttribute( 'disabled', 'true' )
  emergencyAddress.setAttribute( 'disabled', 'true' )

  aptType.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  aptNature.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  aptName.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  aptEmail.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  aptMobileNumber.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  apt.pt_countryCode.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyCountryCode.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  aptFees.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  aptAddress.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  aptOccurrenceType.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyName.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyRelation.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyMobileNumber.classList.add( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyAddress.classList.add( '!bg-blue-500', '!text-white', '!font-light' )

  firstStartDateWrapper.classList.remove( 'hidden' )
  firstDaySlotWrapper.classList.remove( 'hidden' )
  firstTimeSlotWrapper.classList.remove( 'hidden' )

  firstStartDate.innerText = aptStartDate.value
  firstDaySlot.innerText = days[ aptDay.value - 1 ]
  firstTimeSlot.innerText = aptTimeSlot.value

  cancelForOccurrence.classList.remove( 'hidden' )

}

cancelForOccurrence.onclick = () =>
{

  aptType.removeAttribute( 'disabled', 'true' )
  aptNature.removeAttribute( 'disabled', 'true' )
  aptName.removeAttribute( 'disabled', 'true' )
  aptEmail.removeAttribute( 'disabled', 'true' )
  aptMobileNumber.removeAttribute( 'disabled', 'true' )
  apt.pt_countryCode.removeAttribute( 'disabled', 'true' )
  emergencyCountryCode.removeAttribute( 'disabled', 'true' )
  aptFees.removeAttribute( 'disabled', 'true' )
  aptAddress.removeAttribute( 'disabled', 'true' )
  aptOccurrenceType.removeAttribute( 'disabled', 'true' )
  emergencyName.removeAttribute( 'disabled', 'true' )
  emergencyRelation.removeAttribute( 'disabled', 'true' )
  emergencyMobileNumber.removeAttribute( 'disabled', 'true' )
  emergencyAddress.removeAttribute( 'disabled', 'true' )

  aptType.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  aptNature.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  aptName.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  aptEmail.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  aptMobileNumber.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  apt.pt_countryCode.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyCountryCode.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  aptFees.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  aptAddress.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  aptOccurrenceType.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyName.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyRelation.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyMobileNumber.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )
  emergencyAddress.classList.remove( '!bg-blue-500', '!text-white', '!font-light' )

  firstStartDateWrapper.classList.add( 'hidden' )
  firstDaySlotWrapper.classList.add( 'hidden' )
  firstTimeSlotWrapper.classList.add( 'hidden' )

  createTwoAptBtn.classList.add( 'hidden' )
  createAptBtn.classList.remove( 'hidden' )
  cancelForOccurrence.classList.add( 'hidden' )
  aptInfo.classList.add( 'hidden' )

  aptOccurrenceType.value = "1"

}