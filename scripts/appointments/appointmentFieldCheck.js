const fieldValidators = () =>
{
  let userName = aptName.value
  let check1 = userName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check1 !== -1 )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Name should be only be alphabetic.' )
  }

  let emergencyName = emergencyName.value
  let check2 = emergencyName.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check2 !== -1 )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Name should be only be alphabetic.' )
  }

  let emergencyRelation = emergencyRelation.value
  let check3 = emergencyRelation.search( /[0-9]|[!@#$%^&*()_+|}{":';/?.>,<`~}]/g )
  if ( check3 !== -1 )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Relation should be only be alphabetic.' )
  }

  if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( aptEmail.value ) !== true )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Incorrect Email format. Format should be abc@xyz.com' )
  }

  let firstMobileNumber = aptMobileNumber.value
  let secondMobileNumber = emergencyMobileNumber.value

  if ( firstMobileNumber.length > 10 || firstMobileNumber.length < 5 )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Mobile Number should be more than 5 and less than 10 numbers.' )
  }

  if ( secondMobileNumber.length > 10 || secondMobileNumber.length < 5 )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Emergency Mobile Number should be more than 5 and less than 10 numbers.' )
  }

  if ( aptName.value === emergencyName.value )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Patient name and Emergency contact name cannot be same.' )
  }

  if ( aptMobileNumber.value === emergencyMobileNumber.value )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Patient mobile number and Emergency contact mobile number cannot be same.' )
  }

  if ( aptAddress.value === emergencyAddress.value )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Patient address and Emergency contact address cannot be same.' )
  }

  let currentDate = new Date()
  let currentMonth = currentDate.getMonth()
  let currentYear = currentDate.getFullYear()
  let currentDay = currentDate.getDate()
  let finalCurrentDate = new Date( currentYear, currentMonth, currentDay )

  let startDate = new Date( aptStartDate.value )

  if ( startDate < finalCurrentDate )
  {
    confirmPage.style.left = '-2000px'
    promptMessages( 'Start Date cannot be less than current Date.' )
  }
}