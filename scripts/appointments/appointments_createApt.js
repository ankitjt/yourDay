createAptBtn.onclick = () =>
{
  let checkForDay = new Date( aptStartDate.value )

  if (
    aptCategory.value === '' ||
    aptType.value === '' ||
    aptNature.value === "" ||
    aptName.value === '' ||
    aptStartDate.value === '' ||
    aptEmail.value === '' ||
    aptMobileNumber.value === '' ||
    aptDay.value === '' ||
    aptTimeSlot.value === '' ||
    aptOccurrenceType.value === '' ||
    aptFees.value === '' ||
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
    db.collection( 'appointments' ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        if (
          aptEmail.value === doc.data().aptEmail &&
          aptDay.value === doc.data().aptDay &&
          aptTimeSlot.value === doc.data().aptTimeSlot
        )
        {
          promptMessages( 'User has a slot. Do you wish to update?' )
          confirmPage.style.left = '-2000px'
        }
        else if ( aptEmail.value === doc.data().aptEmail )
        {
          promptMessages( 'Email already in use !!!' )
          confirmPage.style.left = '-2000px'
        }
        else if (
          aptEmail.value !== doc.data().aptEmail &&
          aptDay.value === doc.data().aptDay &&
          aptTimeSlot.value === doc.data().aptTimeSlot
        )
        {
          promptMessages( 'Slot is already filled.' )
          confirmPage.style.left = '-2000px'
        }
        else if ( aptOccurrenceType.value === '2' )
        {
          forSecondOccurrenceType()
        }
      } )
    } )

    confirmName.innerText = aptName.value.trim()
    confirmEmail.innerText = aptEmail.value.trim()
    confirmMobileNumber.innerText = aptMobileNumber.value
    confirmStartDate.innerText = aptStartDate.value.toString()
    confirmSecondStartDate.innerText = "NA"
    confirmDay.innerText = aptDay.value
    confirmSecondDay.innerText = "NA"
    confirmTimeSlot.innerText = aptTimeSlot.value.toString()
    confirmSecondTimeSlot.innerText = "NA"
    confirmFees.innerText = aptFees.value
    confirmAddress.innerText = aptAddress.value
    confirmAppointmentType.innerText = aptType.value
    confirmAppointmentNature.innerText = aptNature.value
    confirmOccurrenceType.innerText = aptOccurrenceType.value
    confirmCategory.innerText = aptCategory.value
    confirmPage.style.transition = '0.5s ease-in-out'
    confirmPage.style.left = 0

  }
}