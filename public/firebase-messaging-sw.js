if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../src/firebase-messaging-sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function (err) {
            console.log('Service worker registration failed, error:', err);
        });
}

// // Scripts for firebase and firebase messaging
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging-compat.js");

// // Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//     apiKey: "AIzaSyCW-i0Sj5CpbDN-50sIdoW6qDu5X-uSI0E",
//     authDomain: "eskape-b391e.firebaseapp.com",
//     projectId: "eskape-b391e",
//     storageBucket: "eskape-b391e.appspot.com",
//     messagingSenderId: "525705863286",
//     appId: "1:525705863286:web:24f7ecabee51532ec5ff57",
//     measurementId: "G-DYDHNJD96Z"
// };

// firebase.initializeApp(firebaseConfig);

// // Retrieve firebase messaging
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//     console.log("Received background message ", payload);

//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };

//     self.registration.showNotification(notificationTitle, notificationOptions);
// });