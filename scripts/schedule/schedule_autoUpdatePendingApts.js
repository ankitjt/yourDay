const updatePendingAps = ( doc, aptStartDate ) =>
{
  let currentDate = new Date()
  if ( aptStartDate < currentDate && doc.data().appointmentStatus === 'Pending' )
  {
    let targetRecord = aptsDb.doc( doc.id )
    targetRecord.update( {
      appointmentStatus: 'Pending',
      statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
    } )
  }
}