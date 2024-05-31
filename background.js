chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });


import { initializeApp } from "./firestore/firebase-app.js";
  

const firebaseConfig = {
    apiKey: "AIzaSyDfAYJUMCzWARhR64OfB-D3hQW_Xhn6Qwc",
    authDomain: "auto-otp-public.firebaseapp.com",
    databaseURL: "https://auto-otp-public-default-rtdb.firebaseio.com",
    projectId: "auto-otp-public",
    storageBucket: "auto-otp-public.appspot.com",
    messagingSenderId: "883142088527",
    appId: "1:883142088527:web:71257bb44807fb5c7c973a",
  };

  
const app = initializeApp(firebaseConfig);


import {
    getDatabase,
    ref,
    onValue,
    set,
    get,
    child,
    update,
    remove,
  } from "./firestore/firebase-database.js";


  const db = getDatabase();

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("recived message");
    send(message.message).then(sendResponse);
  });

  const send = async (msg) => {
    const dbRef = ref(getDatabase(app));

    let val;

    set(ref(db, "commetns"), msg);

    console.log(val);

    return val;
  };
  