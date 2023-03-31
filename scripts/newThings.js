let createBtn = document.querySelector( ".createAptBtn" )
let visitCount = document.querySelector( ".visitCount" )

let addMoreDate = document.querySelector( ".addMoreDate" )
let addMoreDay = document.querySelector( ".addMoreDay" )


let additionalDates = document.querySelector( '.additionalDates' )
let additionalDay = document.querySelector( '.additionalDay' )

visitCount.onkeyup = () =>
{
  if ( visitCount.value > 1 )
  {
    addMoreDate.classList.remove( 'hidden' )
    addMoreDay.classList.remove( 'hidden' )
  }
  else
  {
    addMoreDate.classList.add( 'hidden' )
    addMoreDay.classList.add( 'hidden' )
    additionalDates.innerHTML = ''
  }
}

addMoreDate.onclick = () =>
{
  if ( additionalDates.childElementCount > parseInt( visitCount.value ) - 2 )
  {
    alert( `For ${ visitCount.value } visits you can only add ${ visitCount.value } dates.` )
  }

  else
  {
    let inputWrapper = document.createElement( 'div' )
    inputWrapper.classList.add( 'relative', 'flex', 'items-center' )
    let moreDateInput = document.createElement( 'input' )
    moreDateInput.classList.add( 'aptStartDate', 'placeholder-transparent', 'peer', 'w-full', 'my-5', 'h-12', 'text-xs', 'font-semibold', 'uppercase', 'text-indigo-600', 'border', 'border-indigo-600', 'lg:border-gray-300', 'lg:text-slate-900', 'bg-gray-900', 'lg:bg-transparent', 'rounded-md', 'tracking-widest' )
    moreDateInput.setAttribute( 'placeholder', 'Start Date' )
    moreDateInput.setAttribute( 'name', 'Appointment Start Date' )
    moreDateInput.setAttribute( 'title', 'Appointment Start Date' )
    moreDateInput.setAttribute( 'onfocus', '(this.type="date")' )
    moreDateInput.setAttribute( 'onfocusout', '(this.type="text")' )

    let deleteDateInput = document.createElement( 'span' )
    deleteDateInput.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 p-1 rounded-full text-rose-600 ml-2 deleteExtraDateInput cursor-pointer ease-in-out duration-300 hover:bg-rose-600 hover:text-white">
        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
      </svg>

    `
    inputWrapper.appendChild( moreDateInput )
    inputWrapper.appendChild( deleteDateInput )
    additionalDates.appendChild( inputWrapper )

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

  let startDates = document.querySelectorAll( '.aptStartDate' )
  let datesArr = []

  for ( let startDate of startDates )
  {
    datesArr.push( startDate.value )
  }
  console.log( datesArr );
}
