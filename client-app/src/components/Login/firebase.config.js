// import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_api_Key,
    authDomain: process.env.REACT_APP_auth_Domain,
    projectId: process.env.REACT_APP_project_Id,
    storageBucket: process.env.REACT_APP_storage_Bucket,
    messagingSenderId: process.env.REACT_APP_messaging_SenderId,
    appId: process.env.REACT_APP_app_Id
};
export default firebaseConfig;

// export const initialization = () => {
//     if (!firebase.app.length) {
//         firebase.initializeApp(firebaseConfig)
//     }
// }
