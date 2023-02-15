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
                for ( let patient of aptsArr )
                {
                    if ( ptEmail === patient.email )
                    {
                        updateDetailsArr.push( {
                            type: patient.type,
                            mode: patient.mode,
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

                let firstDate = newDate.getDate().toString() < 10 ? '0' + newDate.getDate().toString() : newDate.getDate().toString()
                let firstMonth = ( newDate.getMonth() + 1 ).toString() < 10 ? '0' + ( newDate.getMonth() + 1 ).toString() : ( newDate.getMonth() + 1 ).toString()
                let firstYear = newDate.getFullYear().toString()
                let appointmentDate = [ firstDate ]
                let appointmentMonth = [ firstMonth ]
                let appointmentYear = [ firstYear ]
                let dateInSeconds = [ newDate / 1000 ]
                let uppercaseName = updateRef.name.toUpperCase()

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
                        name: uppercaseName,
                        email: updateRef.email,
                        day: [ updateRef.day ],
                        secondDay: [ "NA" ],
                        timeSlot: [ updateRef.slot ],
                        secondTimeSlot: [ "NA" ],
                        type: updateRef.type,
                        mode: [ updateRef.mode ],
                        createdDateInSeconds: [ dateInSeconds[ i ] ],
                        date: [ appointmentDate[ i ] ],
                        secondDate: [ "NA" ],
                        month: [ appointmentMonth[ i ] ],
                        secondMonth: [ 'NA' ],
                        year: [ appointmentYear[ i ] ],
                        secondYear: [ 'NA' ],
                        status: 'Scheduled',
                        fees: [ Number( updateRef.fees ) ],
                        createdOn: firebase.firestore.Timestamp.fromDate( new Date() ),
                        updatedOn: [ 'NA' ],
                        softDelete: false,
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