let scheduleGalleryView = document.querySelector(".scheduleGalleryView"),
  scheduleTableView = document.querySelector(".scheduleTableView"),
  tableViewIcon = document.querySelector(".tableViewIcon"),
  galleryViewIcon = document.querySelector( ".galleryViewIcon" ),
  tableViewRows = document.querySelector(".tableViewRows")

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
  scheduleTableView.classList.remove("lg:hidden", "hidden")
  }
    
galleryViewIcon.onclick = () => {
  scheduleGalleryView.classList.remove('lg:hidden');
  scheduleTableView.classList.add('lg:hidden', 'hidden');
}

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
    
 (() => {
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
                    <option value="Edit/Update" class="font-semibold">
                      Edit/Update
                    </option>
                  </select>
                </td>
              </tr>
           
        `
       tableViewRows.innerHTML += tableView
       
        let aptActions = document.querySelectorAll( ".aptActions" )
        let tableRow12 = document.querySelector( ".tableRow12" )
        for ( let i = 0; i < aptActions.length; i++ )
        {
          aptActions[ i ].onchange = () =>
          {
            if ( aptActions[ i ].value === "Completed" )
            {
              let selectedRow = aptActions[ i ].parentElement.parentElement
              let rowId = selectedRow.getAttribute( "data-id" )
              
              db.collection( "appointments" ).doc( rowId ).onSnapshot( ( doc ) =>
              {
                db.collection( "appointments" ).doc( rowId ).update( {
                  appointmentStatus: "Completed"
                })
              })
              
               
            }

            if ( aptActions[ i ].value === "Cancelled" )
            {
              let selectedRow = aptActions[ i ].parentElement.parentElement
              let rowId = selectedRow.getAttribute( "data-id" )

              db.collection( "appointments" ).doc( rowId ).onSnapshot( ( doc ) =>
              {
                db.collection( "appointments" ).doc( rowId ).update( {
                  appointmentStatus: "Cancelled"
                })
              })
                
            }
            if ( aptActions[ i ].value === "Edit/Update" )
            {
              let selectedRow = aptActions[ i ].parentElement.parentElement
              let rowId = selectedRow.getAttribute( "data-id" )
              db.collection( "appointments" ).doc( rowId ).onSnapshot( ( doc ) =>
              {
                db.collection( "appointments" ).doc( rowId ).update( {
                  appointmentStatus: "Updated"
                })
              })
                
            }
          }
        }
      })
    })
 } )()
    
