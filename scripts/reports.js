let sectionButton = document.querySelectorAll( ".sectionButton" ),
    workContent = document.querySelector( ".workContent" ),
    downArrow = document.querySelector( ".downArrow" ),
    reportByNameFilter = document.querySelector( ".reportByNameFilter" ),
    totalSessionsCount = document.querySelector( ".totalSessionsCount" ),
    totalSupervisionCount = document.querySelector( ".totalSupervisionCount" ),
    totalCancelledCount = document.querySelector( ".totalCancelledCount" ),
    totalRescheduledCount = document.querySelector( ".totalRescheduledCount" );

const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

// Display reports by name 

// for ( let thisSection of sectionButton )
// {
//     thisSection.onclick = () =>
//     {
//         let thisSectionParent = thisSection.parentElement
//         let sectionButtonWrapper = thisSection.childNodes[ 1 ];
//         let downArrowChild = thisSection.childNodes[ 1 ].childNodes[ 3 ]
//         let panel = thisSection.nextElementSibling

//         downArrowChild.classList.toggle( "rotate-180" )
//         if ( panel.style.display === 'block' )
//         {
//             panel.style.display = 'none'
//             sectionButtonWrapper.classList.remove( "border-b-2", "pb-2", "border-slate-100" )
//             thisSectionParent.classList.add( "lg:hover:scale-95", "lg:transition-all", "lg:ease-in-out" )
//         }
//         else
//         {
//             sectionButtonWrapper.classList.add( "border-b-2", "pb-2", "border-slate-100" )
//             panel.style.display = "block"
//             thisSectionParent.classList.remove( "lg:hover:scale-95", "lg:transition-all", "lg:ease-in-out" )
//         }

//     }
// };

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
    slot = document.querySelector( ".slot" ),
    profile = document.querySelector( '.profile' ),
    profileUpdatedOn = document.querySelector( ".profileUpdatedOn" )

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

        updateProfileWrapper.classList.remove( 'left-0' )
        profile.classList.add( 'hidden' )
        workContent.classList.add( 'hidden' )
    }
    else
    {
        profile.classList.remove( 'hidden' )
        workContent.classList.remove( 'hidden' )

        let getName = reportByNameFilter.options[ reportByNameFilter.selectedIndex ].getAttribute( 'data-id' )
        let dbRef = db.collection( "profiles" ).doc( getName )
        const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

        dbRef.get().then( ( doc ) =>
        {
            if ( doc.exists )
            {
                let createdDate = new Date( doc.data().profileCreatedOn.seconds * 1000 )
                let updatedProfileDate =  doc.data().profileUpdateOn === undefined ? 'NA' : new Date( doc.data().profileUpdateOn.seconds * 1000 )
                console.log(updatedProfileDate);

                nameOfUser.innerText = doc.data().aptName
                email.innerText = doc.data().aptEmail
                mobileNumber.innerText = doc.data().aptMobileNumber
                address.innerHTML = ` ${ doc.data().aptAddress === undefined ? 'NA' : doc.data().aptAddress } `
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
                createDate.innerText = createdDate.getDate() + '/' + ( createdDate.getMonth() + 1 ) + '/' + createdDate.getFullYear() + ',' + createdDate.getHours() + ':' + createdDate.getMinutes()
                slot.innerText = days[ doc.data().aptDay - 1 ] + " , " + doc.data().aptTimeSlot;
                profileUpdatedOn.innerHTML = `
                    <span>Last Updated: </span> 
                    <span class='ml-2'> ${ updatedProfileDate === 'NA' ? 'NA' : updatedProfileDate.getDate() + '/' + ( updatedProfileDate.getMonth() + 1 ) + '/' + updatedProfileDate.getFullYear() + ',' + updatedProfileDate.getHours() + ':' + updatedProfileDate.getMinutes() } </span>`

            }
        } )
    }

};

let updateProfileLink = document.querySelector( ".updateProfileLink" ),
    updateProfileWrapper = document.querySelector( ".updateProfileWrapper" ),

    updateName = document.querySelector( ".updateName" ),
    updateAptNature = document.querySelector( ".updateAptNature" ),
    updateEmail = document.querySelector( ".updateEmail" ),
    updateMobileNumber = document.querySelector( ".updateMobileNumber" ),
    updateAddress = document.querySelector( ".updateAddress" ),
    updateCreateDate = document.querySelector( ".updateCreateDate" ),
    updateCategory = document.querySelector( ".updateCategory" ),
    updateOccurrence = document.querySelector( ".updateOccurrence" ),
    updateSlot = document.querySelector( ".updateSlot" ),
    updateFees = document.querySelector( ".updateFees" ),
    
    currentProfileName = '',
    currentProfileEmail = '',
    currentProfileMobileNumber = '',
    currentProfileAddress = '',
    currentProfileFees = ''

updateProfileLink.onclick = () =>
{
    if ( reportByNameFilter.value === 'Select' )
    {
        alert( 'Select Patient name' )
    }
    else
    {
        updateProfileWrapper.classList.add( 'left-0' )
        let getName = reportByNameFilter.options[ reportByNameFilter.selectedIndex ].getAttribute( 'data-id' )
        db.collection( "profiles" ).doc( getName ).get().then( ( doc ) =>
        {
            updateName.value = ''
            updateAptNature.value = ''
            updateEmail.value = ''
            updateAddress.value = ''
            updateCreateDate.value = ''
            updateCategory.value = ''
            updateOccurrence.value = ''
            updateSlot.value = ''
            updateFees.value = ''
            updateMobileNumber.value = ''
            profileUpdatedOn.value = ''



            updateName.value = doc.data().aptName
            updateAptNature.value = doc.data().aptType
            updateEmail.value = doc.data().aptEmail
            updateAddress.value = doc.data().aptAddress === undefined ? 'NA' : doc.data().aptAddress
            updateCreateDate.value = doc.data().aptStartDate
            updateCategory.value = doc.data().aptCategory
            updateOccurrence.value = doc.data().aptOccurrenceType
            updateSlot.value = days[ doc.data().aptDay - 1 ]
            updateFees.value = doc.data().aptFees
            updateMobileNumber.value = doc.data().aptMobileNumber

            currentProfileName = doc.data().aptName
            currentProfileEmail = doc.data().aptEmail
            currentProfileAddress = doc.data().aptAddress
            currentProfileMobileNumber = doc.data().aptMobileNumber
            currentProfileFees = doc.data().aptFees

        }) 
        // db.collection( "profiles" ).where( "aptName", "==", reportByNameFilter.value ).onSnapshot( ( querySnapshot ) =>
        // {
        //     querySnapshot.forEach( ( doc ) =>
        //     {
        //         updateName.value = ''
        //         updateAptNature.value = ''
        //         updateEmail.value = ''
        //         updateAddress.value = ''
        //         updateCreateDate.value = ''
        //         updateCategory.value = ''
        //         updateOccurrence.value = ''
        //         updateSlot.value = ''
        //         updateFees.value = ''
        //         updateMobileNumber.value = ''
        //         profileUpdatedOn.value = ''



        //         updateName.value = doc.data().aptName
        //         updateAptNature.value = doc.data().aptType
        //         updateEmail.value = doc.data().aptEmail
        //         updateAddress.value = doc.data().aptAddress === undefined ? 'NA' : doc.data().aptAddress
        //         updateCreateDate.value = doc.data().aptStartDate
        //         updateCategory.value = doc.data().aptCategory
        //         updateOccurrence.value = doc.data().aptOccurrenceType
        //         updateSlot.value = days[ doc.data().aptDay - 1 ]
        //         updateFees.value = doc.data().aptFees
        //         updateMobileNumber.value = doc.data().aptMobileNumber

        //         currentProfileName = doc.data().aptName
        //         currentProfileEmail = doc.data().aptEmail
        //         currentProfileAddress = doc.data().aptAddress
        //         currentProfileMobileNumber = doc.data().aptMobileNumber
        //         currentProfileFees = doc.data().aptFees

        //     } )
        // } )
    }
}

let updateProfileButton = document.querySelector( ".updateProfileButton" )

updateProfileButton.onclick = () =>
{
    let prompts = document.querySelector( ".prompts" ),
        closePrompts = document.querySelector( ".closePrompts" ),
        profileDetails = document.querySelector( ".profileDetails" ),
        promptContent = document.querySelector( ".promptContent" )

    // Need to add check for address
    if ( currentProfileName === updateName.value && currentProfileEmail === updateEmail.value && currentProfileMobileNumber === updateMobileNumber.value && currentProfileFees === updateFees.value )
    {
        prompts.classList.add( 'left-1/2' )
        profileDetails.classList.add( 'blur-sm' )
        promptContent.innerText = 'No changes found to update'
    }
    else 
    {
        let getName = reportByNameFilter.options[ reportByNameFilter.selectedIndex ].getAttribute( 'data-id' )
        let dbRef = db.collection( "profiles" ).doc( getName )
        console.log( updateName.value, updateEmail.value, updateMobileNumber.value, parseInt( updateFees.value ), getName );
        dbRef.update( {
            aptName: updateName.value,
            aptEmail: updateEmail.value,
            aptMobileNumber: updateMobileNumber.value,
            aptAddress: updateAddress.value,
            aptFees: parseInt( updateFees.value ),
            profileUpdateOn: firebase.firestore.FieldValue.serverTimestamp()
        } )
        prompts.classList.add( 'left-1/2' )
        profileDetails.classList.add( 'blur-sm' )
        promptContent.innerText = 'Profile Updated'
    }

    closePrompts.onclick = () =>
    {
        prompts.classList.remove( 'left-1/2' )
        profileDetails.classList.remove( 'blur-sm' )
    }

}

let closeUpdateProfileWrapper = document.querySelector( ".closeUpdateProfileWrapper" )

closeUpdateProfileWrapper.onclick = () =>
{
    updateProfileWrapper.classList.remove( 'left-0' )
    reportByNameFilter.selectedIndex = 0
    profile.classList.add( 'hidden' )
    workContent.classList.add( 'hidden' )
}