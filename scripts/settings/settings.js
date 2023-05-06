let editFields = document.querySelectorAll( '.editField' )

for ( let field of editFields )
{
  field.onclick = () =>
  {
    let targetField = field.parentElement.parentElement.childNodes[ 1 ].childNodes[ 1 ]

    targetField.toggleAttribute( 'disabled' )
    targetField.classList.toggle( 'sm:border-emerald-600' )
    targetField.classList.toggle( 'border-emerald-600' )
    targetField.classList.toggle( 'border-2' )
    targetField.focus()
  }
}