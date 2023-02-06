const addMoreAppointments = (  ) =>
{
    let showUpdate = document.querySelectorAll( '.showUpdate' )
    for ( let update of showUpdate )
    {
        update.onclick = () =>
        {
            
            let currentUserData = [];
            let ptName = update.parentElement.childNodes[ 3 ].innerText
            console.log(dataArr)
            for ( let userDetails of dataArr )
            {
                if ( ptName === userDetails.email )
                {
                    currentUserData.push( userDetails )
                }
            }
            console.log( currentUserData )
         
            let lastEntry = currentUserData.at( -1 )
            // console.log(lastEntry)

            let dbEntry = db.collection( `appointments/${ lastEntry.email }/details` )

            let newDate = lastEntry.convertedDate
            let firstDay = newDate.getDate().toString()
            let firstMonth = ( newDate.getMonth() + 1 ).toString()
            let firstYear = newDate.getFullYear().toString()
            let appointmentDate = [ firstDay ]
            let appointmentMonth = [ firstMonth ]
            let appointmentYear = [ firstYear ]
            let newDateInSec = newDate / 1000
            let uppercaseName = lastEntry.name.toUpperCase()
            let dateInMills = [ newDateInSec ]
            let convertFees = parseInt( lastEntry.fees )

            let addMoreCount = [ 1, 2, 3, 4, 5 ]

            for ( let i = 0; i < addMoreCount.length; i++ )
            {

                // Getting future Date, Month, Year .
                let futureAppointments = Math.floor( newDate.setDate( newDate.getDate() + 7 ) / 1000 )
                dateInMills.push( futureAppointments )
                let some = futureAppointments
                let someTimes = new Date( some * 1000 )

                let futureDate = someTimes.getDate().toString()
                let finalFutureDate
                futureDate < 10 ? finalFutureDate = '0' + futureDate : finalFutureDate = futureDate
                appointmentDate.push( finalFutureDate )

                let futureMonth = ( someTimes.getMonth() + 1 ).toString()
                let finalFutureMonth
                futureMonth < 10 ? finalFutureMonth = '0' + futureMonth : finalFutureMonth = futureMonth
                appointmentMonth.push( finalFutureMonth )

                let futureYear = someTimes.getFullYear().toString()
                appointmentYear.push( futureYear )

                let futureDates = `${ finalFutureDate }/${ finalFutureMonth }/${ futureYear }`
                // console.log( futureDates )

                // Creating Appointment for One Occurrence
                // dbEntry.add( {
                //     aptName: uppercaseName,
                //     aptEmail: apt.email.value,
                //     aptDay: [ apt.day.value ],
                //     aptSecondDay: "NA",
                //     aptTimeSlot: [ apt.timeSlot.value ],
                //     aptSecondTimeSlot: "NA",
                //     aptType: apt.type.value,
                //     dateInMills: [ dateInMills[ i ] ],
                //     aptStartDate: [ appointmentDate[ i ] ],
                //     aptStartMonth: [ appointmentMonth[ i ] ],
                //     aptStartYear: [ appointmentYear[ i ] ],
                //     aptSecondStartDate: "NA",
                //     appointmentStatus: 'Scheduled',
                //     aptFees: convertFees,
                //     serverTimeStamp: firebase.firestore.Timestamp.fromDate( new Date() ),
                //     statusUpdatedTimeStamp: [ 'NA' ],
                //     showUpdate: count[ i ] === 5 ? 'update' : ''
                // } )

            }
           
        }
        currentUserData = []
    }

}
