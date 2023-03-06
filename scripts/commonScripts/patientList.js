let patientNamesList = document.querySelector( '.patientNamesList' )
let selectedNameOfPatient
let selectedEmailOfPatient
let profileDetails = []
let patientEmail = [];


( () =>
{
  db.collection( "profiles" ).get()
    .then( ( querySnapshot ) =>
    {
      refreshList()
      querySnapshot.forEach( ( doc ) =>
      {
        if ( doc.data().softDelete !== true )
        {

          // let patientContent = document.querySelector( '.patientContent' );

          let patientContentDetails = `
          
            <li title='${ doc.data().email.at( -1 ) } ( ${ doc.data().type === 'Session' ? 'Session' : 'Supervision' } )' value='${ doc.id }' name='${ doc.data().name.at( -1 ) }' email_ID= ${ doc.data().email.at( -1 ) }
              class="liItem w-full h-fit p-3 rounded-md my-1 bg-gray-200 duration-300 ease-in-out hover:bg-purple-200">
              <p class='patientName'>${ doc.data().name.at( -1 ) }  </p> 
            </li>
          `
          // patientContent.innerHTML += patientContentDetails

          let listOfNames = `
              <br />  
              <option title='${ doc.data().name.at( -1 ) + ' , ' + doc.data().email.at( -1 ) }' value='${ doc.id }' name='${ doc.data().name.at( -1 ) }' email_ID= ${ doc.data().email.at( -1 ) } class='font-semibold refreshList text-blue-500 ' >
              ${ doc.data().name.at( -1 ) } [ ${ doc.data().email.at( -1 ) } ] ( ${ doc.data().type === 'Session' ? 'Session' : 'Supervision' } )
              </option>;
              <br />
              `
          patientNamesList.innerHTML += listOfNames
          patientEmail.push( doc.data().email.at( -1 ) )


          // let selectedOption = document.querySelector( ".selectedOption" )
          // let liItem = document.querySelectorAll( '.liItem' )
          // let dropDownOptions = document.querySelector( ".dropDownOptions" )
          // let dropDown = document.querySelector( ".dropDown" )
          // let downArrowNew = document.querySelector( ".downArrowNew" )
          // let upArrow = document.querySelector( ".upArrow" )
          // dropDown.onclick = () =>
          // {
          //   dropDownOptions.classList.toggle( 'hidden' )
          //   downArrowNew.classList.toggle( 'hidden' )
          //   upArrow.classList.toggle( 'hidden' )
          // }

          // for ( let newItem of liItem )
          // {
          //   newItem.onclick = () =>
          //   {
          //     selectedOption.innerText = newItem.innerText
          //     dropDownOptions.classList.toggle( 'hidden' )
          //     downArrowNew.classList.toggle( 'hidden' )
          //     upArrow.classList.toggle( 'hidden' )
          //   }
          // }

          // document.onkeyup = e =>
          // {
          //   if ( e.code === 'Escape' )
          //   {
          //     dropDownOptions.classList.add( 'hidden' )
          //     downArrowNew.classList.remove( 'hidden' )
          //     upArrow.classList.add( 'hidden' )
          //   }
          // }

          // document.onclick = e =>
          // {
          //   if ( e.target.matches( '.patientName' ) === false )
          //   {
          //     dropDownOptions.classList.add( 'dummy123' )

          //   }
          //   if ( dropDownOptions.matches( '.dummy123' ) === false )
          //   {
          //     console.log( 'yes' );
          //     dropDownOptions.classList.add( 'hidden' )
          //   }
          // }

        }

        profileDetails.push( {
          id: doc.id,
          email: doc.data().email.at( -1 ),
          name: doc.data().name.at( -1 ),
          mode: doc.data().mode,
          address: doc.data().address.at( -1 ),
          category: doc.data().category,
          day: doc.data().day.at( -1 ),
          fees: doc.data().fees.at( -1 ),
          countryCode: doc.data().countryCode.at( -1 ),
          mobileNumber: doc.data().mobileNumber.at( -1 ),
          visitPerWeek: doc.data().visitPerWeek,
          secondDay: doc.data().secondDay.at( -1 ),
          secondDate: doc.data().secondDate.at( -1 ),
          secondTimeSlot: doc.data().secondTimeSlot.at( -1 ),
          timeSlot: doc.data().timeSlot.at( -1 ),
          type: doc.data().type,
          emergency_name: doc.data().emergency_name.at( -1 ),
          emergency_address: doc.data().emergency_address.at( -1 ),
          emergency_countryCode: doc.data().emergency_countryCode.at( -1 ),
          emergency_mobileNumber: doc.data().emergency_mobileNumber.at( -1 ),
          patientRelation: doc.data().patientRelation.at( -1 ),
          createdOn: doc.data().createdOn,
          updatedOn: doc.data().updatedOn.at( -1 ),
          softDelete: doc.data().softDelete,
        } )
      } )

      profileDetails.sort( ( a, b ) =>
      {
        return a.createdOn - b.createdOn
      } )
      fetchingAppointments()
    } )
    .catch( err => promptMessages( err, 'error' ) )
} )()

patientNamesList.onchange = e =>
{
  selectedNameOfPatient = e.target.options[ e.target.selectedIndex ].getAttribute( 'name' )
  selectedEmailOfPatient = e.target.options[ e.target.selectedIndex ].getAttribute( 'email_ID' )
}

