const checkAppointmentDetails = fieldFlag =>
{
  let addSections = document.querySelectorAll( '.addSections' )
  for ( let addSection of addSections )
  {
    if ( addSection.childElementCount !== parseInt( visitCount.value - 1 ) && visitCount.value > 1 )
    {
      let counter = ( addSection.childElementCount - ( parseInt( visitCount.value ) - 1 ) ) * -1

      promptMessages( `${ counter } more ${ addSection.getAttribute( 'name' ) } required.`, 'error' );
      fieldFlag = true
    }
  }

  let dates = document.querySelectorAll( '.aptStartDate' )
  for ( let startDate of dates )
  {
    // Check for slot hour and current hour
    let selectedDate = new Date( startDate.value )
    let userTimeSlot = apt.timeSlot.value
    let splitSlot = userTimeSlot.split( '-' )
    let trimmedSlot = splitSlot.map( str => str.trim() )
    let hourSplit = trimmedSlot[ 0 ].split( ':' )
    let finalHourSplit = Number( hourSplit[ 0 ] )

    // Check for old start Date 
    if ( selectedDate.getDate() < new Date().getDate() )
    {
      startDate.classList.add( 'md:border-rose-600' )
      promptMessages( `${ startDate.getAttribute( 'title' ) } cannot be an old date.`, 'error' )
      fieldFlag = true;
    }

    // finalHourSplit > 12 ? finalHourSplit = finalHourSplit + 12 : finalHourSplit
    if ( apt.timeSlot.value !== '' )
    {
      if ( finalHourSplit <= local_hours && selectedDate < new Date() )
      {
        apt.timeSlot.classList.add( 'md:border-rose-600' )
        promptMessages( `If ${ startDate.getAttribute( 'title' ) } is today, slot hour should be greater than current hour.`, 'error' )
        fieldFlag = true;
      }

    }

    // Day and date-day match
    let checkForDay = new Date( startDate.value )
    let pickedDay = document.querySelectorAll( '.aptDay' )
    for ( let day of pickedDay )
    {
      if ( days[ checkForDay.getDay() ] !== day.value )
      {
        startDate.classList.add( 'md:border-rose-600' )
        apt.day.classList.add( 'md:border-rose-600' )
        promptMessages( `${ startDate.getAttribute( 'title' ) } and ${ day.getAttribute( 'title' ) } does not match.`, 'error' )
        fieldFlag = true;
      }
    }
  }

  // Fees is wrong
  if ( aptFees.value <= 100 )
  {
    promptMessages( `${ aptFees.getAttribute( 'title' ) } should be greater than <span>&#8377;</span> 100.`, 'error' )
    aptFees.classList.add( 'md:border-rose-600' )
    fieldFlag = true
  }
}