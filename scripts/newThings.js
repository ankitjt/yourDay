let headLine = document.querySelector( '.headLine' )
let chatterName = document.querySelector( '.chatterName' )
let startBtn = document.querySelector( ".startBtn" )
let botMessage = document.querySelector( ".botMessage" )
let query = document.querySelector( ".query" )
let queryBtn = document.querySelector( ".queryBtn" )
let userQuery = document.querySelector( ".userQuery" )
let systemResponse = document.querySelector( ".systemResponse" )
let chatBox = document.querySelector( '.chatBox' )
let final = document.querySelector( '.final' )
let quickQuestions = document.querySelector( '.quickQuestions' )
let quickReply = document.querySelector( '.quickReply' )
final = ''
let res = ''

startBtn.onclick = () =>
{
  headLine.innerText = 'Hello, ' + chatterName.value + '          X'
  chatterName.classList.add( 'hidden' )
  startBtn.classList.add( 'hidden' )
  chatBox.classList.remove( 'hidden' )
}

query.onkeyup = () =>
{
  if ( query.value === '' )
  {
    queryBtn.classList.remove( 'bg-indigo-600' )
    queryBtn.classList.add( 'bg-indigo-300' )
  }
  else
  {
    queryBtn.classList.remove( 'bg-indigo-300' )
    queryBtn.classList.add( 'bg-indigo-600' )
  }
}

queryBtn.onclick = () =>
{
  let bubbleWrapper = document.createElement( 'div' )
  let q = document.createElement( 'p' )
  let r = document.createElement( 'p' )
  bubbleWrapper.classList.add( 'bubbleWrapper' )

  quickQuestions.classList.add( 'hidden' )
  quickReply.classList.add( 'hidden' )

  q.innerHTML = `<p class='my-1 rounded-lg text-xs bg-blue-500 p-2'>${ query.value } </p>`
  r.innerHTML = `<p class='rounded-lg text-xs text-emerald-500 p-2 italic font-semibold'>replying </p>`

  bubbleWrapper.classList.add( 'py-2', 'px-3', 'my-2', 'border', 'border-gray-300', 'rounded-lg' )
  bubbleWrapper.appendChild( q )

  let result = query.value
  let resultInLC = result.toLowerCase()
  setTimeout( () =>
  {
    let splitter = resultInLC.split( ' ' )
    for ( let word of splitter )
    {
      if ( word === 'life' )
      {
        r.innerHTML = `<p class='p-2 rounded-lg text-xs bg-emerald-500 my-1'>Life is always unpredictable, so do right and make best of it </p>`
        return
      }
      if ( word === 'test' )
      {
        r.innerHTML = `<p class='p-2 rounded-lg text-xs bg-emerald-500 my-1'>Destiny is what we make. </p>`
        return
      }
      else
      {
        r.innerHTML = `<p class='p-2 rounded-lg text-xs bg-rose-500 my-1'>Sorry, we don't have answer for that right now! </p>`;
      }
    }
  }, 1000 )

  query.value = ''
  bubbleWrapper.appendChild( r )
  botMessage.appendChild( bubbleWrapper )

  queryBtn.classList.remove( 'bg-indigo-600' )
  queryBtn.classList.add( 'bg-indigo-300' )

  query.focus()

}


let questions = document.querySelectorAll( '.questions' )
let r = document.createElement( 'p' )
r.innerHTML = ''
for ( let question of questions )
{
  question.onclick = () =>
  {
    r.innerHTML = `<p class='rounded-lg text-xs text-emerald-500 p-2 italic font-semibold'>finding... </p>`
    setTimeout( () =>
    {
      switch ( question.innerText )
      {
        case 'When\'s my next appointment?':
          r.innerHTML = `<p class='p-2 rounded-lg text-xs bg-emerald-500 my-1'>Next appointment is on Tuesday, 10:00 AM with John Doe. </p>`
          break;
        case 'Are there any supervisions this week?':
          r.innerHTML = `<p class='p-2 rounded-lg text-xs bg-emerald-500 my-1'>There are 3 supervisions this week. </p>`
          break;
        case 'Number of pending appointments so far?':
          r.innerHTML = `<p class='p-2 rounded-lg text-xs bg-emerald-500 my-1'>There are 3 appointments which are not updated/completed. </p>`
          break;
        default:
          r.innerHTML = `<p class='p-2 rounded-lg text-xs bg-rose-500 my-1'>Sorry, we don't have answer for that right now! </p>`;
      }
      quickReply.append( r )
    }, 2000 )
  }
}

let clearChat = document.querySelector( '.clearChat' )
clearChat.onclick = () =>
{
  let bubbleWrapper = document.querySelectorAll( ".bubbleWrapper" )
  for ( let wrapper of bubbleWrapper )
  {
    wrapper.remove()
  }

  quickQuestions.classList.remove( 'hidden' )
  quickReply.classList.remove( 'hidden' )
  quickReply.innerHTML = ''
}

