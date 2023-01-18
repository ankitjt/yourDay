
let submit = document.querySelector( '.submit' )
let str1 = document.querySelector( '.str1' )
let str2 = document.querySelector( '.str2' )
let outputBox = document.querySelector( '.outputBox' )

submit.onclick = () =>
{
  outputBox.innerHTML = `<p>${ str1.value }</p> <p> ${ str2.value }</p>`
  validateFields();
}
