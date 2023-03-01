let closeSessionsBreakDownWrapper = document.querySelector( '.closeSessionsBreakDownWrapper' )
closeSessionsBreakDownWrapper.onclick = () =>
{
  sessionsBreakDownWrapper.classList.add( '-left-[2000px]' )
  sessionsBreakDownWrapper.classList.remove( 'left-0' )
  pb.classList.add( 'lg:left-6' )
}
const showBreakDownOfAppointments = () =>
{
  let moneyScheduledWrapper = document.querySelector( ".moneyScheduledWrapper" ),
    moneyPaidCancelledWrapper = document.querySelector( ".moneyPaidCancelledWrapper" ),
    moneyPendingWrapper = document.querySelector( ".moneyPendingWrapper" ),
    moneyCompletedWrapper = document.querySelector( ".moneyCompletedWrapper" ),
    moneyFreeCancelledWrapper = document.querySelector( ".moneyFreeCancelledWrapper" ),
    moneyScheduledCount = document.querySelector( '.moneyScheduled' ),
    moneyCompletedCount = document.querySelector( '.moneyCompleted' ),
    moneyPendingCount = document.querySelector( '.moneyPending' ),
    moneyPaidCancelledCount = document.querySelector( '.moneyPaidCancelled' ),
    moneyFreeCancelledCount = document.querySelector( '.moneyFreeCancelled' ),
    statusCheck,
    countSpan = ''

  moneyScheduledWrapper.onclick = () =>
  {
    if ( pageBody.offsetWidth < 1024 )
    {
      alert( 'Please view page on a bigger screen as update window will not be available in small screen.' )
    }
    else
    {
      statusCheck = 'Scheduled'
      countSpan = moneyScheduledCount.innerText
      finances_breakDownCommon( statusCheck, countSpan )
    }
  }

  moneyPendingWrapper.onclick = () =>
  {

    if ( body.offsetWidth < 1024 )
    {
      alert( 'Please view page on a bigger screen as update window will not be available in small screen.' )
    }
    else
    {
      statusCheck = 'Pending'
      countSpan = moneyPendingCount.innerText
      finances_breakDownCommon( statusCheck, countSpan )
    }
  }

  moneyCompletedWrapper.onclick = () =>
  {
    if ( body.offsetWidth < 1024 )
    {
      alert( 'Please view page on a bigger screen as update window will not be available in small screen.' )
    }
    else
    {
      statusCheck = 'Completed'
      countSpan = moneyCompletedCount.innerText
      finances_breakDownCommon( statusCheck )
    }
  }

  moneyPaidCancelledWrapper.onclick = () =>
  {
    if ( body.offsetWidth < 1024 )
    {
      alert( 'Please view page on a bigger screen as update window will not be available in small screen.' )
    }
    else
    {
      statusCheck = 'Paid Cancelled'
      countSpan = moneyPaidCancelledCount.innerText
      finances_breakDownCommon( statusCheck, countSpan )
    }
  }

  moneyFreeCancelledWrapper.onclick = () =>
  {
    if ( body.offsetWidth < 1024 )
    {
      alert( 'Please view page on a bigger screen as update window will not be available in small screen.' )
    }
    else
    {
      statusCheck = 'Free Cancelled'
      countSpan = moneyFreeCancelledCount.innerText
      finances_breakDownCommon( statusCheck, countSpan )
    }
  }
}

