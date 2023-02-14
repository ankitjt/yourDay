let filterArr = []
let dataID = []

setTimeout( () =>
{
  let profileRows = document.querySelector( ".profileRows" )

  for ( let filterData of profileDetails )
  {

    let createdOn = new Date( filterData.createdOn.seconds * 1000 )
    let date = createdOn.getDate()
    let month = createdOn.getMonth() + 1
    let year = createdOn.getFullYear()
    let time = createdOn.toLocaleTimeString()
    let finalCreatedOn = `${ date }/${ month }/${ year }<br /> ${ time }`

    let profileRowData = `
         <tr
                    class="font-semibold text-blue-600 ease-in-out bg-white border-b transition:300 hover:bg-blue-100 text-[10px] ${ filterData.category === 'Session' ? 'sessionRow' : 'supervisionRow' }" data-id=${ filterData.id }>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="block name">${ filterData.name }</span>
                      <span class="email">${ filterData.email }</span>
                    </td>
                    <td class="px-6 py-4">
                      ${ filterData.category }
                    </td>
                    <td class="px-6 py-4">
                      ${ filterData.nature }
                    </td>
                    <td class="px-6 py-4">
                      <span class="block time">${ filterData.timeSlot }</span>
                      <span class="day">${ filterData.day }</span>
                    </td>
                     
                    <td class="flex items-center px-6 py-4">
                    <span class="feesAmount">${ filterData.fees }</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4 font-light">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </td>
                    <td class="px-6 py-4">
                      <span class="flex items-center px-2 py-1 rounded-full status ${ filterData.softDelete === 'False' ? 'bg-rose-100' : 'bg-emerald-100' }  w-fit">
                        <span class="inline w-2 h-2 p-1 mr-1 rounded-full statusLight ${ filterData.softDelete === 'False' ? 'bg-rose-600' : 'bg-emerald-600' }"></span>
                        <span class="${ filterData.softDelete === 'False' ? 'text-rose-600' : 'text-emerald-600' }">${ filterData.softDelete === 'False' ? 'Inactive' : 'Active' }</span>
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      ${ finalCreatedOn }
                    </td>
                    <td class="px-6 py-4 " title='View/Update'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 cursor-pointer updateProfileLink">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"  />
                      </svg>
                    </td>
                  </tr>
      `
    profileRows.innerHTML += profileRowData
  }
  filterProfile()
  updateProfileLinkFunc()
}, 2000 )


const filterProfile = () =>
{
  let session = document.querySelector( '.session' )
  let supervision = document.querySelector( ".supervision" )
  let allSupervisionRows = document.querySelector( '.supervisionRow' )
  let allSessionRows = document.querySelector( '.sessionRow' )

  session.onclick = () =>
  {
    allSupervisionRows.classList.add( 'hidden' )
    allSessionRows.classList.remove( 'hidden' )
    session.classList.add( 'bg-rose-600', 'text-white' )
    session.classList.remove( 'bg-blue-100', 'text-blue-600' )
    supervision.classList.remove( 'bg-rose-600', 'text-white' )
    supervision.classList.add( 'bg-emerald-100', 'text-emerald-600' )
  }

  supervision.onclick = () =>
  {
    allSessionRows.classList.add( 'hidden' )
    allSupervisionRows.classList.remove( 'hidden' )
    supervision.classList.add( 'bg-rose-600', 'text-white' )
    supervision.classList.remove( 'bg-emerald-100', 'text-emerald-600' )
    session.classList.add( 'bg-blue-100', 'text-blue-600' )
    session.classList.remove( 'bg-rose-600', 'text-white' )
  }

  let clearFilters = document.querySelector( ".clearFilters" )
  clearFilters.onclick = () =>
  {
    allSessionRows.classList.remove( 'hidden' )
    allSupervisionRows.classList.remove( 'hidden' )
    session.classList.remove( 'bg-rose-600', 'text-white' )
    session.classList.add( 'bg-blue-100', 'text-blue-600' )
    supervision.classList.add( 'bg-emerald-100', 'text-emerald-600' )
    supervision.classList.remove( 'bg-rose-600', 'text-white' )
  }

}

