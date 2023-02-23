let showGraph = ( updateProfileEmail ) =>
{

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
  new Chart( 'testGraph', {
    type: 'bar',
    data: {
      labels: [ 'Scheduled', 'Completed', 'Paid Cancelled', 'Free Cancelled', 'Re-scheduled' ],
      datasets: [
        {
          label: 'Appointments Count',
          backgroundColor: [ "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850" ],
          data: [ scheduled.length, completed.length, paidCancelled.length, freeCancelled.length, reScheduled.length ],
          barThickness: 50
        },
      ]
    },
    options: {
      scales: {
        y: [ {
          ticks: {
            beginAtZero: true,
            color: 'white'
          },
          scaleLabel: {
            fonColor: '#fff'
          }
        } ]
      },
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      }
    }
  } );
}
