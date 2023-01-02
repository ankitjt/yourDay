createAptBtn.onclick = () =>
{
  let checkForDay = new Date( aptStartDate.value )

  if (
    aptCategory.value === '' ||
    aptType.value === '' ||
    aptNature.value === "" ||
    aptName.value === '' ||
    emergencyName.value === '' ||
    aptStartDate.value === '' ||
    aptEmail.value === '' ||
    aptMobileNumber.value === '' ||
    emergencyMobileNumber.value === '' ||
    countryCode.value === '' ||
    emergencyCountryCode.value === '' ||
    aptDay.value === '' ||
    aptTimeSlot.value === '' ||
    aptOccurrenceType.value === '' ||
    aptFees.value === '' ||
    emergencyAddress.value === '' ||
    emergencyRelation.value === '' ||
    aptAddress.value === ''
  )
  {
    promptMessages( 'All fields are required.' )
  }

  else if ( checkForDay.getDay().toString() !== aptDay.value )
  {
    promptMessages( 'Day in the start date and day slot checked does not match.' )
  }

  else if ( aptCategory.value === 'New' )
  {
    fieldValidators()
    db.collection( 'profiles' ).where( 'aptEmail', '==', aptEmail.value ).onSnapshot( ( querySnapshot ) =>
    {
      if ( querySnapshot.empty )
      {
        db.collection( 'profiles' ).onSnapshot( ( querySnapshot ) =>
        {
          querySnapshot.forEach( ( doc ) =>
          {
            if ( aptDay.value === doc.data().aptDay && aptTimeSlot.value === doc.data().aptTimeSlot )
            {
              confirmPage.style.left = '-2000px'
              promptMessages( 'Slot is already filled.' )

            }
            else if ( aptOccurrenceType.value > 2 || aptOccurrenceType.value < 1 )
            {
              confirmPage.style.left = '-2000px'
              promptMessages( 'Occurrence cannot be more than 2.' )

            }
            else if ( aptOccurrenceType.value === '2' )
            {
              confirmPage.style.left = '-2000px'
              forSecondOccurrenceType()
            }
          } )
        } )

        let aptStartDate1 = new Date(aptStartDate.value)
        let currentMonth = aptStartDate1.getMonth()+1
        let currentYear = aptStartDate1.getFullYear()
        let currentDay = aptStartDate1.getDate()
        let finalCurrentDate = currentDay+' - '+currentMonth+' - '+currentYear
        let aptEmailOfUser = aptEmail.value
        let correctEmail = aptEmailOfUser.toLowerCase()

        confirmName.innerText = aptName.value.trim()
        confirmEmail.innerText = correctEmail.trim()
        confirmMobileNumber.innerText = countryCode.value + '-' + aptMobileNumber.value
        confirmStartDate.innerText = finalCurrentDate.toString()
        confirmSecondStartDate.innerText = "NA"
        confirmDay.innerText = days[ aptDay.value - 1 ]
        confirmSecondDay.innerText = "NA"
        confirmTimeSlot.innerText = aptTimeSlot.value.toString()
        confirmSecondTimeSlot.innerText = "NA"
        confirmFees.innerText = aptFees.value
        confirmAddress.innerText = aptAddress.value
        confirmAppointmentType.innerText = aptType.value
        confirmAppointmentNature.innerText = aptNature.value
        confirmOccurrenceType.innerText = aptOccurrenceType.value
        confirmCategory.innerText = aptCategory.value
        confirmEmergencyName.innerText = emergencyName.value
        confirmEmergencyRelation.innerText = emergencyRelation.value
        confirmEmergencyMobileNumber.innerText = emergencyCountryCode.value + '-' + emergencyMobileNumber.value
        confirmEmergencyAddress.innerText = emergencyAddress.value
        confirmPage.style.transition = '0.5s ease-in-out'
        confirmPage.style.left = 0
      }

      else if ( !querySnapshot.empty )
      {
        promptMessages( 'Email is already registered.' )
      }

    } )

  }

}