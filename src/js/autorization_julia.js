import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import axios from 'axios';
import Notiflix from 'notiflix';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Конфігурація Firebase
// const firebaseConfig = {
//   apiKey: 'AIzaSyAt0t0gqY2cwwnnmHCmmlq6c2d_Q7sG2wI',
//   authDomain: 'boocks-f43bd.firebaseapp.com',
//   projectId: 'boocks-f43bd',
//   storageBucket: 'boocks-f43bd.appspot.com',
//   messagingSenderId: '679284035166',
//   appId: '1:679284035166:web:7c3e330ead5760e6196ecf',
//   measurementId: 'G-MRP841QGMJ',
// };

const firebaseConfig = {
  apiKey: "AIzaSyBbyJ1YQ4-GD4N0lhO_z3BVagmCNn0IKFk",
  authDomain: "bookshelf-ee661.firebaseapp.com",
  databaseURL: "https://bookshelf-ee661-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookshelf-ee661",
  storageBucket: "bookshelf-ee661.appspot.com",
  messagingSenderId: "956258341440",
  appId: "1:956258341440:web:ca611f9dfc8a224323c5a5",
  measurementId: "G-WDP0VVBWDK"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.querySelector('[data-auth-open]');
  const closeButton = document.querySelector('.auth-btn-close');
  const modal = document.querySelector('.auth-backdrop');
  const signUpForm = document.querySelector('.auth-form');
  const signUpButton = document.querySelector('.auth-button-signup');
  const userNameInput = signUpForm.querySelector('input[name="user_name"]');
  const userEmailInput = signUpForm.querySelector('input[name="user_email"]');
  const userPasswordInput = signUpForm.querySelector(
    'input[name="user_password"]'
  );

  // Відкриття/закриття вікна
  function openModal() {
    modal.style.display = 'block';
    document.querySelector('.auth').style.visibility = 'visible';
    userNameInput.value = '';
    userEmailInput.value = '';
    userPasswordInput.value = '';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);

  // Реєстрація користувача при натисканні кнопки SIGN UP

  signUpButton.addEventListener('click', async event => {
    event.preventDefault();

    const userName = userNameInput.value;
    const userEmail = userEmailInput.value;
    const userPassword = userPasswordInput.value;

    const userData = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(database, 'users/' + user.uid), {
              userName,
              userEmail,
            })
            onCloseModalLogin();
            Notify.success('Користувач зареєстрован!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; 
        });




    // async function addUserToFirebase(userData) {
    //   const usersCol = collection(db, 'user_data');

    //   try {
    //     await addDoc(usersCol, userData);
    //     console.log('Дані користувача успішно додано в базу даних');
    //     updateUI(userData.userName, userData.userEmail, userData.userPassword);
    //     closeModal();
    //   } catch (error) {
    //     console.error('Помилка при додаванні даних користувача:', error);
    //     Notiflix.Notify.Failure('Помилка при реєстрації');
    //   }
    // }
    // await addUserToFirebase(userData, analytics);
  });
  
  function updateUI(userName) {
    const signUpButtonUp = document.querySelector('[data-auth-open]');
    signUpButtonUp.textContent = `Hello, ${userName}`;
  }
});

// Кнопка "SIGN IN"
var signInButton = document.querySelector('.auth-button-in');
var userNameInput = document.querySelector('.auth-input');

signInButton.addEventListener('click', function () {
  if (userNameInput) {
    userNameInput.remove();
  }
});
