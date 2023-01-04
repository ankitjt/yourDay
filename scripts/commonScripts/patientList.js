let patientList = document.querySelector( '.patientList' ),
  patientListButton = document.querySelector( '.patientListButton' ),
  patientEmail = document.querySelector( '.patientEmail' ),
  patientName = document.querySelector( '.patientName' );

( () =>
{

  db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
  {
    let allNames = document.querySelectorAll( '.something' )
    for ( const names of allNames )
    {
      names.remove()
    }

    querySnapshot.forEach( ( doc ) =>
    {
      if ( doc.data().softDelete !== true )
      {
        let patientNames = `
                <li
                    class="text-gray-900 border-b-2 font-semibold border-gray-200 hover:bg-blue-100 ease-in-out duration-300 cursor-pointer patientListItems relative overflow-x-hidden py-2 w-full" title='${ doc.data().aptName + ' , ' + doc.data().aptEmail }'
                    id="listbox-option-0" role="option" data-id="${ doc.id } ">
                    <div class="flex items-start lg:items-center lg:flex-row px-2 md:flex-col">
                      <div class='patientListWrapper items-center justify-between flex text-xs'>
                      <span class="font-semibold block truncate optionName tracking-normal">${ doc.data().aptName }</span>
                      <div class="text-blue-500 text-xs ml-2 lowercase ">(${ doc.data().aptEmail })</div>
                        <span class="ml-2 bg-red-400 rounded-full px-2 py-1 font-normal lowercase text-slate-50">${ doc.data().aptType === 'Session' ? 'S' : 'SV' }</span>
                      </div>
                    </div>
                  </li>
                  `
        patientList.innerHTML += patientNames
        selectingPatientName( doc )
      }
    } )
  } )

} )()

let downArrowPtList = document.querySelector( '.downArrowPtList' )
let upArrowPtList = document.querySelector( '.upArrowPtList' )

const selectingPatientName = ( doc ) =>
{
  patientListButton.onclick = () =>
  {
    downArrowPtList.classList.toggle( 'hidden' )
    upArrowPtList.classList.toggle( 'hidden' )
    patientList.classList.toggle( 'hidden' )

    let patientListItems = document.querySelectorAll( '.patientListItems' )
    for ( let item of patientListItems )
    {
      item.onclick = () =>
      {
        downArrowPtList.classList.toggle( 'hidden' )
        upArrowPtList.classList.toggle( 'hidden' )
        patientName.innerText = item.childNodes[ 1 ].childNodes[ 1 ].childNodes[ 1 ].innerText
        patientName.value = item.childNodes[ 1 ].childNodes[ 1 ].childNodes[ 1 ].innerText
        patientName.setAttribute( 'data-id', item.getAttribute( 'data-id' ) )
        patientList.classList.toggle( 'hidden' )
      }
    }
  }
}
