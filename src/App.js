import './App.css';
import Home from "./Pages/HomePage";
import ProfileDashboard from "./Pages/ProfileDashboard";
import ExpandedRoomPage from "./Pages/ExpandedRoomPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
          <Route path="/Room" element={<ExpandedRoomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
