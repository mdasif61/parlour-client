import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB0lAQeLAspAYi5yb8s_cKQqKGMq78OwkY",
  authDomain: "parlour-web.firebaseapp.com",
  projectId: "parlour-web",
  storageBucket: "parlour-web.appspot.com",
  messagingSenderId: "1094973612264",
  appId: "1:1094973612264:web:f71085273481610495e95d"
};

const app = initializeApp(firebaseConfig);

export default app;