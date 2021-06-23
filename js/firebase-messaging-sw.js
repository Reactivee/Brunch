importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js")


var firebaseConfig = {
    apiKey: "AIzaSyDchja-jCw2u3DPlIEaE1_LrVNJjh7kxSo",
    authDomain: "ilead-4eecf.firebaseapp.com",
    projectId: "ilead-4eecf",
    storageBucket: "ilead-4eecf.appspot.com",
    messagingSenderId: "940317983823",
    appId: "1:940317983823:web:ef25545a44c093a7b6963a",
    measurementId: "G-ZDD0NGWJPX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging
    .requestPermission()
    .then(function () {

        console.log("Notification permission granted.");

        return messaging.getToken()
    })
    .then(function (token) {
        // print the token on the HTML page
        console.log("token", token);
    })
    .catch(function (err) {

        console.log("Unable to get permission to notify.", err);
    });

messaging.onMessage(function (payload) {
    console.log("Message", payload)
})
