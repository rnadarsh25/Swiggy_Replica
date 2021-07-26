import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyClW_eBiWZ1QYmws_auQHPLeuRHk6sjnMo',
  authDomain: 'swiggyreplica.firebaseapp.com',
  databaseURL: 'https://swiggyreplica-default-rtdb.firebaseio.com',
  projectId: 'swiggyreplica',
  storageBucket: 'swiggyreplica.appspot.com',
  messagingSenderId: '96764986646',
  appId: '1:96764986646:web:d8095813ec6348c536bc37',
  measurementId: 'G-L97TMP5XEY',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
