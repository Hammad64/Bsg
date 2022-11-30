import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Components/home"
import Dashboard from "./Components/dashboard"
import Main from './Components/dashboard/Main/Main';
import Team from './Components/dashboard/MyTeam/Team';
import Deposite from './Components/dashboard/DepositeDetails/Deposite';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/dashboard" element={ <Dashboard/> }>
          <Route index element={<Main />} />
          <Route path="team"  element={<Team />} />
          <Route path="deposite"  element={<Deposite />} />
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
