import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PrincipalDashboard from './pages/PrincipalDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import ParentDashboard from './pages/ParentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import SAdminDashboard from './pages/SAdminDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/principal" element={<PrincipalDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/parent" element={<ParentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/super-admin" element={<SAdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
