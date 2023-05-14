// import { Container } from '@mui/material';
import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./pages/Home";
import Faculty from './pages/Faculty';
import Unit from './pages/Unit';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    

    <Router>
      <Topbar />
     
      <div className="container">
      
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/units" element={<Unit />} />
        
                   
        </Routes>
      </div>
     
    </Router>
    // </Container>
  );
}

export default App;