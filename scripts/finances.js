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

financePatientList.onchange = () => {
  
  
  getCounts()

  db.collection("profiles").onSnapshot((querySnapshot) => {
    querySnapshot.forEach( ( doc ) =>
    {
      if ( financePatientList.value === "" )
      {
        profileDetails.innerText = "Select Patient name"
      }
      if (financePatientList.value === doc.data().aptName) {
        let profile = `
          <div class="profileName flex items-center justify-between mb-2">
                 <span class="nameTag">Name</span>
                 <span class="name ml-2 tracking-widest capitalize">${
                  doc.data().aptName
                }</span>
              </div>
              <div class="profileEmail flex items-center justify-between mb-2">
                <span class="emailTag">Email</span>
                <span class="email ml-2 tracking-widest">${
                  doc.data().aptEmail
                }</span>
              </div>
              <div
                class="profileMobileNumber flex items-center justify-between mb-2"
              >
                <span class="mobileTag">Mobile</span>
                <span class="mobileNumber ml-2 tracking-widest"
                  >+91-${doc.data().aptMobileNumber}</span
                >
              </div>
              <div
                class="profileStartDate flex items-center justify-between mb-2"
              >
                <span class="startDateTag">Start Date</span>
                <span class="startDate ml-2 tracking-widest">${
                  doc.data().aptStartDate
                }</span>
              </div>
              <div class="profileFee flex items-center justify-between mb-2">
                <span class="feeTag">Fee</span>
                <span class="fee ml-2 tracking-widest">${
                  doc.data().aptFees
                }</span>
              </div>
              <div class="profileCategory flex items-center justify-between mb-2">
                <span class="categoryTag">Category</span>
                <span class="category ml-2 tracking-widest">${
                  doc.data().aptType
                }</span>
              </div>
              <div class="profileCategory flex items-center justify-between mb-2">
                <span class="categoryTag">Occurrence ( per week )</span>
                <span class="category ml-2">${
                  doc.data().aptOccurrenceType
                }</span>
              </div>
              <div class="profileCategory flex items-center justify-between ">
                <span class="categoryTag">Profile Created on</span>
                <span class="category ml-2">${
                 new Date( doc.data().profileCreatedOn.seconds * 1000 )
                }</span>
              </div>
        `;
        profileDetails.innerHTML = profile;
      }
    })
  })
}

const getCounts = () =>
{
  let totalMoneySessionsIndividual = document.querySelector( ".totalMoneySessionsIndividual" ),
  countOfSessionsIndividual = document.querySelector( ".countOfSessionsIndividual" )
  let namesArr = []
  let totalFees  = []
  db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
  {
    querySnapshot.forEach( ( doc ) =>
    {
      if ( financePatientList.value === doc.data().aptName )
      {
        namesArr.push( doc.data().aptName )

        if ( doc.data().appointmentStatus === "Completed" )
        {
          totalFees.push( doc.data().aptFees )
          let sum = totalFees.reduce( ( a, b ) => a + b, 0 )
          totalMoneySessionsIndividual.innerText = sum
        }

        countOfSessionsIndividual.innerText = namesArr.length
        
      }
    })
  })
}