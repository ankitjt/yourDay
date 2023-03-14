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

        let secondStartHour = doc.data().secondTimeSlot.at( -1 ).split( '-' )
        let secondSplitStartHour = secondStartHour[ 0 ].split( ':' )
        let secondGetSeconds = Number( secondSplitStartHour[ 0 ] ) * 3600

        let appointmentStartDate = new Date( ( doc.data().createdDateInSeconds + getSeconds ) * 1000 )
        let secondAppointmentStartDate = new Date( ( doc.data().createdDateInSeconds + secondGetSeconds ) * 1000 )

        aptsArr.push( {
          type: doc.data().type,
          timeSlot: doc.data().timeSlot.at( -1 ),
          secondTimeSlot: doc.data().secondTimeSlot.at( -1 ),
          slotStartHour: Number( splitStartHour[ 0 ] ),
          secondSlotStartHour: Number( secondSplitStartHour[ 0 ] ),
          day: doc.data().day.at( -1 ),
          secondDay: doc.data().secondDay.at( -1 ),
          name: doc.data().name,
          status: doc.data().status,
          mode: doc.data().mode.at( -1 ),
          convertedDate: appointmentStartDate,
          secondConvertedDate: secondAppointmentStartDate,
          id: doc.id,
          email: doc.data().email,
          date: doc.data().date.at( -1 ),
          secondDate: doc.data().secondDate.at( -1 ),
          month: doc.data().month.at( -1 ),
          secondMonth: doc.data().secondMonth.at( -1 ),
          year: doc.data().year.at( -1 ),
          secondYear: doc.data().secondYear.at( -1 ),
          firstSessionOn: doc.data().firstSessionOn,
          secondFirstSessionOn: doc.data().secondFirstSessionOn,
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
