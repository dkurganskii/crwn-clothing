import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAAlAn-H2Jxz7BgXLYPu4X7UzHuDMFcJuM',
	authDomain: 'crwn-db-b40f0.firebaseapp.com',
	databaseURL: 'https://crwn-db-b40f0.firebaseio.com',
	projectId: 'crwn-db-b40f0',
	storageBucket: 'crwn-db-b40f0.appspot.com',
	messagingSenderId: '26314677744',
	appId: '1:26314677744:web:87a96effc7a0bfd94c1135',
	measurementId: 'G-VM9V3LJ8JP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
