let filterArr = []
let dataID = []

setTimeout( () =>
{
  let profileRows = document.querySelector( ".profileRows" )

  for ( let filterData of profileDetails )
  {

    let createdOn = new Date( filterData.createdOn.seconds * 1000 )
    let date = createdOn.getDate() < 10 ? '0' + createdOn.getDate() : createdOn.getDate()
    let month = ( createdOn.getMonth() + 1 ) < 10 ? '0' + ( createdOn.getMonth() + 1 ) : ( createdOn.getMonth() + 1 )
    let year = createdOn.getFullYear()
    let time = createdOn.toLocaleTimeString()
    let finalCreatedOn = `${ date }/${ month }/${ year }<br /> ${ time }`

    let profileRowData = `
         <tr
                    class="cursor-pointer patientRow font-medium ease-in-out text-white transition:300 border-b hover:bg-gray-900 text-[10px] ${ filterData.type === 'Session' ? 'bg-blue-500 ' : 'bg-emerald-500' } ${ filterData.type === 'Session' ? 'sessionRow' : 'supervisionRow' }" data-id=${ filterData.id }>
                    <td class="px-6 py-3 whitespace-nowrap w-fit">
                      <span class="block name">${ filterData.name }</span>
                      <span class="email">${ filterData.email }</span>
                    </td>
                    <td class="px-6 py-3 ">
                      ${ filterData.type }
                    </td>
                    <td class="px-6 py-3">
                      ${ filterData.mode }
                    </td>
                    <td class="px-6 py-3">
                      <span class="flex items-center px-2 py-1 rounded-full status ${ filterData.softDelete === 'False' ? 'bg-rose-100' : 'bg-emerald-100' }  w-fit">
                        <span class="inline w-2 h-2 p-1 mr-1 rounded-full statusLight ${ filterData.softDelete === 'False' ? 'bg-rose-600' : 'bg-emerald-600' }"></span>
                        <span class="${ filterData.softDelete === 'False' ? 'text-rose-600' : 'text-emerald-600' }">${ filterData.softDelete === 'False' ? 'Inactive' : 'Active' }</span>
                      </span>
                    </td>
                    <td class="px-6 py-3">
                    ${ finalCreatedOn }
                    </td>
                    <td class="px-6 py-3">
                      ${ filterData.updatedOn }
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
  let allSupervisionRows = document.querySelectorAll( '.supervisionRow' )
  let allSessionRows = document.querySelectorAll( '.sessionRow' )

  session.onclick = () =>
  {
    for ( let sessionRow of allSessionRows )
    {
      sessionRow.classList.remove( 'hidden' )
    }
    for ( let supervisionRow of allSupervisionRows )
    {
      supervisionRow.classList.add( 'hidden' )
    }
    session.classList.add( 'bg-rose-600', 'text-white' )
    session.classList.remove( 'bg-blue-100', 'text-blue-600' )
    supervision.classList.remove( 'bg-rose-600', 'text-white' )
    supervision.classList.add( 'bg-emerald-100', 'text-emerald-600' )
  }

  supervision.onclick = () =>
  {
    for ( let sessionRow of allSessionRows )
    {
      sessionRow.classList.add( 'hidden' )
    }
    for ( let supervisionRow of allSupervisionRows )
    {
      supervisionRow.classList.remove( 'hidden' )
    }
    supervision.classList.add( 'bg-rose-600', 'text-white' )
    supervision.classList.remove( 'bg-emerald-100', 'text-emerald-600' )
    session.classList.add( 'bg-blue-100', 'text-blue-600' )
    session.classList.remove( 'bg-rose-600', 'text-white' )
  }

  let clearFilters = document.querySelector( ".clearFilters" )
  clearFilters.onclick = () =>
  {
    for ( let sessionRow of allSessionRows )
    {
      sessionRow.classList.remove( 'hidden' )
    }
    for ( let supervisionRow of allSupervisionRows )
    {
      supervisionRow.classList.remove( 'hidden' )
    }
    session.classList.remove( 'bg-rose-600', 'text-white' )
    session.classList.add( 'bg-blue-100', 'text-blue-600' )
    supervision.classList.add( 'bg-emerald-100', 'text-emerald-600' )
    supervision.classList.remove( 'bg-rose-600', 'text-white' )
  }

}

