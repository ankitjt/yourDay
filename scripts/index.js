let loginForm = document.querySelector( ".loginForm" ),
    loginButton = document.querySelector( ".loginButton" ),
    wrapper = document.querySelector( ".wrapper" ),
    closeLoginForm = document.querySelector( ".closeLoginForm" )

loginButton.onclick = () =>
{
    loginForm.style.right = 0
    loginForm.style.transition = "0.5s ease-in-out"
    loginForm.classList.remove( "hidden" )
}

closeLoginForm.onclick = () =>
{
    loginForm.style.right = "-1500px"
}
