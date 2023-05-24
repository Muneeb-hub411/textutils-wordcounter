import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import "./components/Textform.js";
import Textform from "./components/Textform.js";
import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setmode] = useState("Light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled", "success");
      document.title = "Textutils - Dark Mode";
      setTimeout(() => {
        document.title = "Textutils is amazing ";
      }, 1500);
      setTimeout(() => {
        document.title = "Install Now ";
      }, 2000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled", "success");
      document.title = "Textutils";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          about="About textutils "
          togglemode={togglemode}
          mode={mode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={<About />} />

          <Route
            path="/"
            element={
              <Textform
                heading="Enter your text here "
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
