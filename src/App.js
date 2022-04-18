import "./App.css";
import React from "react";
import Account from "./pages/Account";
import Homepage from "./pages/Homepage";
import Symtom from "./pages/Symptom";
//import Register from "./pages/Register";
import DoctorAppoint from "./pages/DoctorAppoint";
import HistoryAppoint from "./pages/DoctorAppoint/HistoryAppoint";
import Reserve from "./pages/Reserve/ReserveUser";
import HistoryReserve from "./pages/Reserve/ReserveUser/HistoryReserve";
import ReserveHospital from "./pages/Reserve/ReserveHospital";
import HistoryPatient from "./pages/Reserve/ReserveHospital/HistoryPatient";
import Result from "./components/Symptom/Result";
import SelectRegister from "./pages/Register/SelectRegister";
import Patientregister from "./pages/Register/Patientregister";
import Agency from "./pages/Register/Agency";
import Doctor from "./pages/Register/Agency/Doctor";
import Hospital from "./pages/Register/Agency/Hospital";

//import Admin from "./pages/Admin";
import ManagePatient from "./pages/Admin/ManagePatient";
import CheckEvid from "./pages/Admin/CheckEvid";
import ManageDoctor from "./pages/Admin/ManageDoctor";
import ManageHospital from "./pages/Admin/ManageHospital";
import ManageAppoint from "./pages/Admin/ManageAppoint";
import ManageReserve from "./pages/Admin/ManageReserve";
import Navbar_patient from "./components/Navbar/Navbar_patient";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Accessdeined from "./components/AccessDenied";

// import Navbar_patient from "./components/Navbar/Navbar_patient";

import { Navbar } from "./components/Navbar";

import { MyRoute } from "./MyRoute";

function App() {
  // console.log(window.location.pathname);
  return (
    <div className="App">
      <div>
        {window.location.pathname !== "/register" && <Navbar />}
        <div className={window.location.pathname !== "/register" && "layout"}>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route element={<Account />} path="/account" />
            <Route exact path="/form" element={<Symtom />} />
            <Route exact path="/formResult" element={<Result />} />
            <Route path="/register" element={<SelectRegister />} />
            <Route path="/register/patient" element={<Patientregister />} />
            <Route path="/register/agency" element={<Agency />} />
            <Route path="/register/agency/doctor" element={<Doctor />} />
            <Route path="/register/agency/hospital" element={<Hospital />} />
            <Route path="/appoint" element={<DoctorAppoint />} />
            <Route path="/historyappoint" element={<HistoryAppoint />} />
            <Route path="/managepatient" element={<ManagePatient />} />
            <Route path="/managedoctor" element={<ManageDoctor />} />
            <Route path="/managehospital" element={<ManageHospital />} />
            <Route path="/manageappoint" element={<ManageAppoint />} />
            <Route path="/managereserve" element={<ManageReserve />} />
            <Route path="/checkevidence" element={<CheckEvid />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/historyreserve" element={<HistoryReserve />} />
            <Route path="/reservehospital" element={<ReserveHospital />} />
            <Route path="/historypatient" element={<HistoryPatient />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
