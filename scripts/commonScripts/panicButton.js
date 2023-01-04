
pb.onclick = () =>
{
  let currentTime = new Date()
  let currentOffset = currentTime.getTimezoneOffset()
  let ISTOffset = 330   // IST offset UTC +5:30 
  let ISTTime = new Date( currentTime.getTime() + ( ISTOffset + currentOffset ) * 60000 )

  // ISTTime now represents the time in IST coordinates
  let hoursIST = ISTTime.getHours()
  let ampm = hoursIST >= 12 ? 'PM' : 'AM';
  let minutesIST = ISTTime.getMinutes()

  let finalTime = currentTime.getDate() + '-' + ( currentTime.getMonth() + 1 ) + '-' + currentTime.getFullYear() + ' , ' + hoursIST + ':' + minutesIST + ' ' + ampm
  
  emailjs.init( '11bMyXUdLWDCysXm0' )
  emailjs.send( "service_ra7p8t7", "template_ipghn4q", {
    time: finalTime
  })
}