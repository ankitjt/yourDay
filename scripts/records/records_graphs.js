let showGraph = ( updateProfileEmail ) =>
{
  let graph_scheduled = document.querySelector( '.graph_scheduled' )
  let graph_completed = document.querySelector( '.graph_completed' )
  let graph_freeCancel = document.querySelector( '.graph_freeCancel' )
  let graph_paidCancel = document.querySelector( '.graph_paidCancel' )
  let graph_reScheduled = document.querySelector( '.graph_reScheduled' )

  let scheduleHolder = document.querySelector( '.scheduleHolder' )
  let completedHolder = document.querySelector( '.completedHolder' )
  let paidHolder = document.querySelector( '.paidHolder' )
  let freeHolder = document.querySelector( '.freeHolder' )
  let reHolder = document.querySelector( '.reHolder' )

  let scheduled = []
  let completed = []
  let paidCancelled = []
  let freeCancelled = []
  let reScheduled = []
  for ( let graphData of aptsArr )
  {
    if ( graphData.email === updateProfileEmail )
    {
      graphData.status === 'Scheduled' ? scheduled.push( graphData.status ) : 0
      graphData.status === 'Completed' ? completed.push( graphData.status ) : 0
      graphData.status === 'Paid Cancelled' ? paidCancelled.push( graphData.status ) : 0
      graphData.status === 'Free Cancelled' ? freeCancelled.push( graphData.status ) : 0
      graphData.status === 'Updated' ? reScheduled.push( graphData.status ) : 0
    }
  }
  console.log( scheduled.length, completed.length, paidCancelled.length, freeCancelled.length, reScheduled.length );

  scheduled.length === 0 ? scheduleHolder.classList.add( 'text-gray-300' ) : scheduleHolder.classList.remove( 'text-gray-300' )
  graph_scheduled.innerHTML = `
  <p class="px-2 bg-sky-400 w-3 rounded-sm mb-1 h-[${ scheduled.length * 10 }px]" title='${ scheduled.length } Scheduled'></p>
`

  completed.length === 0 ? completedHolder.classList.add( 'text-gray-300' ) : completedHolder.classList.remove( 'text-gray-300' )
  graph_completed.innerHTML = `
  <p class="px-2 bg-emerald-400 w-3 rounded-sm mb-1 h-[${ completed.length * 10 }px]" title='${ completed.length } Completed'></p>
`

  freeCancelled.length === 0 ? freeHolder.classList.add( 'text-gray-300' ) : freeHolder.classList.remove( 'text-gray-300' )
  graph_freeCancel.innerHTML = `
  <p class="px-2 bg-indigo-400 w-3 rounded-sm mb-1 h-[${ freeCancelled.length * 10 }px]" title='${ freeCancelled.length } Free Cancelled'></p>
`

  paidCancelled.length === 0 ? paidHolder.classList.add( 'text-gray-300' ) : paidHolder.classList.remove( 'text-gray-300' )

  graph_paidCancel.innerHTML = `
  <p class="px-2 bg-purple-400 w-3 rounded-sm mb-1 h-[${ paidCancelled.length * 10 }px]" title='${ paidCancelled.length } Paid Cancelled'></p>
`

  reScheduled.length === 0 ? reHolder.classList.add( 'text-gray-300' ) : reHolder.classList.remove( 'text-gray-300' )
  graph_reScheduled.innerHTML = `
  <p class="px-2 bg-yellow-400 w-3 rounded-sm mb-1 h-[${ reScheduled.length * 10 }px]" title='${ reScheduled.length } Re-scheduled'></p>
`

}
