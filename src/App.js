import './App.css';
import Home from "./Pages/HomePage";
import ProfileDashboard from "./Pages/ProfileDashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
