let content = document.querySelectorAll( '.content' )
let updateAptWindow = document.querySelector( '.updateAptWindow' )
let closePrompt = document.querySelector( '.closePrompt' )
let prompts = document.querySelector( '.prompts' )
let pageBlocker = document.querySelector( '.pageBlocker' )

for ( let row of content )
{
  row.onclick = () =>
  {
    content.forEach( ( el ) =>
    {
      el.classList.remove( 'bg-indigo-500' )
      el.classList.add( 'hover:bg-indigo-300' )

    } )

    updateAptWindow.classList.remove( '-right-[2000px]' )
    updateAptWindow.classList.add( 'right-0' )

    row.classList.add( 'bg-indigo-500' )
    row.classList.toggle( 'hover:bg-indigo-300' )

    pageBlocker.classList.remove( 'hidden' )
    prompts.classList.add( 'left-1/2' )
    prompts.classList.remove( '-left-[2000px]' )

    let cancelUpdateButton = document.querySelector( '.cancelUpdateButton' )
    cancelUpdateButton.onclick = () =>
    {
      updateAptWindow.classList.remove( 'right-0' )
      updateAptWindow.classList.add( '-right-[2000px]' )
      row.classList.remove( 'bg-indigo-500' )
      row.classList.add( 'hover:bg-indigo-300' )

    }

  }

}


closePrompt.onclick = () =>
{
  prompts.classList.add( '-left-[2000px]' )
  prompts.classList.remove( 'left-1/2' )
  pageBlocker.classList.add( 'hidden' )
}
