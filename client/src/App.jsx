import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/auth/HomePage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}