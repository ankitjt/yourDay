const fetchingAppointments = () =>
{
  let user = firebase.auth().currentUser

  if ( user )
  {

    db.collection( `${ user.displayName }+${ user.uid }/appointments/details` ).get()
      .then( ( querySnapshot ) =>
      {
        querySnapshot.forEach( ( doc ) =>
        {

          let convertedDate = Intl.DateTimeFormat( 'en-GB', { dateStyle: 'long' } ).format( new Date( doc.data().appointmentDate.at( -1 ).seconds * 1000 ) )
          let appointmentMonth = Intl.DateTimeFormat( 'en-GB', { month: '2-digit' } ).format( new Date( doc.data().appointmentDate.at( -1 ).seconds * 1000 ) )

          aptsArr.push( {
            appointmentID: doc.id,
            appointmentDate: convertedDate,
            appointmentMonth: appointmentMonth,
            appointmentNumbers: doc.data().appointmentNumbers,
            dayOfApt: doc.data().dayOfApt.at( -1 ),
            appointmentName: doc.data().name.at( -1 ),
            appointmentEmail: doc.data().email.at( -1 ),
            appointmentFees: parseInt( doc.data().fees.at( -1 ) ),
            appointmentMode: doc.data().mode.at( -1 ),
            appointmentStatus: doc.data().status,
            appointmentTime: doc.data().timeOfApt.at( -1 ),
            appointmentType: doc.data().type,
            oldFormatDates: new Date( doc.data().appointmentDate.at( -1 ).seconds * 1000 ),
            showUpdate: doc.data().showUpdate === '' ? 'NA' : doc.data().showUpdate

          } )

          aptsArr.sort( ( a, b ) =>
          {
            return a.oldFormatDates - b.oldFormatDates
          } )
        } )


      } )
      .catch( err => console.log( err ) )


  }
}
