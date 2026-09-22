import { Navigate, Outlet } from 'react-router-dom';
import { UseAuth } from '../hooks/useAuth'

export default function ProtectedRoute() {
    const { isAuthenticated } = UseAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}