let checkPrompt = document.querySelector( '.checkPrompt' )
let pageBlocker = document.querySelector( '.pageBlocker' )

const promptMessages = ( message ) =>
{
  prompts.classList.add( 'left-1/2' )
  pageBlocker.classList.remove( 'hidden' )
  promptContent.innerText = message
  closePrompts.onclick = () =>
  {
    prompts.classList.remove( 'left-1/2' )
    pageBlocker.classList.add( 'hidden' )
  }
}
