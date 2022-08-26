let sectionButton = document.querySelectorAll(".sectionButton"),
    content = document.querySelector(".content"),
    downArrow = document.querySelector( ".downArrow" ),
    reportByNameFilter = document.querySelector( ".reportByNameFilter" ),
    totalSessionsCount = document.querySelector( ".totalSessionsCount" ),
    totalSupervisionCount = document.querySelector( ".totalSupervisionCount" ),
    totalCancelledCount = document.querySelector(".totalCancelledCount"),
    totalRescheduledCount = document.querySelector(".totalRescheduledCount")
    

firebase.initializeApp({
        apiKey: "AIzaSyBP_xYkTozmmX7K5b9lO_5LPcI1LLoxxFw",
        authDomain: "yourday-3fcd8.firebaseapp.com",
        projectId: "yourday-3fcd8",
        storageBucket: "yourday-3fcd8.appspot.com",
        messagingSenderId: "216062777762",
        appId: "1:216062777762:web:0470a736d1cd2e8ea57afb"
    });
  
const db = firebase.firestore()

// Display reports by name 

for(let thisSection of sectionButton) {
    thisSection.onclick = () => {
        let thisSectionParent = thisSection.parentElement
        let sectionButtonWrapper = thisSection.childNodes[1];
        let downArrowChild = thisSection.childNodes[1].childNodes[3]
        let panel = thisSection.nextElementSibling

        downArrowChild.classList.toggle("rotate-180")
        if(panel.style.display === 'block') {
            panel.style.display = 'none'
            sectionButtonWrapper.classList.remove("border-b-2", "pb-2", "border-slate-100")
            thisSectionParent.classList.add("lg:hover:scale-95", "lg:transition-all", "lg:ease-in-out")
        }
        else {
            sectionButtonWrapper.classList.add("border-b-2", "pb-2", "border-slate-100")
            panel.style.display = "block"
            thisSectionParent.classList.remove("lg:hover:scale-95", "lg:transition-all", "lg:ease-in-out")
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
                sessionCounts.push(doc.data().aptType)
            }
             if ( doc.data().aptType === 'Supervision' )
            {
                supervisionCounts.push(doc.data().aptType)
            }

            if ( doc.data().appointmentStatus === 'Cancelled' )
            {
                cancelledCounts.push(doc.data().appointmentStatus)
            }
            if ( doc.data().appointmentStatus === 'Updated' )
            {
                updatedCounts.push(doc.data().appointmentStatus)
            }
            let patientNames = `
            <option value="${doc.id}" class="font-semibold" data-id="${doc.id}">${doc.data().aptName}</option>
            `
            reportByNameFilter.innerHTML += patientNames
        })
        totalSessionsCount.innerText = sessionCounts.length
        totalSupervisionCount.innerText = supervisionCounts.length
        totalCancelledCount.innerText = cancelledCounts.length
        totalRescheduledCount.innerText = updatedCounts.length
    })
    
} )()

let nameOfUser = document.querySelector(".name"),
    email = document.querySelector(".email"),
    mobileNumber = document.querySelector(".mobileNumber"),
    fee = document.querySelector(".fee"),
    category = document.querySelector(".category"),
    occurrence = document.querySelector( ".occurrence" ),
    slot = document.querySelector( ".slot" )
    
reportByNameFilter.onchange = () =>
{   
    if ( reportByNameFilter.value === "Select" )
    {
            nameOfUser.innerText = "NA"
            email.innerText = "NA"
            mobileNumber.innerText = "NA"
            category.innerText = "NA"
            fee.innerText = "NA"
            occurrence.innerText = "NA"
            slot.innerText = "NA"
    }
    else
    {
        let dbRef = db.collection( "appointments" ).doc( reportByNameFilter.value )
        dbRef.get().then( ( doc ) =>
        {
            if ( doc.exists )
            {
                nameOfUser.innerText = doc.data().aptName
                email.innerText = doc.data().aptEmail
                mobileNumber.innerText = doc.data().aptMobileNumber
                category.innerText = doc.data().aptType
                fee.innerText = doc.data().aptFees
                occurrence.innerText = doc.data().aptOccurrenceType
                slot.innerText = doc.data().aptDay + " , " + doc.data().aptTimeSlot
            }
        })
    }
}