import './App.css'
import SignIn from './pages/SignIn'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
