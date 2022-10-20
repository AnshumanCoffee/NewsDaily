import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

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
      <Navbar title="NewsDaily" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Write Your Article Below..." mode={mode} />
        <Alert alert={alert} />

        <About />
        <News heading="NewsDaily - Top Headlines" />
      </div>
    </>
  );
}

export default App;

//props are always read only.
