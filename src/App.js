import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About"/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" /> 
        
      </div>
      <About />
    </>
  );
}

export default App;
