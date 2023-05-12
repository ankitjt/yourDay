const createAppointmentsAndProfile = () =>
{

  let count = [ 1, 2, 3, 4 ]
  let allDates = document.querySelectorAll( '.allDates' )
  let radios1 = document.querySelector( 'input[name="weekType"]:checked' )
  let counters = [ 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth' ]

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
    console.log( finalArr );
    for ( let j = 0; j < finalArr.length; j++ )
    {
      let dayOfApt = Intl.DateTimeFormat( 'en', { weekday: 'long' } ).format( new Date( finalArr[ j ] ) )
      console.log( {
        appointmentNumbers: counters[ index ] + ' ' + 'Appointment',
        name: apt.email.value,
        mode: [ apt.nature.value ],
        email: apt.email.value,
        status: 'Scheduled',
        fees: [ Number( apt.fees.value ) ],
        softDelete: false,
        showUpdate: count[ j ] === 5 ? 'update' : '',
        appointmentDate: finalArr[ j ],
        dayOfApt: dayOfApt
      } )
    }
  }
}