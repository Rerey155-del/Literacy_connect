import LandingPage from './pages/landingPage'
import LoginPage from './pages/login'
import RegisterPage from './pages/Register'
import TentangKami from './pages/tentangKami'
import Donasi from './pages/Donasi'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<TentangKami />} />
        <Route path="/donasi" element={<Donasi />} />
      </Routes>
    </Router>
  )
}

export default App