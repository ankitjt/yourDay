let createBtn = document.querySelector( ".createAptBtn" )
let visitCount = document.querySelector( ".visitCount" )

let addMoreDate = document.querySelector( ".addMoreDate" )
let addMoreDay = document.querySelector( ".addMoreDay" )
let addMoreTimeSlot = document.querySelector( ".addMoreTimeSlot" )

let additionalDates = document.querySelector( ".additionalDates" )
let additionalDay = document.querySelector( ".additionalDay" )
let additionalTimeSlot = document.querySelector( ".additionalTimeSlot" )
let dateCounter = -1,
  dayCounter = -1,
  timeSlotCounter = -1

visitCount.onkeyup = () =>
{
  if ( parseInt( visitCount.value ) > 1 && parseInt( visitCount.value ) <= 6 )
  {
    addMoreDate.classList.remove( 'hidden' )
    addMoreDay.classList.remove( 'hidden' )
    addMoreTimeSlot.classList.remove( 'hidden' )
    dateCounter = -1
    dayCounter = -1
    timeSlotCounter = -1
  }

  else if ( parseInt( visitCount.value ) > 6 )
  {
    alert( 'more than 6' );
    addMoreDate.classList.add( 'hidden' )
    addMoreDay.classList.add( 'hidden' )
    addMoreTimeSlot.classList.add( 'hidden' )
    visitCount.value = ''
    dateCounter = -1
    dayCounter = -1
    timeSlotCounter = -1
  }
  else
  {
    addMoreDate.classList.add( 'hidden' )
    addMoreDay.classList.add( 'hidden' )
    addMoreTimeSlot.classList.add( 'hidden' )
    additionalDates.innerHTML = ''
    additionalDay.innerHTML = ''
    additionalTimeSlot.innerHTML = ''
    dateCounter = -1
    dayCounter = -1
    timeSlotCounter = -1
  }
}

let addMores = document.querySelectorAll( '.addMore' )
let addSections = document.querySelectorAll( '.addSections' )
let fieldTags = [ 'Second', 'Third', 'Fourth', 'Fifth', "Sixth" ]

for ( let addMore of addMores )
{

  addMore.onclick = () =>
  {
    let inputType = addMore.parentElement.childNodes[ 1 ].childNodes[ 1 ]
    let moreDetails = inputType.parentElement.parentElement.parentElement.childNodes[ 3 ];

    if ( moreDetails.childElementCount > parseInt( visitCount.value ) - 2 )
    {
      alert( `For ${ visitCount.value } visits per week you can only add upto ${ visitCount.value } ${ inputType.getAttribute( 'title' ) }.` )
      addMoreDate.classList.add( 'hidden' )
      addMoreDay.classList.add( 'hidden' )
      addMoreTimeSlot.classList.add( 'hidden' )
    }

    else
    {
      let inputWrapper = document.createElement( 'div' )
      inputWrapper.classList.add( 'relative', 'flex', 'items-center', 'w-full' )

      let inputHolder = document.createElement( 'div' )
      inputHolder.classList.add( 'w-full' )

      let deleteDateInput = document.createElement( 'span' )
      deleteDateInput.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 p-1 rounded-full text-rose-600 ml-2 deleteExtraDateInput cursor-pointer ease-in-out duration-300 hover:bg-rose-600 hover:text-white">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
            </svg>

          `

      if ( inputType.getAttribute( 'id' ) === 'aptStartDate' )
      {
        dateCounter = dateCounter + 1
        let moreStartDate = `
         <input type="text" placeholder="Start Date" name="aptStartDate" aria-autocomplete="none"
                            autocomplete="off" id="aptStartDate" title="${ fieldTags[ dateCounter ] } Appointment Start Date" onfocus="(this.type='date')"
                            onfocusout="(this.type='text')"
                            class="newDates aptDates placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold uppercase text-indigo-600 border border-indigo-600 lg:border-gray-300 lg:text-slate-900 bg-gray-900 lg:bg-transparent rounded-md tracking-widest" />
          `
        inputHolder.innerHTML = moreStartDate
      }

      if ( inputType.getAttribute( 'id' ) === 'aptDay' )
      {
        dayCounter = dayCounter + 1
        let moreDayInput = `
      <select name="aptDay" id="aptDay" title="${ fieldTags[ dayCounter ] } Appointment Start Day"
                            class="newDays placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold uppercase text-indigo-600 border border-indigo-600 lg:border-gray-300 lg:text-slate-900 bg-gray-900 lg:bg-transparent rounded-md tracking-widest">
                      <option value="" class="text-xs md:font-semibold md:text-xs">
                        Pick a day
                      </option>
                      <option value="Monday" class="text-xs md:font-semibold md:text-xs">
                        Monday
                      </option>
                      <option value="Tuesday" class="text-xs md:font-semibold md:text-xs">
                        Tuesday
                      </option>
                      <option value="Wednesday" class="text-xs md:font-semibold md:text-xs">
                        Wednesday
                      </option>
                      <option value="Thursday" class="text-xs md:font-semibold md:text-xs">
                        Thursday
                      </option>
                      <option value="Friday" class="text-xs md:font-semibold md:text-xs">
                        Friday
                      </option>
                      <option value="Saturday" class="text-xs md:font-semibold md:text-xs">
                        Saturday
                      </option>
                      <option value="Sunday" class="text-xs md:font-semibold md:text-xs">
                        Sunday
                      </option>
                    </select>
    `
        inputHolder.innerHTML = moreDayInput
      }

      if ( inputType.getAttribute( 'id' ) === 'aptTimeSlot' )
      {
        timeSlotCounter = timeSlotCounter + 1
        let moreTimeSlotInput = `
      <select name="aptTimeSlot" id="aptTimeSlot" title="${ fieldTags[ timeSlotCounter ] } Appointment Time Slot"
                            class="newTimeSlots placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold uppercase text-indigo-600 border border-indigo-600 lg:border-gray-300 lg:text-slate-900 bg-gray-900 lg:bg-transparent rounded-md tracking-widest">
                      <option value="" class="md:font-semibold">
                        Time slot
                      </option>
                      <option value="09:00 - 10:00" class="text-xs md:font-semibold md:text-xs">
                        09:00 - 10:00
                      </option>
                      <option value="10:00 - 11:00" class="text-xs md:font-semibold md:text-xs">
                        10:00 - 11:00
                      </option>
                      <option value="11:00 - 12:00" class="text-xs md:font-semibold md:text-xs">
                        11:00 - 12:00
                      </option>
                      <option value="12:00 - 13:00" class="text-xs md:font-semibold md:text-xs">
                        12:00 - 13:00
                      </option>
                      <option value="13:00 - 14:00" class="text-xs md:font-semibold md:text-xs">
                        13:00 - 14:00
                      </option>
                      <option value="14:00 - 15:00" class="text-xs md:font-semibold md:text-xs">
                        14:00 - 15:00
                      </option>
                      <option value="15:00 - 16:00" class="text-xs md:font-semibold md:text-xs">
                        15:00 - 16:00
                      </option>
                      <option value="16:00 - 17:00" class="text-xs md:font-semibold md:text-xs">
                        16:00 - 17:00
                      </option>
                      <option value="17:00 - 18:00" class="text-xs md:font-semibold md:text-xs">
                        17:00 - 18:00
                      </option>
                    </select>
    `
        inputHolder.innerHTML = moreTimeSlotInput
      }

      inputWrapper.appendChild( inputHolder )
      inputWrapper.appendChild( deleteDateInput )
      moreDetails.appendChild( inputWrapper )

      deleteFields()

    }

  }
}

const deleteFields = () =>
{
  let deleteExtraDateInput = document.querySelectorAll( '.deleteExtraDateInput' )

  for ( let delField of deleteExtraDateInput )
  {
    delField.onclick = () =>
    {
      let deleteType = delField.parentElement.parentElement.childNodes[ 0 ].childNodes[ 1 ].getAttribute( 'id' );

      if ( deleteType === 'aptStartDate' )
      {
        delField.parentElement.parentElement.remove();
        let newDates = document.querySelectorAll( '.newDates' )
        for ( let [ index, startDate ] of newDates.entries() )
        {
          startDate.title = `${ fieldTags[ index ] } Appointment Start Date`
          console.log( newDates.length );
        }
        dateCounter = dateCounter - 1
      }

      if ( deleteType === 'aptDay' )
      {
        delField.parentElement.parentElement.remove();
        let newDays = document.querySelectorAll( '.newDays' )
        for ( let [ index, additionalDay ] of newDays.entries() )
        {
          console.log( additionalDay );
          additionalDay.title = `${ fieldTags[ index ] } Appointment Start Day`
        }
        dayCounter = dayCounter - 1

      }

      if ( deleteType === 'aptTimeSlot' )
      {
        delField.parentElement.parentElement.remove();
        let newTimeSlots = document.querySelectorAll( '.newTimeSlots' )
        for ( let [ index, additionalTimeSlot ] of newTimeSlots.entries() )
        {
          additionalTimeSlot.title = `${ fieldTags[ index ] } Appointment Time Slot`
        }
        timeSlotCounter = timeSlotCounter - 1

      }
    }
  }

}

let create = document.querySelector( '.createAptBtn' )

create.onclick = () =>
{
  let radios = document.querySelectorAll( 'input[type=radio]' )
  let radioValue = ''
  for ( let radio of radios )
  {
    if ( radio.checked )
    {
      radioValue = radio.value;
    }
  }

  let addSections = document.querySelectorAll( '.addSections' )
  for ( let addSection of addSections )
  {
    if ( addSection.childElementCount !== parseInt( visitCount.value - 1 ) && visitCount.value > 1 )
    {
      let counter = ( addSection.childElementCount - ( parseInt( visitCount.value ) - 1 ) ) * -1

      alert( `${ counter } more ${ addSection.getAttribute( 'name' ) } required.` );

    }
  }

  // Getting all Dates
  let getNewDates = document.querySelectorAll( '.aptDates' )
  let currentDate = new Date().toLocaleDateString()
  let datesArr = []

  for ( let newDate of getNewDates )
  {
    if ( newDate.value === '' )
    {
      alert( `${ newDate.getAttribute( 'title' ) } is required.` )
      newDate.classList.add( 'lg:border-rose-600' )
    }

    else
    {
      datesArr.push( { date: newDate.value } )
    }
  }

  let values = datesArr.map( ( item ) => { return item.date } )
  let isDuplicate = values.some( ( item, i ) => { return values.indexOf( item ) !== i } )
  if ( isDuplicate === true )
  {
    alert( 'All dates should be unique' )
  }
  else
  {
    let res = datesArr.every( ( { date } ) =>
    {
      return currentDate <= new Date( date ).toLocaleDateString()
    } )
    res === false ? alert( 'Old Dates' ) : '';
  }

  // Get all Days
  let dayInputs = document.querySelector( '.aptDay' )
  let getNewDays = document.querySelectorAll( '.newDays' )
  let daysArr = [ { day: dayInputs.value } ]
  for ( let newDay of getNewDays )
  {
    if ( newDay.value === '' )
    {
      alert( `${ newDay.getAttribute( 'title' ) } is required.` )
      newDay.classList.add( 'lg:border-rose-600' )
    }

    else
    {
      daysArr.push( { day: newDay.value } )
    }

  }

  // Getting all Time Slots
  let timeSlotInput = document.querySelector( '.aptTimeSlot' )
  let getNewTimeSlots = document.querySelectorAll( '.newTimeSlots' )
  let timeSlotArr = [ { timeSlot: timeSlotInput.value } ]
  for ( let newTimeSlot of getNewTimeSlots )
  {
    if ( newTimeSlot.value === '' )
    {
      alert( `${ newTimeSlot.getAttribute( 'title' ) } is required.` )
      newTimeSlot.classList.add( 'lg:border-rose-600' )
    }
    else
    {
      timeSlotArr.push( { timeSlot: newTimeSlot.value } )
    }
  }

  let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
  let finalFieldTags = [ 'First', 'Second', 'Third', 'Fourth', 'Fifth', "Sixth" ]

  // Check for date and day match
  for ( let [ index, checkDays ] of datesArr.entries() )
  {
    let finalDate = new Date( checkDays.date ).getDay() - 1
    if ( days[ finalDate ] !== daysArr[ index ].day )
    {
      return alert( `${ finalFieldTags[ index ] } days and dates do not match.` )
    }
  }

  // Final Array of data
  const res = datesArr.map( ( { date }, i ) => (
    {
      date,
      day: daysArr[ i ].day,
      timeSlot: timeSlotArr[ i ].timeSlot,
      order: finalFieldTags[ i ]
    }
  ) )

  // Adding information to the page
  for ( let schedule of res )
  {
    console.log(
      `
              ${ schedule.order } Start Date: ${ schedule.date } 
              ${ schedule.order } Start Day: ${ schedule.day }
              ${ schedule.order } Start TimeSlot: ${ schedule.timeSlot }
            `
    )
  }

}



