import "./App.css";
import React from "react";
import Account from "./pages/Account";
import Homepage from "./pages/Homepage";
import Symtom from "./pages/Symptom";
import Register from "./pages/Register";
import DoctorAppoint from "./pages/DoctorAppoint";
import HistoryAppoint from "./pages/DoctorAppoint/HistoryAppoint";
import Result from "./components/Symptom/Result";

import Navbar_patient from "./components/Navbar/Navbar_patient";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // console.log(window.location.pathname);
  return (
    <div className="App">
      <Router>
        <div>
          {window.location.pathname !== "/register" && <Navbar_patient />}
          <div className={window.location.pathname !== "/register" && "layout"}>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/account" element={<Account />} />
              <Route exact path="/form" element={<Symtom />} />
              <Route exact path="/formResult" element={<Result />} />
              <Route path="/register" element={<Register />} />
              <Route path="/appoint" element={<DoctorAppoint />} />
              <Route path="/historyappoint" element={<HistoryAppoint />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
