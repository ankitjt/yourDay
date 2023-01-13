emergencyRelation.onchange = () =>
{
  if ( apt.emergencyRelation.value === 'Others' ) 
  {
    apt.relationDetails.classList.remove( 'hidden' )
  }
  else
  {
    apt.relationDetails.classList.add( 'hidden' )
    apt.relationDetails.value = ''
  }
}

apt.create.onclick = () =>
{
  let checkForDay = new Date( apt.startDate.value )

  //Check for same time slot
  let userTimeSlot = apt.timeSlot.value;
  let splitSlot = userTimeSlot.split( '-' )
  let trimmedSlot = splitSlot.map( str => str.trim() )
  let hourSplit = trimmedSlot[ 0 ].split( ':' )
  let finalHourSplit = Number( hourSplit[ 0 ] )

  let userDayCheck = checkForDay.getDate()
  let userMonthCheck = checkForDay.getMonth()
  let userYearCheck = checkForDay.getFullYear()
  let finalUserDateCheck = new Date( userYearCheck, userMonthCheck, userDayCheck )

  let currentDate = new Date()
  let currentMonth = currentDate.getMonth()
  let currentYear = currentDate.getFullYear()
  let currentDay = currentDate.getDate()
  let currentHour = currentDate.getHours()
  let finalCurrentDate = new Date( currentYear, currentMonth, currentDay )


  // Empty Fields check 
  if (
    apt.category.value === '' ||
    apt.type.value === '' ||
    apt.nature.value === "" ||
    apt.name.value === '' ||
    apt.emergencyName.value === '' ||
    apt.startDate.value === '' ||
    apt.email.value === '' ||
    apt.mobileNumber.value === '' ||
    apt.address.value === '' ||
    apt.emergencyMobileNumber.value === '' ||
    apt.countryCode.value === '' ||
    apt.emergencyCountryCode.value === '' ||
    apt.day.value === '' ||
    apt.timeSlot.value === '' ||
    apt.occurrenceType.value === '' ||
    apt.fees.value === '' ||
    apt.emergencyAddress.value === '' ||
    apt.emergencyRelation.value === ''

  )
  {
    promptMessages( 'All fields are required.' )
  }

  else if ( days[ checkForDay.getDay() - 1 ] !== apt.day.value )
  {
    promptMessages( 'Start date and Day slot does not match.' )
  }

  else if ( apt.relationDetails.value === '' && apt.emergencyRelation.value === 'Others' )
  {
    promptMessages( 'All fields are required.' )
  }

  else if ( finalHourSplit < currentHour && finalUserDateCheck <= finalCurrentDate )
  {
    promptMessages( 'If selected start date is today, then ensure time slot is greater than current hour.' )
  }

  else if ( apt.occurrenceType.value > 2 && apt.occurrenceType.value < 1 )
  {
    apt__confirmPage.page.style.left = '-2000px'
    promptMessages( 'Occurrence cannot be more than 2 or less than 1.' )
  }

  else if ( apt.category.value === 'New' )
  {
    fieldValidators()

    db.collection( 'profiles' ).where( 'aptEmail', '==', apt.email.value ).onSnapshot( ( querySnapshot ) =>
    {
      if ( querySnapshot.empty )
      {
        db.collection( 'profiles' ).onSnapshot( ( querySnapshot ) =>
        {
          querySnapshot.forEach( ( doc ) =>
          {
            if ( apt.day.value === doc.data().aptDay && apt.timeSlot.value === doc.data().aptTimeSlot )
            {
              // apt__confirmPage.page.style.left = '-2000px'
              promptMessages( 'Slot is already filled.' )
            }
            else if ( apt.occurrenceType.value === '2' )
            {
              // apt__confirmPage.page.style.left = '-2000px'
              forSecondOccurrenceType()
            }
      
          } )
        } )
      }
      else if ( !querySnapshot.empty )
      {
        promptMessages( 'Email is already registered.' )
      }
    } )


  }

  else if ( apt.category.value === 'New' && apt.type.value !== '' )
  {
    let aptStartDate1 = new Date( apt.startDate.value )
    let currentMonth = aptStartDate1.getMonth() + 1
    let currentYear = aptStartDate1.getFullYear()
    let currentDay = aptStartDate1.getDate()
    let finalCurrentDate = currentDay + ' - ' + currentMonth + ' - ' + currentYear
    let aptEmailOfUser = apt.email.value
    let correctEmail = aptEmailOfUser.toLowerCase()

    apt__confirmPage.name.innerText = aptName.value.trim()
    apt__confirmPage.email.innerText = correctEmail.trim()
    apt__confirmPage.mobileNumber.innerText = apt.countryCode.value + '-' + apt.mobileNumber.value
    apt__confirmPage.startDate.innerText = finalCurrentDate.toString()
    apt__confirmPage.secondStartDate.innerText = "NA"
    apt__confirmPage.day.innerText = apt.day.value
    apt__confirmPage.secondDay.innerText = "NA"
    apt__confirmPage.timeSlot.innerText = apt.timeSlot.value.toString()
    apt__confirmPage.secondTimeSlot.innerText = "NA"
    apt__confirmPage.fees.innerText = apt.fees.value
    apt__confirmPage.address.innerText = apt.address.value
    apt__confirmPage.type.innerText = apt.type.value
    apt__confirmPage.nature.innerText = apt.nature.value
    apt__confirmPage.occurrenceType.innerText = apt.occurrenceType.value
    apt__confirmPage.category.innerText = apt.category.value
    apt__confirmPage.emergencyName.innerText = apt.emergencyName.value
    apt__confirmPage.emergencyRelation.innerText = apt.relationDetails.value === '' ? apt.emergencyRelation.value : apt.emergencyRelation.value + ' - ' + ( apt.relationDetails.value ).tocapitlize()
    apt__confirmPage.emergencyMobileNumber.innerText = apt.emergencyCountryCode.value + '-' + apt.emergencyMobileNumber.value
    apt__confirmPage.emergencyAddress.innerText = apt.emergencyAddress.value
    apt__confirmPage.page.classList.remove( '-left-[2000px]' )
    apt__confirmPage.page.classList.add( 'left-0' )
  }
}