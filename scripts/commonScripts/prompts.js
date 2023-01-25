let checkPrompt = document.querySelector( '.checkPrompt' )
let pageBlocker = document.querySelector( '.pageBlocker' )
let promptContent = document.querySelector( '.promptContent' )



const promptMessages = ( message ) =>
{
  
  promptsWrapper.classList.add( 'left-1/2' )
  pageBlocker.classList.remove( 'hidden' )
  promptsWrapper.innerHTML += `
          
          <section class="prompts flex items-center justify-between md:w-2/3 w-full px-6 py-3 my-2 bg-rose-600 rounded-full ease-in-out duration-300 hover:bg-rose-800">
            <div class="promptContent font-medium text-xs text-slate-50 w-full text-left">${ message }</div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 w-full text-slate-50 closePrompts cursor-pointer" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd" />
            </svg>
          </section>
        </div>
      `
  let closePrompts = document.querySelectorAll( ".closePrompts" )
  for ( let close of closePrompts )
  {
    close.onclick = () =>
    {
      let parent = close.parentElement;
      let gp = parent.parentElement;
      parent.classList.add( 'hidden' )
      gp.lastElementChild.onclick = () =>
      {
        parent.classList.add( 'hidden' )
        promptsWrapper.classList.remove( 'left-1/2' )
        pageBlocker.classList.add( 'hidden' )
       
        promptsWrapper.innerHTML = ''
      }
      
    }
  }


}
