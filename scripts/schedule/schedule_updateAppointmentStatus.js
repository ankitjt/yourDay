const updateAppointmentStatus = () =>
{
  let aptActions = document.querySelectorAll( '.aptActions' )
  let body = document.getElementsByTagName( 'body' )[ 0 ]
  for ( let i = 0; i < aptActions.length; i++ )
  {
    aptActions[ i ].onchange = () =>
    {
      let selectedRow = aptActions[ i ].parentElement.parentElement
      let selectedRow_UPDATE = aptActions[ i ].parentElement.parentElement.childNodes[ 1 ].childNodes[ 5 ]
      let selectedRow_EMAIL = aptActions[ i ].parentElement.parentElement.childNodes[ 1 ].childNodes[ 3 ]

      let rowId = selectedRow.getAttribute( 'data-id' )
      let dbPath = db.collection( `appointments/${ selectedRow_EMAIL.innerText }/details` ).doc( rowId )
      let ask = 'Do you wish to update status?'

      if ( selectedRow_UPDATE.innerText !== 'UPDATE' )
      {

        if ( aptActions[ i ].value === 'Completed' )
        {
          if ( confirm( ask ) === true )
          {
            dbPath.update( {
              status: 'Completed',
              updatedOn: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) )
            } )
            setTimeout( () =>
            {
              location.reload()
            }, 2000 )
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
              status: 'Paid Cancelled',
              updatedOn: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) ),
            } )
            setTimeout( () =>
            {
              location.reload()
            }, 2000 )
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
              status: 'Free Cancelled',
              updatedOn: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) )
            } )
            setTimeout( () =>
            {
              location.reload()
            }, 2000 )
          }
          else
          {
            aptActions[ i ].selectedIndex = 0
          }
        }
        else if ( aptActions[ i ].value === 'Update' )
        {
          if ( body.offsetWidth < 1023 )
          {
            alert( 'Please view page on a bigger screen as update window will not be visible.' )
            aptActions[ i ].selectedIndex = 0
          }
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
                  aptDay: firebase.firestore.FieldValue.arrayUnion( dayUpdateHolder.value ),
                  aptTimeSlot: firebase.firestore.FieldValue.arrayUnion( timeSlotUpdateHolder.value ),
                  aptOccurrenceType: occurrenceUpdateHolder.value,
                  status: 'Updated',
                  updatedOn: firebase.firestore.FieldValue.arrayUnion( firebase.firestore.Timestamp.fromDate( new Date() ) )
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
      else
      {
        if ( confirm( `This is the last appointment for ${ selectedRow_EMAIL.innerText }, please add more appointments before updating status !!!` ) === true )
        {
          aptActions[ i ].selectedIndex = 0
        }
        else
        {
          aptActions[ i ].selectedIndex = 0
        }
      }

    }
  }
}