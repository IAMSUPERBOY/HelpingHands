/* import React, { useContext } from "react";
import { AuthnextProvider } from "authnext";
import { FirebaseApp } from "firebase/app";
import { useAuth } from "./useAuth";

const App = () => {
  const auth = useAuth();

  if (!auth.user) {
    return <div>Please sign in</div>;
  }

  return <div>Hello, {auth.user.email}</div>;
};

const useAuth = () => {
  const context = useContext(FirebaseAuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a FirebaseApp");
  }
  return context;
};

const firebaseConfig = {
    apiKey: "AIzaSyBcNJ3qdngM30yYrKLrFi8G5NTqG4i_LbE",
    authDomain: "helping-hands-cfde5.firebaseapp.com",
    projectId: "helping-hands-cfde5",
    storageBucket: "helping-hands-cfde5.appspot.com",
    messagingSenderId: "1039330109680",
    appId: "1:1039330109680:web:2ef21da4a3cd2a77b27a35"
};

const firebaseApp = new FirebaseApp(firebaseConfig);

const AuthProvider = () => {
  return (
    <AuthnextProvider firebaseApp={firebaseApp}>
      <App />
    </AuthnextProvider>
  );
};

export default AuthProvider; */