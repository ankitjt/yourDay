countryCode.onchange = () =>
{
  // countryNameAlgeria.classList.add('hidden')
  console.log( dropOption.childNodes )
}

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

  // else if (

  //   aptName.value !== '' ||
  //   aptStartDate.value !== '' ||
  //   aptEmail.value !== '' ||
  //   aptMobileNumber.value !== '' ||
  //   aptFees.value !== '' ||
  //   aptAddress.value !== ''
  // )
  // {
  // }

  else if ( checkForDay.getDay().toString() !== aptDay.value )
  {
    promptMessages( 'Day in the start date and day slot checked does not match.' )
  }

  else if ( aptCategory.value === 'New' )
  {


    db.collection( 'profiles' ).where( 'aptEmail', '==', aptEmail.value ).onSnapshot( ( querySnapshot ) =>
    {
      if ( querySnapshot.empty )
      {
        db.collection( 'profiles' ).onSnapshot( ( querySnapshot ) =>
        {
          fieldValidators()
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
        let mobileNumberValue = aptMobileNumber.value
        let cleanMobileNumber = mobileNumberValue.replace( '0', '' )
        confirmName.innerText = aptName.value.trim()
        confirmEmail.innerText = aptEmail.value.trim()
        confirmMobileNumber.innerText = cleanMobileNumber
        confirmStartDate.innerText = aptStartDate.value.toString()
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