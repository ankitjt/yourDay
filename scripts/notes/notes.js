const storage = firebase.storage()
let bannerHolder = document.querySelector( '.banner-holder' )
let notesOfPatients
let uploadedNotesList = document.querySelector( '.uploadedNotesList' )
let uploadNoteFormWrapper = document.querySelector( '.uploadNoteFormWrapper' )

// Listing All files for selected name.
patientList.onclick = () =>
{
  let uploadedNotes = document.querySelector( '.uploadedNotes' )
  let notesCount = document.querySelector( '.notesCount' )

  if ( patientListButton.innerText === 'By Name' )
  {
    uploadedNotes.classList.add( 'hidden' )
    uploadNoteFormWrapper.classList.add( 'hidden' )
  }
  else
  {
    let myArr = []

    uploadedNotesList.innerHTML = ''
    notesCount.innerHTML = ''
    let listRef = firebase.storage().ref( `ptNotes/${ patientName.getAttribute( "data-id" ) }/` )
    uploadNoteFormWrapper.classList.remove( 'hidden' )

    let s = firebase.storage().ref( 'ptNotes' )
    let dataSort = []
    s.listAll().then( ( res ) =>
    {
      res.prefixes.forEach( ( folderRef ) =>
      {
        if ( folderRef.name === patientName.getAttribute( "data-id" ) )
        {
          listRef.listAll().then( ( res ) =>
          {
            res.items.forEach( ( itemRef ) =>
            {
              itemRef.getDownloadURL().then( ( url ) =>
              {
                itemRef.getMetadata().then( ( metadata ) =>
                {
                  let dd = new Date( metadata.timeCreated ) * 1000
                  dataSort.push( dd )
                  dataSort.sort( ( a, b ) =>
                  {
                    return a - b
                  } )
                  let uploadDate = new Date( metadata.updated )
                  myArr.push( itemRef )
                  notesOfPatients =
                    /*html*/ `
                      <div class="note mb-4 flex items-center justify-between hover:bg-red-100 md:hover:bg-gray-200 p-3 rounded-lg transition-all ease-in-out duration-300">
                        <div class="noteLink flex flex-col">
                            <a href="${ url }" target='_blank' class="text-blue-600" download>
                            <span class="noteName font-semibold underline">${ itemRef.name }</span>
                            </a>
                            <span class="noteUploadTime text-xs font-semibold text-gray-400 tracking-wider mt-1">
                            ${ uploadDate.getDate() }/${ uploadDate.getMonth() + 1 }/${ uploadDate.getFullYear() }, ${ uploadDate.getHours() }:${ uploadDate.getMinutes() }:${ uploadDate.getSeconds() }
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
                  notesCount.innerHTML = ` ( ${ myArr.length } ) `
                } )
              } )
            } )
          } )
        }

        else
        {
          uploadedNotesList.innerHTML = `
            <div class="emptyState h-full w-full p-12 flex flex-col items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-red-500 my-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h3 class="text-center font-semibold text-red-500">No notes found.</h3>
            </div>
          `
        }
      } )
    } )
  }
}

// Note Upload
let uploadNoteBtn = document.querySelector( '.uploadNoteBtn' ),
  uploadNoteForm = document.querySelector( '.uploadNoteForm' ),
  fileUpload = document.querySelector( '.fileUpload' )

uploadNoteBtn.onclick = ( e ) =>
{
  let file = fileUpload.files[ 0 ]

  if ( patientListButton.innerText === 'By Name' )
  {
    promptMessages( 'Select patient name first.' )
  }

  else if ( file === undefined )
  {
    promptMessages( 'Browse a file to upload.' )
  }

  else if ( /\.(jpe?g|pdf)$/i.test( file.name ) !== true )
  {
    promptMessages( 'File should be in .pdf or .jpg format only.' )
  }

  else
  {
    // Check for same file name to be added.
    // let checkFileName = firebase.storage().ref( `ptNotes/${ patientName.getAttribute( 'data-id' ) }/${ file.name }` )
    // let storageRef = firebase.storage().ref( `ptNotes/${ patientName.getAttribute( 'data-id' ) }/` + file.name )
    // console.log( checkFileName, storageRef );
    let storageRef = firebase.storage().ref( `ptNotes/${ patientName.getAttribute( 'data-id' ) }/` + file.name )
    let metadata = {
      uploadTime: firebase.firestore.FieldValue.serverTimestamp()
    }

    storageRef.put( file, metadata )
    promptMessages( 'File uploaded successfully.' )
    fileUpload.value = ''

    // if ( checkFileName === storageRef)
    // {
    //   promptMessages( `A note with same name exists for the patient. 
    //    Please check exisiting notes of the patient or give a different file name.`)
    // }
    // else
    // {
      
      

    // }
  }

}
