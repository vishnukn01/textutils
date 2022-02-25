import React, { useState } from "react";

export default function TextForm(props) {
  const [text, updateText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    updateText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    updateText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    updateText(newText);
  };
  const handleCapClick = () => {
    let newText = text.toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
    updateText(newText);
  };
  const handleOnChange = (e) => {
    updateText(e.target.value);
  };
  const handleCopy = (e) => {
    const textBox = document.getElementById('myBox')
    textBox.select()
    navigator.clipboard.writeText(textBox.value)
  };
  const handleExtraSpaces = (e) => {
    let newText = text.split(/[ ]+/)
    updateText(newText.join(" "))
  };
  return (
    <>
      <div className="container" style={{color:  props.mode === 'dark' ? 'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:  props.mode === 'light' ? 'white':'grey', color: props.mode === 'dark' ? 'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapClick}>
          Capitalize Words
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3" style={{color:  props.mode === 'dark' ? 'white':'black'}}>
        <h4>Your text summary</h4>
        <p>
          {text!==""?text.trim().split(" ").length:"0"} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minute read.</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter some text to preview"}</p>
      </div>
    </>
  );
}
