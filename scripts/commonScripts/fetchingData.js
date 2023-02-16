const fetchingData = () =>
{
  for ( let email of patientEmail )
  {
    db.collection( `appointments/${ email }/details` ).get().then( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        let appointmentStartDate = new Date( doc.data().dateInMills.at( -1 ) * 1000 )
        lastElementOfUpdatedStatus = doc.data().statusUpdatedTimeStamp.at( -1 )
        lastUpdatedDate = new Date( lastElementOfUpdatedStatus.seconds * 1000 )
        let currentDate = new Date()
        let currentMonth = currentDate.getMonth()
        let lastMonth = currentDate.getMonth() - 1
        let aptStartDateMonth = appointmentStartDate.getMonth()

        aptsArr.push( {
          type: doc.data().aptType,
          slot: doc.data().aptTimeSlot.at( -1 ),
          day: doc.data().aptDay.at( -1 ),
          name: doc.data().aptName,
          status: doc.data().appointmentStatus,
          convertedDate: appointmentStartDate,
          id: doc.id,
          email: doc.data().aptEmail,
          date: doc.data().aptStartDate.at( -1 ),
          month: doc.data().aptStartMonth.at( -1 ),
          year: doc.data().aptStartYear.at( -1 ),
          fees: doc.data().aptFees,
          showUpdate: doc.data().showUpdate,
          statusUpdate: doc.data().statusUpdatedTimeStamp.at( -1 )
        } )
      } )
      aptsArr.sort( ( a, b ) =>
      {
        return a.convertedDate - b.convertedDate
      } )
    } )
  }
}
