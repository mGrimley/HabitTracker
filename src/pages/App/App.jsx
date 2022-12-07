import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import * as userService from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import HabitListPage from '../HabitListPage/HabitListPage'
import HabitDetail from '../../components/HabitDetail/HabitDetail'

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
          <h1>Habit Tracker</h1>
          <p>Welcome, {user.name}</p>
          <Routes>
            <Route path="/habits" element={<HabitListPage user={user}/>}/>
            <Route path="/habits/:id" element={<HabitDetail user={user}/>}/>
            <Route path="/*" element={<Navigate to="/habits" />}/>
          </Routes>
          <hr />
          <button onClick={handleLogOut}>Log Out</button>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


