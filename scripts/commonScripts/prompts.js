let checkPrompt = document.querySelector( '.checkPrompt' )
const promptMessages = ( message ) =>
{
  prompts.classList.add( 'left-1/2' )
  pageWrapper.classList.add( 'blur-sm' )
  promptContent.innerText = message
  closePrompts.onclick = () =>
  {
    prompts.classList.remove( 'left-1/2' )
    pageWrapper.classList.remove( 'blur-sm' )
  }
}
