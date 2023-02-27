let body = document.getElementsByTagName( 'body' )[ 0 ];
( () =>
{
  let createPanicButton = document.createElement( 'span' )
  createPanicButton.innerHTML = `<span
        class="absolute z-50 p-3 text-2xl font-medium text-white uppercase bg-rose-400 rounded-full cursor-pointer pb animate-bounce bottom-6 app-name right-12 lg:left-10 lg:right-0 w-fit ">yD</span>`
  body.appendChild( createPanicButton )
  let pb = document.querySelector( '.pb' )
  pb.onclick = () =>
  {
    let currentTime = new Date()
    let currentOffset = currentTime.getTimezoneOffset()
    let ISTOffset = 330   // IST offset UTC +5:30 
    let ISTTime = new Date( currentTime.getTime() + ( ISTOffset + currentOffset ) * 60000 )

    // ISTTime now represents the time in IST coordinates
    let hoursIST = ISTTime.toLocaleTimeString()

    let finalTime = currentTime.getDate() + '-' + ( currentTime.getMonth() + 1 ) + '-' + currentTime.getFullYear() + ' , ' + hoursIST

    emailjs.init( '11bMyXUdLWDCysXm0' )
    emailjs.send( "service_ra7p8t7", "template_ipghn4q", {
      time: finalTime
    } )
  }

} )()