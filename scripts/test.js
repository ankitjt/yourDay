let listButton = document.querySelector( ".listButton" ),
  dropDownList = document.querySelector( '.dropDownList' ),
  listItems = document.querySelectorAll( '.listItems' ),
  optionName = document.querySelector( '.optionName' ),
  selectedOptionName = document.querySelector( '.selectedOptionName' )

listButton.onclick = () =>
{
  dropDownList.classList.toggle( 'hidden' )

  for ( let item of listItems )
  {
    item.onclick = () =>
    {
      selectedOptionName.innerText = item.childNodes[ 1 ].innerText
      dropDownList.classList.toggle( 'hidden' )
    }
  }
}