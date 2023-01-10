let arr = [];
( () =>
{

  aptsDb.orderBy( 'aptStartDate', 'desc' ).get().then( ( querySnapshot ) =>
  {
    rowsToDelete()
    querySnapshot.forEach( ( doc ) =>
    {
      let aptStartDate = new Date( doc.data().aptStartDate * 1000 )
      let currentDate = new Date()
      let currentMonth = currentDate.getMonth() + 1
      let lastMonth = currentDate.getMonth()
      let aptStartDateMonth = aptStartDate.getMonth() + 1

      if ( aptStartDateMonth === currentMonth || aptStartDateMonth === lastMonth )
      {
        if ( doc.data().appointmentStatus === 'Pending' || doc.data().appointmentStatus === 'Scheduled' )
        {
          
          let appointmentPill = `
              <div
               class="1 px-3 py-5  rounded-2xl ${ doc.data().aptType === "Session" ? '' : 'bg-transparent' } ${ doc.data().aptType === "New" ? 'bg-rose-100' : '' } border-l-8 border ${ doc.data().aptType === "Session" ? 'border-emerald-600' : 'border-blue-600' } ${ doc.data().aptType === "New" ? 'border-rose-600' : '' } ${ doc.data().aptType === "Session" ? 'text-emerald-700' : 'text-blue-700' } ${ doc.data().aptType === "New" ? 'text-rose-700' : '' } mb-5"
         >
           <div class="details flex flex-col text-md">
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
               <div class='flex flex-col justify-between'>
                <span class="date"> ${ doc.data().aptDay } </span>
               </div>
             </div>
             <div class="ptName flex mt-2 items-center justify-between">
               <div class="ptName-wrapper flex items-center">
                 <span class="name font-semibold mr-2 capitalize"> ${ doc.data().aptName } </span>
                 <span class="aptDetails flex items-center">
                   <span
                     class="aptType text-xs ${ doc.data().aptType === "Session" ? 'text-emerald-50' : 'text-blue-50' } font-medium bg-blue-600 px-2 py-1 rounded-full"
                   >
                     ${ doc.data().aptType === "Supervision" ? 'SV' : doc.data().aptType.charAt( 0 ) }
                   </span>
                 </span>
               </div>
                <span class="status text-red-500 font-semibold"> ${ doc.data().appointmentStatus } </span>
               </div>
             </div>
           </div>
         </div>
     `
          scheduleGalleryView.innerHTML += appointmentPill
        }
      }


      if ( aptStartDateMonth === currentMonth || aptStartDateMonth === lastMonth )
      {
        if ( doc.data().softDelete !== true )
        {
          if ( doc.data().appointmentStatus === 'Scheduled' || doc.data().appointmentStatus === 'Updated' || doc.data().appointmentStatus === 'Pending' )
          {
            arr.push( doc.id )
            appointmentCount.innerText = `( ${ arr.length} )`
            showingApts( doc, aptStartDate, aptStartDateMonth )
          }
        }
      }
      updatePendingAps( doc, aptStartDate )
      appointmentsToUpdate()
    } )
  } )
} )()