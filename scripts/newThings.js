let createBtn = document.querySelector( ".createAptBtn" )
let visitCount = document.querySelector( ".visitCount" )

let addMoreDate = document.querySelector( ".addMoreDate" )
let addMoreDay = document.querySelector( ".addMoreDay" )
let addMoreTimeSlot = document.querySelector( ".addMoreTimeSlot" )

let additionalDates = document.querySelector( ".additionalDates" )
let additionalDay = document.querySelector( ".additionalDay" )
let additionalTimeSlot = document.querySelector( ".additionalTimeSlot" )

visitCount.onkeyup = () =>
{
  if ( visitCount.value > 1 )
  {
    addMoreDate.classList.remove( 'hidden' )
    addMoreDay.classList.remove( 'hidden' )
    addMoreTimeSlot.classList.remove( 'hidden' )
  }
  else
  {
    addMoreDate.classList.add( 'hidden' )
    addMoreDay.classList.add( 'hidden' )
    addMoreTimeSlot.classList.add( 'hidden' )
    additionalDates.innerHTML = ''
    additionalDay.innerHTML = ''
    additionalTimeSlot.innerHTML = ''
  }
}

let addMores = document.querySelectorAll( '.addMore' )
let addSections = document.querySelectorAll( '.addSections' )

for ( let addMore of addMores )
{
  addMore.onclick = () =>
  {
    let inputType = addMore.parentElement.childNodes[ 1 ].childNodes[ 1 ]
    let moreDetails = inputType.parentElement.parentElement.parentElement.childNodes[ 3 ];

    let moreStartDate = `
         <input type="text" placeholder="Start Date" name="aptStartDate" aria-autocomplete="none"
                            autocomplete="off" id="aptStartDate" title="Appointment Start Date" onfocus="(this.type='date')"
                            onfocusout="(this.type='text')"
                            class="aptStartDate placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold uppercase text-indigo-600 border border-indigo-600 lg:border-gray-300 lg:text-slate-900 bg-gray-900 lg:bg-transparent rounded-md tracking-widest" />
          `

    let moreDayInput = `
      <select name="aptDay" id="aptDay" title="Appointment Start Day"
                            class="aptDay placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold uppercase text-indigo-600 border border-indigo-600 lg:border-gray-300 lg:text-slate-900 bg-gray-900 lg:bg-transparent rounded-md tracking-widest">
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

    let moreTimeSlotInput = `
      <select name="aptTimeSlot" id="aptTimeSlot" title="Appointment Time Slot"
                            class="aptTimeSlot placeholder-transparent peer w-full my-5 h-12 text-xs font-semibold uppercase text-indigo-600 border border-indigo-600 lg:border-gray-300 lg:text-slate-900 bg-gray-900 lg:bg-transparent rounded-md tracking-widest">
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

    if ( moreDetails.childElementCount > parseInt( visitCount.value ) - 2 )
    {
      alert( `For ${ visitCount.value } visits per week you can only add upto ${ visitCount.value } ${ inputType.getAttribute( 'title' ) }.` )
    }

    else
    {
      let inputWrapper = document.createElement( 'div' )
      inputWrapper.classList.add( 'relative', 'flex', 'items-center' )

      let inputHolder = document.createElement( 'div' )

      let deleteDateInput = document.createElement( 'span' )
      deleteDateInput.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 p-1 rounded-full text-rose-600 ml-2 deleteExtraDateInput cursor-pointer ease-in-out duration-300 hover:bg-rose-600 hover:text-white">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
            </svg>

          `

      if ( inputType.getAttribute( 'id' ) === 'aptStartDate' )
      {
        inputHolder.innerHTML = moreStartDate
      }

      if ( inputType.getAttribute( 'id' ) === 'aptDay' )
      {
        inputHolder.innerHTML = moreDayInput
      }

      if ( inputType.getAttribute( 'id' ) === 'aptTimeSlot' )
      {
        inputHolder.innerHTML = moreTimeSlotInput
      }

      inputWrapper.appendChild( inputHolder )
      inputWrapper.appendChild( deleteDateInput )
      moreDetails.appendChild( inputWrapper )

      let deleteExtraDateInput = document.querySelectorAll( '.deleteExtraDateInput' )

      for ( let delDateTag of deleteExtraDateInput )
      {
        delDateTag.onclick = () =>
        {
          delDateTag.parentElement.parentElement.remove()
        }
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
  console.log( radioValue );

  let addSections = document.querySelectorAll( '.addSections' )

  for ( let addSection of addSections )
  {
    if ( addSection.childElementCount !== parseInt( visitCount.value - 1 ) && visitCount.value > 1 )
    {
      let counter = ( addSection.childElementCount - ( parseInt( visitCount.value ) - 1 ) ) * -1

      console.log( `${ counter } more ${ addSection.getAttribute( 'name' ) } required.` );

    }
  }

  let startDates = document.querySelectorAll( '.aptStartDate' )
  let datesArr = []

  for ( let startDate of startDates )
  {
    datesArr.push( startDate.value )
  }
  console.log( datesArr );
}
