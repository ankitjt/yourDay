let apt = {
  name : document.querySelector( '.aptName' ),
  email : document.querySelector( '.aptEmail' ),
  mobileNumber : document.querySelector( '.aptMobileNumber' ),
  pt_countryCode : document.querySelector( '.pt_countryCode' ),
  startDate : document.querySelector( '.aptStartDate' ),
  day : document.querySelector( '.aptDay' ),
  fees : document.querySelector( '.aptFees' ),
  type : document.querySelector( '.aptType' ),
  nature : document.querySelector( '.aptNature' ),
  address : document.querySelector( '.aptAddress' ),
  occurrenceType : document.querySelector( '.aptOccurrenceType' ),
  category : document.querySelector( '.aptCategory' ),
  timeSlot : document.querySelector( '.aptTimeSlot' ),
  create: document.querySelector( '.createAptBtn' ),
  dropOption : document.querySelector( ".dropOption" ),
  emergencyName : document.querySelector( ".emergencyName" ),
  emergencyRelation : document.querySelector( ".emergencyRelation" ),
  emergencyAddress : document.querySelector( ".emergencyAddress" ),
  emergencyMobileNumber : document.querySelector( ".emergencyMobileNumber" ),
  e_countryCode : document.querySelector( ".e_countryCode" ),
  relationDetails : document.querySelector( ".relationDetails" )
}

let apt__occ2 = {
  firstDaySlot : document.querySelector( '.firstDaySlot' ),
  firstDaySlotWrapper : document.querySelector( '.firstDaySlotWrapper' ),
  firstStartDate : document.querySelector( '.firstStartDate' ),
  firstStartDateWrapper : document.querySelector( '.firstStartDateWrapper' ),
  firstTimeSlotWrapper : document.querySelector( '.firstTimeSlotWrapper' ),
  firstTimeSlot : document.querySelector( '.firstTimeSlot' ),
  createTwoAptBtn : document.querySelector( '.createTwoAptBtn' ),
  cancelForOccurrence : document.querySelector( '.cancelForOccurrence' ),
  editButton : document.querySelector( '.editButton' ),
}

let apt__confirmPage = {
  page : document.querySelector( '.confirmPage' ),
  name : document.querySelector( '.confirmName' ),
  email : document.querySelector( '.confirmEmail' ),
  mobileNumber : document.querySelector( '.confirmMobileNumber' ),
  day : document.querySelector( '.confirmDay' ),
  startDate : document.querySelector( '.confirmStartDate' ),
  timeSlot : document.querySelector( '.confirmTimeSlot' ),
  type : document.querySelector( '.confirmAppointmentType' ),
  nature : document.querySelector( '.confirmAppointmentNature' ),
  occurrenceType : document.querySelector( '.confirmOccurrenceType' ),
  address : document.querySelector( '.confirmAddress' ),
  category : document.querySelector( '.confirmCategory' ),
  fees : document.querySelector( '.confirmFees' ),
  button : document.querySelector( '.confirmButton' ),
  completed : document.querySelector( '.completed' ),
  scheduled : document.querySelector( '.scheduled' ),
  secondStartDate : document.querySelector( ".confirmSecondStartDate" ),
  secondDay : document.querySelector( ".confirmSecondDay" ),
  countryCode : document.querySelector( ".confirmCountryCode" ),
  dropOption : document.querySelector( ".confirmDropOption" ),

  emergencyName : document.querySelector( ".confirmEmergencyName" ),
  emergencyRelation : document.querySelector( ".confirmEmergencyRelation" ),
  emergencyAddress : document.querySelector( ".confirmEmergencyAddress" ),
  emergencyCountryCode : document.querySelector( ".confirmEmergencyCountryCode" ),
  emergencyMobileNumber : document.querySelector( ".confirmEmergencyMobileNumber" ),
  secondTimeSlot : document.querySelector( ".confirmSecondTimeSlot" )
}

let

  // Form Field Variables 
  aptName = document.querySelector( '.aptName' ),
  aptEmail = document.querySelector( '.aptEmail' ),
  aptMobileNumber = document.querySelector( '.aptMobileNumber' ),
  
  aptStartDate = document.querySelector( '.aptStartDate' ),
  aptDay = document.querySelector( '.aptDay' ),
  aptFees = document.querySelector( '.aptFees' ),
  aptType = document.querySelector( '.aptType' ),
  aptNature = document.querySelector( '.aptNature' ),
  aptAddress = document.querySelector( '.aptAddress' ),
  aptOccurrenceType = document.querySelector( '.aptOccurrenceType' ),
  aptCategory = document.querySelector( '.aptCategory' ),
  aptTimeSlot = document.querySelector( '.aptTimeSlot' ),
  createAptBtn = document.querySelector( '.createAptBtn' ),
  
  
  dropOption = document.querySelector( ".dropOption" ),
  countryCodeNumber = document.querySelector( ".countryCodeNumber" ),

  // Emergency Contact variables
  emergencyName = document.querySelector( ".emergencyName" ),
  emergencyRelation = document.querySelector( ".emergencyRelation" ),
  emergencyAddress = document.querySelector( ".emergencyAddress" ),
  e_countryCode = document.querySelector( '.e_countryCode' ),
  emergencyMobileNumber = document.querySelector( ".emergencyMobileNumber" ),

  // Occurrence is 2
  firstDaySlot = document.querySelector( '.firstDaySlot' ),
  firstDaySlotWrapper = document.querySelector( '.firstDaySlotWrapper' ),
  firstStartDate = document.querySelector( '.firstStartDate' ),
  firstStartDateWrapper = document.querySelector( '.firstStartDateWrapper' ),
  firstTimeSlotWrapper = document.querySelector( '.firstTimeSlotWrapper' ),
  firstTimeSlot = document.querySelector( '.firstTimeSlot' ),
  createTwoAptBtn = document.querySelector( '.createTwoAptBtn' ),
  cancelForOccurrence = document.querySelector( '.cancelForOccurrence' ),
  editButton = document.querySelector( '.editButton' ),

  // Confirm Page Variables
  confirmPage = document.querySelector( '.confirmPage' ),
  confirmName = document.querySelector( '.confirmName' ),
  confirmEmail = document.querySelector( '.confirmEmail' ),
  confirmMobileNumber = document.querySelector( '.confirmMobileNumber' ),
  confirmDay = document.querySelector( '.confirmDay' ),
  confirmStartDate = document.querySelector( '.confirmStartDate' ),
  confirmTimeSlot = document.querySelector( '.confirmTimeSlot' ),
  confirmAppointmentType = document.querySelector( '.confirmAppointmentType' ),
  confirmAppointmentNature = document.querySelector( '.confirmAppointmentNature' ),
  confirmOccurrenceType = document.querySelector( '.confirmOccurrenceType' ),
  confirmAddress = document.querySelector( '.confirmAddress' ),
  confirmCategory = document.querySelector( '.confirmCategory' ),
  confirmFees = document.querySelector( '.confirmFees' ),
  confirmButton = document.querySelector( '.confirmButton' ),
  completed = document.querySelector( '.completed' ),
  scheduled = document.querySelector( '.scheduled' ),
  confirmSecondStartDate = document.querySelector( ".confirmSecondStartDate" ),
  confirmSecondDay = document.querySelector( ".confirmSecondDay" ),
  confirmCountryCode = document.querySelector( ".confirmCountryCode" ),
  confirmDropOption = document.querySelector( ".confirmDropOption" ),
 
  confirmEmergencyName = document.querySelector( ".confirmEmergencyName" ),
  confirmEmergencyRelation = document.querySelector( ".confirmEmergencyRelation" ),
  confirmEmergencyAddress = document.querySelector( ".confirmEmergencyAddress" ),
  confirmEmergencyCountryCode = document.querySelector( ".confirmEmergencyCountryCode" ),
  confirmEmergencyMobileNumber = document.querySelector( ".confirmEmergencyMobileNumber" ),
  confirmSecondTimeSlot = document.querySelector( ".confirmSecondTimeSlot" )