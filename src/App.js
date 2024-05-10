import './App.css';
import Navbar from './Components/Navbar.js';
import Rooms_Available from './Components/Rooms Available.js';
import Statistics_Overview from './Components/Statistics Overview.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Rooms_Available/>
      <Statistics_Overview/>
    </div>
  );
}

export default App;
