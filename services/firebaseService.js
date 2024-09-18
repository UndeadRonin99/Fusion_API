// services/firebaseService.js

const admin = require('firebase-admin');
const serviceAccount = require('../firebase/serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fusion-14429-default-rtdb.firebaseio.com/',
});

const rtdb = admin.database();

module.exports = { admin, rtdb };
