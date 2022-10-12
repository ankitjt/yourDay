let patientList = document.querySelector( ".patientList" );

    // To populate the patient list 

    ( () =>
    {
        db.collection( "profiles" ).onSnapshot( ( querySnapshot ) =>
        {
            let allNames = document.querySelectorAll( '.something' )
            for ( const name123 of allNames )
            {
                name123.remove()
            }

            querySnapshot.forEach( ( doc ) =>
            {
                let patientNames = `
            <option value="${ doc.data().aptName }" class="font-semibold something" data-id="${ doc.id }" >${ doc.data().aptName }</option>
            `
                patientList.innerHTML += patientNames

            } )
        } )
    } )()