// Refreshing list with latest data
const refreshList = () =>
{
  let refreshList = document.querySelector( '.refreshList' )
  if ( document.body.contains( refreshList ) )
  {
    for ( let list of refreshList )
    {
      list.remove();
    }
  }

};

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
  local_date = date_time_ref.getDate()
  local_month = date_time_ref.getMonth()
  local_year = date_time_ref.getFullYear()
  local_hours = date_time_ref.getHours()
  local_minutes = date_time_ref.getMinutes()
  local_seconds = date_time_ref.getSeconds()
}
localDateAndTime()
