let sectionButton = document.querySelectorAll( ".sectionButton" ),
    workContent = document.querySelector( ".workContent" ),
    downArrow = document.querySelector( ".downArrow" ),
    reportByNameFilter = document.querySelector( ".reportByNameFilter" ),
    totalSessionsCount = document.querySelector( ".totalSessionsCount" ),
    totalSupervisionCount = document.querySelector( ".totalSupervisionCount" ),
    totalCancelledCount = document.querySelector( ".totalCancelledCount" ),
    totalRescheduledCount = document.querySelector( ".totalRescheduledCount" ),
    totalPendingCount = document.querySelector( ".totalPendingCount" )

const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];

( () =>
{
    let sessionCounts = [],
        supervisionCounts = [],
        cancelledCounts = [],
        updatedCounts = [],
        pendingCounts = []

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
            if ( doc.data().appointmentStatus === 'Pending' )
            {
                pendingCounts.push( doc.data().appointmentStatus )
            }
        } )

        totalSessionsCount.innerText = sessionCounts.length
        totalSupervisionCount.innerText = supervisionCounts.length
        totalCancelledCount.innerText = cancelledCounts.length
        totalRescheduledCount.innerText = updatedCounts.length
        totalPendingCount.innerText = pendingCounts.length
        
    } )

    db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
    {

        let allNames = document.querySelectorAll( '.something' )
        for ( const name123 of allNames )
        {
            name123.remove()
        }

        querySnapshot.forEach( ( doc ) =>
        {
            if ( doc.data().softDelete !== true )
            {
                let patientNames = `
                <option value="${ doc.data().aptName }" class="font-semibold something" data-id="${ doc.id }" >${ doc.data().aptName }</option>
                `
                reportByNameFilter.innerHTML += patientNames
            }
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
        const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]

        // Getting user profile details.

        dbRef.get().then( ( doc ) =>
        {
            if ( doc.exists )
            {
                let createdDate = new Date( doc.data().profileCreatedOn.seconds * 1000 )
                let updatedProfileDate = doc.data().profileUpdateOn === undefined ? 'NA' : new Date( doc.data().profileUpdateOn.seconds * 1000 )

                nameOfUser.innerText = doc.data().aptName
                email.innerText = doc.data().aptEmail
                mobileNumber.innerText = parseInt( doc.data().aptMobileNumber )
                address.innerHTML = ` ${ doc.data().aptAddress === undefined ? 'NA' : doc.data().aptAddress } `
                category.innerText = doc.data().aptType
                fee.innerHTML =
                    `<div class='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class='ml-2'>${ parseInt( doc.data().aptFees ) } </span>`
                occurrence.innerText = doc.data().aptOccurrenceType
                address.innerText = doc.data().aptAddress
                createDate.innerText = createdDate.getDate() + '/' + ( createdDate.getMonth() + 1 ) + '/' + createdDate.getFullYear() + ',' + createdDate.getHours() + ':' + createdDate.getMinutes()
                slot.innerText = days[ doc.data().aptDay - 1 ] + " , " + doc.data().aptTimeSlot
                profileUpdatedOn.innerHTML = `
                    <span>Last Updated: </span> 
                    <span class='ml-2'> ${ updatedProfileDate === 'NA' ? 'NA' : updatedProfileDate.getDate() + '/' + ( updatedProfileDate.getMonth() + 1 ) + '/' + updatedProfileDate.getFullYear() + ',' + updatedProfileDate.getHours() + ':' + updatedProfileDate.getMinutes() } </span>

                    `
            }
        } )
    }

}

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

// Filling selected user profile details in update window.

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
            let feesToNum = parseInt( updateFees.value )

            updateMobileNumber.value = doc.data().aptMobileNumber
            let mobileToNum = parseInt( updateMobileNumber.value )

            currentProfileName = doc.data().aptName
            currentProfileEmail = doc.data().aptEmail
            currentProfileAddress = doc.data().aptAddress
            currentProfileMobileNumber = mobileToNum
            currentProfileFees = feesToNum

        } )
    }
}

// Updating user profile.

let updateProfileButton = document.querySelector( ".updateProfileButton" )

updateProfileButton.onclick = () =>
{
    let prompts = document.querySelector( ".prompts" ),
        closePrompts = document.querySelector( ".closePrompts" ),
        profileDetails = document.querySelector( ".profileDetails" ),
        promptContent = document.querySelector( ".promptContent" )

    // *TODO: need to add check for address

    if ( currentProfileName === updateName.value && currentProfileEmail === updateEmail.value && currentProfileMobileNumber === parseInt( updateMobileNumber.value ) && currentProfileFees === parseInt( updateFees.value ) )
    {
        prompts.classList.add( 'left-1/2' )
        profileDetails.classList.add( 'blur-sm' )
        promptContent.innerText = 'No changes found to update'
    }
    else 
    {
        let getName = reportByNameFilter.options[ reportByNameFilter.selectedIndex ].getAttribute( 'data-id' )
        let dbRef = db.collection( "profiles" ).doc( getName )

        dbRef.update( {
            aptName: updateName.value,
            aptEmail: updateEmail.value,
            aptMobileNumber: updateMobileNumber.value,
            aptAddress: updateAddress.value,
            aptFees: parseInt( updateFees.value ),
            profileUpdateOn: firebase.firestore.FieldValue.serverTimestamp()
        } )

        // ** This needs to be updated, adding information to the db is to be configured.

        let whatChanged = document.querySelector( ".whatChanged" )
        if ( updateName.value !== nameOfUser.innerHTML )
        {
            whatChanged.innerText += 'You updated name.'
        }
        if ( updateEmail.value !== email.innerHTML )
        {
            whatChanged.innerText += 'You updated Email.'
        }

        // Updating user profile in Db appointments.

        let newDbRef = db.collection( 'appointments' )
        newDbRef.onSnapshot( ( querySnapshot ) =>
        {
            querySnapshot.forEach( ( doc ) =>
            {
                var batch = db.batch()
                if ( doc.data().aptName === nameOfUser.innerText )
                {
                    let newDb = newDbRef.doc( doc.id )
                    batch.update( newDb, { 'aptName': updateName.value } )
                    batch.commit()
                }
            } )

        } )

        let listRef = firebase.storage().ref( `ptNotes` )
        listRef.listAll().then( ( res ) =>
        {
            res.prefixes.forEach( ( folderRef ) =>
            {
                var batch = db.batch()
                if ( folderRef.name === nameOfUser.innerText )
                {   
                    let userBucket = listRef.child(nameOfUser.innerText)
                    batch.update( userBucket, folderRef.name === nameOfUser.innerText )
                    batch.commit()
                }
            })
        })
        // listRef.onSnapshot( ( querySnapshot ) =>
        // {
        //     querySnapshot.forEach( ( doc ) =>
        //     {
        //         var batch = db.batch()
        //         if()
        //     })
        // })

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

// Closing update profile wrapper.

let closeUpdateProfileWrapper = document.querySelector( ".closeUpdateProfileWrapper" )

closeUpdateProfileWrapper.onclick = () =>
{
    updateProfileWrapper.classList.remove( 'left-0' )
    reportByNameFilter.selectedIndex = 0
    profile.classList.add( 'hidden' )
    workContent.classList.add( 'hidden' )
}

// Deleting a user's profile.

let deleteProfileButton = document.querySelector( '.deleteProfileButton' )
let deletePrompts = document.querySelector( '.deletePrompts' )
let confirmDeleteProfile = document.querySelector( '.confirmDeleteProfile' )

deleteProfileButton.onclick = () =>
{
    deletePrompts.classList.add( 'left-0' )
}

confirmDeleteProfile.onclick = () =>
{
    let deleteProfileReason = document.querySelector( '.deleteProfileReason' )
    let getName = reportByNameFilter.options[ reportByNameFilter.selectedIndex ].getAttribute( 'data-id' )
    let dbRef = db.collection( "profiles" ).doc( getName )
    if ( deleteProfileReason.value === '' )
    {
        alert( 'Please provide reason to delete..' )
    }
    else
    {
        dbRef.update( {
            softDelete: true,
            reasonForDelete: deleteProfileReason.value,
            profileDeletedOn: firebase.firestore.FieldValue.serverTimestamp()
        } )
        alert( 'Profile Deleted successfully.' )

        deleteProfileReason.value = ''
        deletePrompts.classList.remove( 'left-0' )
        updateProfileWrapper.classList.remove( 'left-0' )
        profile.classList.add( 'hidden' )
        workContent.classList.add( 'hidden' )
    }
}

// Go back on in delete profile prompt.

let goBack = document.querySelector( '.goBack' )

goBack.onclick = () =>
{
    deletePrompts.classList.remove( 'left-0' )
}