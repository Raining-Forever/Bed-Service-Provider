import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar_patient from "./components/Navbar/Navbar_patient";
import Navbar_doctor from "./components/Navbar/Navbar_doctor";
import Navbar_hospital from "./components/Navbar/Navbar_hospital";
import Navbar_admin from "./components/Navbar/Navbar_admin";
import Covid from "./components/Navbar/Covid";
import Patient from "./pages/Register/Patient";
import Agency from "./pages/Register/Agency";

import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      {/* {localStorage.getItem("isLogin") ? <Logout /> : <Login />} */}
      {/* <Login />
      <Logout />
      <button
        onClick={() => {
          console.log(localStorage.getItem("profileObj"));
        }}
      >
        Show local storage
      </button> */}
      <Agency />
    </div>
  );
}

export default App;
