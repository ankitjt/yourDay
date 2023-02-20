const fetchData = document.querySelector( '.fetchData' )

fetchData.onclick = () =>
{
  let email = document.querySelector( '.emails' )
  let selectedMonth = document.querySelector( '.selectedMonth' )
  let status = document.querySelector( '.status' )
  let results = ''
  let resultWrapper = document.querySelector( '.resultWrapper' )
  let arr = []

  resultWrapper.innerHTML = ` 
  <div
  class="loader absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse app-name w-fit text-white rounded-full px-5 py-9 bg-rose-600 text-md">
  yourDay
  </div>
  `

  db.collection( `appointments/${ email.value }/details` )
    .onSnapshot( qs =>
    {
      qs.forEach( ( doc ) =>
      {
        if ( doc.data().status === status.value && doc.data().month.at( -1 ) === selectedMonth.value )
        {
          arr.push( doc.data() )
        }
      } )

      if ( arr.length )
      {
        for ( let data of arr )
        {
          results += `
                    <p class='my-3'>
                      ${ data.date },${ data.month }, ${ data.year } 
                      <span class='bg-rose-600 text-white px-2 py-1 uppercase rounded-full text-xs'>
                      ${ data.status }
                      </span> 
                      <span>${ data.email } </span>
                    </p>
                  `
          resultWrapper.innerHTML = results
        }
      }
      else
      {
        resultWrapper.innerHTML = `<p class='text-rose-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mb-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
          <span>No records found.</span>
        </p>`
      }
    } )

}