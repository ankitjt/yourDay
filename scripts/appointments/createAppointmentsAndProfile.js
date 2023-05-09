const createAppointmentsAndProfile = ( arr ) =>
{
  console.log( arr );

  let count = [ 1, 2, 3, 4, 5 ]
  let allDates = document.querySelectorAll( '.allDates' )
  let futureDates = []
  let radios1 = document.querySelector( 'input[name="weekType"]:checked' )

  for ( let date of allDates )
  {
    const refStartDate = new Date( date.value )

    for ( let i = 0; i < count.length; i++ )
    {
      let finalFutureDates = Intl.DateTimeFormat( 'en-GB', { dateStyle: 'short' } ).format( refStartDate.setDate( refStartDate.getDate() + parseInt( radios1.value ) ) )
      console.log( finalFutureDates );
      futureDates.push( {
        [ date.getAttribute( 'title' ) ]: finalFutureDates
      } )
    }
    console.log( futureDates );

    for ( let [ index, futureDate ] of futureDates.entries() )
    {
      console.log( index, futureDate )

    }
  }
}