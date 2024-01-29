import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'; 
import Header from './components/Login';
import About from './components/About';
import SignUp from './components/SignUp';
import Headsub from './components/Headsub';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Employees from './components/Employees';
function App() {
  return (
    <Router>  
    <Headsub/>
    <Routes> 
      <Route path ='' Component={Home} />
      <Route path ='/login' Component={Login} />
      <Route path='/signup' Component={SignUp} />
      
      <Route path='/about' Component={About} />
      <Route path='/employees' Component={Employees} />
      <Route path="*" Component={NotFound} />
     </Routes>
    </Router>
  );
}

export default App;
