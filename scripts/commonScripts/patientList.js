let patientNamesList = document.querySelector( '.patientNamesList' )
let selectedNameOfPatient
let selectedEmailOfPatient
let profileDetails = []
let patientEmail = [];

( () =>
{
  db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
  {
    let allNames = document.querySelectorAll( '.something' )
    for ( const names of allNames )
    {
      names.remove()
    }

    querySnapshot.forEach( ( doc ) =>
    {
      if ( doc.data().softDelete !== true )
      {
        let listOfNames = `
        <option title='${ doc.data().aptName + ' , ' + doc.data().aptEmail.at( -1 ) }' value='${ doc.id }' name='${ doc.data().aptName }' email_ID= ${ doc.data().aptEmail.at( -1 ) } class='font-semibold' >
        ${ doc.data().aptName } [ ${ doc.data().aptEmail } ] ( ${ doc.data().aptType === 'Session' ? 'Session' : 'Supervision' } )
        </option>
        `
        patientNamesList.innerHTML += listOfNames
        patientEmail.push( doc.data().aptEmail.at( -1 ) )
      }
      profileDetails.push( {
        id: doc.id,
        email: doc.data().aptEmail.at( -1 ),
        name: doc.data().aptName,
        nature: doc.data().aptNature,
        address: doc.data().aptAddress.at( -1 ),
        category: doc.data().aptCategory,
        day: doc.data().aptDay.at( -1 ),
        fees: doc.data().aptFees.at( -1 ),
        mobileNumber: doc.data().aptMobileNumber.at( -1 ),
        occurrence: doc.data().aptOccurrenceType,
        secondDay: doc.data().aptSecondDay,
        secondSlotDate: doc.data().aptSecondStartDate,
        secondTime: doc.data().aptSecondTimeSlot,
        timeSlot: doc.data().aptTimeSlot.at( -1 ),
        type: doc.data().aptType,
        countryCode: doc.data().apt_pt_countryCode.at( -1 ),
        e_address: doc.data().emergencyAddress.at( -1 ),
        e_mobileNumber: doc.data().emergencyMobileNumber.at( -1 ),
        e_name: doc.data().emergencyName.at( -1 ),
        e_countryCode: doc.data().emergency_countryCode.at( -1 ),
        relation: doc.data().patientRelation.at( -1 ),
        createdOn: doc.data().profileCreatedOn,
        updatedOn: doc.data().profileUpdatedOn.at( -1 ),
        softDelete: doc.data().softDelete,
      } )
    } )
    profileDetails.sort( ( a, b ) =>
    {
      return b.createdOn - a.createdOn
    } )

    fetchingData()
  } )
} )()

patientNamesList.onchange = e =>
{
  selectedNameOfPatient = e.target.options[ e.target.selectedIndex ].getAttribute( 'name' )
  selectedEmailOfPatient = e.target.options[ e.target.selectedIndex ].getAttribute( 'email_ID' )
}
