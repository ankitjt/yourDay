let checkPrompt = document.querySelector( '.checkPrompt' )
let pageBlocker = document.querySelector( '.pageBlocker' )
let promptContent = document.querySelector( '.promptContent' )
let closePrompts = document.querySelector( ".closePrompts" )

const promptMessages = ( message ) =>
{
  promptsWrapper.classList.add( 'left-1/2' )
  pageBlocker.classList.remove( 'hidden' )
  promptContent.innerText = message
  closePrompts.onclick = () =>
  {
    promptsWrapper.classList.remove( 'left-1/2' )
    pageBlocker.classList.add( 'hidden' )
  }
}
