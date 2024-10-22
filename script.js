import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-9QcJXBhfvul1-45bIielE1W5Z37XdyU",
  authDomain: "learnleap-46d36.firebaseapp.com",
  projectId: "learnleap-46d36",
  storageBucket: "learnleap-46d36.appspot.com",
  messagingSenderId: "448591111846",
  appId: "1:448591111846:web:d333da430d8bd7de94b667",
  measurementId: "G-5B21VG2SVQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get DOM elements
const loginButton = document.getElementById("login-btn");
const signupButton = document.getElementById("go-to-signup");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginSection = document.getElementById("login-section");
const signupSection = document.getElementById("signup-section");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createAcctBtn = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");

var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

// Sign Up event listener
createAcctBtn.addEventListener("click", function() {
    var isVerified = true;

    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;

    // Check if emails match
    if (signupEmail !== confirmSignupEmail) {
        window.alert("Email fields do not match. Try again.");
        isVerified = false;
    }

    signupPassword = signupPasswordIn.value;
    confirmSignUpPassword = confirmSignUpPasswordIn.value;

    // Check if passwords match
    if (signupPassword !== confirmSignUpPassword) {
        window.alert("Password fields do not match. Try again.");
        isVerified = false;
    }

    // Check for empty fields
    if (!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
        window.alert("Please fill out all required fields.");
        isVerified = false;
    }

    // If all checks pass, create user
    if (isVerified) {
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                window.alert("Success! Account created.");
            })
            .catch((error) => {
                const errorMessage = error.message;
                window.alert("Error occurred. Try again.");
            });
    }
});

// Login event listener
loginButton.addEventListener("click", function() {
    email = emailInput.value;
    password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.alert("Success! Welcome back!");
        })
        .catch((error) => {
            const errorMessage = error.message;
            window.alert("Error occurred. Try again.");
        });
});

// Navigate to Sign Up section
signupButton.addEventListener("click", function() {
    loginSection.style.display = "none"; // Hide login section
    signupSection.style.display = "block"; // Show sign-up section
});

// Navigate back to Login section
returnBtn.addEventListener("click", function() {
    signupSection.style.display = "none"; // Hide sign-up section
    loginSection.style.display = "block"; // Show login section
});
// Toggle password visibility
const passwordInputs = document.querySelectorAll('input[type="password"]');
const eyeIcons = document.querySelectorAll('.eye-icon');

