import './App.css'
import SignIn from './pages/SignIn'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
