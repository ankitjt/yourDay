let aptName = document.querySelector('.aptName'),
  aptEmail = document.querySelector('.aptEmail'),
  aptMobileNumber = document.querySelector('.aptMobileNumber'),
  aptStartDate = document.querySelector('.aptStartDate'),
  aptDay = document.querySelector('.aptDay'),
  aptFees = document.querySelector('.aptFees'),
  aptType = document.querySelector('.aptType'),
  aptOccurrenceType = document.querySelector('.aptOccurrenceType'),
  aptCategory = document.querySelector('.aptCategory'),
  aptTimeSlot = document.querySelector('.aptTimeSlot'),
  createAptBtn = document.querySelector( '.createAptBtn' ),
  createTwoAptBtn = document.querySelector( '.createTwoAptBtn' ),
  cancelForOccurrence = document.querySelector(".cancelForOccurrence")
  prompts = document.querySelector('.prompts'),
  pageWrapper = document.querySelector('.pageWrapper'),
  closePrompts = document.querySelector('.closePrompts'),
  promptContent = document.querySelector('.promptContent'),
  editButton = document.querySelector('.editButton'),
  confirmPage = document.querySelector('.confirmPage'),
  confirmName = document.querySelector('.confirmName'),
  confirmEmail = document.querySelector('.confirmEmail'),
  confirmMobileNumber = document.querySelector('.confirmMobileNumber'),
  confirmDay = document.querySelector('.confirmDay'),
  confirmStartDate = document.querySelector('.confirmStartDate'),
  confirmTimeSlot = document.querySelector('.confirmTimeSlot'),
  confirmAppointmentType = document.querySelector('.confirmAppointmentType'),
  confirmOccurrenceType = document.querySelector('.confirmOccurrenceType'),
  confirmCategory = document.querySelector('.confirmCategory'),
  confirmFees = document.querySelector('.confirmFees'),
  confirmButton = document.querySelector('.confirmButton'),
  completed = document.querySelector('.completed'),
  scheduled = document.querySelector( '.scheduled' ),
  firstDaySlot = document.querySelector( ".firstDaySlot" ),
  firstStartDate = document.querySelector( ".firstStartDate" ),
  firstTimeSlot = document.querySelector(".firstTimeSlot")
    


createAptBtn.onclick = () => {
  // if (
  //   aptCategory.value === '' ||
  //   aptType.value === '' ||
  //   aptName.value === '' ||
  //   aptStartDate.value === '' ||
  //   aptEmail.value === '' ||
  //   aptMobileNumber.value === '' ||
  //   aptDay.value === '' ||
  //   aptTimeSlot.value === '' ||
  //   aptOccurrenceType.value === '' ||
  //   aptFees.value === ''
  // )
  if(aptOccurrenceType.value === "")
  {
    pageWrapper.classList.add( 'blur-sm' )
    prompts.classList.add( 'left-1/2' )
    prompts.style.transition = '0.5s ease-in-out'
    promptContent.innerText = 'All fields required.'
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
        ) {
          pageWrapper.classList.add( 'blur-sm' )
          prompts.classList.add( 'left-1/2' )
          prompts.style.transition = '0.5s ease-in-out'
          promptContent.innerText = 'Slot is already filled.'
          confirmPage.style.left = '-2000px'
        }
        if ( aptOccurrenceType.value === '2' )
        {
          createAptBtn.classList.add( "hidden" )
          createTwoAptBtn.classList.remove("hidden")
          
          confirmPage.style.left = '-2000px'
          aptType.setAttribute( "disabled", "true" )
          aptName.setAttribute( "disabled", "true")
          aptEmail.setAttribute( "disabled", "true")
          aptMobileNumber.setAttribute( "disabled", "true")
          aptFees.setAttribute( "disabled", "true")
          aptOccurrenceType.setAttribute( "disabled", "true" )
          
          aptType.classList.add( "bg-gray-300" )
          aptName.classList.add( "bg-gray-300" )
          aptEmail.classList.add( "bg-gray-300" )
          aptMobileNumber.classList.add( "bg-gray-300" )
          aptFees.classList.add( "bg-gray-300" )
          aptOccurrenceType.classList.add( "bg-gray-300" ) 

          firstStartDate.classList.remove( "hidden" )
          firstDaySlot.classList.remove( "hidden" )
          firstTimeSlot.classList.remove( "hidden" )

          firstStartDate.innerText = "First Start Date given: "
          firstDaySlot.innerText = "First Day given: " + aptDay.value
          firstTimeSlot.innerText = "First Time Slot given: " 
          
          cancelForOccurrence.style.display = "inline-block"

        }
      })
    } )
    
    cancelForOccurrence.onclick = () =>
    {
      aptType.setAttribute( "disabled", "false" )
      aptName.setAttribute( "disabled", "false")
      aptEmail.setAttribute( "disabled", "false")
      aptMobileNumber.setAttribute( "disabled", "false")
      aptFees.setAttribute( "disabled", "false")
      aptOccurrenceType.setAttribute( "disabled", "false" )
      
      aptType.classList.remove( "bg-gray-300" )
      aptName.classList.remove( "bg-gray-300" )
      aptEmail.classList.remove( "bg-gray-300" )
      aptMobileNumber.classList.remove( "bg-gray-300" )
      aptFees.classList.remove( "bg-gray-300" )
      aptOccurrenceType.classList.remove( "bg-gray-300" ) 

      firstStartDate.classList.add( "hidden" )
      firstDaySlot.classList.add( "hidden" )
      firstTimeSlot.classList.add( "hidden" )
      
    }
    createTwoAptBtn.onclick = () =>
    {
      console.log(firstDaySlot.innerText, aptDay.value);
    }

    confirmName.innerText = aptName.value.trim()
    confirmEmail.innerText = aptEmail.value.trim()
    confirmMobileNumber.innerText = aptMobileNumber.value
    confirmStartDate.innerText = aptStartDate.value
    confirmDay.innerText = aptDay.value
    confirmTimeSlot.innerText = aptTimeSlot.value.toString()
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

confirmButton.onclick = () => 
{
  confirmPage.style.left = '-2000px'
  confirmPage.style.transition = '0.5s ease-in-out'
  aptName.value = ''
  aptEmail.value = ''
  aptMobileNumber.value = ''
  aptDay.selectedIndex = 0
  aptType.selectedIndex = 0
  aptTimeSlot.selectedIndex = 0
  aptCategory.selectedIndex = 0
  aptStartDate.value = ""
  aptFees.value = ''
  aptOccurrenceType.value = ''

  db.collection( 'appointments' ).add( {
    aptCategory: confirmCategory.innerText,
    aptName: confirmName.innerText,
    aptEmail: confirmEmail.innerText,
    aptMobileNumber: confirmMobileNumber.innerText,
    aptDay: confirmDay.innerText,
    aptTimeSlot: confirmTimeSlot.innerText,
    aptType: confirmAppointmentType.innerText,
    aptOccurrenceType: confirmOccurrenceType.innerText,
    aptStartDate: confirmStartDate.value,
    aptFees: confirmFees.innerText,
    appointmentStatus: 'Scheduled',
    serverTimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
  } )

    pageWrapper.classList.add( 'blur-sm' )
    prompts.classList.add( 'left-1/2' )
    prompts.style.transition = '0.5s ease-in-out'
    promptContent.innerText = 'Appointment created'
    confirmPage.style.left = '-2000px'
}
