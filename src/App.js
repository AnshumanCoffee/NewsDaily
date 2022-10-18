import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enable", "success");
      document.title = "NewsDaily - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enable", "success");
      document.title = "NewsDaily - LightMode";
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      {/* <Navbar  /> */}
      <BrowserRouter>
        <Navbar title="NewsDaily" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route
                exact path="/"
                element={
                  <TextForm
                    showAlert={showAlert}
                    heading="Write Your Article Below..."
                    mode={mode}
                  />
                }
              />
              <Route
                  exact path="/news"
                  element={<News heading="NewsDaily - Top Headlines" />}
                />
              
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

//props are always read only.
