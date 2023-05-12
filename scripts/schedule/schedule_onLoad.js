scheduleGalleryView.innerHTML = `${ loadingAnimation }`
contentWrapper.innerHTML = `${ loadingAnimation }`
let mobileCount = document.querySelector( ".mobileCount" )

setTimeout( () =>
{
  console.log( 'testing' )
  let appointmentCountNumber = []
  let currentMonthAppointments = ''
  let mobileView = ''

  for ( let eachRecord of aptsArr )
  {
    if ( parseInt( eachRecord.appointmentMonth ) - 1 === new Date().getMonth() || parseInt( eachRecord.appointmentMonth ) === parseInt( local_month ) - 1 )
    {
      if ( eachRecord.appointmentStatus === 'Pending' || eachRecord.appointmentStatus === 'Scheduled' )
      {
        console.log( eachRecord.appointmentMonth, new Date().getMonth() )
        appointmentCountNumber.push( eachRecord )
        mobileCount.innerText = "-  " + appointmentCountNumber.length
        mobileView += `
           <div
               class="contentMobile text-gray-400 border-b border-gray-400 p-3 mb-4 text-[10px] font-semibold uppercase tracking-widest">
              
            <p class="aptName flex items-center justify-between my-2">
              <span class="text-indigo-600">Name</span>
              <span class="name">${ eachRecord.appointmentName }</span>
            </p>
            <p class="aptTime flex items-center justify-between my-2">
              <span class="text-indigo-600">Time Slot</span>
              <span class="Time"> ${ eachRecord.appointmentTime }</span>
            </p>
            <p class="aptDate flex items-center justify-between my-2">
              <span class="text-indigo-600">Date</span>
              <span class="Date">${ eachRecord.appointmentDate }</span>
            </p>
            <p class="aptType flex items-center justify-between my-2">
              <span class="text-indigo-600">Type</span>
              <span class="Type">${ eachRecord.appointmentType }</span>
            </p>
            <p class="aptMode flex items-center justify-between my-2">
              <span class="text-indigo-600">Mode</span>
              <span class="Mode">${ eachRecord.appointmentMode }</span>
            </p>
            <p class="aptStatus flex items-center justify-between my-2">
              <span class="text-indigo-600">Status</span>
              <span class="Status">${ eachRecord.appointmentStatus }</span>
            </p>
          </div>
                  
         `
        scheduleGalleryView.innerHTML = mobileView

        // Desktop View
        appointmentCount.innerText = `( ${ appointmentCountNumber.length } )`

        currentMonthAppointments += `

              <div
                  class="content w-full py-3 font-semibold tracking-widest border-b border-gray-300 text-[10px] flex items-center justify-evenly ease-in-out duration-300 hover:bg-indigo-600 hover:text-white cursor-pointer" data-id="${ eachRecord.id }">
                  
                  <span class="w-36 flex flex-col flex-start">
                    <span>${ eachRecord.appointmentName } </span>
                    <span class='lowercase'>${ eachRecord.appointmentEmail }</span>
                    <span class='showUpdate ${ eachRecord.showUpdate === "update" ? 'block' : 'hidden' } bg-indigo-600
                          tracking-widest text-center mt-1 w-fit px-2 py-1 text-white font-semibold rounded-md uppercase text-[10px] cursor-pointer'>
                          ${ eachRecord.showUpdate } 
                    </span>
                  </span>

                  <span class="w-24">${ eachRecord.appointmentTime }</span>

                  <span class="w-24">${ eachRecord.appointmentDate }</span>

                  <span class="w-24">${ eachRecord.appointmentType }</span>

                  <span class="w-24" title='${ eachRecord.appointmentMode === 'Online' ? 'Online' : 'Offline' }'>
                     <img src='../assets/sofa.svg' class='h-5 w-5  ${ eachRecord.appointmentMode === 'Offline' ? 'block' : 'hidden' }' />
                     <img src='../assets/laptop.svg' class='h-5 w-5  ${ eachRecord.appointmentMode === 'Online' ? 'block' : 'hidden' }' />
                  </span>

                  <span class="w-24">
                    ${ eachRecord.appointmentStatus }
                    <div class="statusUpdateTime">
                        <span class="text-[10px] font-semibold">
                          NA
                        </span>
                      </div> 
                  </span>

                  <span class="w-28">
                    <select
                        class="w-full text-xs py-1 text-indigo-600 border border-gray-300 uppercase tracking-widest rounded-lg aptActions focus:ring-indigo-600 focus:border-indigo-600">
                        <option selected>Select</option>
                        <option value="Completed" class='font-semibold text-gray-900'>Completed</option>
                        <option value="Free Cancelled" class='font-semibold text-gray-900'>Free Cancelled</option>
                        <option value="Paid Cancelled" class='font-semibold text-gray-900'>Paid Cancelled</option>
                        <option value="Update" class='font-semibold text-gray-900'>Update</option>
                        <option value="Closed" class='font-semibold text-gray-900'>Closed</option>
                      </select>
                  </span>
                </div>
                

                `
        contentWrapper.innerHTML = currentMonthAppointments

      }
    }
  }

  addMoreAppointments()
  updateAppointmentStatus()

}, 4000 )

