let patientList = document.querySelector( ".patientList" )

firebase.initializeApp({
        apiKey: "AIzaSyBP_xYkTozmmX7K5b9lO_5LPcI1LLoxxFw",
        authDomain: "yourday-3fcd8.firebaseapp.com",
        projectId: "yourday-3fcd8",
        storageBucket: "yourday-3fcd8.appspot.com",
        messagingSenderId: "216062777762",
        appId: "1:216062777762:web:0470a736d1cd2e8ea57afb"
    });
  
const db = firebase.firestore();


// To populate the patient list 

( () =>
{
    db.collection( "appointments" ).onSnapshot( ( querySnapshot ) =>
    {
        querySnapshot.forEach( ( doc ) =>
        {
            let patientNames = `<option value="${ doc.id }" class="font-semibold" data-id="${ doc.id }">${ doc.data().aptName }</option>`
            patientList.innerHTML += patientNames
        })
    })
} )()