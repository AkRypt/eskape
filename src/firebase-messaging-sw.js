import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCW-i0Sj5CpbDN-50sIdoW6qDu5X-uSI0E",
    authDomain: "eskape-b391e.firebaseapp.com",
    projectId: "eskape-b391e",
    storageBucket: "eskape-b391e.appspot.com",
    messagingSenderId: "525705863286",
    appId: "1:525705863286:web:24f7ecabee51532ec5ff57",
    measurementId: "G-DYDHNJD96Z"
};



export function requestPermission() {
    Notification.requestPermission()
        .then((permission) => {
            if (permission === "granted") {
                console.log("Notification permission granted");

                // Initialize Firebase
                const app = initializeApp(firebaseConfig);
                const messaging = getMessaging(app);

                getToken(messaging, {
                    vapidKey:
                        "BMTgiZJnHO0z2T0VncqblVjLfVS-CfRy3vFkW-FMB1Gvyo0_RA02DzGR5BQv4bSCA6JGE2-d9idv-8sz2_JsrU0",
                }).then((currentToken) => {
                    if (currentToken) {
                        console.log("currentToken: ", currentToken);
                    } else {
                        console.log("Can not get token");
                    }
                    
                });
            } else {
                console.log("Permission denied");
            }
        })
        .catch((err) => {
            console.log("Unable to get permission to notify");
        });
}

requestPermission();