let aptFirstName = document.querySelector(".aptFirstName"),
    aptLastName = document.querySelector(".aptLastName"),
    aptEmail = document.querySelector(".aptEmail"),
    aptMobileNumber = document.querySelector(".aptMobileNumber"),
    aptStartDate = document.querySelector(".aptStartDate"),
    aptFees = document.querySelector(".aptFees"),
    aptType = document.querySelector(".aptType"),
    aptOccurrenceType = document.querySelector(".aptOccurrenceType"),
    aptCategory = document.querySelector(".aptCategory"),
    aptTimeSlot = document.querySelector(".aptTimeSlot"),
    createAptBtn = document.querySelector(".createAptBtn"),
    prompts = document.querySelector(".prompts"),
    pageWrapper = document.querySelector(".pageWrapper"),
    closePrompts = document.querySelector(".closePrompts"),
    promptContent=  document.querySelector(".promptContent"),
    editButton = document.querySelector(".editButton"),
    confirmPage = document.querySelector(".confirmPage"),
    confirmName = document.querySelector(".confirmName"),
    confirmEmail = document.querySelector(".confirmEmail"),
    confirmMobileNumber = document.querySelector(".confirmMobileNumber"),
    confirmStartDate = document.querySelector(".confirmStartDate"),
    confirmTimeSlot = document.querySelector(".confirmTimeSlot"),
    confirmAppointmentType = document.querySelector(".confirmAppointmentType"),
    confirmOccurrenceType = document.querySelector(".confirmOccurrenceType"),
    confirmCategory = document.querySelector(".confirmCategory"),
    confirmFees = document.querySelector(".confirmFees"),
    confirmButton = document.querySelector(".confirmButton")
    


firebase.initializeApp({
        apiKey: "AIzaSyBP_xYkTozmmX7K5b9lO_5LPcI1LLoxxFw",
        authDomain: "yourday-3fcd8.firebaseapp.com",
        projectId: "yourday-3fcd8",
        storageBucket: "yourday-3fcd8.appspot.com",
        messagingSenderId: "216062777762",
        appId: "1:216062777762:web:0470a736d1cd2e8ea57afb"
      });

const db = firebase.firestore()
let result

createAptBtn.onclick = () => {
    if(aptFirstName.value === "" || aptLastName.value === "" || aptEmail.value === "" || aptMobileNumber.value === "" || aptStartDate.value === "" || aptFees.value === "" || aptType.value === "" || aptOccurrenceType.value === "" || aptTimeSlot.value === "" || aptCategory.value === "")
    {
        prompts.style.transition = "0.5s ease-in-out"
        prompts.classList.remove("bg-emerald-500")
        pageWrapper.classList.add("blur-sm")
        prompts.classList.add("left-1/2")
        confirmPage.style.left = "-2000px"
        promptContent.innerText = "Please fill out all the fields."
    }

    else if(aptCategory.value === "New") {
        
        db.collection("appointments").onSnapshot((querySnapshot) => {
        
            querySnapshot.forEach((doc) => {
                if (aptCategory.value === "New" && aptEmail.value.toLowerCase() === doc.data().aptEmail) {
                    prompts.style.transition = "0.5s ease-in-out"
                    prompts.classList.remove("bg-emerald-500")
                    pageWrapper.classList.add("blur-sm")
                    prompts.classList.add("left-1/2")
                    confirmPage.style.left = "-2000px"
                    promptContent.innerText = "Email already linked with an account. For appointment of existing account use category as 'Existing'. "
                }

                if (aptStartDate.value === doc.data().aptStartDate && aptTimeSlot.value === doc.data().aptTimeSlot && aptCategory.value === "New" ) {
                    prompts.style.transition = "0.5s ease-in-out"
                    prompts.classList.remove("bg-emerald-500")
                    pageWrapper.classList.add("blur-sm")
                    prompts.classList.add("left-1/2")
                    confirmPage.style.left = "-2000px"
                    promptContent.innerText = "You already have a appointment at the same slot. "
                    
                }

                // if (aptCategory.value === "Existing" && aptEmail.value === doc.data().aptEmail && aptStartDate.value === doc.data().aptStartDate && aptTimeSlot.value === doc.data().aptTimeSlot) {
                //     prompts.style.transition = "0.5s ease-in-out"
                //     prompts.classList.remove("bg-emerald-500")
                //     pageWrapper.classList.add("blur-sm")
                //     prompts.classList.add("left-1/2")
                //     confirmPage.style.left = "-2000px"
                //     promptContent.innerText = "To change appointment of an existing record go to Schedule section. "
                    
                // }
                    
                else {
                    console.log('this is done');
                    confirmPage.style.left = 0
                    let firstName = aptFirstName.value
                    let lastName = aptLastName.value
                    confirmName.innerText = firstName + " " + lastName
                    confirmEmail.innerText = aptEmail.value.trim()
                    confirmMobileNumber.innerText = aptMobileNumber.value
                    confirmStartDate.innerText = aptStartDate.value
                    confirmTimeSlot.innerText = aptTimeSlot.value
                    confirmAppointmentType.innerText = aptType.value
                    confirmOccurrenceType.innerText = aptOccurrenceType.value
                    confirmCategory.innerText = aptCategory.value
                    confirmFees.innerText = aptFees.value
                    confirmPage.style.transition = "0.5s ease-in-out"
                  
            }
                
            })
        })
    }

    

    
              
 
}

closePrompts.onclick = () => {
    pageWrapper.classList.remove("blur-sm")
    prompts.classList.remove("left-1/2")
}

editButton.onclick = () => {
    confirmPage.style.left = "-2000px"
}


confirmButton.onclick = () => {
    db.collection("appointments").add({
        aptCategory: confirmCategory.innerText,
        aptName: confirmName.innerText,
        aptEmail: confirmEmail.innerText,
        aptMobileNumber: confirmMobileNumber.innerText,
        aptStartDate: confirmStartDate.innerText,
        aptTimeSlot: confirmTimeSlot.innerText,
        aptType: confirmAppointmentType.innerText,
        aptOccurrenceType: confirmOccurrenceType.innerText,
        aptFees: confirmFees.innerText
    })
    confirmPage.style.left = "-2000px !important"
    aptFirstName.value = ""
    aptLastName.value = ""
    aptEmail.value = ""
    aptMobileNumber.value = ""
    aptStartDate.value = ""
    aptType.selectedIndex = 0
    aptTimeSlot.selectedIndex = 0
    aptCategory.selectedIndex = 0
    aptFees.value = ""
    aptOccurrenceType.value = ""
    prompts.style.transition = "0.5s ease-in-out"
    pageWrapper.classList.add("blur-sm")
    prompts.classList.add("left-1/2")
    prompts.classList.add("bg-emerald-500")
    promptContent.innerText = "Appointment Created"
}


// (() => { 
//     let x = 10
//     if (x < 20) {
//         console.log("x is less than 200");
//         return false
//     }
//     if (x === 200) {
//         console.log("x is equal");
//         return false
//     }
//     else {
//         console.log("no result found");
//     }

// })()