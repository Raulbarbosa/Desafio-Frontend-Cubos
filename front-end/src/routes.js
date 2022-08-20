import { Routes, Route, Outlet, Navigate, Link } from "react-router-dom";
import { Provider } from "./contexts/context";
import Login from "./pages/Login/login";

function ProtectedRoutes({ redirectTo }) {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRoutes() {
  return (
    <Provider>
      <Routes>
        <Route
          path="*"
          element={
            <div>
              <h1>404</h1>
              <Link to={"/login"}>
                <h1>Clique aqui para ir ao login</h1>
              </Link>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes redirectTo="/login" />}></Route>
      </Routes>
    </Provider>
  );
}
