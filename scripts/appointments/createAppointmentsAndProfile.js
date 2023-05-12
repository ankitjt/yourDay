const createAppointmentsAndProfile = () =>
{

  let count = [ 1, 2, 3, 4 ]
  let allDates = document.querySelectorAll( '.allDates' )
  let radios1 = document.querySelector( 'input[name="weekType"]:checked' )
  let counters = [ 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth' ]
  let finalSlots = document.querySelectorAll( '.finalSlots' )

  let timeSlotArr = []
  for ( let timeSlot of finalSlots )
  {
    timeSlotArr.push( timeSlot.value )
  }


  for ( let [ index, date ] of allDates.entries() )
  {
    let firstStartDate = new Date( date.value )
    let finalArr = [ firstStartDate ]
    const refStartDate = new Date( date.value )

    for ( let i = 0; i < count.length; i++ )
    {
      let setDate = Math.floor( refStartDate.setDate( refStartDate.getDate() + parseInt( radios1.value ) ) / 1000 )
      let finalFutureDates = new Date( setDate * 1000 )
      finalArr.push( finalFutureDates )
    }

    // Data sent to Db for creating appointments
    for ( let j = 0; j < finalArr.length; j++ )
    {
      console.log( j )
      let dayOfApt = Intl.DateTimeFormat( 'en', { weekday: 'long' } ).format( new Date( finalArr[ j ] ) )

      const user = firebase.auth().currentUser
      if ( user )
      {
        db.collection( `${ user.displayName }+${ user.uid }` ).doc( 'appointments' ).collection( 'details' ).add( {
          appointmentNumbers: counters[ index ] + ' ' + 'Appointment',
          name: [ apt.name.value ],
          mode: [ apt.nature.value ],
          type: apt.type.value,
          email: [ apt.email.value ],
          status: 'Scheduled',
          fees: [ Number( apt.fees.value ) ],
          softDelete: [ false ],
          showUpdate: j === 4 ? 'update' : '',
          appointmentDate: [ finalArr[ j ] ],
          dayOfApt: [ dayOfApt ],
          timeOfApt: [ timeSlotArr[ index ] ]
        } )

          .catch( err =>
          {
            promptMessages( err )
          } )
      }
    }
    promptMessages( 'Appointment created successfully', 'success' )
    apt__confirmPage.page.classList.remove( 'left-0' )
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
  }
}