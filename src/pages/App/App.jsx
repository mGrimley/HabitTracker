import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import * as userService from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'


export default function App() {
  const [user, setUser] = useState(getUser())

  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <main className="App">
      { user ? 
        <>
          <h1>Habbit Tracker</h1>
          <p>Welcome, {user.name}</p>
          

          <button onClick={handleLogOut}>Log Out</button>
        </>
        :
        <AuthPage setUser={setUser}/>
      }

      
    </main>
  );
}


