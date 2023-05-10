let navbarContent = document.querySelector( ".navbarContent" )

let pageName = window.location.href.split( "/" ).slice( -1 )
let p = pageName.toLocaleString()
let pageUrl = p.substring( 0, p.indexOf( '.' ) )

navbarContent.innerHTML = `
  <div class='tracking-widest font-semibold flex items-center justify-between'>
 
        <div class="rightSideNavbar font-semibold flex items-center justify-between w-full">
        <span class="uppercase">${ pageUrl } </span>
        <div class="flex items-center justify-between">
        <span class='serverTime md:mr-1'></span>
          <div class="notificationOpener lg:text-white text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              class="w-4 h-4 ml-2 text-white cursor-pointer notification">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              class="w-4 h-4 ml-5 hidden openedNotification cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
            </svg>
          </div>
          </div>
        </div>
        </div>
`

let serverTime = document.querySelector( ".serverTime" )
let showTime = () =>
{
  let dateDetails = {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Kolkata',
    hc: 'h24'
  }
  serverTime.innerText = Intl.DateTimeFormat( 'en-GB', dateDetails ).format( new Date() )
}
setInterval( showTime, 1000 )
