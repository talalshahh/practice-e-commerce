import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import firebase from '../firebase/config';
import {
  handleUserProfileUrl,
  profileCreationORLoadUrl,
} from '../api/private/user';

export const authContext = createContext(undefined);

authContext.displayName = 'e-commerce-web context';

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('UseAuth must be used within auth provider');
  }
  return context;
};

export const AuthProvider = (props) => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [userProfileLoading, setUserProfileLoading] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = getAuth(firebase);

  const handleProfileCreationOrLoad = async () => {
    setUserProfileLoading(true);
    const response = await profileCreationORLoadUrl();
    if (!response) return;
    setUserProfile(response.user);
  };
  const handleUserProfile = async () => {
    setUserProfileLoading(true);
    const response = await handleUserProfileUrl();
    if (!response) return;
    setUserProfile(response.user);
  };
  const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleUserProfile();
        setUser(user);
        setisLoggedIn(true);
        setIsCheckingAuth(false);
      } else {
        setUser(null);
        setisLoggedIn(false);
        setIsCheckingAuth(false);
      }
    });
  };
  useEffect(() => {
    checkAuthState();
    return () => {
      setIsCheckingAuth(true);
      setisLoggedIn(false);
      setUser(null);
      setUserProfile(null);
    };
  }, []);

  const signInwithEmail = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        let errorMessage = error.message;
        if (errorMessage.includes === 'wrong-password') {
          console.log('Invalid Email / Password');
        } else if (errorMessage.includes === 'user-not-found') {
          console.log('Invalid Email:User Not found');
        }
        console.log(errorMessage, 'error');
        setLoading(false);
      });
  };
  const signUpwithEmail = ({ email, password, navigate }) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        handleProfileCreationOrLoad();
        logout();
        navigate('/');
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.log('Registration Failed: ', errorMessage);
        setLoading(false);
      });
  };
  const logout = () => {
    signOut(auth).catch((error) => {
      console.log(error.message);
    });
  };
  const value = useMemo(
    () => ({
      user,
      userProfile,
      handleUserProfile,
      isLoggedIn,
      isCheckingAuth,
      logout,
      signInwithEmail,
      signUpwithEmail,
      setUserProfile,
    }),
    [user, userProfile, isCheckingAuth, isLoggedIn, loading]
  );
  return <authContext.Provider value={value} {...props} />;
};
