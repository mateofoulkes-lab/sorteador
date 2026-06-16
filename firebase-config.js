/*
  Configuración Firebase de la rifa.
  1) Creá tu proyecto en Firebase.
  2) Registrá una Web App.
  3) Pegá acá el objeto firebaseConfig que te da Firebase.
  4) Subí este archivo junto con index.html, manifest.webmanifest, sw.js y /assets.
*/

window.RIFA_APP_VERSION = '2.0.0-firebase-pwa';

window.RIFA_FIREBASE_ENABLED = true;

window.RIFA_FIREBASE_CONFIG = {
  apiKey: 'PEGAR_API_KEY',
  authDomain: 'PEGAR_PROJECT_ID.firebaseapp.com',
  projectId: 'PEGAR_PROJECT_ID',
  storageBucket: 'PEGAR_PROJECT_ID.firebasestorage.app',
  messagingSenderId: 'PEGAR_MESSAGING_SENDER_ID',
  appId: 'PEGAR_APP_ID'
};

// Nombre de la colección donde se guardan los números.
// Cada número se guarda como documento con id "1", "2", ... "100".
window.RIFA_FIRESTORE_COLLECTION = 'rifa_mundialista_2026_numeros';
