const updatePendingAps = ( doc, aptStartDate ) =>
{

  let currentDate = new Date()
  let x = new Date()
  // console.log( aptStartDate.toLocaleTimeString() )
  if ( aptStartDate < currentDate )
  {
    let targetRecord = aptsDb.doc( doc.id )
    targetRecord.update( {
      appointmentStatus: 'Pending',
      statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
    } )
  }
}
