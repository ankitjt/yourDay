const fieldValidators = () =>
{
  let flag = false;
  let p_mobile = document.querySelector( '.aptMobileNumber' )
  let p_e_mobile = document.querySelector( '.emergencyMobileNumber' )
  let selectedDate = new Date( apt.startDate.value ).toLocaleDateString()
  let userTimeSlot = apt.timeSlot.value
  let splitSlot = userTimeSlot.split( '-' )
  let trimmedSlot = splitSlot.map( str => str.trim() )
  let hourSplit = trimmedSlot[ 0 ].split( ':' )
  let finalHourSplit = Number( hourSplit[ 0 ] )
  finalHourSplit < 12 ? finalHourSplit = finalHourSplit + 12 : finalHourSplit
  let userName = aptName.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  let emergencyNameCheck = emergencyName.value
  let check2 = emergencyNameCheck.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  let checkForDay = new Date( apt.startDate.value )



  // Check for mobile number 

  if ( p_mobile.value.length > 10 || p_mobile.value.length < 5 )
  {
    if ( p_mobile.value.length !== 0 )
    {
      // apt__confirmPage.page.classList.add( '-left-[2000px]' )
      p_mobile.classList.add( 'border-red-600' )
      promptMessages( 'Mobile number should be less than 10 and greater than 5 digits.', 'error' )
      flag = true;
      console.log( flag );
    }
  }
  console.log( flag );
  // Check for Emergency mobile number 

  if ( p_e_mobile.value.length > 10 || p_e_mobile.value.length < 5 )
  {
    if ( p_e_mobile.value.length !== 0 )
    {
      // apt__confirmPage.page.classList.add( '-left-[2000px]' )
      p_e_mobile.classList.add( 'md:border-red-600' )
      promptMessages( 'Emergency mobile number should be less than 10 and greater than 5 digits.', 'error' )
      flag = true;
    }
  }

  // Check for slot hour and current hour
  if ( finalHourSplit < local_hours && selectedDate < date_time_ref.toLocaleDateString() )
  {
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
    apt.timeSlot.classList.add( 'md:border-red-600' )
    promptMessages( 'If start date is today, slot hour cannot be older than current hour.', 'error' )
    flag = true;
  }

  // Check for old start Date 
  if ( selectedDate < date_time_ref.toLocaleDateString() )
  {
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
    apt.startDate.classList.add( 'md:border-red-600' )
    promptMessages( 'Appointment Start Date should be current or future date.', 'error' )
    flag = true;
  }

  // Name check.
  if ( check1 !== -1 )
  {
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
    aptName.classList.add( 'md:border-red-600' )
    promptMessages( 'Name should be only be alphabetic.', 'error' )
    flag = true;
  }

  // Emergency Name check.
  if ( check2 !== -1 )
  {
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
    emergencyName.classList.add( 'md:border-red-600' )
    promptMessages( 'Emergency Name should be only be alphabetic.', 'error' )
    flag = true;
  }

  // Email format check.
  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( aptEmail.value ) !== true )
  {
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
    aptEmail.classList.add( 'md:border-red-600' )
    promptMessages( 'Incorrect Email format. Format should be abc@xyz.com', 'error' )
    flag = true;
  }

  // Day and date-day match

  if ( days[ checkForDay.getDay() ] !== apt.day.value )
  {
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
    apt.startDate.classList.add( 'md:border-red-600' )
    apt.day.classList.add( 'md:border-red-600' )
    promptMessages( 'Start date and Day slot does not match.', 'error' )
    flag = true;
  }

  // Emergency Relation if selected 'Others' is selected
  if ( apt.relationDetails.value === '' && apt.emergencyRelation.value === 'Others' )
  {
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Relation details cannot be blank.', 'error' )
    apt.emergencyRelation.classList.add( 'md:border-red-600' )
    flag = true;
  }

  // Check for occurrence count.
  if ( Number( apt.occurrenceType.value ) > 2 || Number( apt.occurrenceType.value < 1 ) )
  {
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Visit per week cannot be more than 2 or less than 1.', 'error' )
    apt.occurrenceType.classList.add( 'md:border-red-600' )
    flag = true;
  }

  // Occurrence Type = 2
  if ( apt.occurrenceType.value === '2' )
  {
    forSecondOccurrenceType()
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
  }

  // Same patient and emergency contact name.
  if ( aptName.value === emergencyName.value )
  {
    // apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Patient name and Emergency contact name cannot be same.', 'error' )
    apt.name.classList.add( 'md:border-red-600' )
    apt.emergencyName.classList.add( 'md:border-red-600' )
    flag = true;
  }

  // Checking home relative address.
  if ( apt.emergencyRelation.value !== 'Father' && apt.emergencyRelation.value !== 'Mother' && apt.emergencyRelation.value !== 'Sister' && apt.emergencyRelation.value !== 'Brother' )
  {
    if ( aptAddress.value === emergencyAddress.value )
    {
      // apt__confirmPage.page.classList.add( '-left-[2000px]' )
      promptMessages( 'Same address only for family members.', 'error' )
      apt.address.classList.add( 'md:border-red-600' )
      apt.emergencyAddress.classList.add( 'md:border-red-600' )
      flag = true;
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
          // apt__confirmPage.page.classList.add( '-left-[2000px]' )
          promptMessages( 'Slot is already filled.', 'error' )
          apt.day.classList.add( 'md:border-red-600' )
          apt.timeSlot.classList.add( 'md:border-red-600' )
          flag = true;
        }
        else if ( doc.data().email.at( -1 ) === apt.email.value )
        {
          promptMessages( 'Email is already registered.', 'error' )
          apt.email.classList.add( 'md:border-red-600' )
          flag = true;
        }
      } )

      if ( flag === false )
      {
        apt__confirmPage.page.classList.add( 'left-0' )
      }
    } )
  }

}