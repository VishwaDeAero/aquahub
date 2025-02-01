import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./chartConfig";
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import VerifyCode from './pages/VerifyCode';
import PasswordResetConfirm from './pages/PasswordResetConfirm';
import ResetPassword from './pages/ResetPassword';
import Success from './pages/Success';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/password-reset-confirm" element={<PasswordResetConfirm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;