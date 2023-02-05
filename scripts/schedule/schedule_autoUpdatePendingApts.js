const autoUpdatePendingAppointments = ( doc, aptStartDate ) =>
{

  let currentDate = new Date()
  let userTimeSlot = doc.data().aptTimeSlot[ 0 ]
  let splitSlot = userTimeSlot.split( '-' )
  let trimmedSlot = splitSlot.map( str => str.trim() )
  let hourSplit = trimmedSlot[ 0 ].split( ':' )
  let finalHourSplit = Number( hourSplit[ 0 ] )

  if ( aptStartDate < currentDate && currentDate.getHours() > finalHourSplit && doc.data().appointmentStatus !== 'Pending')
  {
    let targetRecord = aptsDb.doc( doc.id )

    targetRecord.update( {
      appointmentStatus: 'Pending',
      statusUpdatedTimeStamp: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) )
    } )
  }
}
