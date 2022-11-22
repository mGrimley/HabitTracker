import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
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
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
        :
        <AuthPage setUser={setUser}/>
      }

      
    </main>
  );
}


