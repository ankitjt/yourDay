let financeMonthFilter = document.querySelector( '.financeMonthFilter' ),
  countOfSessions = document.querySelector( '.countOfSessions' ),
  totalMoneyBySessions = document.querySelector( '.totalMoneyBySessions' ),
  countOfSupervisions = document.querySelector( '.countOfSupervisions' ),
  totalMoneyBySupervisions = document.querySelector( '.totalMoneyBySupervisions' )
  

financeMonthFilter.onchange = () =>
{
  let totalMoneySessionArr = [],
    totalMoneySupervisionArr = []
  db.collection( 'appointments' ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      let getMonth = new Date( doc.data().aptStartDate * 1000 )
      let monthForDb = getMonth.getMonth() + 1

      if ( financeMonthFilter.value === monthForDb.toString() )
      {
        // For sessions
        if ( doc.data().aptType === 'Session' && doc.data().appointmentStatus === 'Completed' && doc.data().softDelete !== true )
        {
          
            totalMoneySessionArr.push( doc.data().aptFees )
            countOfSessions.innerText = totalMoneySessionArr.length
            totalMoneyBySessions.innerText = totalMoneySessionArr.reduce( ( a, b ) => a + b, 0 )
            console.log(doc.data().aptName, doc.data().aptFees);
        }

        // For supervision

        if ( doc.data().aptType === 'Supervision' && doc.data().appointmentStatus === 'Completed' && doc.data().softDelete !== true )
        {

          totalMoneySupervisionArr.push( doc.data().aptFees )
          countOfSupervisions.innerText = totalMoneySupervisionArr.length
          totalMoneyBySupervisions.innerText = totalMoneySupervisionArr.reduce( ( a, b ) => a + b, 0 )

        }

      }
      else
      {
        
      }
    } )
  } )
  countOfSessions.innerText = 0
  totalMoneyBySessions.innerText = 0
  countOfSupervisions.innerText = 0
  totalMoneyBySupervisions.innerText = 0
}