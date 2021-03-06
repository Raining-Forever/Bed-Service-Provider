import "./App.css";
import React from "react";
import AccountPatient from "./pages/Account/AccountPatient";
import AccountHospital from "./pages/Account/AccountHospital";
import Homepage from "./pages/Homepage";
import Symtom from "./pages/Symptom";
//import Register from "./pages/Register";
import DoctorAppoint from "./pages/DoctorAppoint";
import HistoryAppoint from "./pages/DoctorAppoint/HistoryAppoint";
import AppointManage from "./pages/Doctor/AppointManage";
import Reserve from "./pages/Reserve/ReserveUser";
import HistoryReserve from "./pages/Reserve/ReserveUser/HistoryReserve";
import WaitReserve from "./pages/Reserve/ReserveUser/WaitReserve";
import ReserveHospital from "./pages/Reserve/ReserveHospital";
import HistoryPatient from "./pages/Reserve/ReserveHospital/HistoryPatient";
import Result from "./components/Symptom/Result";
import SelectRegister from "./pages/Register/SelectRegister";
import Patientregister from "./pages/Register/Patientregister";
import Agency from "./pages/Register/Agency";
import Doctor from "./pages/Register/Agency/Doctor";
import Hospital from "./pages/Register/Agency/Hospital";
import Accessdenied from "./components/ShowStatus/AccessDenied";

//imort Doctor
import AppointRegister from "./pages/Doctor/AppointRegister";

//import Admin from "./pages/Admin";
import ManagePatient from "./pages/Admin/ManagePatient";
import CheckEvid from "./pages/Admin/CheckEvid";
import ManageDoctor from "./pages/Admin/ManageDoctor";
import ManageHospital from "./pages/Admin/ManageHospital";
import ManageAppoint from "./pages/Admin/ManageAppoint";
import ManageReserve from "./pages/Admin/ManageReserve";
// import Navbar_patient from "./components/Navbar/Navbar_patient";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import Navbar_patient from "./components/Navbar/Navbar_patient";

import { Navbar } from "./components/Navbar";

import Calendar from "./pages/DoctorAppoint/Calendar";

// import { MyRoute } from "./MyRoute";
import AccountDoctor from "./pages/Account/AccountDoctor";
import RegisterSuccess from "./components/ShowStatus/RegisterSuccess";
import AppointmentDetail from "./components/AppointmentDetail";
import Subnavbar from "./components/Subnavbar";
import AgencyHomepage from "./pages/Homepage/AgencyHomepage";
import DoctorHistoryAppoint from "./pages/Doctor/HistoryAppoint";
import Chatbot from "./components/ShowStatus/Chatbot";
import PatientReview from "./pages/Reserve/ReserveHospital/PatientReview";
import ConfirmationPage from "./pages/Reserve/ReserveHospital/ConfirmationPage";
import Meeting from "./components/ShowStatus/Meeting/inedx";
import AnotherContact from "./components/CovidInfo/AnotherContact";
import AppointmentDetailPage from "./pages/DoctorAppoint/AppoinmentDetailPage";
import BestPractice from "./components/CovidInfo/BestPractice";

function App() {
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
          <Subnavbar />
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
              exact
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
              path="/accountdoctor"
              element={<AccountDoctor />}
            />
            <Route
              path="/accessdenied"
              element={<Accessdenied />}
            />
            <Route
              path="/registersuccess"
              element={<RegisterSuccess />}
            />
            <Route
              path="/managepatient"
              element={<ManagePatient />}
            />
            <Route
              path="/managedoctor"
              element={<ManageDoctor />}
            />
            <Route
              path="/managehospital"
              element={<ManageHospital />}
            />
            <Route
              path="/manageappoint"
              element={<ManageAppoint />}
            />
            <Route
              path="/managereserve"
              element={<ManageReserve />}
            />
            <Route
              path="/checkevidence"
              element={<CheckEvid />}
            />
            <Route
              exact
              path="/appoint/:id"
              element={<AppointmentDetailPage />}
            />
            <Route
              path="/reserve"
              element={<Reserve />}
            />
            <Route
              path="/historyreserve"
              element={<HistoryReserve />}
            />
            <Route
              path="/reservehospital"
              element={<ReserveHospital />}
            />
            <Route
              path="/historypatient"
              element={<HistoryPatient />}
            />
            <Route
              path="/appointmanage"
              element={<AppointManage />}
            />
            <Route
              path="/waitreserve"
              element={<WaitReserve />}
            />
            <Route
              path="/appointregister"
              element={<AppointRegister />}
            />
            <Route
              path="/agencyhomepage"
              element={<AgencyHomepage />}
            />
            <Route
              path="/doctor/historyappoint"
              element={<DoctorHistoryAppoint />}
            />
            <Route
              path="/chatbot"
              element={<Chatbot />}
            />
            <Route
              path="/patientreview/:id"
              element={<PatientReview />}
            />
            <Route
              path="/confirmationpage/:id"
              element={<ConfirmationPage />}
            />
            <Route
              path="/calendar/"
              element={<Calendar />}
            />
            <Route
              path="/anothercontact"
              element={<AnotherContact />}
            />
            <Route
              path="/bestpractice"
              element={<BestPractice />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
