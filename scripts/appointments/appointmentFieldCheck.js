const fieldValidators = () =>
{

  // Name check.
  let userName = aptName.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check1 !== -1 )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Name should be only be alphabetic.' )
  }

  let currentDate = new Date()
  let currentMonth = currentDate.getMonth()
  let currentYear = currentDate.getFullYear()
  let currentDay = currentDate.getDate()
  let finalCurrentDate = new Date( currentYear, currentMonth, currentDay )

  // Emergency Name check.
  let emergencyNameCheck = emergencyName.value
  let check2 = emergencyNameCheck.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check2 !== -1 )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Name should be only be alphabetic.' )
  }

  let emergencyRelationCheck = emergencyRelation.value
  let check3 = emergencyRelationCheck.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check3 !== -1 )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Relation should be only be alphabetic.' )
  }

  // Email format check.
  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( aptEmail.value ) !== true )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Incorrect Email format. Format should be abc@xyz.com' )
  }

  // Mobile number lenght check.
  let firstMobileNumber = aptMobileNumber.value
  let secondMobileNumber = emergencyMobileNumber.value

  if ( firstMobileNumber.length > 10 || firstMobileNumber.length < 5 )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Mobile Number should be more than 5 and less than 10 numbers.' )
  }

  if ( secondMobileNumber.length > 10 || secondMobileNumber.length < 5 )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Emergency Mobile Number should be more than 5 and less than 10 numbers.' )
  }

  // Name and emergency name check. 
  

  // Mobile and emergency Mobile check. 
  if ( aptMobileNumber.value === emergencyMobileNumber.value )
  {
    promptMessages( 'Patient mobile number and Emergency contact mobile number cannot be same.' )
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
  }

  // Apt date less than current date check. 
  let startDate = new Date( aptStartDate.value )
  if ( startDate < finalCurrentDate )
  {
    apt__confirmPage.page.classList.add( '-left-[2000px]' )
    promptMessages( 'Start Date cannot be less than current Date.' )
  }
}