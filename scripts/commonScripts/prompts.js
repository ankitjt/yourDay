let checkPrompt = document.querySelector( '.checkPrompt' )
let pageBlocker = document.querySelector( '.pageBlocker' )
let promptContent = document.querySelector( '.promptContent' )

const promptMessages = ( message, promptType, refresh ) =>
{
  promptsWrapper.classList.add( 'left-1/2' )
  pageBlocker.classList.remove( 'hidden' )
  promptsWrapper.innerHTML += `
          
          <section class="prompts flex items-center justify-between md:w-2/3 w-full px-6 py-3 my-1 rounded-lg ease-in-out duration-300 md:hover:bg-gray-800 cursor-pointer ${ promptType === 'error' ? 'bg-rose-600' : 'bg-emerald-600' }">
            <div class="promptContent font-medium text-xs text-slate-50 w-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 bg-white text-rose-600 p-1 rounded-lg mr-5 ${ promptType === 'error' ? 'block' : 'hidden' }">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 bg-white text-emerald-600 p-1 rounded-lg mr-5 ${ promptType === 'success' ? 'block' : 'hidden' }">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class='w-4/5'>${ message }</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 w-full text-slate-50 closePrompts refreshPage ${ refresh === 'refresh' ? 'refresh' : '' } id='refreshPage' cursor-pointer" viewBox="0 0 20 20"
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
      if ( close.matches( '.refresh' ) )
      {
        location.reload()
      }
      else
      {
        let parent = close.parentElement
        let gp = parent.parentElement
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
}