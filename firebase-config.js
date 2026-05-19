// Importar los módulos necesarios de la SDK de Firebase usando URLs nativas para el navegador
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Tus credenciales reales de Chronos Church Suite
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

// Instancias de los servicios esenciales para Chronos
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar todo para que el index.html y las futuras pantallas lo puedan consumir
export { auth, db, signInWithEmailAndPassword, doc, getDoc };