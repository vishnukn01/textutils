import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, updateAlert] = useState('')

  const showAlert = (message, type) => {
    updateAlert({
      message: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = '#343A40'
      document.body.style.backgroundColor = 'grey'
      showAlert('Dark mode enabled', 'success')
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enabled', 'success')
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyze"  mode={mode}/>
      </div>
    </>
  );
}

export default App;
