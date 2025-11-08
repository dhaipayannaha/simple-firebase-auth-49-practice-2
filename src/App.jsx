
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css'
import { auth } from './firebase/firebase-init';
import { useState } from 'react';

const provider = new GoogleAuthProvider();
const gitHubprovider = new GithubAuthProvider()

function App() {
  const [user, setUser] =useState(null)

  const handleSignIn = (verify) => {
    verify === 'google'
      ? signInWithPopup(auth, provider)
          .then(result => {
            setUser(result.user);
          })
          .catch(error => {
            console.log(error);
          })
      : signInWithPopup(auth, gitHubprovider)
          .then(result => {
            user || setUser(result.user);
            
          })
          .catch(error => {
            console.log(error);
          })
  };

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={() => handleSignIn('google')}>sign in google</button>
      <button onClick={() => handleSignIn('github')}>sign in github</button>
      {
        user && <div>
          <p>{user.displayName}</p>
        </div>
      }
    </>
  )
}

export default App
