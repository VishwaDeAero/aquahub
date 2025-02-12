import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./chartConfig";
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import VerifyCode from './pages/VerifyCode';
import PasswordResetConfirm from './pages/PasswordResetConfirm';
import ResetPassword from './pages/ResetPassword';
import Success from './pages/Success';
import Dashboard from './pages/Dashboard';
import HatcheryManagement from './pages/HatcheryManagement';
import UserManagement from './pages/UserManagement';
import UserDetails from './pages/UserDetails';
import InventoryManagement from './pages/InventoryManagement';
import BroodstockManagement from './pages/BroodstockManagement';
import QuarantineMonitoring from './pages/QuarantineMonitoring';
import SpawningMonitoring from './pages/SpawningMonitoring';
import HatchingMonitoring from './pages/HatchingMonitoring';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/hatchery-management" element={<HatcheryManagement />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/user-management/:userId" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/password-reset-confirm" element={<PasswordResetConfirm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<Success />} />
        {/* Menu Icons */}
        <Route path="/broodstock-management" element={<BroodstockManagement />} />
        <Route path="/quarantine-monitoring" element={<QuarantineMonitoring />} />
        <Route path="/spawning-monitoring" element={<SpawningMonitoring />} />
        <Route path="/hatching-monitoring" element={<HatchingMonitoring />} />
      </Routes>
    </Router>
  );
}

export default App;