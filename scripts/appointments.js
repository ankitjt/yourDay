let aptName = document.querySelector( '.aptName' ),
  aptEmail = document.querySelector( '.aptEmail' ),
  aptMobileNumber = document.querySelector( '.aptMobileNumber' ),
  aptStartDate = document.querySelector( '.aptStartDate' ),
  aptDay = document.querySelector( '.aptDay' ),
  aptFees = document.querySelector( '.aptFees' ),
  aptType = document.querySelector( '.aptType' ),
  aptOccurrenceType = document.querySelector( '.aptOccurrenceType' ),
  aptCategory = document.querySelector( '.aptCategory' ),
  aptTimeSlot = document.querySelector( '.aptTimeSlot' ),
  createAptBtn = document.querySelector( '.createAptBtn' ),
  createTwoAptBtn = document.querySelector( '.createTwoAptBtn' ),
  cancelForOccurrence = document.querySelector( '.cancelForOccurrence' ),
  prompts = document.querySelector( '.prompts' ),
  pageWrapper = document.querySelector( '.pageWrapper' ),
  closePrompts = document.querySelector( '.closePrompts' ),
  promptContent = document.querySelector( '.promptContent' ),
  editButton = document.querySelector( '.editButton' ),
  confirmPage = document.querySelector( '.confirmPage' ),
  confirmName = document.querySelector( '.confirmName' ),
  confirmEmail = document.querySelector( '.confirmEmail' ),
  confirmMobileNumber = document.querySelector( '.confirmMobileNumber' ),
  confirmDay = document.querySelector( '.confirmDay' ),
  confirmStartDate = document.querySelector( '.confirmStartDate' ),
  confirmTimeSlot = document.querySelector( '.confirmTimeSlot' ),
  confirmAppointmentType = document.querySelector( '.confirmAppointmentType' ),
  confirmOccurrenceType = document.querySelector( '.confirmOccurrenceType' ),
  confirmCategory = document.querySelector( '.confirmCategory' ),
  confirmFees = document.querySelector( '.confirmFees' ),
  confirmButton = document.querySelector( '.confirmButton' ),
  completed = document.querySelector( '.completed' ),
  scheduled = document.querySelector( '.scheduled' ),
  firstDaySlot = document.querySelector( '.firstDaySlot' ),
  firstDaySlotWrapper = document.querySelector( '.firstDaySlotWrapper' ),
  firstStartDate = document.querySelector( '.firstStartDate' ),
  firstStartDateWrapper = document.querySelector( '.firstStartDateWrapper' ),
  firstTimeSlotWrapper = document.querySelector( '.firstTimeSlotWrapper' ),
  firstTimeSlot = document.querySelector( '.firstTimeSlot' ),
  confirmSecondStartDate = document.querySelector( ".confirmSecondStartDate" ),
  confirmSecondDay = document.querySelector( ".confirmSecondDay" ),
  confirmSecondTimeSlot = document.querySelector( ".confirmSecondTimeSlot" )

createAptBtn.onclick = () =>
{
  let checkForDay = new Date( aptStartDate.value )
 

  if (
    aptCategory.value === '' ||
    aptType.value === '' ||
    aptName.value === '' ||
    aptStartDate.value === '' ||
    aptEmail.value === '' ||
    aptMobileNumber.value === '' ||
    aptDay.value === '' ||
    aptTimeSlot.value === '' ||
    aptOccurrenceType.value === '' ||
    aptFees.value === ''
  )
  {

    pageWrapper.classList.add( 'blur-sm' )
    prompts.classList.add( 'left-1/2' )
    prompts.style.transition = '0.5s ease-in-out'
    promptContent.innerText = 'All fields required.'

  }

  else if ( checkForDay.getDay().toString() !== aptDay.value )
  {
    pageWrapper.classList.add( 'blur-sm' )
    prompts.classList.add( 'left-1/2' )
    prompts.style.transition = '0.5s ease-in-out'
    promptContent.innerText = 'Day in the start date and day slot checked does not match.'
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

          pageWrapper.classList.add( 'blur-sm' )
          prompts.classList.add( 'left-1/2' )
          prompts.style.transition = '0.5s ease-in-out'
          promptContent.innerText = 'User has a slot. Do you wish to update?'
          confirmPage.style.left = '-2000px'

        }
        else if ( aptEmail.value === doc.data().aptEmail )
        {

          pageWrapper.classList.add( 'blur-sm' )
          prompts.classList.add( 'left-1/2' )
          prompts.style.transition = '0.5s ease-in-out'
          promptContent.innerText = 'Email already in use !!!'
          confirmPage.style.left = '-2000px'

        }
        else if (
          aptEmail.value !== doc.data().aptEmail &&
          aptDay.value === doc.data().aptDay &&
          aptTimeSlot.value === doc.data().aptTimeSlot
        )
        {

          pageWrapper.classList.add( 'blur-sm' )
          prompts.classList.add( 'left-1/2' )
          prompts.style.transition = '0.5s ease-in-out'
          promptContent.innerText = 'Slot is already filled.'
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
    confirmAppointmentType.innerText = aptType.value
    confirmOccurrenceType.innerText = aptOccurrenceType.value
    confirmCategory.innerText = aptCategory.value
    confirmPage.style.transition = '0.5s ease-in-out'
    confirmPage.style.left = 0

  }
}

const forSecondOccurrenceType = () =>
{

  createAptBtn.classList.add( 'hidden' )
  createTwoAptBtn.classList.remove( 'hidden' )

  confirmPage.style.left = '-2000px'
  aptType.setAttribute( 'disabled', 'true' )
  aptName.setAttribute( 'disabled', 'true' )
  aptEmail.setAttribute( 'disabled', 'true' )
  aptMobileNumber.setAttribute( 'disabled', 'true' )
  aptFees.setAttribute( 'disabled', 'true' )
  aptOccurrenceType.setAttribute( 'disabled', 'true' )

  aptType.classList.add( 'bg-gray-300' )
  aptName.classList.add( 'bg-gray-300' )
  aptEmail.classList.add( 'bg-gray-300' )
  aptMobileNumber.classList.add( 'bg-gray-300' )
  aptFees.classList.add( 'bg-gray-300' )
  aptOccurrenceType.classList.add( 'bg-gray-300' )

  firstStartDateWrapper.classList.remove( 'hidden' )
  firstDaySlotWrapper.classList.remove( 'hidden' )
  firstTimeSlotWrapper.classList.remove( 'hidden' )

  firstStartDate.innerText = aptStartDate.value
  firstDaySlot.innerText = aptDay.value
  firstTimeSlot.innerText = aptTimeSlot.value

  cancelForOccurrence.classList.remove( 'hidden' )



}

cancelForOccurrence.onclick = () =>
{

  aptType.removeAttribute( 'disabled', 'true' )
  aptName.removeAttribute( 'disabled', 'true' )
  aptEmail.removeAttribute( 'disabled', 'true' )
  aptMobileNumber.removeAttribute( 'disabled', 'true' )
  aptFees.removeAttribute( 'disabled', 'true' )
  aptOccurrenceType.removeAttribute( 'disabled', 'true' )

  aptType.classList.remove( 'bg-gray-300' )
  aptName.classList.remove( 'bg-gray-300' )
  aptEmail.classList.remove( 'bg-gray-300' )
  aptMobileNumber.classList.remove( 'bg-gray-300' )
  aptFees.classList.remove( 'bg-gray-300' )
  aptOccurrenceType.classList.remove( 'bg-gray-300' )

  firstStartDateWrapper.classList.add( 'hidden' )
  firstDaySlotWrapper.classList.add( 'hidden' )
  firstTimeSlotWrapper.classList.add( 'hidden' )

  createTwoAptBtn.classList.add( 'hidden' )
  createAptBtn.classList.remove( 'hidden' )
  cancelForOccurrence.classList.add( 'hidden' )

  aptOccurrenceType.value = "1"

}

createTwoAptBtn.onclick = () =>
{

  if ( firstStartDate.innerText === aptStartDate.value && firstDaySlot.innerText === aptDay.value && firstTimeSlot.innerText === aptTimeSlot.value )
  {

    console.log( 'You are giving same details...' )

  }
  else
  {
    console.log( firstStartDate.innerText, typeof ( aptStartDate.value ), typeof ( firstStartDate.innerText ), aptStartDate.value )
    console.log( firstDaySlot.innerText, typeof ( aptDay.value ), typeof ( firstDaySlot.innerText ), aptDay.value )
    console.log( firstTimeSlot.innerText, typeof ( aptTimeSlot.value ), typeof ( firstTimeSlot.innerText ), aptTimeSlot.value )

    confirmName.innerText = aptName.value.trim()
    confirmEmail.innerText = aptEmail.value.trim()
    confirmMobileNumber.innerText = aptMobileNumber.value
    confirmStartDate.innerText = firstStartDate.innerText
    confirmSecondStartDate.innerText = aptStartDate.value
    confirmDay.innerText = firstDaySlot.innerText
    confirmSecondDay.innerText = aptDay.value
    confirmTimeSlot.innerText = firstTimeSlot.innerText
    confirmSecondTimeSlot.innerText = aptTimeSlot.value.toString()
    confirmFees.innerText = aptFees.value
    confirmAppointmentType.innerText = aptType.value
    confirmOccurrenceType.innerText = aptOccurrenceType.value
    confirmCategory.innerText = aptCategory.value
    confirmPage.style.transition = '0.5s ease-in-out'
    confirmPage.style.left = 0

  }
}

closePrompts.onclick = () =>
{

  pageWrapper.classList.remove( 'blur-sm' )
  prompts.classList.remove( 'left-1/2' )

}

editButton.onclick = () => 
{

  confirmPage.style.left = '-2000px'
  prompts.classList.remove( 'left-1/2' )
  pageWrapper.classList.remove( 'blur-sm' )

}

confirmButton.onclick = ( e ) =>
{
  e.preventDefault()

  let newDate = new Date( confirmStartDate.innerText )
  let newDateInSeconds = newDate / 1000
  let appointmentsDates = [ newDateInSeconds ]
  createProfile()

  for ( let i = 0; i < 5; i++ )
  {
    let futureAppointments = Math.floor( newDate.setDate( newDate.getDate() + 7 ) / 1000 )
    appointmentsDates.push( futureAppointments )
    
    db.collection( 'appointments' ).add( {
      aptName: confirmName.innerText,
      aptEmail: confirmEmail.innerText,
      aptMobileNumber: confirmMobileNumber.innerText,
      aptDay: confirmDay.innerText,
      aptSecondDay: "NA",
      aptTimeSlot: confirmTimeSlot.innerText,
      aptSecondTimeSlot: "NA",
      aptType: confirmAppointmentType.innerText,
      aptStartDate: appointmentsDates[i],
      aptSecondStartDate: "NA",
      appointmentStatus: 'Scheduled',
      aptFees: Number( confirmFees.innerText ),
      serverTimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      statusUpdatedTimeStamp: ""
    } )

  }

  confirmPage.style.left = '-2000px'
  confirmPage.style.transition = '0.5s ease-in-out'
  aptName.value = ''
  aptEmail.value = ''
  aptMobileNumber.value = ''
  aptDay.selectedIndex = 0
  aptType.selectedIndex = 0
  aptTimeSlot.selectedIndex = 0
  aptCategory.selectedIndex = 0
  aptStartDate.value = ''
  aptFees.value = ''
  aptOccurrenceType.value = ''

  pageWrapper.classList.add( 'blur-sm' )
  prompts.classList.add( 'left-1/2' )
  prompts.style.transition = '0.5s ease-in-out'
  promptContent.innerText = 'Appointment created'
  confirmPage.style.left = '-2000px'

}

const createProfile = () =>
{
  
  db.collection( "profiles" ).add(
    {
      aptCategory: confirmCategory.innerText,
      aptName: confirmName.innerText,
      aptEmail: confirmEmail.innerText,
      aptMobileNumber: confirmMobileNumber.innerText,
      aptDay: confirmDay.innerText,
      aptSecondDay: "NA",
      aptStartDate: confirmStartDate.innerText,
      aptTimeSlot: confirmTimeSlot.innerText,
      aptSecondTimeSlot: "NA",
      aptType: confirmAppointmentType.innerText,
      aptOccurrenceType: confirmOccurrenceType.innerText,
      aptSecondStartDate: "NA",
      aptFees: confirmFees.innerText,
      appointmentStatus: 'Scheduled',
      profileCreatedOn: firebase.firestore.FieldValue.serverTimestamp(),
    }
  )
}