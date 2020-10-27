import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyC0N1MeujHR8pfTMaNVoqK6-DOlb4kkY6E",
	authDomain: "projectobia-24501.firebaseapp.com",
	databaseURL: "https://projectobia-24501.firebaseio.com",
	projectId: "projectobia-24501",
	storageBucket: "projectobia-24501.appspot.com",
	messagingSenderId: "888604907802",
	appId: "1:888604907802:web:80e65b91acd3c91b9034a3",
	measurementId: "G-GZ9790ZQBH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
