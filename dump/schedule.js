

updateViewIcon.onclick = () =>
{
  scheduleGalleryView.classList.add( "lg:hidden" )
  updateTableView.classList.add( "lg:table" )
  updateViewIcon.classList.add( "bg-blue-100" )
  updateViewIcon.style.transition = "0.5s ease-in-out"
  completedViewIcon.classList.remove( "bg-blue-100" )
  cancelledViewIcon.classList.remove( "bg-blue-100" )
  completedTableViewRows.classList.add( "hidden" )
  cancelledTableViewRows.classList.add( "hidden" )
  location.reload()
}

completedViewIcon.onclick = () =>
{
  updateTableViewRows.classList.remove( "lg:table" )
  updateTableViewRows.classList.add( "hidden" )
  updateViewIcon.classList.remove( "bg-blue-100" )
  completedTableViewRows.classList.remove( "hidden" )
  completedViewIcon.classList.add( "bg-blue-100" )
  completedViewIcon.style.transition = "0.5s ease-in-out"
  cancelledTableViewRows.classList.add( "hidden" )
  cancelledViewIcon.classList.remove( "bg-blue-100" )
}

cancelledViewIcon.onclick = () =>
{
  updateTableViewRows.classList.remove( "lg:table" )
  updateTableViewRows.classList.add( "hidden" )
  updateViewIcon.classList.remove( "bg-blue-100" )
  completedTableViewRows.classList.add( "hidden" )
  completedViewIcon.classList.remove( "bg-blue-100" )
  cancelledTableViewRows.classList.remove( "hidden" )
  cancelledViewIcon.classList.add( "bg-blue-100" )
  cancelledViewIcon.style.transition = "0.5s ease-in-out"

}


// galleryViewIcon.onclick = () => {
//   scheduleGalleryView.classList.remove('lg:hidden', "hidden");
//   updateTableView.classList.add('lg:hidden', 'hidden');
// }

// For gallery view (Mobile Only)

// ( () =>
// {
//   db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
//   {
//     querySnapshot.forEach( ( doc ) =>
//     {
//       let appointmentPill = `
//           <div
//               class="1 p-3 lg:px-4 lg:py-3 rounded-md ${ doc.data().aptType === "Session" ? 'bg-emerald-100' : 'bg-blue-100' } ${ doc.data().aptType === "New" ? 'bg-rose-100' : '' } border-l-8 ${ doc.data().aptType === "Session" ? 'border-emerald-600' : 'border-blue-600' } ${ doc.data().aptType === "New" ? 'border-rose-600' : '' } ${ doc.data().aptType === "Session" ? 'text-emerald-700' : 'text-blue-700' } ${ doc.data().aptType === "New" ? 'text-rose-700' : '' } mb-6 lg:w-auto lg:hover:drop-shadow-2xl lg:hover:-translate-y-2 lg:transition-all lg:ease-in-out lg:shadow-xl cursor-pointer"
//             >
//               <div class="details flex flex-col text-xs">
//                 <div
//                   class="timeAndDate flex justify-between items-center font-black"
//                 >
//                   <span class="time flex items-center justify-between">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       class="h-3 w-3 mr-1"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       stroke-width="2"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                     <span class="clockDetails tracking-wider">
//                       ${ doc.data().aptTimeSlot }
//                     </span>
//                   </span>
//                   <span class="date tracking-wider"> ${ doc.data().aptDay } </span>
//                 </div>
//                 <div class="ptName flex mt-2 items-center justify-between">
//                   <div class="ptName-wrapper flex items-center">
//                     <span class="name font-semibold mr-2 capitalize"> ${ doc.data().aptName } </span>
//                     <span class="aptDetails flex items-center">
//                       <span
//                         class="aptType ${ doc.data().aptType === "Session" ? 'text-emerald-50' : 'text-blue-50' } ${ doc.data().aptType === "New" ? 'text-slate-100' : '' } tracking-wider font-medium ${ doc.data().aptType === "Session" ? 'bg-emerald-700' : 'bg-blue-700' } ${ doc.data().aptType === "New" ? 'bg-rose-700' : '' } px-2 py-1 rounded-full"
//                       >
//                         ${ doc.data().aptType === "Supervision" ? 'SV' : doc.data().aptType.charAt( 0 ) }
//                       </span>
//                     </span>
//                   </div>

//                   </div>
//                 </div>
//               </div>
//             </div>
//         `
//       scheduleGalleryView.innerHTML += appointmentPill
//     } )
//   } )
// } )();

// For Update table view {Page Load}

( () =>
{
  let d = new Date()
  db.collection( 'appointments' )
    .orderBy( "aptStartDate" )
    .get()
    .then( ( querySnapshot ) =>
    {
      rowsToDelete()

      querySnapshot.forEach( ( doc ) =>
      {
        let newDateFormat = new Date( doc.data().aptStartDate * 1000 )
        let finalDate = newDateFormat.getDate() + "-" + ( newDateFormat.getMonth() + 1 ) + "-" + newDateFormat.getFullYear()
        let myData
        if ( doc.data().statusUpdatedTimeStamp === undefined )
        {
          myData = ""
        }
        else
        {
          myData = new Date( doc.data().statusUpdatedTimeStamp.seconds * 1000 )
        }
        if ( newDateFormat.getMonth() === d.getMonth() )
        {
          if ( doc.data().appointmentStatus === "Scheduled" || doc.data().appointmentStatus === "Updated" )
          {
            let tableViewForUpdate = `
                  <tr class="border-l-2 border-b-2 text-[11px] tableRow12 border-r-2 border-gray-200" data-id="${ doc.id
              }">
                          <td class="py-3 px-5 font-semibold">
                            ${ doc.data().aptName }
                          </td>
                          <td class="py-3 px-5 font-semibold">
                            ${ finalDate }
                          </td>
                          <td class="py-3 px-5 font-semibold">
                            ${ days[ doc.data().aptDay - 1 ] } <br /> ${ doc.data().aptTimeSlot }
                          </td>
                          <td class="py-3 px-5 font-semibold">
                            ${ doc.data().aptType }
                          </td>
    
                          <!-- Status -->
                          <td class="py-3   px-5 font-semibold">
                          
                             <div class="appointmentStatus">
                              <div class="${ doc.data().appointmentStatus === "Completed" ? "block" : "hidden" }">
                                <span class="text-emerald-500">
                                  ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                </span>
                              </div>
                              <div class="${ doc.data().appointmentStatus === "Cancelled" ? "block" : "hidden" }">
                                <span class="text-red-500">
                                  ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                </span>
                              </div>
                              <div class="${ doc.data().appointmentStatus === "Updated" ? "block" : "hidden" }">
                                <span class="text-amber-500">
                                  ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                </span>
                              </div>
                              <div class="${ doc.data().appointmentStatus === "Scheduled" ? "block" : "hidden" }">
                                <span>
                                  ${ doc.data().appointmentStatus === "Scheduled" ? "Scheduled" : doc.data().appointmentStatus }
                                </span>
                              </div>
                            </div>
    
                            <div class="statusUpdateTime"> 
                              <span class="text-[10px] text-gray-900"> ${ doc.data().statusUpdatedTimeStamp === "" ? '' : myData.toDateString() + " " + myData.toLocaleTimeString() } </span>
                            </div>
    
                          </td>
    
                          <td class="py-3  px-5 font-semibold">
                            <select name="appointmentActions" id="appointmentActions"
                              class="border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-2  aptActions lg:drop-shadow-none drop-shadow-2xl text-xs">
                              <option value="Action" class="font-semibold">
                                Action
                              </option>
                              <option value="Completed" class="font-semibold">
                                Completed
                              </option>
                              <option value="Paid Cancelled" class="font-semibold">
                                Paid Cancelled
                              </option>
                              <option value="Free Cancelled" class="font-semibold">
                                Free Cancelled
                              </option>
                              <option value="Updated" class="font-semibold">
                                Edit/Update
                              </option>
                              <option value="Close" class="font-semibold">
                                Closed
                              </option>
                            </select>
                          </td>
                        </tr>
                      
                  `
            updateTableViewRows.innerHTML += tableViewForUpdate
          }
        }

        if ( doc.data().appointmentStatus === "Completed" )
        {

          let tableViewForCompleted = `
                    <tr class="border-l-2 border-b-2 tableRow12 border-r-2 border-gray-200" data-id="${ doc.id }">
                             <td class="py-3  text-xs px-5 font-semibold">
                               ${ doc.data().aptName }
                             </td>
                             <td class="py-3  text-xs px-5 font-semibold">
                                  ${ finalDate }
                              </td>
                             <td class="py-3  text-xs px-5 font-semibold">
                                  ${ days[ doc.data().aptDay - 1 ] } <br /> ${ doc.data().aptTimeSlot }
                              </td>
                             <td class="py-3  text-xs px-5 font-semibold">
                               ${ doc.data().aptType }
                             </td>
                             <td class="py-3  text-xs px-5 font-semibold">
                                <div class="appointmentStatus">
                                  <div class="${ doc.data().appointmentStatus === "Completed" ? "block" : "hidden" }">
                                    <span class="text-emerald-500">
                                      ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                    </span>
                                  </div>
                                  <div class="${ doc.data().appointmentStatus === "Cancelled" ? "block" : "hidden" }">
                                    <span class="text-red-500">
                                      ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                    </span>
                                  </div>
                                  <div class="${ doc.data().appointmentStatus === "Updated" ? "block" : "hidden" }">
                                    <span class="text-amber-500">
                                      ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                    </span>
                                  </div>
                                  <div class="${ doc.data().appointmentStatus === undefined ? "block" : "hidden" }">
                                    <span>
                                      ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                    </span>
                                    </div>
                                </div>
          
                                <div class="statusUpdateTime">
                                  <span class="text-[10px] text-gray-900"> ${ doc.data().statusUpdatedTimeStamp === undefined ? '' : myData.toDateString() + " " + myData.toLocaleTimeString() } </span>
                                </div>
                               
                             </td>
                             <td class="py-3 text-xs px-5 font-semibold">
                               <select name="appointmentActions" id="appointmentActions"
                                 class="border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-2  aptActions lg:drop-shadow-none drop-shadow-2xl text-sm">
                                 <option value="Action" class="font-semibold">
                                   Action
                                 </option>
                                 <option value="Completed" class="font-semibold">
                                   Completed
                                   </option>
                                 <option value="Paid Cancelled" class="font-semibold">
                                    Paid Cancelled
                                  </option>
                                  <option value="Free Cancelled" class="font-semibold">
                                    Free Cancelled
                                  </option>
                                 <option value="Updated" class="font-semibold">
                                   Edit/Update
                                 </option>
                               </select>
                             </td>
                        </tr>
                        
                     `
          completedTableViewRows.innerHTML += tableViewForCompleted
        }

        if ( doc.data().appointmentStatus === "Paid Cancelled" || doc.data().appointmentStatus === "Free Cancelled" )
        {

          let tableViewForCancelled = `
                    <tr class="border-l-2 border-b-2 tableRow12 border-r-2 border-gray-200" data-id="${ doc.id }">
                             <td class="py-3  text-xs px-5 font-semibold">
                               ${ doc.data().aptName }
                             </td>
                             <td class="py-3  text-xs px-5 font-semibold">
                                  ${ finalDate }
                              </td>
                             <td class="py-3  text-xs px-5 font-semibold">
                                  ${ days[ doc.data().aptDay - 1 ] } <br /> ${ doc.data().aptTimeSlot }
                                </td>
                             <td class="py-3  text-xs px-5 font-semibold">
                               ${ doc.data().aptType }
                             </td>
                             <td class="py-3  text-xs px-5 font-semibold">
                               <div class="${ doc.data().appointmentStatus === "Completed" ? "block" : "hidden" }">
                                 <span class="text-emerald-500">
                                   ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                 </span>
                               </div>
                               <div class="${ doc.data().appointmentStatus === "Paid Cancelled" ? "block" : "hidden" }">
                                 <span class="text-red-500">
                                   ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                 </span>
                               </div>
                               <div class="${ doc.data().appointmentStatus === "Free Cancelled" ? "block" : "hidden" }">
                                 <span class="text-red-500">
                                   ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                 </span>
                               </div>
                               <div class="${ doc.data().appointmentStatus === "Updated" ? "block" : "hidden" }">
                                 <span class="text-amber-500">
                                   ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                 </span>
                               </div>
                               <div class="${ doc.data().appointmentStatus === undefined ? "block" : "hidden" }">
                                 <span>
                                   ${ doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus }
                                 </span>
                               </div>
                               <div class="statusUpdateTime">
                                  <span class="text-[10px] text-gray-900"> ${ doc.data().statusUpdatedTimeStamp === undefined ? '' : myData.toDateString() + " " + myData.toLocaleTimeString() } </span>
                                </div>
                             </td>
                             <td class="py-3 text-xs px-5 font-semibold">
                               <select name="appointmentActions" id="appointmentActions"
                                 class="border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-2  aptActions lg:drop-shadow-none drop-shadow-2xl text-sm">
                                 <option value="Action" class="font-semibold">
                                   Action
                                 </option>
                                 <option value="Completed" class="font-semibold">
                                   Completed
                                 </option>
                                 <option value="Paid Cancelled" class="font-semibold">
                                  Paid Cancelled
                                </option>
                                <option value="Free Cancelled" class="font-semibold">
                                  Free Cancelled
                                </option>
                                 <option value="Updated" class="font-semibold">
                                   Edit/Update
                                 </option>
                               </select>
                             </td>
                           </tr>
                        
                     `
          cancelledTableViewRows.innerHTML += tableViewForCancelled
        }

        appointmentsToUpdate()

      } )
    } )
} )()

const rowsToDelete = () =>
{
  let tableRowsToDelete = document.querySelectorAll( '.tableRow12' )
  for ( let rowsToDelete of tableRowsToDelete )
  {
    rowsToDelete.remove()
  }
}




