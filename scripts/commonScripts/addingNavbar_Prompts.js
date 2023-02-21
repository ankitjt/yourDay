let navbarContent = document.querySelector( ".navbarContent" )

let pageName = window.location.href.split( "/" ).slice( -1 );
let p = pageName.toLocaleString();
let pageUrl = p.substring( 0, p.indexOf( '.' ) )



navbarContent.innerHTML = `
  <div class='text-[10px] tracking-widest font-semibold  text-blue-600 flex items-center justify-between w-full '>
  <a href="./home.html" class="hover:bg-blue-500 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hover:text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
        </a>
        <div class="rightSideNavbar flex items-center justify-center">
        <span class='serverTime mr-5'></span>
          <span class=" uppercase">${ pageUrl } </span>
          <div class="notificationOpener">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              class="w-4 h-4 ml-5 text-red-400 cursor-pointer notification">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
              class="w-4 h-4 ml-5 hidden text-red-400 openedNotification cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
            </svg>
          </div>
        </div>
        </div>
`

let serverTime = document.querySelector( ".serverTime" )
let showTime = () =>
{
  date_time_ref1 = new Date()
  dateInSeconds1 = Math.round( Date.now() / 1000 )
  local_date1 = date_time_ref1.getDate() < 10 ? '0' + date_time_ref1.getDate() : date_time_ref1.getDate()
  local_month1 = ( date_time_ref1.getMonth() + 1 ) < 10 ? '0' + ( date_time_ref1.getMonth() + 1 ) : ( date_time_ref1.getMonth() + 1 )
  local_year1 = date_time_ref1.getFullYear()
  local_hours1 = date_time_ref1.getHours() < 10 ? '0' + date_time_ref1.getHours() : date_time_ref1.getHours()
  local_minutes1 = date_time_ref1.getMinutes() < 10 ? '0' + date_time_ref1.getMinutes() : date_time_ref1.getMinutes()
  local_seconds1 = date_time_ref1.getSeconds() < 10 ? '0' + date_time_ref1.getSeconds() : date_time_ref1.getSeconds()
  serverTime.innerText = local_date1 + '/' + local_month1 + '/' + local_year1 + ' , ' + local_hours1 + ':' + local_minutes1 + ':' + local_seconds1
}
setInterval( showTime, 1000 )

