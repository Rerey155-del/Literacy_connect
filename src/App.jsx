import LandingPage from './pages/landingPage'
import LoginPage from './pages/login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App