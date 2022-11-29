import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SingUp"));
const NotFound = lazy(() => import("./pages/Not_found"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Routes>
        <Route
          path={ROUTES.LOGIN}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.NOT_FOUND}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <NotFound />
            </Suspense>
          }
        />

        <Route
          path={ROUTES.DASHBOARD}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Dashboard />
            </Suspense>
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
