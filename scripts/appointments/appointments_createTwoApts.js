
createTwoAptBtn.onclick = () =>
{
  let fieldFlagForSecond = false;

  if ( firstTimeSlot.innerText === aptTimeSlot.value )
  {
    promptMessages( 'Time slot cannot be same for both visits.', 'error' )
    fieldFlagForSecond = true;
  }

  // Check for slot hour and current hour
  let selectedDateSecond = new Date( apt.startDate.value ).toLocaleDateString()
  console.log( selectedDateSecond );
  let userTimeSlotForSecond = apt.timeSlot.value
  let splitSlotForSecond = userTimeSlotForSecond.split( '-' )
  let trimmedSlotForSecond = splitSlotForSecond.map( str => str.trim() )
  let hourSplitForSecond = trimmedSlotForSecond[ 0 ].split( ':' )
  let finalHourSplitForSecond = Number( hourSplitForSecond[ 0 ] )
  finalHourSplitForSecond < 12 ? finalHourSplitForSecond = finalHourSplitForSecond + 12 : finalHourSplitForSecond
  if ( finalHourSplitForSecond < local_hours && selectedDateSecond < date_time_ref.toLocaleDateString() )
  {
    apt.timeSlot.classList.add( 'md:border-red-600' )
    promptMessages( 'If start date is today, slot hour cannot be older than current hour.', 'error' )
    fieldFlagForSecond = true;
  }

  // Check for old start Date 
  if ( selectedDateSecond < date_time_ref.toLocaleDateString() )
  {
    apt.startDate.classList.add( 'md:border-red-600' )
    promptMessages( 'Appointment Start Date should be current or future date.', 'error' )
    fieldFlagForSecond = true;
  }

  let checkForDay = new Date( apt.startDate.value )
  if ( days[ checkForDay.getDay() ] !== apt.day.value )
  {
    apt.startDate.classList.add( 'md:border-red-600' )
    apt.day.classList.add( 'md:border-red-600' )
    promptMessages( 'Start date and Day slot does not match.', 'error' )
    fieldFlagForSecond = true;
  }

  if ( fieldFlagForSecond === false )
  {
    console.log( 'clicked' );
    confirmName.innerText = aptName.value.trim()
    confirmEmail.innerText = aptEmail.value.trim()
    confirmMobileNumber.innerText = apt.e_countryCode.value + '-' + aptMobileNumber.value
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
    confirmEmergencyName.innerText = emergencyName.value
    confirmEmergencyRelation.innerText = emergencyRelation.value
    confirmEmergencyMobileNumber.innerText = apt.e_countryCode.value + '-' + emergencyMobileNumber.value
    confirmEmergencyAddress.innerText = emergencyAddress.value

    confirmPage.classList.add( 'left-0' )
    confirmPage.classList.remove( '-left-[2000px]' )
  }

}