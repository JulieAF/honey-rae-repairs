import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Routes, Route } from "react-router-dom";
import { ApplicationViews } from "./views/ApplicationViews";
import { Authorized } from "./views/Authorized";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          //check if the user is authorized, if authorized then application views is child component of authorized
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
