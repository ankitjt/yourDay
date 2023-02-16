const fetchingAppointments = () =>
{
  for ( let email of patientEmail )
  {
    db.collection( `appointments/${ email }/details` ).get().then( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        lastElementOfUpdatedStatus = doc.data().updatedOn.at( -1 )
        lastUpdatedDate = new Date( lastElementOfUpdatedStatus.seconds * 1000 )
        let startHour = doc.data().timeSlot.at( -1 ).split( '-' )
        let splitStartHour = startHour[ 0 ].split( ':' )
        let getSeconds = Number( splitStartHour[ 0 ] ) * 3600
        let appointmentStartDate = new Date( ( doc.data().createdDateInSeconds + getSeconds ) * 1000 )

        aptsArr.push( {
          type: doc.data().type,
          timeSlot: doc.data().timeSlot.at( -1 ),
          slotStartHour: Number( splitStartHour[ 0 ] ),
          day: doc.data().day.at( -1 ),
          name: doc.data().name,
          status: doc.data().status,
          mode: doc.data().mode.at( -1 ),
          convertedDate: appointmentStartDate,
          id: doc.id,
          email: doc.data().email,
          date: doc.data().date.at( -1 ),
          month: doc.data().month.at( -1 ),
          year: doc.data().year.at( -1 ),
          fees: doc.data().fees.at( -1 ),
          showUpdate: doc.data().showUpdate,
          statusUpdate: doc.data().updatedOn.at( -1 )
        } )
      } )
      aptsArr.sort( ( a, b ) =>
      {
        return a.convertedDate - b.convertedDate
      } )
    } )
  }
}
