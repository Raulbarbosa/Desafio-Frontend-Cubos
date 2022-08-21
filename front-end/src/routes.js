import { Routes, Route, Outlet, Navigate, Link } from "react-router-dom";
import { Provider } from "./contexts/context";
import Dashboard from "./pages/Dashboard/Dashboard";

function ProtectedRoutes({ redirectTo }) {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  return (
    <Provider>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <div>
              <Link to={"/dashboard"}>
                <h1>Clique aqui para ir ao Dashboard</h1>
              </Link>
            </div>
          }
        />
        <Route element={<ProtectedRoutes redirectTo="/" />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Provider>
  );
}
