import { Routes, Route, Outlet, Navigate, Link } from "react-router-dom";
import { Provider } from "./contexts/context";
import Dashboard from "./pages/Dashboard/Dashboard";
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
          element={
            <Link to={"/login"}>
              <h1>Clique aqui para ir ao login</h1>
            </Link>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route element={<ProtectedRoutes redirectTo="/login" />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Provider>
  );
}
