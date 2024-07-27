
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
//import Header from './components/Header';
// import {ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//import SignupSigninComponent from './components/SignupSigninComponent';

function App() {
  return (
    <>
    <ToastContainer /> 
    <Router>
      <Routes>
        <Route path="/" element = {<Signup />} />
        <Route path="/dashboard" element = {<Dashboard />} />
      </Routes>
      </Router>
      </>
  );
}

export default App;