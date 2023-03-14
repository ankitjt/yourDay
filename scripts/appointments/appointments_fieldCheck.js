const fieldValidators = () =>
{
  let fieldFlag = false;

  // Check for mobile number 
  let p_mobile = document.querySelector( '.aptMobileNumber' )
  if ( p_mobile.value.length > 10 || p_mobile.value.length < 5 )
  {
    if ( p_mobile.value.length !== 0 )
    {
      p_mobile.classList.add( 'border-red-600' )
      promptMessages( 'Mobile number should be less than 10 and greater than 5 digits.', 'error' )
      fieldFlag = true;
    }
  }

  // Check for Emergency mobile number 
  let p_e_mobile = document.querySelector( '.emergencyMobileNumber' )
  if ( p_e_mobile.value.length > 10 || p_e_mobile.value.length < 5 )
  {
    if ( p_e_mobile.value.length !== 0 )
    {
      p_e_mobile.classList.add( 'md:border-red-600' )
      promptMessages( 'Emergency mobile number should be less than 10 and greater than 5 digits.', 'error' )
      fieldFlag = true;
    }
  }

  // Check for slot hour and current hour
  let selectedDate = new Date( apt.startDate.value )
  let userTimeSlot = apt.timeSlot.value
  let splitSlot = userTimeSlot.split( '-' )
  let trimmedSlot = splitSlot.map( str => str.trim() )
  let hourSplit = trimmedSlot[ 0 ].split( ':' )
  let finalHourSplit = Number( hourSplit[ 0 ] )

  // finalHourSplit > 12 ? finalHourSplit = finalHourSplit + 12 : finalHourSplit
  if ( finalHourSplit <= local_hours && selectedDate < new Date() )
  {
    apt.timeSlot.classList.add( 'md:border-red-600' )
    promptMessages( 'If start date is today, slot hour should be greater than current hour.', 'error' )
    fieldFlag = true;
  }

  // Check for old start Date 
  if ( selectedDate.toDateString() < new Date().toDateString() )
  {
    apt.startDate.classList.add( 'md:border-red-600' )
    promptMessages( 'Appointment Start Date should be current or future date.', 'error' )
    fieldFlag = true;
  }

  // Name check.
  let userName = aptName.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check1 !== -1 )
  {
    aptName.classList.add( 'md:border-red-600' )
    promptMessages( 'Name should be only be alphabetic.', 'error' )
    fieldFlag = true;
  }

  // Emergency Name check.
  let emergencyNameCheck = emergencyName.value
  let check2 = emergencyNameCheck.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check2 !== -1 )
  {
    emergencyName.classList.add( 'md:border-red-600' )
    promptMessages( 'Emergency Name should be only be alphabetic.', 'error' )
    fieldFlag = true;
  }

  // Email format check.
  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( aptEmail.value ) !== true )
  {
    aptEmail.classList.add( 'md:border-red-600' )
    promptMessages( 'Incorrect Email format. Format should be abc@xyz.com', 'error' )
    fieldFlag = true;
  }

  // Day and date-day match
  let checkForDay = new Date( apt.startDate.value )
  if ( days[ checkForDay.getDay() ] !== apt.day.value )
  {
    apt.startDate.classList.add( 'md:border-red-600' )
    apt.day.classList.add( 'md:border-red-600' )
    promptMessages( 'Start date and Day slot does not match.', 'error' )
    fieldFlag = true;
  }

  // Emergency Relation if selected 'Others' is selected
  if ( apt.relationDetails.value === '' && apt.emergencyRelation.value === 'Others' )
  {
    promptMessages( 'Relation details cannot be blank.', 'error' )
    apt.emergencyRelation.classList.add( 'md:border-red-600' )
    fieldFlag = true;
  }

  // Check for occurrence count.
  if ( Number( apt.occurrenceType.value ) > 2 || Number( apt.occurrenceType.value < 1 ) )
  {
    promptMessages( 'Visit per week cannot be more than 2 or less than 1.', 'error' )
    apt.occurrenceType.classList.add( 'md:border-red-600' )
    fieldFlag = true;
  }

  // Same patient and emergency contact name.
  if ( aptName.value === emergencyName.value )
  {
    promptMessages( 'Patient name and Emergency contact name cannot be same.', 'error' )
    apt.name.classList.add( 'md:border-red-600' )
    apt.emergencyName.classList.add( 'md:border-red-600' )
    fieldFlag = true;
  }

  // Fees is wrong
  if ( aptFees.value <= 100 )
  {
    promptMessages( `Fees should be greater than <span>&#8377;</span> 100.`, 'error' )
    aptFees.classList.add( 'md:border-red-600' )
    fieldFlag = true
  }


  // Checking home relative address.
  if ( apt.emergencyRelation.value !== 'Father' && apt.emergencyRelation.value !== 'Mother' && apt.emergencyRelation.value !== 'Sister' && apt.emergencyRelation.value !== 'Brother' )
  {
    if ( aptAddress.value === emergencyAddress.value )
    {
      promptMessages( 'Same address only for family members.', 'error' )
      apt.address.classList.add( 'md:border-red-600' )
      apt.emergencyAddress.classList.add( 'md:border-red-600' )
      fieldFlag = true;
    }
  }

  if ( apt.category.value === 'New' )
  {
    db.collection( 'profiles' ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        let latestAptDay = doc.data().day.at( -1 )
        let latestTimeSlot = doc.data().timeSlot.at( -1 )
        if ( apt.day.value === latestAptDay && apt.timeSlot.value === latestTimeSlot )
        {
          promptMessages( 'Slot is already filled.', 'error' )
          apt.day.classList.add( 'md:border-red-600' )
          apt.timeSlot.classList.add( 'md:border-red-600' )
          fieldFlag = true;
        }
        else if ( doc.data().email.at( -1 ) === apt.email.value )
        {
          promptMessages( 'Email is already registered.', 'error' )
          apt.email.classList.add( 'md:border-red-600' )
          fieldFlag = true;
        }
      } )


    } )

    if ( fieldFlag === false && apt.occurrenceType.value === '1' )
    {
      apt__confirmPage.page.classList.add( 'left-0' )
    }
    // Occurrence Type = 2
    else if ( fieldFlag === false && apt.occurrenceType.value === '2' )
    {
      forSecondOccurrenceType()
    }
  }

}