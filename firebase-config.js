// Firebase SDK v9 Modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Configuración Chronos Church Suite
const firebaseConfig = {
  apiKey: "AIzaSyC0WMNtGW8Bxo52V3gnGa7UMFk0sAwG4_4",
  authDomain: "chronos-church-suite.firebaseapp.com",
  projectId: "chronos-church-suite",
  storageBucket: "chronos-church-suite.firebasestorage.app",
  messagingSenderId: "768617934703",
  appId: "1:768617934703:web:b48947619482577f18029a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios
const auth = getAuth(app);
const db = getFirestore(app);

// Exportaciones
export {
  auth,
  db,

  // Auth
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,

  // Firestore
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp
};