let aptFirstName = document.querySelector(".aptFirstName"),
    aptLastName = document.querySelector(".aptLastName"),
    aptEmail = document.querySelector(".aptEmail"),
    aptMobileNumber = document.querySelector(".aptMobileNumber"),
    aptStartDate = document.querySelector(".aptStartDate"),
    aptFees = document.querySelector(".aptFees"),
    aptType = document.querySelector(".aptType"),
    aptOccurrenceType = document.querySelector(".aptOccurrenceType"),
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
    confirmFee = document.querySelector(".confirmFee"),
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
    if(aptFirstName.value === "" || aptLastName.value === "" || aptEmail.value === "" || aptMobileNumber.value === "" || aptStartDate.value === "" || aptFees.value === "" || aptType.value === "" || aptOccurrenceType.value === "" || aptTimeSlot.value === "")
    {
        prompts.style.transition = "0.5s ease-in-out"
        prompts.classList.remove("bg-emerald-500")
        pageWrapper.classList.add("blur-sm")
        prompts.classList.add("left-1/2")
        promptContent.innerText = "Please fill out all the fields."
    }
    else {
        confirmName.innerText = aptFirstName.value + " " + aptLastName.value
        confirmEmail.innerText = aptEmail.value
        confirmMobileNumber.innerText = aptMobileNumber.value
        confirmStartDate.innerText = aptStartDate.value
        confirmTimeSlot.innerText = aptTimeSlot.value
        confirmAppointmentType.innerText = aptType.value
        confirmOccurrenceType.innerText = aptOccurrenceType.value
        confirmFee.innerText = aptFees.value
        confirmPage.style.left = 0;
        confirmPage.style.transition = "0.5s ease-in-out"
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
        aptName: aptFirstName.value + " " + aptLastName.value,
        aptEmail: aptEmail.value,
        aptMobileNumber: aptMobileNumber.value,
        aptStartDate: aptStartDate.value,
        aptTimeSlot: aptTimeSlot.value,
        aptType: aptType.value,
        aptOccurrenceType: aptOccurrenceType.value,
        aptFees: aptFees.value
    })
    confirmPage.style.left = "-2000px"
    aptFirstName.value = ""
    aptLastName.value = ""
    aptEmail.value = ""
    aptMobileNumber.value = ""
    aptStartDate.value = ""
    aptType.selectedIndex = 0
    aptTimeSlot.selectedIndex = 0
    aptFees.value = ""
    aptOccurrenceType.value = ""
    prompts.style.transition = "0.5s ease-in-out"
    pageWrapper.classList.add("blur-sm")
    prompts.classList.add("left-1/2")
    prompts.classList.add("bg-emerald-500")
    promptContent.innerText = "Appointment Created"
}