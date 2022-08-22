let aptFirstName = document.querySelector(".aptFirstName"),
    aptLastName = document.querySelector(".aptLastName"),
    aptEmail = document.querySelector(".aptEmail"),
    aptMobileNumber = document.querySelector(".aptMobileNumber"),
    aptDay = document.querySelector(".aptDay"),
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
    confirmDay = document.querySelector(".confirmDay"),
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
    // if (aptCategory.value === "" || aptType.value === "" || aptFirstName.value === "" || aptLastName.value === "" || aptEmail.value === "" || aptMobileNumber.value === "" || aptDay.value === "" || aptTimeSlot.value === "" || aptOccurrenceType.value === "" || aptFees.value === "")
     if (aptCategory.value === "" || aptEmail.value === "" || aptDay.value === "" || aptTimeSlot.value === "")
    {
        pageWrapper.classList.add("blur-sm")
        prompts.classList.add("left-1/2")
        prompts.style.transition = "0.5s ease-in-out"
        promptContent.innerText = "All fields are required."
    }

    if (aptCategory.value === "New") {
        db.collection("appointments").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (aptEmail.value === doc.data().aptEmail && aptDay.value === doc.data().aptDay && aptTimeSlot.value === doc.data().aptTimeSlot) {
                    pageWrapper.classList.add("blur-sm")
                    prompts.classList.add("left-1/2")
                    confirmPage.style.left = "-2000px"
                    prompts.classList.remove("bg-emerald-500")
                    prompts.style.transition = "0.5s ease-in-out"
                    promptContent.innerText = "Do you wish to update the slot?"
                    console.log(aptEmail.value, doc.data().aptEmail);
                    console.log(aptDay.value, doc.data().aptDay);
                    console.log(aptTimeSlot.value, doc.data().aptTimeSlot);
                }
                else {
                    if (aptEmail.value !== doc.data().aptEmail && aptDay.value === doc.data().aptDay && aptTimeSlot.value === doc.data().aptTimeSlot) {
                        pageWrapper.classList.add("blur-sm")
                        prompts.classList.add("left-1/2")
                        confirmPage.style.left = "-2000px"
                        prompts.style.transition = "0.5s ease-in-out"
                        prompts.classList.remove("bg-emerald-500")
                        promptContent.innerText = "Slot filled."
                        console.log(aptEmail.value, doc.data().aptEmail);
                        console.log(aptDay.value, doc.data().aptDay);
                        console.log(aptTimeSlot.value, doc.data().aptTimeSlot);
                    }

                    
                    if (aptEmail.value === doc.data().aptEmail && aptDay.value !== doc.data().aptDay && aptTimeSlot.value !== doc.data().aptTimeSlot) {
                        pageWrapper.classList.add("blur-sm")
                        prompts.classList.add("left-1/2")
                        prompts.style.transition = "0.5s ease-in-out"
                        prompts.classList.remove("bg-emerald-500")
                        confirmPage.style.left = "-2000px"
                        promptContent.innerText = "Do you wish to update as user is already given a slot."
                        console.log(aptEmail.value, doc.data().aptEmail);
                        console.log(aptDay.value, doc.data().aptDay);
                        console.log(aptTimeSlot.value, doc.data().aptTimeSlot);
                    }
                    if (aptEmail.value !== doc.data().aptEmail && aptDay.value !== doc.data().aptDay && aptTimeSlot.value !== doc.data().aptTimeSlot) {
                        // pageWrapper.classList.add("blur-sm")
                        // prompts.classList.add("left-1/2")
                        // prompts.style.transition = "0.5s ease-in-out"
                        // prompts.classList.remove("bg-rose-600")
                        // prompts.classList.add("bg-emerald-500")
                        // promptContent.innerText = "Appointment created."
                        confirmPage.style.transition = "0.5s ease-in-out"
                        confirmPage.style.left = 0
                        let firstName = aptFirstName.value
                        let lastName = aptLastName.value
                        confirmName.innerText = firstName + " " + lastName
                        confirmEmail.innerText = aptEmail.value.trim()
                        confirmMobileNumber.innerText = aptMobileNumber.value
                        confirmDay.innerText = aptDay.value
                        confirmTimeSlot.innerText = aptTimeSlot.value
                        confirmAppointmentType.innerText = aptType.value
                        confirmOccurrenceType.innerText = aptOccurrenceType.value
                        confirmCategory.innerText = aptCategory.value
                        console.log(aptEmail.value, doc.data().aptEmail);
                        console.log(aptDay.value, doc.data().aptDay);
                        console.log(aptTimeSlot.value, doc.data().aptTimeSlot);
                    }
                }
                // else if (aptEmail.value === doc.data().aptEmail) {
                //     pageWrapper.classList.add("blur-sm")
                //     prompts.classList.add("left-1/2")
                //     prompts.style.transition = "0.5s ease-in-out"
                //     promptContent.innerText = "Email already registered."
                    
                // }

                // else if (aptEmail.value !== doc.data().aptEmail && aptDay.value === doc.data().aptDay && aptTimeSlot.value === doc.data().aptTimeSlot) {
                //     pageWrapper.classList.add("blur-sm")
                //     prompts.classList.add("left-1/2")
                //     prompts.style.transition = "0.5s ease-in-out"
                //     prompts.classList.remove("bg-emerald-500")
                //     promptContent.innerText = "Slot filled."
                //     console.log(aptEmail.value, doc.data().aptEmail);
                //     console.log(aptDay.value, doc.data().aptDay);
                //     console.log(aptTimeSlot.value, doc.data().aptTimeSlot);
                // }
                    
                // else if (aptEmail.value !== doc.data().aptEmail && aptDay.value !== doc.data().aptDay && aptTimeSlot.value !== doc.data().aptTimeSlot) {
                //     pageWrapper.classList.add("blur-sm")
                //     prompts.classList.add("left-1/2")
                //     prompts.style.transition = "0.5s ease-in-out"
                //     prompts.classList.remove("bg-rose-600")
                //     prompts.classList.add("bg-emerald-500")
                //     promptContent.innerText = "Appointment created."
                //     console.log(aptEmail.value, doc.data().aptEmail);
                //     console.log(aptDay.value, doc.data().aptDay);
                //     console.log(aptTimeSlot.value, doc.data().aptTimeSlot);
                // }
                    
                
                
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
    prompts.classList.remove("left-1/2")
    pageWrapper.classList.remove("blur-sm")
}


    confirmButton.onclick = () => {
        
        db.collection("appointments").add({
            aptCategory: confirmCategory.innerText,
            aptName: confirmName.innerText,
            aptEmail: confirmEmail.innerText,
            aptMobileNumber: confirmMobileNumber.innerText,
            aptDay: confirmDay.innerText,
            aptTimeSlot: confirmTimeSlot.innerText,
            aptType: confirmAppointmentType.innerText,
            aptOccurrenceType: confirmOccurrenceType.innerText,
            aptFees: confirmFees.innerText,
            serverTimeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        aptFirstName.value = ""
        aptLastName.value = ""
        aptEmail.value = ""
        aptMobileNumber.value = ""
        aptDay.selectedIndex = 0
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
        confirmPage.style.transition = "0.5s ease-in-out"
        confirmPage.style.left = "-2000px"
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