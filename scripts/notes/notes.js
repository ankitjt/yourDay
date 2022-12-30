const storage = firebase.storage()
let bannerHolder = document.querySelector( '.banner-holder' )



// Listing All files for selected name.
bannerHolder.onclick = () =>
{
  patientList.classList.add('hidden')
}

patientList.onclick = () =>
{

  let uploadedNotesList = document.querySelector( '.uploadedNotesList' )
  let uploadedNotes = document.querySelector( '.uploadedNotes' )
  let notesCount = document.querySelector( '.notesCount' )
  let uploadNoteFormWrapper = document.querySelector( '.uploadNoteFormWrapper' )

  if ( patientListButton.innerText === 'By Name' )
  {
    uploadedNotes.classList.add( 'hidden' )
    uploadNoteFormWrapper.classList.add( 'hidden' )
  }
  else
  {
    let myArr = []
    uploadNoteFormWrapper.classList.remove( 'hidden' )
    uploadedNotesList.innerHTML = ''
    notesCount.innerHTML = ''
    let listRef = firebase.storage().ref( `ptNotes/${ patientName.innerText }/` )

    let s = firebase.storage().ref( 'ptNotes' )
    let dataSort = []
    s.listAll().then( ( res ) =>
    {
      res.prefixes.forEach( ( folderRef ) =>
      {
        if ( folderRef.name === patientName.innerText )
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
                  let notesOfPatients =
                  /*html*/ `
                    <div class="note mb-4 flex items-center justify-between lg:hover:bg-gray-200 p-2 rounded-lg lg:transition-all lg:ease-in-out">
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
                } )
              } )

              myArr.push( itemRef )
              notesCount.innerHTML = ` ( ${ myArr.length } ) `

            } )
          } )
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
    promptMessages( 'Select patient name first...' )
  }

  else if ( file === undefined )
  {
    promptMessages( 'upload a file....' )
  }

  else
  {
    let metadata = {
      uploadTime: firebase.firestore.FieldValue.serverTimestamp()
    }
    let storageRef = firebase.storage().ref( `ptNotes/${ patientName.innerText }/` + file.name )
    storageRef.put( file, metadata )
    promptMessages( 'file uploaded' )
    fileUpload.value = ''
  }

}
