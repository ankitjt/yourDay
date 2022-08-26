let scheduleGalleryView = document.querySelector(".scheduleGalleryView"),
  scheduleTableView = document.querySelector(".scheduleTableView"),
  tableViewIcon = document.querySelector(".tableViewIcon"),
  galleryViewIcon = document.querySelector( ".galleryViewIcon" ),
  tableViewRows = document.querySelector( ".tableViewRows" ),
  updateAppointmentsSection = document.querySelector(".updateAppointmentsSection"),
  updateAppointments = document.querySelector(".updateAppointments")

  firebase.initializeApp({
          apiKey: "AIzaSyBP_xYkTozmmX7K5b9lO_5LPcI1LLoxxFw",
          authDomain: "yourday-3fcd8.firebaseapp.com",
          projectId: "yourday-3fcd8",
          storageBucket: "yourday-3fcd8.appspot.com",
          messagingSenderId: "216062777762",
          appId: "1:216062777762:web:0470a736d1cd2e8ea57afb"
        });
  
const db = firebase.firestore()

tableViewIcon.onclick = () => {
  scheduleGalleryView.classList.add("lg:hidden")
  scheduleTableView.classList.remove( "lg:hidden" )
  tableViewIcon.classList.add( "bg-slate-300" )
  tableViewIcon.style.transition = "0.5s ease-in-out"
  }
    
// galleryViewIcon.onclick = () => {
//   scheduleGalleryView.classList.remove('lg:hidden', "hidden");
//   scheduleTableView.classList.add('lg:hidden', 'hidden');
// }

// For gallery view

( () =>
{
  db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      let appointmentPill = `
          <div
              class="1 p-3 lg:px-4 lg:py-3 rounded-md ${ doc.data().aptType === "Session" ? 'bg-emerald-100' : 'bg-blue-100' } ${ doc.data().aptType === "New" ? 'bg-rose-100' : '' } border-l-8 ${ doc.data().aptType === "Session" ? 'border-emerald-600' : 'border-blue-600' } ${ doc.data().aptType === "New" ? 'border-rose-600' : '' } ${ doc.data().aptType === "Session" ? 'text-emerald-700' : 'text-blue-700' } ${ doc.data().aptType === "New" ? 'text-rose-700' : '' } mb-6 lg:w-auto lg:hover:drop-shadow-2xl lg:hover:-translate-y-2 lg:transition-all lg:ease-in-out lg:shadow-xl cursor-pointer"
            >
              <div class="details flex flex-col text-xs">
                <div
                  class="timeAndDate flex justify-between items-center font-black"
                >
                  <span class="time flex items-center justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3 mr-1"
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
                    <span class="clockDetails tracking-wider">
                      ${ doc.data().aptTimeSlot }
                    </span>
                  </span>
                  <span class="date tracking-wider"> ${ doc.data().aptDay } </span>
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
    } )
  } )
} )();

// For table view
    
( () =>
{
  document.onreadystatechange = () =>
  {
    if ( document.readyState !== 'complete' )
    {
      scheduleTableView.style.visibility = 'hidden'
      document.querySelector("#loader").style.visibility = "visible"
    }
    else
    {
      document.querySelector( "#loader" ).style.display = "none"
      scheduleTableView.style.visibility = 'visible'
      db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
      {
         
        let tableRowsToDelete = document.querySelectorAll( ".tableRow12" )
        for ( let rowsToDelete of tableRowsToDelete )
        {
          rowsToDelete.remove()
        }
   
        querySnapshot.forEach( ( doc ) =>
        {
          let tableView = `
          <tr class="border-l-2 border-b-2 tableRow12 border-r-2 border-gray-200" data-id="${doc.id}">
                   <td class="py-3  text-xs px-5 font-semibold">
                     ${doc.data().aptName}
                   </td>
                   <td class="py-3  text-xs px-5 font-semibold">
                     ${doc.data().aptTimeSlot}
                   </td>
                   <td class="py-3  text-xs px-5 font-semibold">
                     ${doc.data().aptDay}
                   </td>
                   <td class="py-3  text-xs px-5 font-semibold">
                     ${doc.data().aptType}
                   </td>
                   <td class="py-3  text-xs px-5 font-semibold">
                     <div class="${doc.data().appointmentStatus === "Completed" ? "block" : "hidden"}">
                       <span class="text-emerald-500">
                         ${doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus}
                       </span>
                     </div>
                     <div class="${doc.data().appointmentStatus === "Cancelled" ? "block" : "hidden"}">
                       <span class="text-red-500">
                         ${doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus}
                       </span>
                     </div>
                     <div class="${doc.data().appointmentStatus === "Updated" ? "block" : "hidden"}">
                       <span class="text-amber-500">
                         ${doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus}
                       </span>
                     </div>
                     <div class="${doc.data().appointmentStatus === undefined ? "block" : "hidden"}">
                       <span>
                         ${doc.data().appointmentStatus === undefined ? "Scheduled" : doc.data().appointmentStatus}
                       </span>
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
                       <option value="Cancelled" class="font-semibold">
                         Cancelled
                       </option>
                       <option value="Updated" class="font-semibold">
                         Edit/Update
                       </option>
                     </select>
                   </td>
                 </tr>
              
           `
          tableViewRows.innerHTML += tableView
          
           let aptActions = document.querySelectorAll( ".aptActions" )
           for ( let i = 0; i < aptActions.length; i++ )
           {
             aptActions[ i ].onchange = () =>
             {
               let selectedRow = aptActions[ i ].parentElement.parentElement
               let rowId = selectedRow.getAttribute( "data-id" )
               let dbPath = db.collection( "appointments" ).doc( rowId )
   
               if ( aptActions[ i ].value === "Completed" )
               {
                 let ask  = "Do you confirm to update?"
                 if ( confirm( ask ) === true )
                 {
                   dbPath.update( {
                     appointmentStatus:"Completed"
                   } )
                 }
                 else
                 {
                   aptActions[i].selectedIndex = 0
                 }
               }
   
               else if ( aptActions[ i ].value === "Cancelled" )
               {
                 let ask  = "Do you confirm to update?"
                 if ( confirm( ask ) === true )
                 {
                   dbPath.update( {
                     appointmentStatus:"Cancelled"
                   } )
                 }
                 else
                 {
                   aptActions[i].selectedIndex = 0
                 }
                 
               }
   
               else if ( aptActions[ i ].value === "Updated" )
               {
                 updateAppointments.style.transition = "0.5s ease-in-out"
                 updateAppointments.style.right = 0
                 dbPath.get().then( ( doc ) =>
                 {
                   if ( doc.exists )
                   {
                     let updateForm = `
                       <div class="updateFormWrapper grid grid-cols-2 gap-y-3 gap-x-10 mt-10">
   
                         <div class="nameUpdate">
   
                           <span class="mb-3 px-1 text-xs font-semibold"> Name </span>
                           <input type="text" name="nameUpdateCell" id="nameUpdateCell" disabled value="${doc.data().aptName}" class="border-2 border-gray-200 bg-gray-300 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl" />
                         </div>
   
                         <div class="emailUpdate">
   
                           <span class="mb-3 px-1 text-xs font-semibold"> Email </span>
                           <input type="text" name="emailUpdateCell" id="emailUpdateCell" disabled value="${doc.data().aptEmail}" class="border-2 border-gray-200 bg-gray-300 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl">
                         </div>
   
                         <div class="dayUpdate">
   
                           <span class="mb-3 px-1 text-xs font-semibold">Day</span>
                           <select name="aptDay" id="aptDay"
                           class="dayUpdateHolder border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-3 aptDay lg:drop-shadow-none drop-shadow-2xl text-sm">
                             <option value="${doc.data().aptDay}" class="font-semibold">
                               ${doc.data().aptDay}
                             </option>
                             <option value="Monday" class="font-semibold">
                               Monday
                             </option>
                             <option value="Tuesday" class="font-semibold">
                               Tuesday
                             </option>
                             <option value="Wednesday" class="font-semibold">
                               Wednesday
                             </option>
                             <option value="Thursday" class="font-semibold">
                               Thursday
                             </option>
                             <option value="Friday" class="font-semibold">
                               Friday
                             </option>
                             <option value="Saturday" class="font-semibold">
                               Saturday
                             </option>
                             <option value="Sunday" class="font-semibold">
                               Sunday
                             </option>
                         </select>
                         </div>
   
                         <div class="timeSlotUpdate">
   
                           <span class="mb-3 px-1 text-xs font-semibold"> Time Slot </span>
                           <select name="aptTimeSlot" id="aptTimeSlot"
                             class="timeSlotUpdateHolder border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-3 aptTimeSlot lg:drop-shadow-none drop-shadow-2xl text-sm">
                             <option value="${doc.data().aptTimeSlot}" class="font-semibold">
                               ${doc.data().aptTimeSlot}
                             </option>
                             <option value="09:00 - 10:00" class="font-semibold">
                             09:00 - 10:00
                             </option>
                             <option value="10:00 - 11:00" class="font-semibold">
                               10:00 - 11:00
                             </option>
                             <option value="11:00 - 12:00" class="font-semibold">
                               11:00 - 12:00
                             </option>
                             <option value="12:00 - 13:00" class="font-semibold">
                               12:00 - 13:00
                             </option>
                             <option value="13:00 - 14:00" class="font-semibold">
                               13:00 - 14:00
                             </option>
                             <option value="14:00 - 15:00" class="font-semibold">
                               14:00 - 15:00
                             </option>
                             <option value="15:00 - 16:00" class="font-semibold">
                               15:00 - 16:00
                             </option>
                             <option value="16:00 - 17:00" class="font-semibold">
                               16:00 - 17:00
                             </option>
                             <option value="17:00 - 18:00" class="font-semibold">
                               17:00 - 18:00
                             </option>
                             
                           </select>
                         </div>
   
                         <div class="occurrenceUpdate">
   
                           <span class="mb-3 px-1 text-xs font-semibold">Occurrence Type</span>
                           <input type="number" name="occurrenceUpdateCell" id="occurrenceUpdateCell" value="${doc.data().aptOccurrenceType}" class="occurrenceUpdateHolder border-2 border-gray-200 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl">
                         </div>
                       </div>
                       <div class="updateCancelButtons mt-5">
                         <button class="bg-emerald-500 updateButton ml-2 py-3 px-6 text-white text-xs lg:text-md tracking-widest rounded-lg uppercase">Update</button>
                         <button class="bg-rose-500 cancelUpdateButton ml-2 py-3 px-6 text-white text-xs lg:text-md tracking-widest rounded-lg uppercase">Cancel</button>
                       </div>
                     `
                     
                     updateAppointmentsSection.innerHTML = updateForm
   
                     let updateButton = document.querySelector( ".updateButton" )
                     
                     updateButton.onclick = () =>
                     {
                       let occurrenceUpdateHolder = document.querySelector( ".occurrenceUpdateHolder" ),
                           timeSlotUpdateHolder = document.querySelector( ".timeSlotUpdateHolder" ),
                           dayUpdateHolder = document.querySelector(".dayUpdateHolder")
                       
                       dbPath.update( {
                         aptDay: dayUpdateHolder.value,
                         aptTimeSlot: timeSlotUpdateHolder.value,
                         aptOccurrenceType: occurrenceUpdateHolder.value,
                         appointmentStatus:"Updated"
                       } )
   
                       updateAppointments.style.right = "-2000px"
   
                     }
   
                     let cancelUpdateButton = document.querySelector( ".cancelUpdateButton" )
                     cancelUpdateButton.onclick = () =>
                     {
                       aptActions[i].selectedIndex = 0
                       updateAppointments.style.right = "-2000px"
               
                     }
                   }
                 })
                
                 
               }
               
             }
           }
         })
       })
      
    }
   }
 } )()
    