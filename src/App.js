import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      {/* {localStorage.getItem("isLogin") ? <Logout /> : <Login />} */}
      <Login />
      <Logout />
      <button
        onClick={() => {
          console.log(localStorage.getItem("profileObj"));
        }}
      >
        Show local storage
      </button>
    </div>
  );
}

export default App;
