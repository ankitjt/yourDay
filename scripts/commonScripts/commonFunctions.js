// Refreshing list with latest data
const refreshList = () =>
{
  let refreshList = document.querySelector( '.refreshList' )
  if ( document.body.contains( refreshList ) )
  {
    for ( let list of refreshList )
    {
      list.remove()
    }
  }

}

// Getting Local Time and Date
let date_time_ref
let dateInSeconds
let local_date
let local_month
let local_year
let local_hours
let local_minutes
let local_seconds


const localDateAndTime = () =>
{
  date_time_ref = new Date()
  dateInSeconds = Math.round( Date.now() / 1000 )
  local_date = date_time_ref.getDate() < 10 ? parseInt( '0' + date_time_ref.getDate() ) : date_time_ref.getDate()
  local_month = ( date_time_ref.getMonth() + 1 ) < 10 ? parseInt( '0' + ( date_time_ref.getMonth() + 1 ) ) : ( date_time_ref.getMonth() + 1 )
  local_year = date_time_ref.getFullYear()
  local_hours = date_time_ref.getHours() < 10 ? parseInt( '0' + date_time_ref.getHours() ) : date_time_ref.getHours()
  local_minutes = date_time_ref.getMinutes() < 10 ? parseInt( '0' + date_time_ref.getMinutes() ) : date_time_ref.getMinutes()
  local_seconds = date_time_ref.getSeconds() < 10 ? parseInt( '0' + date_time_ref.getSeconds() ) : date_time_ref.getSeconds()
  // serverTime.innerText = local_date + '/' + local_month + '/' + local_year + ' , ' + local_hours + ':' + local_minutes + ':' + local_seconds
}
localDateAndTime()

// Loading Animation
let loadingAnimation = `<div class="loader absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse app-name w-fit text-white rounded-full px-5 py-8 bg-rose-600 text-md">
  yourDay
</div>`;

( () =>
{

  let relationType = document.querySelectorAll( '.relationType' )
  let relationDetails = `
     <option value="" class="text-xs md:font-semibold md:text-xs">
                          Select Relation
                        </option>
                        <option value="Father" class="text-xs md:font-semibold md:text-xs">
                          Father
                        </option>
                        <option value="Mother" class="text-xs md:font-semibold md:text-xs">
                          Mother
                        </option>
                        <option value="Husband" class="text-xs md:font-semibold md:text-xs">
                          Husband
                        </option>
                        <option value="Wife" class="text-xs md:font-semibold md:text-xs">
                          Wife
                        </option>
                        <option value="Brother" class="text-xs md:font-semibold md:text-xs">
                          Brother
                        </option>
                        <option value="Sister" class="text-xs md:font-semibold md:text-xs">
                          Sister
                        </option>
                        <option value="GrandFather" class="text-xs md:font-semibold md:text-xs">
                          GrandFather
                        </option>
                        <option value="GrandMother" class="text-xs md:font-semibold md:text-xs">
                          GrandMother
                        </option>
                        <option value="Uncle" class="text-xs md:font-semibold md:text-xs">
                          Uncle
                        </option>
                        <option value="Aunt" class="text-xs md:font-semibold md:text-xs">
                          Aunt
                        </option>
                        <option value="Friend" class="text-xs md:font-semibold md:text-xs">
                          Friend
                        </option>
                        <option value="Others" class="text-xs md:font-semibold md:text-xs">
                          Others
                        </option>
  `
  for ( let relation of relationType )
  {
    relation.innerHTML += relationDetails

  }

} )()
