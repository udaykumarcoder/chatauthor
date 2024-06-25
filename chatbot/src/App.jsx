import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
  return (
    <Router>
      <div className="App">
      <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;
