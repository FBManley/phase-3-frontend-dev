import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Users from './components/Users';
import User from './components/User';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Users />} />
        <Route path="/owners/:id" element={<User />}/>
      </Routes>
    </Router>
  );
}

export default App;
