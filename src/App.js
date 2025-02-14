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
import MaturationTankMonitoring from './pages/MaturationTankMonitoring';
import TankMonitoring from './pages/TankMonitoring';
import IndoorAlgaeMonitoring from './pages/IndoorAlgaeMonitoring';
import OutdoorAlgaeMonitoring from './pages/OutdoorAlgaeMonitoring';
import ArtemiaMonitoring from './pages/ArtemiaMonitoring';
import HarvestingMonitoring from './pages/HarvestingMonitoring';

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
        <Route path="/maturation-tank-monitoring" element={<MaturationTankMonitoring />} />
        <Route path="/tank-monitoring" element={<TankMonitoring />} />
        <Route path="/indoor-algae-monitoring" element={<IndoorAlgaeMonitoring />} />
        <Route path="/outdoor-algae-monitoring" element={<OutdoorAlgaeMonitoring />} />
        <Route path="/artemia-monitoring" element={<ArtemiaMonitoring />} />
        <Route path="/harvesting-monitoring" element={<HarvestingMonitoring />} />
      </Routes>
    </Router>
  );
}

export default App;