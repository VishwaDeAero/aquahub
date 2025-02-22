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
import DiseaseManagement from './pages/DiseaseManagement';
import BroodstockManagementView from './pages/BroodstockManagementView';
import QuarantineMonitoringView from './pages/QuarantineMonitoringView';
import SpawningMonitoringView from './pages/SpawningMonitoringView';
import HatchingMonitoringView from './pages/HatchingMonitoringView';
import MaturationTankMonitoringView from './pages/MaturationTankMonitoringView';
import TankMonitoringView from './pages/TankMonitoringView';
import IndoorAlgaeMonitoringView from './pages/IndoorAlgaeMonitoringView';
import OutdoorAlgaeMonitoringView from './pages/OutdoorAlgaeMonitoringView';
import ArtemiaMonitoringView from './pages/ArtemiaMonitoringView';
import HarvestingMonitoringView from './pages/HarvestingMonitoringView';
import DiseaseManagementView from './pages/DiseaseManagementView';
import ProfileDetails from './pages/ProfileDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-profile" element={<ProfileDetails />} />
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
        {/* Nav Icons */}
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
        <Route path="/disease-management" element={<DiseaseManagement />} />
        {/* Nav Icon Table Views */}
        <Route path="/broodstock-management/view" element={<BroodstockManagementView />} />
        <Route path="/quarantine-monitoring/view" element={<QuarantineMonitoringView />} />
        <Route path="/spawning-monitoring/view" element={<SpawningMonitoringView />} />
        <Route path="/hatching-monitoring/view" element={<HatchingMonitoringView />} />
        <Route path="/maturation-tank-monitoring/view" element={<MaturationTankMonitoringView />} />
        <Route path="/tank-monitoring/view" element={<TankMonitoringView />} />
        <Route path="/indoor-algae-monitoring/view" element={<IndoorAlgaeMonitoringView />} />
        <Route path="/outdoor-algae-monitoring/view" element={<OutdoorAlgaeMonitoringView />} />
        <Route path="/artemia-monitoring/view" element={<ArtemiaMonitoringView />} />
        <Route path="/harvesting-monitoring/view" element={<HarvestingMonitoringView />} />
        <Route path="/disease-management/view" element={<DiseaseManagementView />} />
      </Routes>
    </Router>
  );
}

export default App;