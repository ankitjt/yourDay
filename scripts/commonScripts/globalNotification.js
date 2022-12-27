let body = document.getElementsByTagName( 'body' )
let openedNotification = document.querySelector( '.openedNotification' )
let notification = document.querySelector( '.notification' )
let notificationCenter = document.querySelector( '.notificationCenter' )
let theDayD = document.createElement( 'div' )
let theDayP = document.createElement( 'div' )
let theDayC = document.createElement( 'div' )
let final = document.createElement( 'div' )
let notificationOpener = document.querySelector('.notificationOpener')

notificationOpener.onclick = () =>
{
  openedNotification.classList.toggle( 'hidden' )
  notification.classList.toggle( 'hidden' )
  notificationCenter.classList.toggle( 'hidden' )

  // Total Appointments of the day 
  let theDay = `
    <div class="theDay text-gray-300 mt-5">

          <h1 class="text-xs uppercase text-gray-500 font-semibold mb-5 border-b-2 border-gray-500 pb-1">
            Today
          </h1>

          <div class="countWrapper text-xs text-gray-500">
            <div class="sessionForTheDay mb-2 ">
              You have <b class="text-gray-300">5 sessions</b> today.
            </div>
            <div class="supervisionForTheDay">
              You have <b class="text-gray-300">2 supervisions</b> today.
            </div>
          </div>

        </div>
  `

  // Total Pending 
  let pending = `
    <div class="theDay text-gray-300 mt-10">

          <h1 class="text-xs uppercase text-gray-500 font-semibold mb-5 border-b-2 border-gray-500 pb-1">
            Pending
          </h1>

          <div class="countWrapper text-xs text-gray-500">
            <div class="pendingSessionForTheDay mb-2 ">
              You have <b class="text-gray-300">15 sessions</b> pending.
            </div>
            <div class="pendingSupervisionForTheDay">
              You have <b class="text-gray-300">2 supervisions</b> pending.
            </div>
          </div>

        </div>
  `
  // Total Completed
  let completed = `
    <div class="theDay text-gray-300 mt-10">
        
          <h1 class="text-xs uppercase text-gray-500 font-semibold mb-5 border-b-2 border-gray-500 pb-1">
            Completed
          </h1>
        
          <div class="countWrapper text-xs text-gray-500">
            <div class="completedSessionForTheDay mb-2 ">
              You have <b class="text-gray-300">5 sessions</b> completed.
            </div>
            <div class="completedSupervisionForTheDay">
              You have <b class="text-gray-300">2 supervisions</b> completed.
            </div>
          </div>
        
        </div>
  `
  theDayD.innerHTML = theDay
  theDayP.innerHTML = pending
  theDayC.innerHTML = completed
  final.innerHTML = theDayD.innerHTML + theDayP.innerHTML + theDayC.innerHTML

  notificationCenter.appendChild( final )

};


( () =>
{
 
} )()