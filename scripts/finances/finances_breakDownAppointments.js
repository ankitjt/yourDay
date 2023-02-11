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
    moneyTotal = document.querySelector( ".moneyTotal" ),
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
    statusCheck = 'Scheduled'
    countSpan = moneyScheduledCount.innerText
    finances_breakDownCommon( statusCheck, countSpan )
  }

  moneyPendingWrapper.onclick = () =>
  {
    statusCheck = 'Pending'
    countSpan = moneyPendingCount.innerText
    finances_breakDownCommon( statusCheck, countSpan )
  }

  moneyCompletedWrapper.onclick = () =>
  {
    statusCheck = 'Completed'
    countSpan = moneyCompletedCount.innerText
    finances_breakDownCommon( statusCheck )
  }

  moneyPaidCancelledWrapper.onclick = () =>
  {
    statusCheck = 'Paid Cancelled'
    countSpan = moneyPaidCancelledCount.innerText
    finances_breakDownCommon( statusCheck, countSpan )
  }

  moneyFreeCancelledWrapper.onclick = () =>
  {
    statusCheck = 'Free Cancelled'
    countSpan = moneyFreeCancelledCount.innerText
    finances_breakDownCommon( statusCheck, countSpan )
  }
}

