
( () =>
{
  let createPanicButton = document.createElement( 'span' )
  createPanicButton.classList.add( 'pb123' )
  createPanicButton.innerHTML = `<span
  class="fixed z-50 md:p-3 p-4 md:text-2xl text-base font-semibold text-white uppercase bg-rose-600 rounded-full cursor-pointer pb animate-bounce app-name bottom-10 right-12 ">yD</span>`
  document.getElementsByTagName( 'body' )[ 0 ].appendChild( createPanicButton )
  let pb = document.querySelector( '.pb' )
  setTimeout( () =>
  {
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
  }, 2000 )
} )()