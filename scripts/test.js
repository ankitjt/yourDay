let userNameArr = [];
let userTimeStamp = [];

// console.log(aptOccurrenceType.value);

// ( () =>
// {
//     let myDb = db.collection( "appointments" )
//     myDb.onSnapshot( ( querySnapshot ) =>
//     {
//         querySnapshot.forEach( ( doc ) =>
//         {
//             userNameArr.push(doc.data().aptName)
//             userTimeStamp.push( doc.data().serverTimeStamp.seconds )
//         } )
        
//         for ( let i = 0; i < userTimeStamp.length; i++ )
//         {
//             const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//             let myData = new Date( userTimeStamp[ i ] * 1000 )
//             let month = months[myData.getMonth()]
//             console.log(myData.toDateString(), myData.toLocaleString(), month);
//         }
            

//         console.table( { "UserName" : userNameArr, "TimeStamp": userTimeStamp } )
//     })
// } )()

