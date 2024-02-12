// import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Contactus from "./components/contactus/contactus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const userData = sessionStorage.getItem("user");
  const [user, setLoginUser] = useState({});
  useEffect(() => {
    if (userData) {
      setLoginUser(JSON.parse(userData));
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
