
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import YourComponent from './components/kashyap';

function App() {
  return (
    <Router >     

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kash" element={<YourComponent />} />
   
     
       
        </Routes> 
    </Router>
  );
}

export default App;

