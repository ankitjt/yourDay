const addMoreAppointments = () =>
{
    let showUpdate = document.querySelectorAll( '.showUpdate' )

    for ( let update of showUpdate )
    {
        update.onclick = () =>
        {
            let ptName = update.parentElement.childNodes[ 3 ].innerText  
            db.collection(`appointments/${ptName}/details`)
        }
    }

}