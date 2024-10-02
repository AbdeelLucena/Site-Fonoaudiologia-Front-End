import './App.css';
import { Routes, Route } from 'react-router-dom';
import Inicio from './sections/Inicio';
import Signup from './signup/Signup';
import Login from './login/Login';
import Navbar from './sections/Navbar';
import SignUpFono from './signup/SignUpFono';
import LoginFono from './login/LoginFono';
import FormAnamnese from '../src/formAnamnese/FormAnamnese';

function App() {
  return (
    <>
    <Navbar />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login-fono" element={<LoginFono />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-fono" element={<SignUpFono />} />
        <Route path="/form-anamnese" element={<FormAnamnese />} />{' '}

      
    </Routes>
    </>
  );
}

export default App;
