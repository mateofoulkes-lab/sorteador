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
  apiKey: "AIzaSyCVP7TqVGFkvqgV36j5WZ67g3AHk8V4-ik",
  authDomain: "sorteador-2bfd6.firebaseapp.com",
  projectId: "sorteador-2bfd6",
  storageBucket: "sorteador-2bfd6.firebasestorage.app",
  messagingSenderId: "466509575088",
  appId: "1:466509575088:web:2059ac05ba55be3d519c75"
};

// Nombre de la colección donde se guardan los números.
// Cada número se guarda como documento con id "1", "2", ... "100".
window.RIFA_FIRESTORE_COLLECTION = 'rifa_mundialista_2026_numeros';
