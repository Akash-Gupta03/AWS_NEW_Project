
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import Signuppage from './components/Sign-up'


function App() {
  return (
    <Router >     

        <Routes>

        <Route path="/" element={<Signuppage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> 
    </Router>
  );
}

export default App;

