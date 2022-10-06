let sectionButton = document.querySelectorAll( ".sectionButton" ),
    content = document.querySelector( ".content" ),
    downArrow = document.querySelector( ".downArrow" ),
    reportByNameFilter = document.querySelector( ".reportByNameFilter" ),
    totalSessionsCount = document.querySelector( ".totalSessionsCount" ),
    totalSupervisionCount = document.querySelector( ".totalSupervisionCount" ),
    totalCancelledCount = document.querySelector( ".totalCancelledCount" ),
    totalRescheduledCount = document.querySelector( ".totalRescheduledCount" )

// Display reports by name 

for ( let thisSection of sectionButton )
{
    thisSection.onclick = () =>
    {
        let thisSectionParent = thisSection.parentElement
        let sectionButtonWrapper = thisSection.childNodes[ 1 ];
        let downArrowChild = thisSection.childNodes[ 1 ].childNodes[ 3 ]
        let panel = thisSection.nextElementSibling

        downArrowChild.classList.toggle( "rotate-180" )
        if ( panel.style.display === 'block' )
        {
            panel.style.display = 'none'
            sectionButtonWrapper.classList.remove( "border-b-2", "pb-2", "border-slate-100" )
            thisSectionParent.classList.add( "lg:hover:scale-95", "lg:transition-all", "lg:ease-in-out" )
        }
        else
        {
            sectionButtonWrapper.classList.add( "border-b-2", "pb-2", "border-slate-100" )
            panel.style.display = "block"
            thisSectionParent.classList.remove( "lg:hover:scale-95", "lg:transition-all", "lg:ease-in-out" )
        }

    }
}

( () =>
{
    let sessionCounts = [],
        supervisionCounts = [],
        cancelledCounts = [],
        updatedCounts = []

    db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
    {
        querySnapshot.forEach( ( doc ) =>
        {
            if ( doc.data().aptType === 'Session' )
            {
                sessionCounts.push( doc.data().aptType )
            }
            if ( doc.data().aptType === 'Supervision' )
            {
                supervisionCounts.push( doc.data().aptType )
            }

            if ( doc.data().appointmentStatus === 'Cancelled' )
            {
                cancelledCounts.push( doc.data().appointmentStatus )
            }
            if ( doc.data().appointmentStatus === 'Updated' )
            {
                updatedCounts.push( doc.data().appointmentStatus )
            }

        } )
        totalSessionsCount.innerText = sessionCounts.length
        totalSupervisionCount.innerText = supervisionCounts.length
        totalCancelledCount.innerText = cancelledCounts.length
        totalRescheduledCount.innerText = updatedCounts.length
    } )

    db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
    {
        querySnapshot.forEach( ( doc ) =>
        {
            let patientNames = `
            <option value="${ doc.data().aptName }" class="font-semibold" data-id="${ doc.id }">${ doc.data().aptName }</option>
            `
            reportByNameFilter.innerHTML += patientNames

        } )
    } )

} )()

let nameOfUser = document.querySelector( ".name" ),
    email = document.querySelector( ".email" ),
    mobileNumber = document.querySelector( ".mobileNumber" ),
    createDate = document.querySelector( ".createDate" ),
    fee = document.querySelector( ".fee" ),
    category = document.querySelector( ".category" ),
    occurrence = document.querySelector( ".occurrence" ),
    address = document.querySelector( ".address" ),
    slot = document.querySelector( ".slot" )

reportByNameFilter.onchange = () =>
{
    if ( reportByNameFilter.value === "Select" )
    {
        nameOfUser.innerText = "NA"
        email.innerText = "NA"
        mobileNumber.innerText = "NA"
        category.innerText = "NA"
        createDate.innerText = "NA"
        fee.innerText = "NA"
        occurrence.innerText = "NA"
        address.innerText = "NA"
        slot.innerText = "NA"
    }
    else
    {
        let getName = reportByNameFilter.options[ reportByNameFilter.selectedIndex ].getAttribute( 'data-id' )
        let dbRef = db.collection( "profiles" ).doc( getName )
        const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
        dbRef.get().then( ( doc ) =>
        {
            if ( doc.exists )
            {
                let createdDate = new Date( doc.data().profileCreatedOn.seconds * 1000 )

                nameOfUser.innerText = doc.data().aptName
                email.innerText = doc.data().aptEmail
                mobileNumber.innerText = doc.data().aptMobileNumber
                address.innerText = doc.data().aptAddress
                category.innerText = doc.data().aptType
                fee.innerHTML =
                    `<div class='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class='ml-2'>${ doc.data().aptFees } </span>`
                occurrence.innerText = doc.data().aptOccurrenceType
                address.innerText = doc.data().aptAddress
                createDate.innerText = createdDate.getDay() + '/' + ( createdDate.getMonth() + 1 ) + '/' + createdDate.getFullYear() + ',' + createdDate.getHours() + ':' + createdDate.getMinutes()
                slot.innerText = days[ doc.data().aptDay - 1 ] + " , " + doc.data().aptTimeSlot;
                updateProfile()
            }

        } )
    }
}

const updateProfile = () =>
{
    nameOfUser.onclick = () =>
    {
        nameOfUser.setAttribute('type','text')
   }
}