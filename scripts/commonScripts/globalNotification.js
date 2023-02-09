let body = document.getElementsByTagName( 'body' )[ 0 ]
let openedNotification = document.querySelector( '.openedNotification' )
let notification = document.querySelector( '.notification' )
let notificationCenter = document.querySelector( '.notificationCenter' )
let notificationContent = document.querySelector( '.notificationContent' )
let theDayD = document.createElement( 'div' )
let theDayP = document.createElement( 'div' )
let theDayC = document.createElement( 'div' )
let final = document.createElement( 'div' )
let finalWrapper = document.createElement( 'finalWrapper' )
let notificationOpener = document.querySelector( '.notificationOpener' )

// Hiding notification center on outside click.
window.onclick = ( e ) =>
{

  if ( !e.target.matches( '.notification' ) &&
    !e.target.matches( '.notificationCenter' ) &&
    !e.target.matches( '.notificationContent' ) &&
    !notificationCenter.classList.contains( 'hidden' ) )
  {
    notificationCenter.classList.add( 'hidden' )
    openedNotification.classList.toggle( 'hidden' )
    notification.classList.toggle( 'hidden' )
  }
}

notificationOpener.onclick = () =>
{
  openedNotification.classList.toggle( 'hidden' )
  notification.classList.toggle( 'hidden' )
  notificationCenter.classList.toggle( 'hidden' )

  // Total Appointments of the day 
  db.collection( 'appointments' ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      let sessionsForDay = []

      let theDay = `
          <div class="theDay text-blue-600 md:text-gray-300">

                <h1 class="text-xs uppercase text-blue-600 md:text-gray-500 font-semibold mb-5 border-b md:border-gray-300 border-blue-500 pb-1">
                  Today
                </h1>

                <div class="countWrapper text-xs text-blue-600 md:text-gray-500 font-medium">
                  <div class="sessionForTheDay mb-2 ">
                    You have <b class="text-red-400 md:text-gray-300">5 sessions</b> today.
                  </div>
                  <div class="supervisionForTheDay">
                    You have <b class="text-red-400 md:text-gray-300">2 supervisions</b> today.
                  </div>
                </div>

              </div>
        `

      // Total Pending 
      let pending = `
          <div class="theDayPending text-blue-600 md:text-gray-300 mt-10">

                <h1 class="text-xs uppercase text-blue-600 md:text-gray-500 font-semibold mb-5 border-b md:border-gray-300 border-blue-500 pb-1">
                  Pending
                </h1>

                <div class="countWrapper text-xs text-blue-600 md:text-gray-500 font-medium">
                  <div class="pendingSessionForTheDay mb-2 ">
                    You have <b class="text-red-400 md:text-gray-300">15 sessions</b> pending.
                  </div>
                  <div class="pendingSupervisionForTheDay">
                    You have <b class="text-red-400 md:text-gray-300">2 supervisions</b> pending.
                  </div>
                </div>

              </div>
        `
      // Total Completed
      let completed = `
          <div class="theDayCompleted text-blue-600 md:text-gray-300 mt-10">

                <h1 class="text-xs uppercase text-blue-600 md:text-gray-500 font-semibold mb-5 border-b md:border-gray-300 border-blue-500 pb-1">
                  Completed
                </h1>

                <div class="countWrapper text-xs text-blue-600 md:text-gray-500 font-medium">
                  <div class="completedSessionForTheDay mb-2 ">
                    You have <b class="text-red-400 md:text-gray-300">5 sessions</b> completed.
                  </div>
                  <div class="completedSupervisionForTheDay">
                    You have <b class="text-red-400 md:text-gray-300">2 supervisions</b> completed.
                  </div>
                </div>

              </div>
        `
      theDayD.innerHTML = theDay
      theDayP.innerHTML = pending
      theDayC.innerHTML = completed
      final.innerHTML = theDayD.innerHTML + theDayP.innerHTML + theDayC.innerHTML
      final.classList.add( 'finalWrapper' )

      notificationContent.appendChild( final )
    } )
  } )
}

// Getting next session in queue.
let arrDates = []
let dates;


let getNextSession = () =>
{
  let currentDate = Math.round( new Date() / 1000 )

  db.collection( 'appointments' ).orderBy( 'dateInMills' ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      if ( doc.data().dateInMills[ doc.data().dateInMills.length - 1 ] >= currentDate )
      {
        dates = `${ doc.data().aptName } on ${ doc.data().aptStartDate[ doc.data().aptStartDate.length - 1 ] }/${ doc.data().aptStartMonth[ doc.data().aptStartMonth.length - 1 ] }/${ doc.data().aptStartYear[ doc.data().aptStartYear.length - 1 ] } from ${ doc.data().aptTimeSlot[ doc.data().aptTimeSlot.length - 1 ] }`
        arrDates.push( dates )
      }
    } )
    promptMessages( 'Next appointment is with ' + arrDates[ 0 ] )
  } )
}

// getNextSession()

