const addMoreAppointments = () =>
{
    let showUpdate = document.querySelectorAll( ".showUpdate" )
    for ( let updateButton of showUpdate )
    {
        updateButton.onclick = () =>
        {
            let updateDetailsArr = []
            let ptEmail = updateButton.parentElement.childNodes[ 3 ].innerText
            let confirmMessage = `Do you wish to add 5 more appointments for ${ ptEmail }`
            if ( confirm( confirmMessage ) === true )
            {
                for ( let patient of dataArr )
                {
                    if ( ptEmail === patient.email )
                    {
                        updateDetailsArr.push( {
                            type: patient.type,
                            slot: patient.slot,
                            day: patient.day,
                            name: patient.name,
                            status: patient.status,
                            newConvertedDate: patient.convertedDate,
                            id: patient.id,
                            email: patient.email,
                            date: patient.date,
                            month: patient.month,
                            year: patient.year,
                            showUpdate: patient.showUpdate,
                            fees: patient.fees
                        } )
                    }
                }

                let updateRef = updateDetailsArr.at( -1 )
                let dbRef = db.collection( `appointments/${ updateRef.email }/details` )

                let newCount = [ 1, 2, 3, 4, 5, 6 ]
                let newDate = updateRef.newConvertedDate

                let firstDay = newDate.getDate().toString()
                let firstMonth = ( newDate.getMonth() + 1 ).toString()
                let firstYear = newDate.getFullYear().toString()
                let appointmentDate = [ firstDay ]
                let appointmentMonth = [ firstMonth ]
                let appointmentYear = [ firstYear ]
                let newDateInSec = newDate / 1000
                let uppercaseName = updateRef.name.toUpperCase()
                let dateInSeconds = newDateInSec
                let convertFees = updateRef.fees

                for ( let i = 1; i < newCount.length; i++ )
                {

                    // Getting future Date, Month, Year .
                    let futureAppointments = Math.floor( newDate.setDate( newDate.getDate() + 7 ) / 1000 )
                    dateInSeconds.push( futureAppointments )
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

                    // Creating Appointment for One Occurrence
                    dbRef.add( {
                        aptName: uppercaseName,
                        aptEmail: updateRef.email,
                        aptDay: [ updateRef.day ],
                        aptSecondDay: "NA",
                        aptTimeSlot: [ updateRef.slot ],
                        aptSecondTimeSlot: "NA",
                        aptType: updateRef.type,
                        dateInSeconds: dateInSeconds[ i ],
                        aptStartDate: [ appointmentDate[ i ] ],
                        aptStartMonth: [ appointmentMonth[ i ] ],
                        aptStartYear: [ appointmentYear[ i ] ],
                        aptSecondStartDate: "NA",
                        appointmentStatus: 'Scheduled',
                        aptFees: convertFees,
                        serverTimeStamp: firebase.firestore.Timestamp.fromDate( new Date() ),
                        statusUpdatedTimeStamp: [ 'NA' ],
                        showUpdate: newCount[ i ] === 6 ? 'update' : ''
                    } )
                    setTimeout( () =>
                    {
                        location.reload()
                    }, 2000 )
                }
                updateButton.classList.add( 'hidden' )

                // Updating the status of last appointment for the user
                let dbRef_LASTAPT = db.collection( `appointments/${ updateRef.email }/details` ).doc( updateRef.id )
                dbRef_LASTAPT.update( {
                    showUpdate: 'updated',
                    addedAppointmentsOn: firebase.firestore.Timestamp.fromDate( new Date() )
                } )
            }


        }
    }
}