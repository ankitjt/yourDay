const fieldValidators = () =>
{

  // Check for mobile number 
  let p_mobile = document.querySelector( '.aptMobileNumber' )
  if ( p_mobile.value.length > 10 || p_mobile.value.length < 5 )
  {
    if ( p_mobile.value.length !== 0 )
    {
      apt__confirmPage.page.classList.add( '-left-[2000px]' )
      p_mobile.classList.add( 'border-red-600' )
      promptMessages( 'Mobile number should be less than 10 and greater than 5 digits.' );
    }
  }

  // Check for Emergency mobile number 
  let p_e_mobile = document.querySelector( '.emergencyMobileNumber' )
  if ( p_e_mobile.value.length > 10 || p_e_mobile.value.length < 5 )
  {
    if ( p_e_mobile.value.length !== 0 )
    {
      apt__confirmPage.page.classList.add( '-left-[2000px]' )
      p_e_mobile.classList.add( 'md:border-red-600' )
      promptMessages( 'Emergency Mobile number should be less than 10 and greater than 5 digits.' );
    }
  }

  // Check for slot hour and current hour
  let selectedDate = new Date( apt.startDate.value ).toLocaleDateString()
  let currentDate = new Date().toLocaleDateString()
  let currentHour = new Date()
  let userTimeSlot = apt.timeSlot.value
  let splitSlot = userTimeSlot.split( '-' )
  let trimmedSlot = splitSlot.map( str => str.trim() )
  let hourSplit = trimmedSlot[ 0 ].split( ':' )
  let finalHourSplit = Number( hourSplit[ 0 ] )

  if ( finalHourSplit < currentHour.getHours() && selectedDate < currentDate )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    apt.timeSlot.classList.add( 'md:border-red-600' )
    promptMessages( 'If start date is today, slot hour cannot be older than current hour.' )
  }

  // Check for old start Date 
  if ( selectedDate < currentDate )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    apt.startDate.classList.add( 'md:border-red-600' )
    promptMessages( 'Appointment Start Date should be current or future date.' )
  }

  // Name check.
  let userName = aptName.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check1 !== -1 )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    aptName.classList.add( 'md:border-red-600' )
    promptMessages( 'Name should be only be alphabetic.' )
  }

  // Emergency Name check.
  let emergencyNameCheck = emergencyName.value
  let check2 = emergencyNameCheck.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check2 !== -1 )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    emergencyName.classList.add( 'md:border-red-600' )
    promptMessages( 'Emergency Name should be only be alphabetic.' )
  }

  // Email format check.
  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( aptEmail.value ) !== true )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    aptEmail.classList.add( 'md:border-red-600' )
    promptMessages( 'Incorrect Email format. Format should be abc@xyz.com' )
  }

  // Day and date-day match
  let checkForDay = new Date( apt.startDate.value )
  if ( days[ checkForDay.getDay() ] !== apt.day.value )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    apt.startDate.classList.add( 'md:border-red-600' )
    apt.day.classList.add( 'md:border-red-600' )
    promptMessages( 'Start date and Day slot does not match.' )
  }

  // Emergency Relation if selected 'Others' is selected
  if ( apt.relationDetails.value === '' && apt.emergencyRelation.value === 'Others' )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Relation details cannot be blank.' )
    apt.emergencyRelation.classList.add( 'md:border-red-600' )
  }

  // Check for occurrence count.
  if ( Number( apt.occurrenceType.value ) > 2 || Number( apt.occurrenceType.value < 1 ) )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Occurrence cannot be more than 2 or less than 1.' )
    apt.occurrenceType.classList.add( 'md:border-red-600' )
  }

  // Occurrence Type = 2
  if ( apt.occurrenceType.value === '2' )
  {
    forSecondOccurrenceType()
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
  }

  // Same patient and emergency contact name.
  if ( aptName.value === emergencyName.value )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Patient name and Emergency contact name cannot be same.' )
    apt.name.classList.add( 'md:border-red-600' )
    apt.emergencyName.classList.add( 'md:border-red-600' )
  }

  // Checking home relative address.
  if ( apt.emergencyRelation.value !== 'Father' && apt.emergencyRelation.value !== 'Mother' && apt.emergencyRelation.value !== 'Sister' && apt.emergencyRelation.value !== 'Brother' )
  {
    if ( aptAddress.value === emergencyAddress.value )
    {
      apt__confirmPage.page.classList.add( '-left-[2000px]' )
      promptMessages( 'Patient address and Emergency contact address cannot be same as they are not family member.' )
      apt.address.classList.add( 'md:border-red-600' )
      apt.emergencyAddress.classList.add( 'md:border-red-600' )
    }
  }

  if ( apt.category.value === 'New' )
  {
    db.collection( 'profiles' ).where( 'aptEmail', '==', apt.email.value ).onSnapshot( ( querySnapshot ) =>
    {
      if ( querySnapshot.empty )
      {
        querySnapshot.forEach( ( doc ) =>
        {
          let latestAptDay = doc.data().aptDay[ doc.data().aptDay.length - 1 ]
          let latestTimeSlot = doc.data().aptTimeSlot[ doc.data().aptTimeSlot.length - 1 ]
          if ( apt.day.value === latestAptDay && apt.timeSlot.value === latestTimeSlot )
          {
            apt__confirmPage.page.classList.add( '-left-[2000px]' )
            promptMessages( 'Slot is already filled.' )
            apt.day.classList.add( 'md:border-red-600' )
            apt.timeSlot.classList.add( 'md:border-red-600' )
          }
        } )
      }
      else if ( !querySnapshot.empty )
      {
        apt__confirmPage.page.classList.add( '-left-[2000px]' )
        promptMessages( 'Email is already registered.' )
        apt.email.classList.add( 'md:border-red-600' )
      }
    } )
  }


}