import "./App.css";
import React from "react";
import AccountPatient from "./pages/Account/AccountPatient";
import AccountHospital from "./pages/Account/AccountHospital";
import Homepage from "./pages/Homepage";
import Symtom from "./pages/Symptom";
import Register from "./pages/Register";
import DoctorAppoint from "./pages/DoctorAppoint";
import HistoryAppoint from "./pages/DoctorAppoint/HistoryAppoint";
import Result from "./components/Symptom/Result";
import SelectRegister from "./pages/Register/SelectRegister";
import Patientregister from "./pages/Register/Patientregister";
import Agency from "./pages/Register/Agency";
import Doctor from "./pages/Register/Agency/Doctor";
import Hospital from "./pages/Register/Agency/Hospital";
import Accessdeined from "./components/AccessDenied";

// import Navbar_patient from "./components/Navbar/Navbar_patient";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { MyRoute } from "./MyRoute";
import AccountDoctor from "./pages/Account/AccountDoctor";

function App() {
  // console.log(window.location.pathname);
  return (
    <div className="App">
      <div>
        {window.location.pathname !==
          "/register" && <Navbar />}
        <div
          className={
            window.location.pathname !==
              "/register" && "layout"
          }
        >
          <Routes>
            <Route
              exact
              path="/"
              element={<Homepage />}
            />
            <Route
              element={<AccountPatient />}
              path="/accountpatient"
            />
            <Route
              exact
              path="/form"
              element={<Symtom />}
            />
            <Route
              exact
              path="/formResult"
              element={<Result />}
            />
            <Route
              path="/register"
              element={<SelectRegister />}
            />
            <Route
              path="/register/patient"
              element={<Patientregister />}
            />
            <Route
              path="/register/agency"
              element={<Agency />}
            />
            <Route
              path="/register/agency/doctor"
              element={<Doctor />}
            />
            <Route
              path="/register/agency/hospital"
              element={<Hospital />}
            />
            <Route
              path="/appoint"
              element={<DoctorAppoint />}
            />
            <Route
              path="/historyappoint"
              element={<HistoryAppoint />}
            />
            <Route
              path="/accounthospital"
              element={<AccountHospital />}
            />
            <Route
              path="accountdoctor"
              element={<AccountDoctor />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
