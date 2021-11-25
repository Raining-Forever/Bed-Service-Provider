import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

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
      <Navbar />
    </div>
  );
}

export default App;
