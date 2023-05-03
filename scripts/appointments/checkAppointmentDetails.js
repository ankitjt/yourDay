const checkAppointmentDetails = fieldFlag =>
{
  let addSections = document.querySelectorAll( '.addSections' )
  for ( let addSection of addSections )
  {
    if ( addSection.childElementCount !== parseInt( visitCount.value - 1 ) && visitCount.value > 1 )
    {
      let counter = ( addSection.childElementCount - ( parseInt( visitCount.value ) - 1 ) ) * -1
      promptMessages( `${ counter } more ${ addSection.getAttribute( 'name' ) } required.`, 'error' )
      return fieldFlag = true
    }
  }

  // Getting all Dates
  let getNewDates = document.querySelectorAll( '.aptDates' )
  let datesArr = []

  for ( let newDate of getNewDates )
  {
    if ( newDate.value === '' )
    {
      promptMessages( `${ newDate.getAttribute( 'title' ) } is required.`, 'error' )
      newDate.classList.add( 'lg:border-rose-600' )
      return fieldFlag = true
    }
  }

  // Get all Days
  let getNewDays = document.querySelectorAll( '.newDays' )
  for ( let newDay of getNewDays )
  {
    if ( newDay.value === '' )
    {
      promptMessages( `${ newDay.getAttribute( 'title' ) } is required.`, 'error' )
      newDay.classList.add( 'lg:border-rose-600' )
      return fieldFlag = true
    }
  }

  // Getting all Time Slots
  let getNewTimeSlots = document.querySelectorAll( '.newTimeSlots' )
  for ( let newTimeSlot of getNewTimeSlots )
  {
    if ( newTimeSlot.value === '' )
    {
      promptMessages( `${ newTimeSlot.getAttribute( 'title' ) } is required.`, 'error' )
      newTimeSlot.classList.add( 'lg:border-rose-600' )
      return fieldFlag = true
    }
  }

  let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
  let finalFieldTags = [ 'First', 'Second', 'Third', 'Fourth', 'Fifth', "Sixth" ]

  // Check for date and day match
  for ( let [ index, checkDays ] of datesArr.entries() )
  {
    let finalDate = new Date( checkDays.date ).getDay() - 1
    if ( days[ finalDate ] !== daysArr[ index ].day )
    {
      promptMessages( `${ finalFieldTags[ index ] } days and dates do not match.`, 'error' )
      return fieldFlag = true
    }
  }

  // Fees is wrong
  if ( aptFees.value <= 100 )
  {
    promptMessages( `${ aptFees.getAttribute( 'title' ) } should be greater than <span>&#8377;</span> 100.`, 'error' )
    aptFees.classList.add( 'md:border-rose-600' )
    return fieldFlag = true
  }
  return fieldFlag = false
}