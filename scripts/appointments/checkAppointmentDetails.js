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

  // Checking for first date,day and time slot.
  let firstDate = document.querySelector( ".firstDate" )
  let firstDay = document.querySelector( ".firstDay" )
  let firstTime = document.querySelector( ".firstTime" )
  let selectedDate = new Date( firstDate.value )
  let userTimeSlot = firstTime.value
  let splitSlot = userTimeSlot.split( '-' )
  let trimmedSlot = splitSlot.map( str => str.trim() )
  let hourSplit = trimmedSlot[ 0 ].split( ':' )
  let finalHourSplit = Number( hourSplit[ 0 ] )

  if ( finalHourSplit <= local_hours && selectedDate < new Date() )
  {
    firstTime.classList.add( 'md:border-rose-600' )
    promptMessages( 'If start date is today, slot hour should be greater than current hour.', 'error' )
    return fieldFlag = true
  }

  // Check for old start Date 
  if ( new Date( selectedDate ).getTime() < new Date().setHours( 0, 0, 0, 0 ) )
  {
    startDate.classList.add( 'md:border-rose-600' )
    promptMessages( 'Appointment Start Date should be current or future date.', 'error' )
    return fieldFlag = true
  }

  // Day and date-day match
  const aptDaysCheck = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
  if ( aptDaysCheck[ new Date( firstDate.value ).getDay() ] !== firstDay.value )
  {
    firstDate.classList.add( 'md:border-rose-600' )
    firstDay.classList.add( 'md:border-rose-600' )
    promptMessages( 'Start date and Day slot does not match.', 'error' )
    return fieldFlag = true
  }


  // Checking all Dates
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