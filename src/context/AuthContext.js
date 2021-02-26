// import { TramRounded } from '@material-ui/icons';
import React, { useState, useContext, useEffect } from 'react';
import { auth, database } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [fireUpdate, setFireUpdate] = useState();

  async function signup(email, password) {
    const successSignup = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    createDataForNewSignUpUsers(successSignup);

    return successSignup;
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  async function createDataForNewSignUpUsers(success) {
    // console.log(success.user);

    try {
      await database.ref(success.user.uid).set({
        email: success.user.email,
        // follow: [{ avatarURL: '', user_login: 'inital_login' }],
        follow: [null],
        id: success.user.uid,
      });
    } catch (error) {
      console.log(error);
      console.log('data for new singnUp user NOT creating');
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [fireUpdate]);

  //   console.log(currentUser);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    database,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
