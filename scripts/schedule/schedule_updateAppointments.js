const appointmentsToUpdate = () =>
{
  let aptActions = document.querySelectorAll( '.aptActions' )
  for ( let i = 0; i < aptActions.length; i++ )
  {
    aptActions[ i ].onchange = () =>
    {

      let selectedRow = aptActions[ i ].parentElement.parentElement

      let rowId = selectedRow.getAttribute( 'data-id' )
      let dbPath = db.collection( 'appointments' ).doc( rowId )
      let ask = 'Do you confirm to update?'

      if ( aptActions[ i ].value === 'Completed' )
      {
        if ( confirm( ask ) === true )
        {
          dbPath.update( {
            appointmentStatus: 'Completed',
            statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
          } )
          setTimeout(location.reload(), 5000)
        }
        else
        {
          aptActions[ i ].selectedIndex = 0
        }
      }
      else if ( aptActions[ i ].value === 'Paid Cancelled' )
      {
        if ( confirm( ask ) === true )
        {
          dbPath.update( {
            appointmentStatus: 'Paid Cancelled',
            statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp(),

          } )
          setTimeout( location.reload(), 5000 )
        }
        else
        {
          aptActions[ i ].selectedIndex = 0
        }
      }
      else if ( aptActions[ i ].value === 'Free Cancelled' )
      {
        if ( confirm( ask ) === true )
        {
          dbPath.update( {
            appointmentStatus: 'Free Cancelled',
            statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
          } )
          setTimeout( location.reload(), 5000 )
        }
        else
        {
          aptActions[ i ].selectedIndex = 0
        }
      }
      else if ( aptActions[ i ].value === 'Updated' )
      {
        pb.classList.remove( 'lg:left-10' )
        let updateAppointments = document.querySelector( '.updateAppointments' )
        updateAppointments.style.transition = '0.5s ease-in-out'
        updateAppointments.style.left = 0
        dbPath.get().then( ( doc ) =>
        {
          if ( doc.exists )
          {
            updateForm( doc )

            let updateButton = document.querySelector( '.updateButton' )

            updateButton.onclick = () =>
            {
              let occurrenceUpdateHolder = document.querySelector(
                '.occurrenceUpdateHolder'
              ),
                timeSlotUpdateHolder = document.querySelector(
                  '.timeSlotUpdateHolder'
                ),
                dayUpdateHolder =
                  document.querySelector( '.dayUpdateHolder' )

              dbPath.update( {
                aptDay: dayUpdateHolder.value,
                aptTimeSlot: timeSlotUpdateHolder.value,
                aptOccurrenceType: occurrenceUpdateHolder.value,
                appointmentStatus: 'Updated',
                statusUpdatedTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
              } )

              updateAppointments.style.right = '-2000px'
            }

            let cancelUpdateButton = document.querySelector(
              '.cancelUpdateButton'
            )
            cancelUpdateButton.onclick = () =>
            {
              pb.classList.add( 'left-2', 'lg:left-5' )
              pb.classList.remove( 'right-10' )
              aptActions[ i ].selectedIndex = 0
              updateAppointments.style.left = '-2000px'
            }
          }
        } )
      }

    }
  }
}