import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyClqM0X5S3ye5tpouIxut_xjMwV8SleeLY",
  authDomain: "vue-firechat-df2d2.firebaseapp.com",
  databaseURL: "https://vue-firechat-df2d2-default-rtdb.firebaseio.com",
  projectId: "vue-firechat-df2d2",
  storageBucket: "vue-firechat-df2d2.appspot.com",
  messagingSenderId: "276676378282",
  appId: "1:276676378282:web:cd403d269522af56af9ad3",
};

const db = firebase.initializeApp(config);
export default db;