const storage = firebase.storage()
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
            if ( doc.data().softDelete !== true )
            {
                let patientNames = `
                <option value="${ doc.data().aptName }" class="font-semibold something" data-id="${ doc.id }" >${ doc.data().aptName }</option>
                `
                patientList.innerHTML += patientNames

            }

        } )
    } )


} )()
patientList.onchange = () =>
{
    // Listing All files for selected name 
    let uploadedNotesList = document.querySelector( '.uploadedNotesList' )
    let uploadedNotes = document.querySelector( '.uploadedNotes' )
    let notesCount = document.querySelector( '.notesCount' )

    if ( patientList.value === 'Select' )
    {
        uploadedNotes.classList.add( 'hidden' )
    }
    else
    {
        let myArr = []
        uploadedNotesList.innerHTML = ''
        let listRef = firebase.storage().ref( `ptNotes/${ patientList.value }/` )


        listRef.listAll().then( ( res ) =>
        {
            res.items.forEach( ( itemRef ) =>
            {
                itemRef.getDownloadURL().then( ( url ) =>
                {
                    let notesOfPatients = `
                    <div
                  class="note mb-4 flex items-center justify-between lg:hover:bg-gray-200 p-2 rounded-lg lg:transition-all lg:ease-in-out">
                  <div class="noteLink flex flex-col">
                    <a href="${ url }" target='_blank' class="text-blue-600" download>
                      <span class="noteName font-semibold underline">${ itemRef.name }</span>
                    </a>
                    <span class="noteUploadTime text-xs font-semibold text-gray-400 tracking-wider mt-1">
                      03:08:2022, 14:36
                    </span>
                  </div>
                  <div class="noteDelete">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-rose-600 cursor-pointer" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                </div>
                `
                    uploadedNotesList.innerHTML += notesOfPatients
                    uploadedNotes.classList.remove( 'hidden' )
                } )

                myArr.push( itemRef )
                notesCount.innerText = myArr.length
            } )
        } )
    }
}

let uploadNoteBtn = document.querySelector( '.uploadNoteBtn' ),
    uploadNoteForm = document.querySelector( '.uploadNoteForm' ),
    fileUpload = document.querySelector( '.fileUpload' )

uploadNoteBtn.onclick = ( e ) =>
{
    let file = fileUpload.files[ 0 ]

    if ( patientList.value === 'Select' )
    {
        alert( 'Select patient name first...' );
    }

    else if ( file === undefined )
    {
        alert( 'upload a file....' )
    }

    else
    {
        let metadata = {
            uploadTime: firebase.firestore.FieldValue.serverTimestamp()
        }
        let storageRef = firebase.storage().ref( `ptNotes/${ patientList.value }/` + file.name )
        storageRef.put( file, metadata )
        alert( 'file uploaded' )
        fileUpload.value = ''
    }

}
