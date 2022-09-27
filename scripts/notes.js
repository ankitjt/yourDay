let patientList = document.querySelector( ".patientList" )

    // To populate the patient list 

    ( () =>
    {
        db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
        {
            querySnapshot.forEach( ( doc ) =>
            {
                let patientNames = `<option value="${ doc.id }" class="font-semibold" data-id="${ doc.id }">${ doc.data().aptName }</option>`
                patientList.innerHTML += patientNames
            } )
        } )
    } )()