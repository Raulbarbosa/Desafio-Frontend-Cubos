import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Provider } from "./contexts/context";
import Clients from "./pages/Clients/clients";
import Dashboard from "./pages/Dashboard/dashboard";
import Invoices from "./pages/Invoices/invoices";
import Details from "./pages/Details/details";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import { getItem } from './services/storage';

function ProtectedRoutes({ redirectTo }) {
  const isAuth = getItem('token');
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  return (
    <Provider>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route element={<ProtectedRoutes redirectTo="/login" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/cobrancas" element={<Invoices />} />
          <Route path="/clientes/:id" element={<Details />} />
        </Route>
      </Routes>
    </Provider>
  );
}
