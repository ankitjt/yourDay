
let leftSection = document.querySelector( '.left' )

let firstSectionNav = document.createElement( 'nav' )
firstSectionNav.classList.add( 'w-full' )

let firstNav = `
   <nav
             class="grid grid-cols-1 h-auto sm:bg-indigo-600 w-full mt-10 text-slate-500 sm:text-white">

          <a href="./appointments.html"
             class="navLink flex ease-in-out duration-300 hover:bg-indigo-900 sm:hover:bg-transparent md:hover:bg-indigo-900 hover:text-white p-3 sm:mb-2 items-center justify-between sm:justify-center md:justify-between w-full group rounded-xl uppercase text-xs font-semibold tracking-widest"
             title="Appointments">
            <span class="inline sm:hidden md:inline">Appointments</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="md:w-4 md:h-4 w-6 h-6 md:ml-3 sm:mr-0 ease-in-out duration-300 group-hover:text-white sm:group-hover:text-indigo-900 md:group-hover:text-white"
                 viewBox="0 0 20 20" fill="currentColor">
              <path
                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>

          </a>
          <a href="./schedule.html"
             class="navLink flex ease-in-out duration-300 hover:bg-indigo-900 sm:hover:bg-transparent md:hover:bg-indigo-900 hover:text-white p-3 sm:mb-2 items-center justify-between sm:justify-center md:justify-between w-full group rounded-xl uppercase text-xs font-semibold tracking-widest"
             title="Schedule">
            <span class="inline sm:hidden md:inline">Schedule</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="md:w-4 md:h-4 w-6 h-6 md:ml-3 sm:mr-0 ease-in-out duration-300 group-hover:text-white sm:group-hover:text-indigo-900 md:group-hover:text-white"
                 viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd" />
            </svg>

          </a>
          <a href="./finances.html"
             class="navLink flex ease-in-out duration-300 hover:bg-indigo-900 sm:hover:bg-transparent md:hover:bg-indigo-900 hover:text-white p-3 sm:mb-2 items-center justify-between sm:justify-center md:justify-between w-full group rounded-xl uppercase text-xs font-semibold tracking-widest"
             title="Finances">
            <span class="inline sm:hidden md:inline">Finances</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="md:w-4 md:h-4 w-6 h-6 md:ml-3 sm:mr-0 ease-in-out duration-300 group-hover:text-white sm:group-hover:text-indigo-900 md:group-hover:text-white"
                 viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                    clip-rule="evenodd" />
            </svg>

          </a>
          <a href="./records.html"
             class="navLink flex ease-in-out duration-300 hover:bg-indigo-900 sm:hover:bg-transparent md:hover:bg-indigo-900 hover:text-white p-3 sm:mb-2 items-center justify-between sm:justify-center md:justify-between w-full group rounded-xl uppercase text-xs font-semibold tracking-widest"
             title="Records">
            <span class="inline sm:hidden md:inline">RECORDS</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="md:w-4 md:h-4 w-6 h-6 md:ml-3 sm:mr-0 ease-in-out duration-300 group-hover:text-white sm:group-hover:text-indigo-900 md:group-hover:text-white"
                 viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                    clip-rule="evenodd" />
            </svg>

          </a>
          <a href="./notes.html"
             class="navLink flex ease-in-out duration-300 hover:bg-indigo-900 sm:hover:bg-transparent md:hover:bg-indigo-900 hover:text-white p-3 sm:mb-2 items-center justify-between sm:justify-center md:justify-between w-full group rounded-xl uppercase text-xs font-semibold tracking-widest"
             title="Notes">
            <span class="inline sm:hidden md:inline">Notes</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="md:w-4 md:h-4 w-6 h-6 md:ml-3 sm:mr-0 ease-in-out duration-300 group-hover:text-white sm:group-hover:text-indigo-900 md:group-hover:text-white">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>

          </a>
          <a href="./index.html"
             class="navLink flex ease-in-out duration-300 hover:bg-indigo-900 sm:hover:bg-transparent md:hover:bg-indigo-900 hover:text-white p-3 sm:mb-2 items-center justify-between sm:justify-center md:justify-between w-full group rounded-xl uppercase text-xs font-semibold tracking-widest"
             title="Logout">
            <span class="inline sm:hidden md:inline">Logout</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="md:w-4 md:h-4 w-6 h-6 md:ml-3 sm:mr-0 ease-in-out duration-300 group-hover:text-white sm:group-hover:text-indigo-900 md:group-hover:text-white">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>

          </a>
        </nav>
`
firstSectionNav.innerHTML = firstNav

let secondSectionNav = document.createElement( 'nav' )
secondSectionNav.classList.add( 'w-full' )

let secondNav = `
   <nav
             class="grid grid-cols-1 md:my-4  w-full pt-4 text-slate-500 sm:text-white border-t border-gray-300">

          <a href="./settings.html"
             class="navLink flex ease-in-out duration-300 hover:bg-indigo-900 sm:hover:bg-transparent md:hover:bg-indigo-900 hover:text-white p-3 sm:mb-2 items-center justify-between sm:justify-center md:justify-between w-full group rounded-xl uppercase text-xs font-semibold tracking-widest"
             title="Settings">
            <span class="inline sm:hidden md:inline">Settings</span>
            <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="md:w-4 md:h-4 w-6 h-6 md:ml-3 sm:mr-0 ease-in-out duration-300 group-hover:text-white sm:group-hover:text-indigo-900 md:group-hover:text-white">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          </a>
        </nav>
`
secondSectionNav.innerHTML = secondNav

let closeMenuSection = document.createElement( 'div' )
closeMenuSection.classList.add( 'closeMenuWrapper', 'sm:hidden', 'w-full', 'flex', 'items-center', 'justify-center', 'mt-5' )

let closeMenu = `
   
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
               class="closeMenuButton w-10 h-10 ease-in-out duration-300 hover:bg-rose-600 text-white p-2 rounded-full cursor-pointer ">
            <path fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd" />
          </svg>

`
closeMenuSection.innerHTML = closeMenu

leftSection.appendChild( firstSectionNav )
leftSection.appendChild( secondSectionNav )
leftSection.appendChild( closeMenuSection )

let navLinks = document.querySelectorAll( '.navLink' )
navLinks.forEach( ( link ) =>
{
   if ( link.href === window.location.href )
   {
      link.classList.add( 'bg-transparent', 'md:bg-indigo-900', 'sm:text-indigo-900', 'md:text-white', 'text-rose-600' )
   }
} )

let openMenu = document.querySelector( '.openMenu' )
let navWrapper = document.querySelector( '.navWrapper' )
openMenu.onclick = () =>
{
   leftSection.classList.add( 'right-0' )
}
let closeMenuButton = document.querySelector( '.closeMenuButton' )
closeMenuButton.onclick = () =>
{
   leftSection.classList.remove( 'right-0' )
}