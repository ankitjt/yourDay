let createFutureAppointments = () =>
{
  // Getting selected date in the array 
  let newDate = new Date( apt.startDate.value )
  let firstDay = newDate.getDate().toString()
  let firstMonth = ( newDate.getMonth() + 1 ).toString()
  let firstYear = newDate.getFullYear().toString()
  let appointmentDate = [ firstDay ]
  let appointmentMonth = [ firstMonth ]
  let appointmentYear = [ firstYear ]
  let newDateInSec = newDate / 1000
  let uppercaseName = apt.name.value.toUpperCase()
  let dateInSeconds = newDateInSec
  let convertFees = parseInt( apt.fees.value )

  let count = [ 1, 2, 3, 4, 5 ]

  for ( let i = 0; i < count.length; i++ )
  {

    // Getting future Date, Month, Year .
    let futureAppointments = Math.floor( newDate.setDate( newDate.getDate() + 7 ) / 1000 )
    dateInSeconds.push( futureAppointments )
    let some = futureAppointments
    let someTimes = new Date( some * 1000 )

    let futureDate = someTimes.getDate().toString()
    let finalFutureDate
    futureDate < 10 ? finalFutureDate = '0' + futureDate : finalFutureDate = futureDate
    appointmentDate.push( finalFutureDate )

    let futureMonth = ( someTimes.getMonth() + 1 ).toString()
    let finalFutureMonth
    futureMonth < 10 ? finalFutureMonth = '0' + futureMonth : finalFutureMonth = futureMonth
    appointmentMonth.push( finalFutureMonth )

    let futureYear = someTimes.getFullYear().toString()
    appointmentYear.push( futureYear )

    // Creating Appointment for One Occurrence
    db.collection( 'appointments' ).doc( `${ apt.email.value }` ).collection( 'details' ).add( {
      aptName: uppercaseName,
      aptEmail: apt.email.value,
      aptDay: [ apt.day.value ],
      aptSecondDay: "NA",
      aptTimeSlot: [ apt.timeSlot.value ],
      aptSecondTimeSlot: "NA",
      aptType: apt.type.value,
      dateInSeconds: dateInSeconds[ i ],
      aptStartDate: [ appointmentDate[ i ] ],
      aptStartMonth: [ appointmentMonth[ i ] ],
      aptStartYear: [ appointmentYear[ i ] ],
      aptSecondStartDate: "NA",
      appointmentStatus: 'Scheduled',
      aptFees: convertFees,
      serverTimeStamp: firebase.firestore.Timestamp.fromDate( new Date() ),
      statusUpdatedTimeStamp: [ 'NA' ],
      showUpdate: count[ i ] === 5 ? 'update' : ''
    } )

  }
}