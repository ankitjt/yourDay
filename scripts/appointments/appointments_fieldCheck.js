const fieldValidators = ( allFilled ) =>
{

  let fieldFlag = false;

  // ======================================= Patient Details check =======================================

  // Name check.
  let userName = apt.name.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check1 !== -1 )
  {
    apt.name.classList.add( 'md:border-rose-600' )
    promptMessages( 'Name should be only be alphabetic.', 'error' )
    fieldFlag = true;

  }

  // Email format check.
  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( apt.email.value ) !== true && apt.email.value !== '' )
  {
    apt.email.classList.add( 'md:border-rose-600' )
    promptMessages( 'Incorrect Email format. Format should be abc@xyz.com', 'error' )
    fieldFlag = true;

  }

  // Check for mobile number 
  if ( apt.mobileNumber.value.length > 10 || apt.mobileNumber.value.length < 5 )
  {
    if ( apt.mobileNumber.value.length !== 0 )
    {
      apt.mobileNumber.classList.add( 'border-rose-600' )
      promptMessages( 'Mobile number should be less than 10 and greater than 5 digits.', 'error' )
      fieldFlag = true;

    }
  }

  // ======================================= Appointment Details Checks =======================================

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

  for ( let startDate of apt.startDate )
  {
    if ( startDate.value === '' )
    {
      promptMessages( `${ startDate.getAttribute( 'title' ) } is blank`, 'error' )
    }
    // Check for slot hour and current hour
    let selectedDate = new Date( startDate.value )
    let userTimeSlot = apt.timeSlot.value
    let splitSlot = userTimeSlot.split( '-' )
    let trimmedSlot = splitSlot.map( str => str.trim() )
    let hourSplit = trimmedSlot[ 0 ].split( ':' )
    let finalHourSplit = Number( hourSplit[ 0 ] )

    // finalHourSplit > 12 ? finalHourSplit = finalHourSplit + 12 : finalHourSplit
    if ( finalHourSplit <= local_hours && selectedDate < new Date() )
    {
      apt.timeSlot.classList.add( 'md:border-rose-600' )
      promptMessages( 'If start date is today, slot hour should be greater than current hour.', 'error' )
      fieldFlag = true;
    }

    // Check for old start Date 
    if ( selectedDate.toDateString() < new Date().toDateString() )
    {
      apt.startDate.classList.add( 'md:border-rose-600' )
      promptMessages( 'Appointment Start Date should be current or future date.', 'error' )
      fieldFlag = true;
    }

  }

  // Day and date-day match
  // let checkForDay = new Date( apt.startDate.value )
  // if ( days[ checkForDay.getDay() ] !== apt.day.value )
  // {
  //   apt.startDate.classList.add( 'md:border-rose-600' )
  //   apt.day.classList.add( 'md:border-rose-600' )
  //   promptMessages( 'Start date and Day slot does not match.', 'error' )
  //   fieldFlag = true;
  // }


  // Fees is wrong
  if ( aptFees.value <= 100 )
  {
    promptMessages( `Fees should be greater than <span>&#8377;</span> 100.`, 'error' )
    aptFees.classList.add( 'md:border-rose-600' )
    fieldFlag = true
  }

  // ======================================= Emergency Details check =======================================

  // Same patient and emergency contact name.
  if ( apt.name.value === apt.emergencyName.value )
  {
    promptMessages( 'Patient name and Emergency contact name cannot be same.', 'error' )
    apt.name.classList.add( 'md:border-rose-600' )
    apt.emergencyName.classList.add( 'md:border-rose-600' )
    fieldFlag = true;
  }

  // Checking home relative address.
  if ( apt.emergencyRelation.value !== 'Father' && apt.emergencyRelation.value !== 'Mother' && apt.emergencyRelation.value !== 'Sister' && apt.emergencyRelation.value !== 'Brother' )
  {
    if ( aptAddress.value === emergencyAddress.value )
    {
      promptMessages( 'Same address only for family members.', 'error' )
      apt.address.classList.add( 'md:border-rose-600' )
      apt.emergencyAddress.classList.add( 'md:border-rose-600' )
      fieldFlag = true;
    }
  }

  // Emergency Relation if selected 'Others' is selected
  if ( apt.relationDetails.value === '' && apt.emergencyRelation.value === 'Others' )
  {
    promptMessages( 'Relation details cannot be blank.', 'error' )
    apt.emergencyRelation.classList.add( 'md:border-rose-600' )
    fieldFlag = true;
  }

  // Check for Emergency mobile number 
  if ( apt.emergencyMobileNumber.length > 10 || apt.emergencyMobileNumber.length < 5 )
  {
    if ( apt.emergencyMobileNumber.length !== 0 )
    {
      apt.emergencyMobileNumber.classList.add( 'md:border-rose-600' )
      promptMessages( 'Emergency mobile number should be less than 10 and greater than 5 digits.', 'error' )
      fieldFlag = true;
    }
  }

  if ( fieldFlag === false && allFilled === true )
  {
    apt__confirmPage.page.classList.add( 'left-0' )
  }
}