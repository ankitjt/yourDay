setTimeout( () =>
{
  dataArr.sort( ( a, b ) =>
  {
    return a.convertedDate - b.convertedDate
  } )

  scheduleGalleryView.innerHTML = ''
  for ( let eachRecord of dataArr )
  {
    let appointmentPill = `
                <div
                 class="1 px-3 py-5  rounded-2xl  border-l-8 border ${ eachRecord.type === "Session" ? 'border-emerald-600' : 'border-blue-600' } ${ eachRecord.type === "Session" ? 'text-emerald-700' : 'text-blue-700' } ${ eachRecord.type === "New" ? 'text-rose-700' : '' } mb-5" text-xs
           >
             <div class="details flex flex-col text-xs">
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
                     ${ eachRecord.slot }
                   </span>
                 </span>
                 <div class='flex flex-col justify-between'>
                  <span class="date text-xs"> ${ eachRecord.day }, ${ eachRecord.date }-${ eachRecord.month }-${ eachRecord.year } </span>
                 </div>
               </div>
               <div class="ptName flex mt-2 items-center justify-between">
                 <div class="ptName-wrapper flex items-center">
                   <span class="name font-normal mr-2 capitalize"> ${ eachRecord.name } </span>
                   <span class="aptDetails flex items-center">
                     <span
                       class="aptType text-xs ${ eachRecord.type === "Session" ? 'bg-emerald-700' : 'bg-blue-700' } font-normal text-white px-2 py-1 rounded-full"
                     >
                       ${ eachRecord.type === "Supervision" ? 'Supervision' : 'Session' }
                     </span>
                   </span>
                 </div>
                  <span class="status text-red-500 font-normal"> ${ eachRecord.status } </span>
                 </div>
               </div>
             </div>
           </div>
       `
    scheduleGalleryView.innerHTML += appointmentPill
  }
}, 2000 )
