let financePatientList = document.querySelector( ".financePatientList" ),
  profileDetails = document.querySelector( ".profileDetails" );


( () =>
{
  db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      let patientList = `
        
        <option value="${ doc.data().aptName }" class="font-semibold" data-id="${ doc.id }">${ doc.data().aptName }</option>
      `
      financePatientList.innerHTML += patientList
    } )
  } )
} )();

financePatientList.onchange = () =>
{

  getCounts()

  db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      if ( financePatientList.value === "" )
      {
        profileDetails.innerText = "Select Patient name"
      }
      if ( financePatientList.value === doc.data().aptName )
      {
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
            <span class="category ml-2">${ new Date( doc.data().profileCreatedOn.seconds * 1000 ) }</span>
          </div>
          
        `;
        profileDetails.innerHTML = profile;
      }
    } )
  } )
}

const getCounts = () =>
{
  let totalMoneySessionsIndividual = document.querySelector( ".totalMoneySessionsIndividual" ),
    countOfSessionsIndividual = document.querySelector( ".countOfSessionsIndividual" ),
    moneyScheduled = document.querySelector( ".moneyScheduled" ),
    moneyPaidCancelled = document.querySelector( ".moneyPaidCancelled" ),
    moneyCompleted = document.querySelector( ".moneyCompleted" ),
    moneyTotal = document.querySelector( ".moneyTotal" ),
    moneyFreeCancelled = document.querySelector( ".moneyFreeCancelled" )
  let namesArr = []
  let totalFees = []
  let totalScheduled = []
  let totalPaidCancelled = []
  let totalFreeCancelled = [ "0" ]
  let moneyFromPaidCancelledArray = []
  let totalMoneyFromCompletedSessions,
    moneyFromPaidCancelledSessions
    moneyBreakDownWrapper = document.querySelector( ".moneyBreakDownWrapper" )
    


  db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      if ( financePatientList.value === "" )
      {
        moneyBreakDownWrapper.innerText = "Select Patient name"
      }
      if ( financePatientList.value === doc.data().aptName )
      {
        namesArr.push( doc.data().aptName )

        if ( doc.data().appointmentStatus === "Scheduled" )
        {
          totalScheduled.push( doc.data().appointmentStatus )
          moneyScheduled.innerText = totalScheduled.length
        }

        if ( doc.data().appointmentStatus === "Paid Cancelled" )
        {
          totalPaidCancelled.push( doc.data().appointmentStatus )
          moneyPaidCancelled.innerText = totalPaidCancelled.length < 1 ? "-" : totalPaidCancelled.length
          moneyFromPaidCancelledArray.push( doc.data().aptFees )
          moneyFromPaidCancelledSessions = moneyFromPaidCancelledArray.reduce( ( a, b ) => a + b, 0 )
          
        }

        if ( doc.data().appointmentStatus === "Free Cancelled" )
        {
          totalFreeCancelled.push( doc.data().appointmentStatus )
          console.log( totalFreeCancelled.length )
          moneyFreeCancelled.innerText = totalFreeCancelled.length === "" ? "-" : totalFreeCancelled.length
        }

        if ( doc.data().appointmentStatus === "Completed" )
        {
          totalFees.push( doc.data().aptFees )
          totalMoneyFromCompletedSessions = totalFees.reduce( ( a, b ) => a + b, 0 )

          moneyCompleted.innerHTML = totalFees.length
        }
        moneyTotal.innerHTML = `
          <div class="flex"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> ${ totalMoneyFromCompletedSessions + moneyFromPaidCancelledSessions }
              </div>
        `

      }
    } )
  } )
}