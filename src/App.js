import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  console.log(localStorage);
  const [token, setToken] = useState("");

  useEffect(() => {
    function handleChangeStorage() {
      console.log("eiei");
      setToken(localStorage.getItem("token"));
    }
    window.addEventListener("storage", handleChangeStorage);
    return () => window.removeEventListener("storage", handleChangeStorage);
  }, []);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <div className="App">
      {token.length > 0 ? <Logout /> : <Login />}
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
