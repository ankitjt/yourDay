emergencyRelation.onchange = () =>
{
    if ( apt.emergencyRelation.value === 'Others' ) 
    {
        apt.relationDetails.classList.remove( 'hidden' )
    }
    else
    {
        apt.relationDetails.classList.add( 'hidden' )
        apt.relationDetails.value = ''
    }
}

let inputTags = document.querySelectorAll( 'input' )
let selectTags = document.querySelectorAll( 'select' )

apt.create.onclick = () =>
{
    let allFilled = true;
    let p_category = document.querySelector( ".aptCategory" )
    let aptStartDate1 = new Date( apt.startDate.value )
    let currentMonth = aptStartDate1.getMonth() + 1
    let currentYear = aptStartDate1.getFullYear()
    let currentDay = aptStartDate1.getDate()
    let finalCurrentDate = currentDay + ' - ' + currentMonth + ' - ' + currentYear
    let aptEmailOfUser = apt.email.value
    let correctEmail = aptEmailOfUser.toLowerCase()

    p_category.value = 'New'
    promptsWrapper.innerHTML = ''

    for ( let input of inputTags )
    {
        input.classList.remove( 'md:border-red-600' )
        if ( input.value === "" && !input.classList.contains( 'hidden' ) )
        {
            promptMessages( `${ input.getAttribute( 'title' ) } is blank.`, 'error' )
            input.classList.add( 'md:border-red-600' )
            allFilled = false;
        }
    }

    if ( allFilled )
    {
        apt__confirmPage.page.classList.remove( '-left-[2000px]' )
        for ( let input of inputTags )
        {
            input.classList.remove( 'md:border-red-600' )
        }
    }

    for ( let select of selectTags )
    {
        select.classList.remove( 'md:border-red-600' )
        if ( select.value === "" )
        {
            promptMessages( `${ select.getAttribute( 'title' ) } is blank.`, 'error' )
            allFilled = false;
            select.classList.add( 'md:border-red-600' )
        }
    }

    if ( allFilled )
    {
        apt__confirmPage.page.classList.remove( '-left-[2000px]' )
        for ( let select of selectTags )
        {
            select.classList.remove( 'md:border-red-600' )
        }
    }


    apt__confirmPage.name.innerText = aptName.value.trim()
    apt__confirmPage.email.innerText = correctEmail.trim()
    apt__confirmPage.mobileNumber.innerText = apt.pt_countryCode.value + '-' + apt.mobileNumber.value
    apt__confirmPage.startDate.innerText = finalCurrentDate.toString()
    apt__confirmPage.secondStartDate.innerText = "NA"
    apt__confirmPage.day.innerText = apt.day.value
    apt__confirmPage.secondDay.innerText = "NA"
    apt__confirmPage.timeSlot.innerText = apt.timeSlot.value.toString()
    apt__confirmPage.secondTimeSlot.innerText = "NA"
    apt__confirmPage.fees.innerText = apt.fees.value
    apt__confirmPage.address.innerText = apt.address.value
    apt__confirmPage.type.innerText = apt.type.value
    apt__confirmPage.nature.innerText = apt.nature.value
    apt__confirmPage.occurrenceType.innerText = apt.occurrenceType.value
    apt__confirmPage.category.innerText = apt.category.value
    apt__confirmPage.emergencyName.innerText = apt.emergencyName.value
    apt__confirmPage.emergencyRelation.innerText = apt.relationDetails.value === '' ? apt.emergencyRelation.value : apt.emergencyRelation.value + ' - ' + ( apt.relationDetails.value )
    apt__confirmPage.emergencyMobileNumber.innerText = apt.e_countryCode.value + '-' + apt.emergencyMobileNumber.value
    apt__confirmPage.emergencyAddress.innerText = apt.emergencyAddress.value
    apt__confirmPage.page.classList.add( 'left-0' )

    fieldValidators()
}