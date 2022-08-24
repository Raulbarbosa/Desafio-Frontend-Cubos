import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Provider } from "./contexts/context";
import Dashboard from "./pages/Dashboard/dashboard";
import Clients from "./pages/Clients/clients";
import Invoices from "./pages/Invoices/invoices";
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";

function ProtectedRoutes({ redirectTo }) {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  return (
    <Provider>
      <Routes>
        <Route
          path="*"
          element={<Login />}/>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route element={<ProtectedRoutes redirectTo="/login" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/cobrancas" element={<Invoices />} />
        </Route>
      </Routes>
    </Provider>
  );
}
