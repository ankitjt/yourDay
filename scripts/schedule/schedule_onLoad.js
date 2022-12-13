let scheduleGalleryView = document.querySelector( '.scheduleGalleryView' );
( () =>
{

  aptsDb.orderBy( 'aptStartDate', 'desc' ).get().then( ( querySnapshot ) =>
  {
    rowsToDelete()
    querySnapshot.forEach( ( doc ) =>
    {
      let appointmentPill = `
              <div
               class="1 px-3 py-5  rounded-md ${ doc.data().aptType === "Session" ? '' : 'bg-transparent' } ${ doc.data().aptType === "New" ? 'bg-rose-100' : '' } border-l-8 ${ doc.data().aptType === "Session" ? 'border-emerald-600' : 'border-blue-600' } ${ doc.data().aptType === "New" ? 'border-rose-600' : '' } ${ doc.data().aptType === "Session" ? 'text-emerald-700' : 'text-blue-700' } ${ doc.data().aptType === "New" ? 'text-rose-700' : '' } mb-10"
         >
           <div class="details flex flex-col text-sm">
             <div
               class="timeAndDate flex justify-between items-center font-black"
             >
               <span class="time flex items-center justify-between">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   class="h-5 w-5 mr-1"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   stroke-width="2"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                   />
                 </svg>
                 <span class="clockDetails">
                   ${ doc.data().aptTimeSlot }
                 </span>
               </span>
               <span class="date tracking-wider"> ${ days[doc.data().aptDay - 1] } </span>
             </div>
             <div class="ptName flex mt-2 items-center justify-between">
               <div class="ptName-wrapper flex items-center">
                 <span class="name font-semibold mr-2 capitalize"> ${ doc.data().aptName } </span>
                 <span class="aptDetails flex items-center">
                   <span
                     class="aptType ${ doc.data().aptType === "Session" ? 'text-emerald-50' : 'text-blue-50' } ${ doc.data().aptType === "New" ? 'text-slate-100' : '' } tracking-wider font-medium ${ doc.data().aptType === "Session" ? 'bg-emerald-700' : 'bg-blue-700' } ${ doc.data().aptType === "New" ? 'bg-rose-700' : '' } px-2 py-1 rounded-full"
                   >
                     ${ doc.data().aptType === "Supervision" ? 'SV' : doc.data().aptType.charAt( 0 ) }
                   </span>
                 </span>
               </div>

               </div>
             </div>
           </div>
         </div>
     `
      scheduleGalleryView.innerHTML += appointmentPill
      let aptStartDate = new Date( doc.data().aptStartDate * 1000 )
      let currentDate = new Date()
      let currentMonth = currentDate.getMonth() + 1
      let lastMonth = currentDate.getMonth()
      let aptStartDateMonth = aptStartDate.getMonth() + 1

      if ( aptStartDateMonth === currentMonth || aptStartDateMonth === lastMonth )
      {
        if ( doc.data().softDelete !== true )
        {
          if ( doc.data().appointmentStatus === 'Scheduled' || doc.data().appointmentStatus === 'Updated' || doc.data().appointmentStatus === 'Pending' )
          {
            showingApts( doc, aptStartDate, aptStartDateMonth )
          }
        }
      }
      updatePendingAps( doc, aptStartDate )
      appointmentsToUpdate()
    } )
  } )

  // Showing profile names in the dropdown filter
  profileDb.onSnapshot( ( querySnapshot ) =>
  {
    let allNames = document.querySelectorAll( '.something' )
    for ( const name123 of allNames )
    {
      name123.remove()
    }
    querySnapshot.forEach( ( doc ) =>
    {
      let patientNames = `
            <option value="${ doc.data().aptName }" class="font-semibold something" data-id="${ doc.id }" >${ doc.data().aptName } <span>${ doc.data().softDelete === true ? '( Deleted )' : '' } </span></option>
            `
      scheduleFilterName.innerHTML += patientNames
    } )

  } )

} )()