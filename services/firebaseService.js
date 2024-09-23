const admin = require('firebase-admin');

// Check if running in a deployment environment
if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY_BASE64) {
  // Decode the base64-encoded service account key
  const serviceAccountBuffer = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_BASE64, 'base64');
  const serviceAccount = JSON.parse(serviceAccountBuffer.toString('utf-8'));

  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-firebase-project.firebaseio.com',
  });
} else {
  // For local development, use the serviceAccountKey.json file
  const serviceAccount = require('../firebase/serviceAccountKey.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-firebase-project.firebaseio.com',
  });
}

const db = admin.firestore();

module.exports = { admin, db };