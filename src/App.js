import './App.css';
import Home from "./Pages/HomePage";
import ProfileDashboard from "./Pages/ProfileDashboard";
import LandingPage from './Pages/LandingPage';
import ExpandedRoomPage from "./Pages/ExpandedRoomPage";
import AnimatedParticles from "./Components/Particles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notification from "./Components/Notification";

function App() {
 
  return (
    <div className="App">
      <div className="particles-background">
        <AnimatedParticles />
      </div>
       <Router basename="/true-luck">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
          <Route path="/Room" element={<ExpandedRoomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
