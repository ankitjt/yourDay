const createAppointmentsAndProfile = ( arr ) =>
{
  console.log( {
    mode: arr.MODE,
    type: arr.TYPE,
    cycle: arr.CYCLE,
    name: arr.NAME,
    time: arr.TIME,
  } );

  let count = [ 1, 2, 3, 4 ]
  let allDates = document.querySelectorAll( '.allDates' )
  let radios1 = document.querySelector( 'input[name="weekType"]:checked' )

  for ( let date of allDates )
  {
    let firstStartDate = Intl.DateTimeFormat( 'en-GB', { dateStyle: 'short' } ).format( new Date( date.value ) )
    console.log( firstStartDate );
    let futureDates = [ { [ date.getAttribute( 'title' ) ]: firstStartDate } ]
    const refStartDate = new Date( date.value )

    for ( let i = 0; i < count.length; i++ )
    {
      let finalFutureDates = Intl.DateTimeFormat( 'en-GB', { dateStyle: 'short' } ).format( refStartDate.setDate( refStartDate.getDate() + parseInt( radios1.value ) ) )
      console.log( finalFutureDates );
      // console.log( {
      //   mode: arr.MODE,
      //   type: arr.TYPE,
      //   cycle: arr.CYCLE,
      //   name: arr.NAME,
      //   time: arr.TIME,
      //   [ date.getAttribute( 'title' ) ]: finalFutureDates
      // } );
      futureDates.push( {
        [ date.getAttribute( 'title' ) ]: finalFutureDates
      } )
    }

    // for ( let date of futureDates )
    // {
    //   console.log( {
    //     name: arr.fullName
    //   } );
    // }

  }
}