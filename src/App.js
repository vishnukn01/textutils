import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundColor = '#343A40'
      document.body.style.backgroundColor = 'grey'
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
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
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"  mode={mode}/>
      </div>
    </>
  );
}

export default App;
