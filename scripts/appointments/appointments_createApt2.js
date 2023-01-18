emergencyRelation.onchange = () =>
{
    if ( apt.emergencyRelation.value === 'Others' ) 
    {
        apt.relationDetails.classList.remove( 'hidden' )
    }
    else
    {
        apt.relationDetails.classList.add( 'hidden' )
        apt.relationDetails.value = ''
    }
}

let inputTags = document.querySelectorAll( 'input' )
let selectTags = document.querySelectorAll( 'select' )


apt.create.onclick = () =>
{
    let selectedDate = new Date( apt.startDate.value ).toLocaleDateString()
    let currentDate = new Date().toLocaleDateString()
    let currentHour = new Date()

    for ( let input of inputTags )
    {
        if ( input.value === '' )
        {
            console.log( 'all fields are required.' )
        }
        else
        {
            console.log(input.value);
        }
    }

    // Getting start hour of the slot 
    let userTimeSlot = apt.timeSlot.value
    let splitSlot = userTimeSlot.split( '-' )
    let trimmedSlot = splitSlot.map( str => str.trim() )
    let hourSplit = trimmedSlot[ 0 ].split( ':' )
    let finalHourSplit = Number( hourSplit[ 0 ] )

    if ( finalHourSplit < currentHour.getHours() )
    {
        console.log( 'Back hour.' )
    }
    if ( finalHourSplit === currentHour.getHours() )
    {
        console.log( 'Current Hour' )
    }
    if ( finalHourSplit > currentHour.getHours() )
    {
        console.log( 'Future Hour.' )
    }
}