import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SelectRegister from "./SelectRegister";
import Patientregister from "./Patientregister";

export default function Register() {
  return (
    <div className="register">
      <Router>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={SelectRegister}
            />
            <Route
              path="/patient"
              element={Patientregister}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
