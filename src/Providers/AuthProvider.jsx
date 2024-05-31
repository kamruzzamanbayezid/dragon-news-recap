import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Config/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [isLoading, setIsLoading] = useState(true);

      // create user
      const createUser = (email, password) => {
            setIsLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      };

      // log in
      const logIn = (email, password) => {
            setIsLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }

      // update user
      const userUpdate = (name, photoUrl) => {
            setIsLoading(true);
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoUrl
            })
      }

      // Log out
      const logOut = () => {
            setIsLoading(true);
            return signOut(auth);
      }

      // observer
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  console.log('Logged in user:', currentUser);
                  setUser(currentUser);
                  setIsLoading(false);
            });

            return () => {
                  unSubscribe()
            }
      }, [])

      const authInfo = {
            user,
            createUser,
            logIn,
            userUpdate,
            logOut,
            isLoading
      };

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

AuthProvider.propTypes = {
      children: PropTypes.node,
}

export default AuthProvider;