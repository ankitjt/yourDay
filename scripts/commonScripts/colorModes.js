let divLeft = document.querySelector( ".divLeft" )
let divRight = document.querySelector( ".divRight" )
let darkMode = document.querySelector( ".darkMode" )
let lightMode = document.querySelector( ".lightMode" )
let loginEmail = document.querySelector( ".loginEmail" )
let loginEmailLabel = document.querySelector( ".loginEmailLabel" )
let loginPassword = document.querySelector( ".loginPassword" )
let loginPasswordLabel = document.querySelector( ".loginPasswordLabel" )
let leftNav = document.querySelector( ".leftNav" )
let rightNavFAQ = document.querySelector( ".rightNavFAQ" )


lightMode.onclick = () =>
{
  divLeft.classList.remove( "md:bg-[url('./assets/Rectangle5White.png')]" )
  divLeft.classList.add( "md:bg-[url('./assets/Rectangle5.png')]" )
  lightMode.classList.add( 'hidden' )
  darkMode.classList.remove( 'hidden' )
  divRight.classList.add( 'bg-[#010714]' )

  leftNav.classList.remove( 'text-gray-900' )
  leftNav.classList.add( 'text-white' )

  rightNavFAQ.classList.remove( 'text-gray-900' )
  rightNavFAQ.classList.add( 'text-white' )

  loginEmail.classList.remove( 'text-white', 'bg-gray-900' )
  loginPassword.classList.remove( 'text-white', 'bg-gray-900' )

  loginEmailLabel.classList.remove( 'text-gray-900' )
  loginEmailLabel.classList.add( 'text-gray-300' )
  loginPasswordLabel.classList.add( 'text-gray-300' )
  loginPasswordLabel.classList.remove( 'text-gray-900' )


}

darkMode.onclick = () =>
{
  divLeft.classList.add( "md:bg-[url('./assets/Rectangle5White.png')]" )
  divLeft.classList.remove( "md:bg-[url('./assets/Rectangle5.png')]" )
  lightMode.classList.remove( 'hidden' )
  darkMode.classList.add( 'hidden' )
  divRight.classList.remove( 'bg-[#010714]' )

  leftNav.classList.add( 'text-gray-900' )
  leftNav.classList.remove( 'text-white' )

  rightNavFAQ.classList.add( 'text-gray-900' )
  rightNavFAQ.classList.remove( 'text-white' )

  loginEmail.classList.add( 'text-white', 'bg-gray-900' )
  loginPassword.classList.add( 'text-white', 'bg-gray-900' )

  loginEmailLabel.classList.remove( 'text-gray-300', 'text-gray-900' )
  loginPasswordLabel.classList.remove( 'text-gray-300', 'text-gray-900' )

}