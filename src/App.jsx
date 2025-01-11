import LandingPage from './pages/landingPage'
import LoginPage from './pages/login'
import RegisterPage from './pages/Register'
import TentangKami from './pages/tentangKami'
import Donasi from './pages/Donasi'
import DetailDonasi from './pages/detailDonasi'
import Blog from './pages/Blog'
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
        <Route path="/detail/:id" element={<DetailDonasi />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App