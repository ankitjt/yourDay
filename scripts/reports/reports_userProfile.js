patientList.onchange = () =>
{
  if ( patientList.value === "Select" )
  {
    updateProfileWrapper.classList.remove( 'left-0' )
    profile.classList.add( 'hidden' )
    workContent.classList.add( 'hidden' )
  }
  else
  {
    profile.classList.remove( 'hidden' )
    workContent.classList.remove( 'hidden' )

    let getName = patientList.options[ patientList.selectedIndex ].getAttribute( 'data-id' )
    let dbRef = db.collection( "profiles" ).doc( getName )

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