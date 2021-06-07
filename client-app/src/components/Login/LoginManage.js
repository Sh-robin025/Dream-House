import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initialization = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

// Google SignIn
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {console.log(err)});
};

// update User Name
export const updateUserName = (name) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: name,
  });
};
