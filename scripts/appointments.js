let aptFirstName = document.querySelector(".aptFirstName"),
    aptLastName = document.querySelector(".aptLastName"),
    aptEmail = document.querySelector(".aptEmail"),
    aptMobileNumber = document.querySelector(".aptMobileNumber"),
    aptStartTimeDate = document.querySelector(".aptStartTimeDate"),
    aptFees = document.querySelector(".aptFees"),
    aptType = document.querySelector(".aptType"),
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
    confirmStartTimeDate = document.querySelector(".confirmStartTimeDate"),
    confirmAppointmentType = document.querySelector(".confirmAppointmentType"),
    confirmFee = document.querySelector(".confirmFee"),
    confirmButton = document.querySelector(".confirmButton")
    


createAptBtn.onclick = (e) => {
    if(aptFirstName.value === "" || aptLastName.value === "" || aptEmail.value === "" || aptMobileNumber.value === "" || aptStartTimeDate.value === "" || aptFees.value === "" || aptType.value === "")
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
        confirmStartTimeDate.innerText = aptStartTimeDate.value
        confirmAppointmentType.innerText = aptType.value
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
    confirmPage.style.left = "-500px"
}

confirmButton.onclick = () => {
    confirmPage.style.left = "-500px"
    aptFirstName.value = ""
    aptLastName.value = ""
    aptEmail.value = ""
    aptMobileNumber.value = ""
    aptStartTimeDate.value = ""
    aptType.value = ""
    aptFees.value = ""
    prompts.style.transition = "0.5s ease-in-out"
    pageWrapper.classList.add("blur-sm")
    prompts.classList.add("left-1/2")
    prompts.classList.add("bg-emerald-500")
    promptContent.innerText = "Appointment Created"
}