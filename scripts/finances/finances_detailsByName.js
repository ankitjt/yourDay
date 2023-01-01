let patientProfileWrapper = document.querySelector( '.patientProfileWrapper' )
findDetailsByName.onclick = () =>
{
  if ( patientName.innerText === 'By Name' || monthListByName.value === 'Select Month' )
  {
    promptMessages( 'Select name and month.' )
    patientProfileWrapper.classList.add('hidden')
  }
  else
  {
    patientProfileWrapper.classList.remove( 'hidden' )
    
    db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
    {
      querySnapshot.forEach( ( doc ) =>
      {
        if ( patientName.innerText === doc.data().aptName )
        {
          let profileDate = new Date( doc.data().profileCreatedOn.seconds * 1000 )
          let profile = `
                <div class="profileName flex items-center justify-between mb-2">
                  <span class="nameTag">Name</span>
                  <span class="name ml-2 tracking-widest capitalize">${ doc.data().aptName }</span>
                </div>
                <div class="profileEmail flex items-center justify-between mb-2">
                  <span class="emailTag">Email</span>
                  <span class="email ml-2 tracking-widest">${ doc.data().aptEmail }</span>
                </div>
                <div class="profileAddress flex items-center justify-between mb-2">
                  <span class="AddressTag">Address</span>
                  <span class="ml-2 tracking-widest">${ doc.data().aptAddress === undefined ? "NA" : doc.data().aptAddress }</span>
                </div>
                <div class="profileMobileNumber flex items-center justify-between mb-2">
                  <span class="mobileTag">Mobile</span>
                  <span class="mobileNumber ml-2 tracking-widest">+91-${ doc.data().aptMobileNumber }</span>
                </div>
                <div class="profileStartDate flex items-center justify-between mb-2">
                  <span class="startDateTag">Start Date</span>
                  <span class="startDate ml-2 tracking-widest">${ doc.data().aptStartDate }</span>
                </div>
                <div class="profileFee flex items-center justify-between mb-2">
                  <span class="feeTag">Fee</span>
                  <span class="fee ml-2 tracking-widest">${ doc.data().aptFees }</span>
                </div>
                <div class="profileCategory flex items-center justify-between mb-2">
                  <span class="categoryTag">Category</span>
                  <span class="category ml-2 tracking-widest">${ doc.data().aptType }</span>
                </div>
                <div class="profileCategory flex items-center justify-between mb-2">
                  <span class="categoryTag">Occurrence ( per week )</span>
                  <span class="category ml-2">${ doc.data().aptOccurrenceType }</span>
                </div>
                <div class="profileCategory flex items-center justify-between ">
                  <span class="categoryTag">Profile Created on</span>
                  <span class="category ml-2">${ profileDate.getDate() }-${ profileDate.getMonth() + 1 }-${ profileDate.getFullYear() }, ${ profileDate.getHours() }:${ profileDate.getMinutes() }</span>
                </div>
                
              `
          profileDetails.innerHTML = profile
        }
        getCounts()
      } )
    } )

  }

}