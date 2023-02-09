setTimeout( () =>
{
  let referenceDate = new Date();
  let DATE = referenceDate.getDate()
  let MONTH = referenceDate.getMonth() + 1
  let YEAR = referenceDate.getFullYear()

  let HOUR = referenceDate.getHours()
  let hoursInSeconds = ( HOUR * 60 ) * 60
  let fifteenMinutes = 15 * 60
  let triggerTime = hoursInSeconds - fifteenMinutes

  console.log( triggerTime )

  console.log( 'refDate ', referenceDate )
  let testArr = []

  for ( let nextApt of dataArr )
  {
    let timeSlot = nextApt.slot.split( '-' )
    let splitHour = timeSlot[ 0 ].split( ':' )
    let DB_DATE = parseInt( nextApt.date )
    let DB_MONTH = parseInt( nextApt.month )
    let DB_YEAR = parseInt( nextApt.year )
    let DB_HOUR = parseInt( splitHour[ 0 ] )

    let currentTimeRef = `${ DATE }, ${ MONTH }, ${ YEAR }, ${ HOUR }`
    let DB_timeRef = `${ DB_DATE }, ${ DB_MONTH }, ${ DB_YEAR }, ${ DB_HOUR }`

    if ( DB_DATE >= DATE && DB_MONTH >= MONTH && nextApt.status === 'Scheduled' || nextApt.status === 'Pending' )
    {
      testArr.push( {
        nextApt: new Date( `${ nextApt.year }- ${ nextApt.month }-${ nextApt.date } ` ),
        nextAptHour: DB_HOUR
      } )
    }
  }
  console.log( testArr[ 0 ].nextApt, testArr[ 0 ].nextAptHour )

}, 2000 )